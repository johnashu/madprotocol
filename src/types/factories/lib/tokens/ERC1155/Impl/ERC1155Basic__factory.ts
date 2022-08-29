/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1155Basic,
  ERC1155BasicInterface,
} from "../../../../../lib/tokens/ERC1155/Impl/ERC1155Basic";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "__uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
      {
        internalType: "contract SplitterImpl",
        name: "_splitter",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "_fraction",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "LoopOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxSupplyReached",
    type: "error",
  },
  {
    inputs: [],
    name: "NotMintedYet",
    type: "error",
  },
  {
    inputs: [],
    name: "PublicMintClosed",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongPrice",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "newBaseURI",
        type: "string",
      },
    ],
    name: "BaseURISet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "newPublicState",
        type: "bool",
      },
    ],
    name: "PublicMintStateSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newRoyaltyFee",
        type: "uint256",
      },
    ],
    name: "RoyaltyFeeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "RoyaltyRecipientSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "bal",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "publicMintState",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_publicMintState",
        type: "bool",
      },
    ],
    name: "setPublicMintState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "__uri",
        type: "string",
      },
    ],
    name: "setURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "splitter",
    outputs: [
      {
        internalType: "contract SplitterImpl",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260016005553480156200001657600080fd5b5060405162002c9438038062002c9483398101604081905262000039916200023f565b600480546001600160a01b0319166001600160a01b0383169081179091556040518291906000907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a35085516200009b90600790602089019062000164565b5060088590556009849055600a8054610100600160a81b0319166101006001600160a01b03868116820292909217928390556001600160601b038516600281905560038054929094049092166001600160a01b0319909116179091556040517fc36422dcc77a5c93a5c48743078f8130c9fcc2a0ff893904ee62a3565688117c90600090a26003546040516001600160a01b03909116907f2a5a1009e36beb67c3a1ada61dd1343d7e9ec62c70965492fbaa06234f8316b190600090a2505050505050620003b5565b828054620001729062000362565b90600052602060002090601f016020900481019282620001965760008555620001e1565b82601f10620001b157805160ff1916838001178555620001e1565b82800160010185558215620001e1579182015b82811115620001e1578251825591602001919060010190620001c4565b50620001ef929150620001f3565b5090565b5b80821115620001ef5760008155600101620001f4565b80516001600160a01b03811681146200022257600080fd5b919050565b80516001600160601b03811681146200022257600080fd5b60008060008060008060c0878903121562000258578182fd5b86516001600160401b03808211156200026f578384fd5b818901915089601f83011262000283578384fd5b8151818111156200029857620002986200039f565b604051601f8201601f19908116603f01168101908382118183101715620002c357620002c36200039f565b81604052828152602093508c84848701011115620002df578687fd5b8691505b82821015620003025784820184015181830185015290830190620002e3565b828211156200031357868484830101525b809a5050505080890151965050506040870151935062000336606088016200020a565b9250620003466080880162000227565b91506200035660a088016200020a565b90509295509295509295565b600181811c908216806200037757607f821691505b602082108114156200039957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6128cf80620003c56000396000f3fe6080604052600436106101b65760003560e01c8063879fbedf116100ec578063bc197c811161008a578063f23a6e6111610064578063f23a6e611461055b578063f242432a14610588578063f4f3b200146105a8578063ffb2b55a146105c857600080fd5b8063bc197c81146104c5578063d5abeb011461050d578063e985e9c51461052357600080fd5b8063a0712d68116100c6578063a0712d6814610452578063a22cb46514610465578063b2dc5dc314610485578063b80f55c9146104a557600080fd5b8063879fbedf146103fc5780638da5cb5b1461041c578063a035b1fe1461043c57600080fd5b80632a55205a116101595780633cd8045e116101335780633cd8045e146103475780634e1273f4146103845780636352211e146103b15780637754305c146103e757600080fd5b80632a55205a146102d35780632eb2c2d6146103125780633ccfd60b1461033257600080fd5b80630e89341c116101955780630e89341c1461025757806313af40351461028457806318160ddd146102a457806322ab47a1146102b957600080fd5b8062fdd58e146101bb57806301ffc9a71461020557806302fe530514610235575b600080fd5b3480156101c757600080fd5b506101f26101d63660046121e7565b6000908152600160205260409020546001600160a01b03161490565b6040519081526020015b60405180910390f35b34801561021157600080fd5b506102256102203660046122d0565b6105db565b60405190151581526020016101fc565b34801561024157600080fd5b50610255610250366004612308565b610648565b005b34801561026357600080fd5b50610277610272366004612395565b6106eb565b6040516101fc9190612769565b34801561029057600080fd5b5061025561029f366004611fde565b61073c565b3480156102b057600080fd5b506101f26107d1565b3480156102c557600080fd5b50600a546102259060ff1681565b3480156102df57600080fd5b506102f36102ee3660046123c5565b6107e1565b604080516001600160a01b0390931683526020830191909152016101fc565b34801561031e57600080fd5b5061025561032d366004612039565b610817565b34801561033e57600080fd5b50610255610b97565b34801561035357600080fd5b50600a5461036c9061010090046001600160a01b031681565b6040516001600160a01b0390911681526020016101fc565b34801561039057600080fd5b506103a461039f366004612212565b610bec565b6040516101fc9190612731565b3480156103bd57600080fd5b5061036c6103cc366004612395565b6001602052600090815260409020546001600160a01b031681565b3480156103f357600080fd5b50610277610d44565b34801561040857600080fd5b506102556104173660046122b6565b610dd6565b34801561042857600080fd5b5060045461036c906001600160a01b031681565b34801561044857600080fd5b506101f260085481565b610255610460366004612395565b610e5c565b34801561047157600080fd5b506102556104803660046121bc565b610f7c565b34801561049157600080fd5b506102556104a036600461216e565b610fe6565b3480156104b157600080fd5b506102556104c036600461227b565b611078565b3480156104d157600080fd5b506104f46104e0366004612039565b63bc197c8160e01b98975050505050505050565b6040516001600160e01b031990911681526020016101fc565b34801561051957600080fd5b506101f260095481565b34801561052f57600080fd5b5061022561053e366004612001565b600060208181529281526040808220909352908152205460ff1681565b34801561056757600080fd5b506104f46105763660046120f4565b63f23a6e6160e01b9695505050505050565b34801561059457600080fd5b506102556105a33660046120f4565b61112f565b3480156105b457600080fd5b506102556105c3366004611fde565b6113e2565b6102556105d636600461227b565b6114b2565b60006301ffc9a760e01b6001600160e01b03198316148061060c5750636cdb3d1360e11b6001600160e01b03198316145b8061062757506303a24d0760e21b6001600160e01b03198316145b80610642575063152a902d60e11b6001600160e01b03198316145b92915050565b6004546001600160a01b031633146106965760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b80516106a9906007906020840190611e23565b50806040516106b891906124de565b604051908190038120907ff9c7803e94e0d3c02900d8a90893a6d5e90dd04d32a4cfe825520f82bf9f32f690600090a250565b60606106f56107d1565b82111561070a5763bad086ea6000526004601cfd5b60076107158361157f565b6040516020016107269291906124fa565b6040516020818303038152906040529050919050565b6004546001600160a01b031633146107855760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b604482015260640161068d565b600480546001600160a01b0319166001600160a01b03831690811790915560405133907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a350565b60006107dc60065490565b905090565b6003546002546001600160a01b03909116906000906127109061080490856127e5565b61080e91906127c5565b90509250929050565b8483146108585760405162461bcd60e51b815260206004820152600f60248201526e0988a9c8ea890be9a92a69a82a8869608b1b604482015260640161068d565b336001600160a01b038916148061089057506001600160a01b03881660009081526020818152604080832033845290915290205460ff165b6108cd5760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b604482015260640161068d565b60008060005b878110156109f8578888828181106108fb57634e487b7160e01b600052603260045260246000fd5b90506020020135925086868281811061092457634e487b7160e01b600052603260045260246000fd5b600086815260016020908152604090912054910292909201359350506001600160a01b038c81169116146109875760405162461bcd60e51b815260206004820152600a60248201526957524f4e475f46524f4d60b01b604482015260640161068d565b816001146109c85760405162461bcd60e51b815260206004820152600e60248201526d1253959053125117d05353d5539560921b604482015260640161068d565b600083815260016020819052604090912080546001600160a01b0319166001600160a01b038d16179055016108d3565b50886001600160a01b03168a6001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8b8b8b8b604051610a4c949392919061270a565b60405180910390a46001600160a01b0389163b15610b415760405163bc197c8160e01b808252906001600160a01b038b169063bc197c8190610aa09033908f908e908e908e908e908e908e906004016125cc565b602060405180830381600087803b158015610aba57600080fd5b505af1158015610ace573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af291906122ec565b6001600160e01b03191614610b3c5760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b604482015260640161068d565b610b8b565b6001600160a01b038916610b8b5760405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b604482015260640161068d565b50505050505050505050565b6004546001600160a01b03163314610be05760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b604482015260640161068d565b610bea32476115ce565b565b6060838214610c2f5760405162461bcd60e51b815260206004820152600f60248201526e0988a9c8ea890be9a92a69a82a8869608b1b604482015260640161068d565b8367ffffffffffffffff811115610c5657634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610c7f578160200160208202803683370190505b50905060005b84811015610d3b57610d08868683818110610cb057634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610cc59190611fde565b858584818110610ce557634e487b7160e01b600052603260045260246000fd5b905060200201356000908152600160205260409020546001600160a01b03161490565b828281518110610d2857634e487b7160e01b600052603260045260246000fd5b6020908102919091010152600101610c85565b50949350505050565b606060078054610d5390612830565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7f90612830565b8015610dcc5780601f10610da157610100808354040283529160200191610dcc565b820191906000526020600020905b815481529060010190602001808311610daf57829003601f168201915b5050505050905090565b6004546001600160a01b03163314610e1f5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b604482015260640161068d565b600a805460ff19168215159081179091556040517f2f3b349e2956d565a50532dcc875a49be7f558411642122cf5e50ca9b4bb14e690600090a250565b600554600114610e9b5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b604482015260640161068d565b6002600555600a5460ff16610ec3576040516316851fc760e11b815260040160405180910390fd5b8060095481610ed06107d1565b610eda91906127ad565b1115610ef95760405163d05cb60960e01b815260040160405180910390fd5b6008548234610f0882846127e5565b14610f265760405163f7760f2560e01b815260040160405180910390fd5b60005b84811015610f5a57610f5233610f3d611629565b60405180602001604052806000815250611640565b600101610f29565b84811015610f705763dfb035c96000526004601cfd5b50506001600555505050565b336000818152602081815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6004546001600160a01b0316331461102f5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b604482015260640161068d565b80516000905b8082101561105257611047600661182d565b816001019150611035565b808210156110685763dfb035c96000526004601cfd5b611072848461184a565b50505050565b6004546001600160a01b031633146110c15760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b604482015260640161068d565b80516000905b80821015611114576110d9600661182d565b6111098383815181106110fc57634e487b7160e01b600052603260045260246000fd5b6020026020010151611a3d565b8160010191506110c7565b8082101561112a5763dfb035c96000526004601cfd5b505050565b336001600160a01b038716148061116757506001600160a01b03861660009081526020818152604080832033845290915290205460ff165b6111a45760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b604482015260640161068d565b6000848152600160205260409020546001600160a01b038781169116146111fa5760405162461bcd60e51b815260206004820152600a60248201526957524f4e475f46524f4d60b01b604482015260640161068d565b8260011461123b5760405162461bcd60e51b815260206004820152600e60248201526d1253959053125117d05353d5539560921b604482015260640161068d565b60008481526001602090815260409182902080546001600160a01b0319166001600160a01b038981169182179092558351888152928301879052929089169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46001600160a01b0385163b156113905760405163f23a6e6160e01b808252906001600160a01b0387169063f23a6e61906112ef9033908b908a908a908a908a906004016126d1565b602060405180830381600087803b15801561130957600080fd5b505af115801561131d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134191906122ec565b6001600160e01b0319161461138b5760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b604482015260640161068d565b6113da565b6001600160a01b0385166113da5760405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b604482015260640161068d565b505050505050565b6004546001600160a01b0316331461142b5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b604482015260640161068d565b6040516370a0823160e01b81523060048201526114af90829032906001600160a01b038316906370a082319060240160206040518083038186803b15801561147257600080fd5b505afa158015611486573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114aa91906123ad565b611b09565b50565b6005546001146114f15760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b604482015260640161068d565b6002600555600a5460ff16611519576040516316851fc760e11b815260040160405180910390fd5b805161152481611b8f565b60005b818110156115455761153d600680546001019055565b600101611527565b8181101561155b5763dfb035c96000526004601cfd5b611575338460405180602001604052806000815250611bf1565b5050600160055550565b604080516080810191829052607f0190826030600a8206018353600a90045b80156115bc57600183039250600a81066030018353600a900461159e565b50819003601f19909101908152919050565b600080600080600085875af190508061112a5760405162461bcd60e51b815260206004820152601360248201527f4554485f5452414e534645525f4641494c454400000000000000000000000000604482015260640161068d565b6000611639600680546001019055565b5060065490565b6000828152600160205260409020546001600160a01b0316156116965760405162461bcd60e51b815260206004820152600e60248201526d1053149150511657d3525395115160921b604482015260640161068d565b600082815260016020818152604080842080546001600160a01b0319166001600160a01b03891690811790915581518781529283019390935291929133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46001600160a01b0383163b156117e35760405163f23a6e6160e01b808252906001600160a01b0385169063f23a6e61906117479033906000908890600190899060040161268e565b602060405180830381600087803b15801561176157600080fd5b505af1158015611775573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179991906122ec565b6001600160e01b0319161461112a5760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b604482015260640161068d565b6001600160a01b03831661112a5760405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b604482015260640161068d565b8054806118425763ce3a3d376000526004601cfd5b600019019055565b6001600160a01b0382166118a05760405162461bcd60e51b815260206004820152600c60248201527f494e56414c49445f46524f4d0000000000000000000000000000000000000000604482015260640161068d565b805160008167ffffffffffffffff8111156118cb57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156118f4578160200160208202803683370190505b5090506000805b838110156119dd5784818151811061192357634e487b7160e01b600052603260045260246000fd5b602090810291909101810151600081815260019092526040909120549092506001600160a01b038781169116146119895760405162461bcd60e51b815260206004820152600a60248201526957524f4e475f46524f4d60b01b604482015260640161068d565b600082815260016020819052604090912080546001600160a01b031916905583518490839081106119ca57634e487b7160e01b600052603260045260246000fd5b60209081029190910101526001016118fb565b5060006001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8786604051611a2e929190612744565b60405180910390a45050505050565b6000818152600160205260409020546001600160a01b031680611aa25760405162461bcd60e51b815260206004820152600a60248201527f4e4f545f4d494e54454400000000000000000000000000000000000000000000604482015260640161068d565b600082815260016020818152604080842080546001600160a01b03191690558051868152918201929092526001600160a01b0384169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806110725760405162461bcd60e51b815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015260640161068d565b3481600854611b9e91906127e5565b14611bbc5760405163f7760f2560e01b815260040160405180910390fd5b60095481611bc86107d1565b611bd291906127ad565b11156114af5760405163d05cb60960e01b815260040160405180910390fd5b815160008167ffffffffffffffff811115611c1c57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611c45578160200160208202803683370190505b5090506000805b83811015611d3957858181518110611c7457634e487b7160e01b600052603260045260246000fd5b602090810291909101810151600081815260019092526040909120549092506001600160a01b031615611cda5760405162461bcd60e51b815260206004820152600e60248201526d1053149150511657d3525395115160921b604482015260640161068d565b600082815260016020819052604090912080546001600160a01b0319166001600160a01b038a161790558351849083908110611d2657634e487b7160e01b600052603260045260246000fd5b6020908102919091010152600101611c4c565b50856001600160a01b031660006001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8886604051611d8a929190612744565b60405180910390a46001600160a01b0386163b15611dd95760405163bc197c8160e01b808252906001600160a01b0388169063bc197c81906112ef9033906000908b9089908c90600401612630565b6001600160a01b0386166113da5760405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b604482015260640161068d565b828054611e2f90612830565b90600052602060002090601f016020900481019282611e515760008555611e97565b82601f10611e6a57805160ff1916838001178555611e97565b82800160010185558215611e97579182015b82811115611e97578251825591602001919060010190611e7c565b50611ea3929150611ea7565b5090565b5b80821115611ea35760008155600101611ea8565b60008083601f840112611ecd578182fd5b50813567ffffffffffffffff811115611ee4578182fd5b6020830191508360208260051b8501011115611eff57600080fd5b9250929050565b600082601f830112611f16578081fd5b8135602067ffffffffffffffff821115611f3257611f32612881565b8160051b611f4182820161277c565b838152828101908684018388018501891015611f5b578687fd5b8693505b85841015611f7d578035835260019390930192918401918401611f5f565b50979650505050505050565b80358015158114611f9957600080fd5b919050565b60008083601f840112611faf578182fd5b50813567ffffffffffffffff811115611fc6578182fd5b602083019150836020828501011115611eff57600080fd5b600060208284031215611fef578081fd5b8135611ffa81612897565b9392505050565b60008060408385031215612013578081fd5b823561201e81612897565b9150602083013561202e81612897565b809150509250929050565b60008060008060008060008060a0898b031215612054578384fd5b883561205f81612897565b9750602089013561206f81612897565b9650604089013567ffffffffffffffff8082111561208b578586fd5b6120978c838d01611ebc565b909850965060608b01359150808211156120af578586fd5b6120bb8c838d01611ebc565b909650945060808b01359150808211156120d3578384fd5b506120e08b828c01611f9e565b999c989b5096995094979396929594505050565b60008060008060008060a0878903121561210c578182fd5b863561211781612897565b9550602087013561212781612897565b94506040870135935060608701359250608087013567ffffffffffffffff811115612150578283fd5b61215c89828a01611f9e565b979a9699509497509295939492505050565b60008060408385031215612180578182fd5b823561218b81612897565b9150602083013567ffffffffffffffff8111156121a6578182fd5b6121b285828601611f06565b9150509250929050565b600080604083850312156121ce578182fd5b82356121d981612897565b915061080e60208401611f89565b600080604083850312156121f9578182fd5b823561220481612897565b946020939093013593505050565b60008060008060408587031215612227578384fd5b843567ffffffffffffffff8082111561223e578586fd5b61224a88838901611ebc565b90965094506020870135915080821115612262578384fd5b5061226f87828801611ebc565b95989497509550505050565b60006020828403121561228c578081fd5b813567ffffffffffffffff8111156122a2578182fd5b6122ae84828501611f06565b949350505050565b6000602082840312156122c7578081fd5b611ffa82611f89565b6000602082840312156122e1578081fd5b8135611ffa816128ac565b6000602082840312156122fd578081fd5b8151611ffa816128ac565b6000602080838503121561231a578182fd5b823567ffffffffffffffff80821115612331578384fd5b818501915085601f830112612344578384fd5b81358181111561235657612356612881565b612368601f8201601f1916850161277c565b9150808252868482850101111561237d578485fd5b80848401858401378101909201929092529392505050565b6000602082840312156123a6578081fd5b5035919050565b6000602082840312156123be578081fd5b5051919050565b600080604083850312156123d7578182fd5b50508035926020909101359150565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115612417578081fd5b8260051b80836020870137939093016020019283525090919050565b6000815180845260208085019450808401835b8381101561246257815187529582019590820190600101612446565b509495945050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600081518084526124ae816020860160208601612804565b601f01601f19169290920160200192915050565b600081516124d4818560208601612804565b9290920192915050565b600082516124f0818460208701612804565b9190910192915050565b600080845482600182811c91508083168061251657607f831692505b602080841082141561253657634e487b7160e01b87526022600452602487fd5b81801561254a576001811461255b57612587565b60ff19861689528489019650612587565b60008b815260209020885b8681101561257f5781548b820152908501908301612566565b505084890196505b5050505050506125c361259a82866124c2565b7f2e6a736f6e000000000000000000000000000000000000000000000000000000815260050190565b95945050505050565b60006001600160a01b03808b168352808a1660208401525060a060408301526125f960a08301888a6123e6565b828103606084015261260c8187896123e6565b9050828103608084015261262181858761246d565b9b9a5050505050505050505050565b60006001600160a01b03808816835280871660208401525060a0604083015261265c60a0830186612433565b828103606084015261266e8186612433565b905082810360808401526126828185612496565b98975050505050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a060808301526126c660a0830184612496565b979650505050505050565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a0608083015261268260a08301848661246d565b60408152600061271e6040830186886123e6565b82810360208401526126c68185876123e6565b602081526000611ffa6020830184612433565b6040815260006127576040830185612433565b82810360208401526125c38185612433565b602081526000611ffa6020830184612496565b604051601f8201601f1916810167ffffffffffffffff811182821017156127a5576127a5612881565b604052919050565b600082198211156127c0576127c061286b565b500190565b6000826127e057634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156127ff576127ff61286b565b500290565b60005b8381101561281f578181015183820152602001612807565b838111156110725750506000910152565b600181811c9082168061284457607f821691505b6020821081141561286557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146114af57600080fd5b6001600160e01b0319811681146114af57600080fdfea164736f6c6343000804000a";

type ERC1155BasicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155BasicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Basic__factory extends ContractFactory {
  constructor(...args: ERC1155BasicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    __uri: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _maxSupply: PromiseOrValue<BigNumberish>,
    _splitter: PromiseOrValue<string>,
    _fraction: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155Basic> {
    return super.deploy(
      __uri,
      _price,
      _maxSupply,
      _splitter,
      _fraction,
      _router,
      overrides || {}
    ) as Promise<ERC1155Basic>;
  }
  override getDeployTransaction(
    __uri: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _maxSupply: PromiseOrValue<BigNumberish>,
    _splitter: PromiseOrValue<string>,
    _fraction: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      __uri,
      _price,
      _maxSupply,
      _splitter,
      _fraction,
      _router,
      overrides || {}
    );
  }
  override attach(address: string): ERC1155Basic {
    return super.attach(address) as ERC1155Basic;
  }
  override connect(signer: Signer): ERC1155Basic__factory {
    return super.connect(signer) as ERC1155Basic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155BasicInterface {
    return new utils.Interface(_abi) as ERC1155BasicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Basic {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Basic;
  }
}
