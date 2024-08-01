/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { MADRouter, MADRouterInterface } from "../../Router/MADRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract FactoryVerifier",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidFees",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidType",
    type: "error",
  },
  {
    inputs: [],
    name: "NoFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAuthorised",
    type: "error",
  },
  {
    inputs: [],
    name: "NotCollectionOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidCollection",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongPrice",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_id",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "_baseURI",
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
        internalType: "contract FactoryVerifier",
        name: "newFactory",
        type: "address",
      },
    ],
    name: "FactoryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "feeVal2",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeVal3",
        type: "uint256",
      },
    ],
    name: "FeesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "feeVal2",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeVal3",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20Token",
        type: "address",
      },
    ],
    name: "FeesUpdated",
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
        internalType: "address",
        name: "newPaymentToken",
        type: "address",
      },
    ],
    name: "PaymentTokenUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_id",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "PublicMintState",
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
    name: "RecipientUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_id",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_payee",
        type: "address",
      },
    ],
    name: "TokenFundsWithdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "batchBurn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
      },
    ],
    name: "batchBurn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint128[]",
        name: "_ids",
        type: "uint128[]",
      },
      {
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint128[]",
        name: "_ids",
        type: "uint128[]",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeBurn",
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
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
      },
    ],
    name: "feeBurnErc20",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "feeAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        internalType: "struct FeeHandler.Fee",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeMint",
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
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
      },
    ],
    name: "feeMintErc20",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "feeAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        internalType: "struct FeeHandler.Fee",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "invalidateBurnFee",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "invalidateMintFee",
        type: "bool",
      },
    ],
    name: "invalidateFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "madFactory",
    outputs: [
      {
        internalType: "contract FactoryVerifier",
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
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
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
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
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
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
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
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
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
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
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
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_maxSupplies",
        type: "uint256[]",
      },
    ],
    name: "mintBatchTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_maxSupplies",
        type: "uint256[]",
      },
    ],
    name: "mintBatchTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
    inputs: [],
    name: "recipient",
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
        internalType: "contract FactoryVerifier",
        name: "_factory",
        type: "address",
      },
    ],
    name: "setFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feeMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeBurn",
        type: "uint256",
      },
    ],
    name: "setFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feeMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeBurn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "madFeeTokenAddress",
        type: "address",
      },
    ],
    name: "setFees",
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
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "setRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x346200007457620025a3388190036080601f8201601f19168101906001600160401b03821190821017620000785760409282918452608039126200007457620000646080516200004f816200008c565b60a051906200005e826200008c565b6200009e565b60405161243a9081620001698239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b038116036200007457565b9033156200015b575f80546001600160a01b031916339081178255907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768180a3670de0b6b3a76400008060025560035581156200015b5760068290556001600160a01b039182167f24cd1310c8883cbeaf5b805ab13586ce018b79c022827158ff3e8df14d3449365f80a280156200015b5780600155167f566f16f5ede69bb6f837d5da3a6cf41c863ba95621d677ff3c931aa687da64665f80a2565b63d92e233d5f526004601cfdfe60806040526004361015610011575f80fd5b5f3560e01c806306fdde03146102145780630b78f9c01461020f57806313af40351461020a578063149b222814610205578063156e29f614610200578063395e37ec146101fb5780633bbed4a0146101f65780633e185330146101f157806342b4d2fa146101ec57806349fa55ad146101e7578063583fef34146101e2578063586ba782146101dd5780635bb47808146101d85780635ec5a434146101d35780636308ec41146101ce578063634f213e146101c957806365e11e6e146101c457806366d003ac146101bf5780636a3a2c1b146101ba5780638b9f1815146101b55780638da5cb5b146101b0578063940f5598146101ab5780639a255db6146101a6578063baa26e61146101a1578063bb05d8ef1461019c578063be29184f14610197578063d7020d0a14610192578063d81d0a151461018d578063e4d73e5914610188578063f12bd09e14610183578063f74bfe8e1461017e5763fde3704e14610179575f80fd5b611a81565b6119ef565b611940565b611806565b61178e565b6116c6565b611604565b61154e565b61140b565b611345565b611268565b611236565b61115f565b6110fe565b6110cb565b610f8b565b610e53565b610cf3565b610b9a565b610b2c565b610b0f565b610af2565b610a04565b610948565b61080e565b6107a0565b6106ae565b6105ad565b6104b9565b610314565b61024c565b610227565b5f91031261022357565b5f80fd5b34610223575f60031936011261022357602080526606726f7574657260465260606020f35b346102235760406003193601126102235760043560243573ffffffffffffffffffffffffffffffffffffffff5f541633036102cc57817f5c6323bf1c2d7aaea2c091a4751c1c87af7f2864650c336507a77d0557af37a192600255816003556102c76040519283928360209093929193604081019481520152565b0390a1005b60046040517f1648fd01000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff81160361022357565b3461022357602060031936011261022357600435610331816102f6565b73ffffffffffffffffffffffffffffffffffffffff90815f541633036102cc57801561038257805f5516337f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d765f80a3005b63d92e233d5f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b67ffffffffffffffff81116103d057604052565b61038f565b6040810190811067ffffffffffffffff8211176103d057604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176103d057604052565b6040519061043f826103d5565b565b67ffffffffffffffff81116103d05760051b60200190565b9080601f8301121561022357602090823561047381610441565b9361048160405195866103f1565b81855260208086019260051b82010192831161022357602001905b8282106104aa575050505090565b8135815290830190830161049c565b5f6080600319360112610223576004356104d2816102f6565b67ffffffffffffffff602435818111610223576104f3903690600401610459565b906044359081116102235761052173ffffffffffffffffffffffffffffffffffffffff913690600401610459565b92610544606435610531816102f6565b61053a83611ce4565b8451903091611e15565b1691823b156102235761058a925f92836040518096819582947fd81d0a150000000000000000000000000000000000000000000000000000000084523360048501611ae7565b03925af180156105a85761059c575080f35b6105a691506103bc565b005b611b2b565b6060600319360112610223576004356105c5816102f6565b6105ce81611ce4565b6105d66121e8565b34039034821161066b5773ffffffffffffffffffffffffffffffffffffffff1690813b15610223576040517f156e29f600000000000000000000000000000000000000000000000000000000815233600482015260248035908201526044803590820152915f91839190829081606481015b03925af180156105a85761065857005b806106656105a6926103bc565b80610219565b611b36565b604435906fffffffffffffffffffffffffffffffff8216820361022357565b602435906fffffffffffffffffffffffffffffffff8216820361022357565b5f6080600319360112610223576004356106c7816102f6565b6024356106d3816102f6565b73ffffffffffffffffffffffffffffffffffffffff6106f0610670565b9261072c606435610700816102f6565b610709836122e8565b61071283611ce4565b30906fffffffffffffffffffffffffffffffff8716611e15565b1691823b15610223576040517fa7fcf7b500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90921660048301526fffffffffffffffffffffffffffffffff166024820152905f9082908183816044810161058a565b34610223576020600319360112610223576004356107bd816102f6565b73ffffffffffffffffffffffffffffffffffffffff90815f541633036102cc5780156103825780600155167f566f16f5ede69bb6f837d5da3a6cf41c863ba95621d677ff3c931aa687da64665f80a2005b60c060031936011261022357600435610826816102f6565b60243590610833826102f6565b73ffffffffffffffffffffffffffffffffffffffff6044359161087460843561085b816102f6565b610864836122e8565b61086d83611ce4565b309061205c565b1691823b15610223576040517f37da577c0000000000000000000000000000000000000000000000000000000081526004810183905260a43560248201525f8160448183885af180156105a857610935575b50823b1561022357610648925f92836040518096819582947f2baf2acb000000000000000000000000000000000000000000000000000000008452606435916004850160409194939273ffffffffffffffffffffffffffffffffffffffff606083019616825260208201520152565b80610665610942926103bc565b5f6108c6565b346102235760206003193601126102235773ffffffffffffffffffffffffffffffffffffffff60043561097a816102f6565b610982611b70565b501680156109da575f5260046020526109d660405f2060ff6001604051926109a9846103d5565b80548452015416151560208201526040519182918291909160208060408301948051845201511515910152565b0390f35b60046040517fd23f9521000000000000000000000000000000000000000000000000000000008152fd5b606060031936011261022357600435610a1c816102f6565b60243590610a29826102f6565b610a31610670565b610a3a826122e8565b610a4382611ce4565b610a5e6fffffffffffffffffffffffffffffffff8216612260565b34039134831161066b5773ffffffffffffffffffffffffffffffffffffffff16803b15610223576040517fa7fcf7b500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90941660048501526fffffffffffffffffffffffffffffffff90911660248401525f9183919082908160448101610648565b34610223575f600319360112610223576020600354604051908152f35b34610223575f600319360112610223576020600254604051908152f35b3461022357602060031936011261022357600435610b49816102f6565b73ffffffffffffffffffffffffffffffffffffffff90815f541633036102cc5780156103825780600655167f24cd1310c8883cbeaf5b805ab13586ce018b79c022827158ff3e8df14d3449365f80a2005b60a0600319360112610223576004803590610bb4826102f6565b602435610bc0816102f6565b67ffffffffffffffff9260443584811161022357610be19036908501610459565b9160643585811161022357610bf99036908601610459565b9460843590811161022357610c119036908601610459565b91610c1b816122e8565b610c2481611ce4565b73ffffffffffffffffffffffffffffffffffffffff610c4c610c468651612260565b34611b63565b911692833b15610223575f610c8e91604051809381927f1169e6a2000000000000000000000000000000000000000000000000000000008352898b8401611b88565b038183885af180156105a857610ce0575b50823b15610223575f94610648604051978896879586947f3512639c0000000000000000000000000000000000000000000000000000000086528501611ae7565b80610665610ced926103bc565b5f610c9f565b60c0600319360112610223576004803590610d0d826102f6565b602435610d19816102f6565b67ffffffffffffffff9260443584811161022357610d3a9036908501610459565b9160643585811161022357610d529036908601610459565b9460843592610d60846102f6565b60a43591821161022357610dac610d8f73ffffffffffffffffffffffffffffffffffffffff9336908901610459565b94610d99836122e8565b610da283611ce4565b8651903091611e15565b1691823b15610223575f610ded91604051809381927f1169e6a2000000000000000000000000000000000000000000000000000000008352888a8401611b88565b038183875af180156105a857610e40575b50813b15610223575f8094610648604051978896879586947f3512639c0000000000000000000000000000000000000000000000000000000086528501611ae7565b80610665610e4d926103bc565b5f610dfe565b60a060031936011261022357600435610e6b816102f6565b60243590610e78826102f6565b60443591610e85826122e8565b610e8e82611ce4565b73ffffffffffffffffffffffffffffffffffffffff610eae610c466121e8565b9216803b15610223576040517f37da577c0000000000000000000000000000000000000000000000000000000081526004810185905260843560248201525f8160448183865af180156105a857610f6e575b50803b1561022357610648935f936040518096819582947f2baf2acb000000000000000000000000000000000000000000000000000000008452606435916004850160409194939273ffffffffffffffffffffffffffffffffffffffff606083019616825260208201520152565b80610665610f7b926103bc565b5f610f00565b8015150361022357565b3461022357606060031936011261022357600435610fa8816102f6565b602435610fb481610f81565b604435610fc081610f81565b73ffffffffffffffffffffffffffffffffffffffff805f541633036102cc5783169081156109da5761106d575b50610ff457005b6105a690611031611003610432565b915f83525f602084015273ffffffffffffffffffffffffffffffffffffffff165f52600560205260405f2090565b60016020918351815501910151151560ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008354169116179055565b600160405161107b816103d5565b5f815260208101925f84525f52600460205260405f2090518155019051151560ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0083541691161790555f610fed565b34610223575f60031936011261022357602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b346102235760206003193601126102235773ffffffffffffffffffffffffffffffffffffffff600435611130816102f6565b611138611b70565b501680156109da575f5260056020526109d660405f2060ff6001604051926109a9846103d5565b5f608060031936011261022357600435611178816102f6565b602435611184816102f6565b67ffffffffffffffff604435818111610223576111a5903690600401610459565b90606435908111610223576111be903690600401610459565b906111c884611ce4565b6111d2815161229b565b34039334851161066b5773ffffffffffffffffffffffffffffffffffffffff1690813b156102235761058a945f94604051968795869485937f6b20c45400000000000000000000000000000000000000000000000000000000855260048501611ae7565b34610223575f60031936011261022357602073ffffffffffffffffffffffffffffffffffffffff5f5416604051908152f35b5f60a060031936011261022357600435611281816102f6565b60243561128d816102f6565b67ffffffffffffffff91604435838111610223576112af903690600401610459565b92606435908111610223576112dd73ffffffffffffffffffffffffffffffffffffffff913690600401610459565b916113006084356112ed816102f6565b6112f683611ce4565b865190309161213b565b16803b156102235761058a935f8094604051968795869485937f6b20c45400000000000000000000000000000000000000000000000000000000855260048501611ae7565b5f60606003193601126102235760043561135e816102f6565b73ffffffffffffffffffffffffffffffffffffffff61137b61068f565b916113ae60443561138b816102f6565b61139483611ce4565b30906fffffffffffffffffffffffffffffffff8616611e15565b16803b15610223576040517fbe29184f0000000000000000000000000000000000000000000000000000000081523360048201526fffffffffffffffffffffffffffffffff90921660248301525f9082908183816044810161058a565b5f60a060031936011261022357600435611424816102f6565b73ffffffffffffffffffffffffffffffffffffffff60243591611446836102f6565b611465608435611455816102f6565b61145e83611ce4565b3090612193565b16803b15610223576040517ff5298aca00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909216600483015260448035602484015260648035918401919091525f918391829084908290810161058a565b9080601f830112156102235760209082356114ef81610441565b936114fd60405195866103f1565b81855260208086019260051b82010192831161022357602001905b828210611526575050505090565b81356fffffffffffffffffffffffffffffffff81168103610223578152908301908301611518565b5f606060031936011261022357600435611567816102f6565b60243567ffffffffffffffff81116102235761159c73ffffffffffffffffffffffffffffffffffffffff9136906004016114d5565b916115bf6044356115ac816102f6565b6115b583611ce4565b845190309161213b565b16803b156102235761058a5f929183926040519485809481937f40475c1600000000000000000000000000000000000000000000000000000000835260048301611bad565b60406003193601126102235760043561161c816102f6565b61162461068f565b61162d82611ce4565b6116486fffffffffffffffffffffffffffffffff8216612260565b34039134831161066b5773ffffffffffffffffffffffffffffffffffffffff1690813b15610223576040517fbe29184f0000000000000000000000000000000000000000000000000000000081523360048201526fffffffffffffffffffffffffffffffff9091166024820152915f91839182908160448101610648565b5f6080600319360112610223576004356116df816102f6565b6024356116eb816102f6565b6116f482611ce4565b6116fc6122a7565b34039134831161066b5773ffffffffffffffffffffffffffffffffffffffff1690813b15610223575f9161058a916040519485809481937ff5298aca00000000000000000000000000000000000000000000000000000000835260643590604435906004850160409194939273ffffffffffffffffffffffffffffffffffffffff606083019616825260208201520152565b6060600319360112610223576004356117a6816102f6565b67ffffffffffffffff602435818111610223576117c7903690600401610459565b91604435928284116102235736602385011215610223578360040135928311610223573660248460051b860101116102235760246105a6940191611bfa565b3461022357606060031936011261022357604435602435600435611829836102f6565b73ffffffffffffffffffffffffffffffffffffffff805f541633036102cc57831680156109da577f660e7095066fd91b05cfad0851f3cefa62b4a62de319c3c13ef7db8982e78501936102c7916001604051611884816103d5565b85815260208101928284525f52600460205260405f2090518155019051151560ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00835416911617905561190b6118d9610432565b858152600160208201526110318373ffffffffffffffffffffffffffffffffffffffff165f52600560205260405f2090565b6040519384938491604091949373ffffffffffffffffffffffffffffffffffffffff9160608501968552602085015216910152565b5f604060031936011261022357600435611959816102f6565b60243567ffffffffffffffff8111610223576119799036906004016114d5565b61198282611ce4565b61198c815161229b565b34039134831161066b5773ffffffffffffffffffffffffffffffffffffffff1690813b15610223575f9161058a916040519485809481937f40475c1600000000000000000000000000000000000000000000000000000000835260048301611bad565b5f60806003193601126102235773ffffffffffffffffffffffffffffffffffffffff600435611a1d816102f6565b611a2c606435610864816102f6565b16803b15610223576040517f156e29f600000000000000000000000000000000000000000000000000000000815233600482015260248035908201526044803590820152905f9082908183816064810161058a565b34610223575f60031936011261022357602073ffffffffffffffffffffffffffffffffffffffff60065416604051908152f35b9081518082526020808093019301915f5b828110611ad3575050505090565b835185529381019392810192600101611ac5565b91611b1a9073ffffffffffffffffffffffffffffffffffffffff611b289593168452606060208501526060840190611ab4565b916040818403910152611ab4565b90565b6040513d5f823e3d90fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9190820391821161066b57565b60405190611b7d826103d5565b5f6020838281520152565b9091611b9f611b2893604084526040840190611ab4565b916020818403910152611ab4565b60209060206040818301928281528551809452019301915f5b828110611bd4575050505090565b83516fffffffffffffffffffffffffffffffff1685529381019392810192600101611bc6565b91929092611c0783611ce4565b611c118451612260565b34039234841161066b5773ffffffffffffffffffffffffffffffffffffffff1690813b1561022357611c7a604051957fd81d0a15000000000000000000000000000000000000000000000000000000008752336004880152606060248801526064870190611ab4565b936003198686030160448701528385527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8411610223576020868095935f97829560051b809285830137010301925af180156105a857611cd75750565b8061066561043f926103bc565b602073ffffffffffffffffffffffffffffffffffffffff602481600654169360405194859384927f97cf65af0000000000000000000000000000000000000000000000000000000084521660048301525afa9081156105a8575f91611d76575b5015611d4c57565b60046040517ffe026803000000000000000000000000000000000000000000000000000000008152fd5b90506020813d602011611da9575b81611d91602093836103f1565b810103126102235751611da381610f81565b5f611d44565b3d9150611d84565b9081604091031261022357602060405191611dcb836103d5565b805183520151611dda81610f81565b602082015290565b908115600183800414171561066b57565b8181029291811591840414171561066b57565b90816020910312610223575190565b604080517f42b4d2fa00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84166004820152909493909190859083908180602481015b03915afa9182156105a8575f9261202d575b50602091611e92611e8e84830151151590565b1590565b6120045773ffffffffffffffffffffffffffffffffffffffff91611eb69151611df3565b85517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015290939190911691908181602481865afa80156105a85784915f91611fe7575b5010908115611f65575b50611f3c5761043f929350611f3460015473ffffffffffffffffffffffffffffffffffffffff1690565b9033906123af565b600484517f2d8768f9000000000000000000000000000000000000000000000000000000008152fd5b85517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201529091508181604481865afa9081156105a85784925f92611fba575b5050105f611f0a565b611fd99250803d10611fe0575b611fd181836103f1565b810190611e06565b5f80611fb1565b503d611fc7565b611ffe9150833d8511611fe057611fd181836103f1565b5f611f00565b600486517fd23f9521000000000000000000000000000000000000000000000000000000008152fd5b61204e919250853d8711612055575b61204681836103f1565b810190611db1565b905f611e7b565b503d61203c565b604080517f42b4d2fa00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152909392849082908180602481015b03915afa9081156105a8575f9161211e575b506020906120d2611e8e83830151151590565b6120f557611eb673ffffffffffffffffffffffffffffffffffffffff9151611de2565b600485517fd23f9521000000000000000000000000000000000000000000000000000000008152fd5b6121359150843d86116120555761204681836103f1565b5f6120bf565b604080517f6a3a2c1b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015290949390919085908390818060248101611e69565b604080517f6a3a2c1b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152909392849082908180602481016120ad565b600254908180046001148215171561066b5781803410612236575f8080809373ffffffffffffffffffffffffffffffffffffffff600154165af11561222957565b63b12d13eb5f526004601cfd5b60046040517f2d8768f9000000000000000000000000000000000000000000000000000000008152fd5b61226c90600254611df3565b90813410612236575f8080808573ffffffffffffffffffffffffffffffffffffffff600154165af11561222957565b61226c90600354611df3565b600354908180046001148215171561066b5781803410612236575f8080809373ffffffffffffffffffffffffffffffffffffffff600154165af11561222957565b60209073ffffffffffffffffffffffffffffffffffffffff9182916004604051809481937f893d20e8000000000000000000000000000000000000000000000000000000008352165afa9081156105a8575f91612374575b5016330361234a57565b60046040517f4fd9af3e000000000000000000000000000000000000000000000000000000008152fd5b90506020813d6020116123a7575b8161238f602093836103f1565b8101031261022357516123a1816102f6565b5f612340565b3d9150612382565b601c5f60649281946020966040519860605260405260601b602c526f23b872dd000000000000000000000000600c525af13d1560015f51141716156123f7575f606052604052565b637939f4245f526004601cfdfea26469706673582212206e98011aacb739a590640772fe9c7ef05217a37bec778f2781cf40e9b14d611764736f6c63430008160033";

type MADRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MADRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MADRouter__factory extends ContractFactory {
  constructor(...args: MADRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _factory: AddressLike,
    _recipient: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_factory, _recipient, overrides || {});
  }
  override deploy(
    _factory: AddressLike,
    _recipient: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_factory, _recipient, overrides || {}) as Promise<
      MADRouter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MADRouter__factory {
    return super.connect(runner) as MADRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MADRouterInterface {
    return new Interface(_abi) as MADRouterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MADRouter {
    return new Contract(address, _abi, runner) as unknown as MADRouter;
  }
}
