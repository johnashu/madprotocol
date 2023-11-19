// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.22;

import { IERC20 } from "contracts/lib/tokens/ERC20/interfaces/IERC20.sol";
import { SplitterImpl } from "contracts/Splitter/SplitterImpl.sol";
import { SafeTransferLib } from "contracts/lib/utils/SafeTransferLib.sol";

abstract contract PaymentManager {
    ////////////////////////////////////////////////////////////////
    //                          ERRORS                            //
    ////////////////////////////////////////////////////////////////

    // @dev 0xd0d04f60
    error NothingToWithdraw();
    // @dev 0xa0f3feea
    error WrongToken();
    // @dev 0x68e26200
    error IncorrectPriceAmount();

    ////////////////////////////////////////////////////////////////
    //                          IMMUTABLE                         //
    ////////////////////////////////////////////////////////////////

    /// @notice Public mint price.
    uint256 public immutable price;

    /// @notice Splitter address relationship.
    SplitterImpl public immutable splitter;

    /// @notice ERC20 payment token address.
    IERC20 public immutable erc20;

    ////////////////////////////////////////////////////////////////
    //                           STORAGE                          //
    ////////////////////////////////////////////////////////////////

    /// @notice total amount of fees accumulated in native currency.
    uint256 public feeCount;

    /// @notice total amount of fees accumulated in wrapped token (erc20).
    uint256 public feeCountERC20;

    /// @notice boolean check if ERC20 Payments are enabled.
    bool public erc20PaymentsEnabled;

    ////////////////////////////////////////////////////////////////
    //                         CONSTRUCTOR                        //
    ////////////////////////////////////////////////////////////////
    constructor(address _splitter, address _erc20, uint256 _price) {
        splitter = SplitterImpl(payable(_splitter));
        erc20 = IERC20(_erc20);
        if (address(_erc20) != address(0)) {
            erc20PaymentsEnabled = true;
        }
        price = _price;
    }

    ////////////////////////////////////////////////////////////////
    //             OWNER WITHDRAW / FEE DISTRIBUTION              //
    ////////////////////////////////////////////////////////////////

    modifier _isZeroAddr(address _addr) {
        assembly {
            if iszero(_addr) {
                // Revert ZeroAddress()
                mstore(0x00, 0xd92e233d)
                revert(0x1c, 0x04)
            }
        }
        _;
    }

    ////////////////////////////////////////////////////////////////
    //                       OWNER WITHDRAW                       //
    ////////////////////////////////////////////////////////////////

    /// @notice Owner Withdraw ETH.
    /// @dev If any Eth is trapped in the contract, owner can withdraw it to the
    /// splitter.
    function _withdraw() internal {
        uint256 balance = address(this).balance;
        SafeTransferLib.safeTransferETH(payable(address(splitter)), balance);
    }

    /// @notice Owner Withdraw ERC20 Tokens.
    /// @dev If any ERC20 Tokens are trapped in the contract, owner can withdraw
    /// it to the splitter.
    function _withdrawERC20(address _erc20) internal {
        IERC20 _token = IERC20(_erc20);
        uint256 balance = _token.balanceOf(address(this));
        SafeTransferLib.safeTransfer(_token, address(splitter), balance);
    }

    function _publicPaymentHandler(uint256 _mintAmount, address _minter)
        internal
    {
        if (erc20PaymentsEnabled) {
            feeCountERC20 = feeCountERC20 + _mintAmount;
            SafeTransferLib.safeTransferFrom(
                erc20, _minter, address(splitter), _mintAmount
            );
        } else {
            feeCount = feeCount + _mintAmount;
            // Relay the msg.value to the splitter.
            SafeTransferLib.safeTransferETH(address(splitter), _mintAmount);
        }
    }

    ////////////////////////////////////////////////////////////////
    //                     INTERNAL HELPERS                       //
    ////////////////////////////////////////////////////////////////
    function _publicMintPriceCheck(uint256 _amount, address _minter)
        internal
        view
        returns (uint256 _value)
    {
        // No point in doing any calcluations if the price is 0 (Free).
        if (price == 0) {
            return 0;
        }

        if (!erc20PaymentsEnabled) {
            _value = msg.value;
            if ((price * _amount) != _value) revert IncorrectPriceAmount();
        } else {
            _value = erc20.allowance(_minter, address(this));
            if ((price * _amount) > _value) revert IncorrectPriceAmount();
        }
    }
}
