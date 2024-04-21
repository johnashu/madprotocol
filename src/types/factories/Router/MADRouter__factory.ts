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
  "0x34620000745762002622388190036080601f8201601f19168101906001600160401b03821190821017620000785760409282918452608039126200007457620000646080516200004f816200008c565b60a051906200005e826200008c565b6200009e565b6040516124b99081620001698239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b038116036200007457565b9033156200015b575f80546001600160a01b031916339081178255907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768180a3670de0b6b3a76400008060025560035581156200015b5760068290556001600160a01b039182167f24cd1310c8883cbeaf5b805ab13586ce018b79c022827158ff3e8df14d3449365f80a280156200015b5780600155167f566f16f5ede69bb6f837d5da3a6cf41c863ba95621d677ff3c931aa687da64665f80a2565b63d92e233d5f526004601cfdfe60806040526004361015610011575f80fd5b5f3560e01c806306fdde03146102145780630b78f9c01461020f57806313af40351461020a578063395e37ec146102055780633b3f62fa146102005780633bbed4a0146101fb5780633e185330146101f657806342b4d2fa146101f157806349fa55ad146101ec578063583fef34146101e7578063586ba782146101e25780635bb47808146101dd5780635ec5a434146101d85780636308ec41146101d3578063634f213e146101ce57806365e11e6e146101c957806366d003ac146101c45780636a3a2c1b146101bf578063787282ce146101ba5780638b9f1815146101b55780638da5cb5b146101b0578063940f5598146101ab5780639a255db6146101a6578063b3f1c93d146101a1578063baa26e611461019c578063bb05d8ef14610197578063be29184f14610192578063d7020d0a1461018d578063e4d73e5914610188578063f12bd09e14610183578063fa28d6921461017e5763fde3704e14610179575f80fd5b611cc3565b611c25565b611b76565b611a3c565b61193a565b611878565b6117cc565b611482565b61139e565b6112a8565b611225565b6111f3565b61111c565b611099565b610fca565b610f97565b610e57565b610d27565b610be1565b610a8d565b610a1f565b610a02565b6109e5565b6108fb565b61083f565b6106f2565b610684565b6105ff565b6103cd565b610314565b61024c565b610227565b5f91031261022357565b5f80fd5b34610223575f60031936011261022357602080526606726f7574657260465260606020f35b346102235760406003193601126102235760043560243573ffffffffffffffffffffffffffffffffffffffff5f541633036102cc57817f5c6323bf1c2d7aaea2c091a4751c1c87af7f2864650c336507a77d0557af37a192600255816003556102c76040519283928360209093929193604081019481520152565b0390a1005b60046040517f1648fd01000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff81160361022357565b3461022357602060031936011261022357600435610331816102f6565b73ffffffffffffffffffffffffffffffffffffffff90815f541633036102cc57801561038257805f5516337f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d765f80a3005b63d92e233d5f526004601cfd5b604435906fffffffffffffffffffffffffffffffff8216820361022357565b602435906fffffffffffffffffffffffffffffffff8216820361022357565b5f6080600319360112610223576004356103e6816102f6565b6024356103f2816102f6565b73ffffffffffffffffffffffffffffffffffffffff61040f61038f565b9261044260643561041f816102f6565b61042883611f27565b30906fffffffffffffffffffffffffffffffff8716612058565b1691823b15610223576040517fa7fcf7b500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90921660048301526fffffffffffffffffffffffffffffffff166024820152905f908290818381604481015b03925af180156104d0576104c4575080f35b6104ce9150610502565b005b611cf6565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b67ffffffffffffffff811161051657604052565b6104d5565b6040810190811067ffffffffffffffff82111761051657604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761051657604052565b604051906105858261051b565b565b67ffffffffffffffff81116105165760051b60200190565b9080601f830112156102235760209082356105b981610587565b936105c76040519586610537565b81855260208086019260051b82010192831161022357602001905b8282106105f0575050505090565b813581529083019083016105e2565b608060031936011261022357600435610617816102f6565b60243590610624826102f6565b67ffffffffffffffff906044358281116102235761064690369060040161059f565b606435938385116102235736602386011215610223578460040135938411610223573660248560051b870101116102235760246104ce950192611d6e565b34610223576020600319360112610223576004356106a1816102f6565b73ffffffffffffffffffffffffffffffffffffffff90815f541633036102cc5780156103825780600155167f566f16f5ede69bb6f837d5da3a6cf41c863ba95621d677ff3c931aa687da64665f80a2005b60c06003193601126102235760043561070a816102f6565b602435610716816102f6565b73ffffffffffffffffffffffffffffffffffffffff6044359261074e60843561073e816102f6565b61074783611f27565b3090612273565b1690813b15610223576040517f2baf2acb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff919091166004820152602481018390526064803560448301525f9082908183865af180156104d05761082c575b50803b15610223576040517f37da577c0000000000000000000000000000000000000000000000000000000081526004810183905260a4356024820152905f908290818381604481015b03925af180156104d05761081957005b806108266104ce92610502565b80610219565b8061082661083992610502565b5f6107bf565b346102235760206003193601126102235773ffffffffffffffffffffffffffffffffffffffff600435610871816102f6565b610879611e5c565b501680156108d1575f5260046020526108cd60405f2060ff6001604051926108a08461051b565b80548452015416151560208201526040519182918291909160208060408301948051845201511515910152565b0390f35b60046040517fd23f9521000000000000000000000000000000000000000000000000000000008152fd5b606060031936011261022357600435610913816102f6565b60243590610920826102f6565b61092861038f565b61093182611f27565b61094c6fffffffffffffffffffffffffffffffff82166123a6565b3403913483116109e05773ffffffffffffffffffffffffffffffffffffffff16803b15610223576040517fa7fcf7b500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90941660048501526fffffffffffffffffffffffffffffffff90911660248401525f9183919082908160448101610809565b611d01565b34610223575f600319360112610223576020600354604051908152f35b34610223575f600319360112610223576020600254604051908152f35b3461022357602060031936011261022357600435610a3c816102f6565b73ffffffffffffffffffffffffffffffffffffffff90815f541633036102cc5780156103825780600655167f24cd1310c8883cbeaf5b805ab13586ce018b79c022827158ff3e8df14d3449365f80a2005b60a0600319360112610223576004803590610aa7826102f6565b602435610ab3816102f6565b67ffffffffffffffff60443581811161022357610ad3903690850161059f565b9360643582811161022357610aeb903690860161059f565b9160843590811161022357610b03903690860161059f565b92610b0d82611f27565b73ffffffffffffffffffffffffffffffffffffffff610b35610b2f88516123a6565b34611d2e565b921692833b1561022357610b7b92875f93604051958694859384937f3512639c0000000000000000000000000000000000000000000000000000000085528c8501611e74565b0391865af180156104d057610bce575b50803b1561022357610809935f8094604051968795869485937f1169e6a20000000000000000000000000000000000000000000000000000000085528401611eb5565b80610826610bdb92610502565b5f610b8b565b60c0600319360112610223576004803590610bfb826102f6565b60243591610c08836102f6565b67ffffffffffffffff9260443584811161022357610c29903690850161059f565b9360643581811161022357610c41903690860161059f565b9060843593610c4f856102f6565b60a43591821161022357610c92610c7e73ffffffffffffffffffffffffffffffffffffffff933690890161059f565b95610c8883611f27565b8851903091612058565b1691823b1561022357855f91610cd460405194859384937f3512639c0000000000000000000000000000000000000000000000000000000085528a8501611e74565b038183865af180156104d057610bce5750803b1561022357610809935f8094604051968795869485937f1169e6a20000000000000000000000000000000000000000000000000000000085528401611eb5565b60a060031936011261022357600435610d3f816102f6565b60243590610d4c826102f6565b60443591610d5982611f27565b73ffffffffffffffffffffffffffffffffffffffff610d79610b2f6123e1565b921691823b15610223576040517f2baf2acb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff929092166004830152602482018490526064803560448401525f918391908290865af180156104d057610e3a575b50803b15610223576040517f37da577c000000000000000000000000000000000000000000000000000000008152600481018390526084356024820152905f90829081838160448101610809565b80610826610e4792610502565b5f610dec565b8015150361022357565b3461022357606060031936011261022357600435610e74816102f6565b602435610e8081610e4d565b604435610e8c81610e4d565b73ffffffffffffffffffffffffffffffffffffffff805f541633036102cc5783169081156108d157610f39575b50610ec057005b6104ce90610efd610ecf610578565b915f83525f602084015273ffffffffffffffffffffffffffffffffffffffff165f52600560205260405f2090565b60016020918351815501910151151560ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008354169116179055565b6001604051610f478161051b565b5f815260208101925f84525f52600460205260405f2090518155019051151560ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0083541691161790555f610eb9565b34610223575f60031936011261022357602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b346102235760206003193601126102235773ffffffffffffffffffffffffffffffffffffffff600435610ffc816102f6565b611004611e5c565b501680156108d1575f5260056020526108cd60405f2060ff6001604051926108a08461051b565b9060a060031983011261022357600435611044816102f6565b91602435611051816102f6565b9167ffffffffffffffff60443581811161022357836110729160040161059f565b92606435918211610223576110899160040161059f565b90608435611096816102f6565b90565b73ffffffffffffffffffffffffffffffffffffffff6110d56110ba3661102b565b6110cb859395979497969296611f27565b8451903091612058565b1691823b15610223576104b2925f92836040518096819582947fd81d0a15000000000000000000000000000000000000000000000000000000008452849a60048501611e74565b5f608060031936011261022357600435611135816102f6565b602435611141816102f6565b67ffffffffffffffff6044358181116102235761116290369060040161059f565b906064359081116102235761117b90369060040161059f565b9061118584611f27565b61118f8151612422565b3403933485116109e05773ffffffffffffffffffffffffffffffffffffffff1690813b15610223576104b2945f94604051968795869485937f6b20c45400000000000000000000000000000000000000000000000000000000855260048501611e74565b34610223575f60031936011261022357602073ffffffffffffffffffffffffffffffffffffffff5f5416604051908152f35b73ffffffffffffffffffffffffffffffffffffffff6112616112463661102b565b611257859395979497969296611f27565b845190309161234e565b1691823b15610223576104b2925f92836040518096819582947f6b20c454000000000000000000000000000000000000000000000000000000008452849a60048501611e74565b5f6060600319360112610223576004356112c1816102f6565b73ffffffffffffffffffffffffffffffffffffffff6112de6103ae565b916113116044356112ee816102f6565b6112f783611f27565b30906fffffffffffffffffffffffffffffffff8616612058565b16803b15610223576040517fbe29184f0000000000000000000000000000000000000000000000000000000081523360048201526fffffffffffffffffffffffffffffffff90921660248301525f908290818381604481016104b2565b600319608091011261022357600435611386816102f6565b90602435611393816102f6565b906044359060643590565b6113a73661136e565b6113b384939294611f27565b6113bb6123e1565b935f943403933485116109e05773ffffffffffffffffffffffffffffffffffffffff1690813b15610223576040517f156e29f600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90941660048501526024840152604483019190915290915f918391829081606481016104b2565b60031960a091011261022357600435611460816102f6565b9060243561146d816102f6565b906044359060643590608435611096816102f6565b61148b36611448565b929161149685611f27565b6040938451957f6a3a2c1b0000000000000000000000000000000000000000000000000000000087526004968681806114ee868c830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b0381305afa9081156104d0575f91611726575b5060209061151861151483830151151590565b1590565b6116fe576115269051612025565b87517f70a0823100000000000000000000000000000000000000000000000000000000815233818b0190815273ffffffffffffffffffffffffffffffffffffffff9586169391908290829081906020010381875afa80156104d05783915f916116e1575b5010908115611657575b5061162f576115c4916115bc60015473ffffffffffffffffffffffffffffffffffffffff1690565b90339061242e565b1690813b15610223575f80946104b29651968795869485937ff5298aca000000000000000000000000000000000000000000000000000000008552859b850160409194939273ffffffffffffffffffffffffffffffffffffffff606083019616825260208201520152565b8888517f2d8768f9000000000000000000000000000000000000000000000000000000008152fd5b89517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233818d01908152306020820152919250908290829081906040010381875afa9081156104d05783925f926116b4575b5050105f611594565b6116d39250803d106116da575b6116cb8183610537565b810190612049565b5f806116ab565b503d6116c1565b6116f89150833d85116116da576116cb8183610537565b5f61158a565b8888517fd23f9521000000000000000000000000000000000000000000000000000000008152fd5b6117469150873d891161174c575b61173e8183610537565b810190611ff4565b5f611501565b503d611734565b9080601f8301121561022357602090823561176d81610587565b9361177b6040519586610537565b81855260208086019260051b82010192831161022357602001905b8282106117a4575050505090565b81356fffffffffffffffffffffffffffffffff81168103610223578152908301908301611796565b5f6060600319360112610223576004356117e5816102f6565b60243567ffffffffffffffff81116102235761181a73ffffffffffffffffffffffffffffffffffffffff913690600401611753565b9161183360443561182a816102f6565b61125783611f27565b16803b15610223576104b25f929183926040519485809481937f40475c1600000000000000000000000000000000000000000000000000000000835260048301611eda565b604060031936011261022357600435611890816102f6565b6118986103ae565b6118a182611f27565b6118bc6fffffffffffffffffffffffffffffffff82166123a6565b3403913483116109e05773ffffffffffffffffffffffffffffffffffffffff1690813b15610223576040517fbe29184f0000000000000000000000000000000000000000000000000000000081523360048201526fffffffffffffffffffffffffffffffff9091166024820152915f91839182908160448101610809565b6119433661136e565b61194f84939294611f27565b60035493848004600114851517156109e057843410611a125773ffffffffffffffffffffffffffffffffffffffff5f8080808985600154165af115611a05575f953403943486116109e0571690813b15610223576040517ff5298aca00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90941660048501526024840152604483019190915290915f918391829081606481016104b2565b63b12d13eb5f526004601cfd5b60046040517f2d8768f9000000000000000000000000000000000000000000000000000000008152fd5b3461022357606060031936011261022357604435602435600435611a5f836102f6565b73ffffffffffffffffffffffffffffffffffffffff805f541633036102cc57831680156108d1577f660e7095066fd91b05cfad0851f3cefa62b4a62de319c3c13ef7db8982e78501936102c7916001604051611aba8161051b565b85815260208101928284525f52600460205260405f2090518155019051151560ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008354169116179055611b41611b0f610578565b85815260016020820152610efd8373ffffffffffffffffffffffffffffffffffffffff165f52600560205260405f2090565b6040519384938491604091949373ffffffffffffffffffffffffffffffffffffffff9160608501968552602085015216910152565b5f604060031936011261022357600435611b8f816102f6565b60243567ffffffffffffffff811161022357611baf903690600401611753565b611bb882611f27565b611bc28151612422565b3403913483116109e05773ffffffffffffffffffffffffffffffffffffffff1690813b15610223575f916104b2916040519485809481937f40475c1600000000000000000000000000000000000000000000000000000000835260048301611eda565b73ffffffffffffffffffffffffffffffffffffffff611c57611c4636611448565b610747859395979497969296611f27565b1691823b15610223576040517f156e29f600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9094166004850152602484019190915260448301525f919082908290818381606481016104b2565b34610223575f60031936011261022357602073ffffffffffffffffffffffffffffffffffffffff60065416604051908152f35b6040513d5f823e3d90fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b919082039182116109e057565b9081518082526020808093019301915f5b828110611d5a575050505090565b835185529381019392810192600101611d4c565b9293919093611d7c84611f27565b611d8682516123a6565b3403933485116109e05773ffffffffffffffffffffffffffffffffffffffff80911692833b1561022357611df291604051977fd81d0a15000000000000000000000000000000000000000000000000000000008952166004880152606060248801526064870190611d3b565b936003198686030160448701528385527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8411610223576020868095935f97829560051b809285830137010301925af180156104d057611e4f5750565b8061082661058592610502565b60405190611e698261051b565b5f6020838281520152565b91611ea79073ffffffffffffffffffffffffffffffffffffffff6110969593168452606060208501526060840190611d3b565b916040818403910152611d3b565b9091611ecc61109693604084526040840190611d3b565b916020818403910152611d3b565b60209060206040818301928281528551809452019301915f5b828110611f01575050505090565b83516fffffffffffffffffffffffffffffffff1685529381019392810192600101611ef3565b602073ffffffffffffffffffffffffffffffffffffffff602481600654169360405194859384927f97cf65af0000000000000000000000000000000000000000000000000000000084521660048301525afa9081156104d0575f91611fb9575b5015611f8f57565b60046040517ffe026803000000000000000000000000000000000000000000000000000000008152fd5b90506020813d602011611fec575b81611fd460209383610537565b810103126102235751611fe681610e4d565b5f611f87565b3d9150611fc7565b908160409103126102235760206040519161200e8361051b565b80518352015161201d81610e4d565b602082015290565b90811560018380041417156109e057565b818102929181159184041417156109e057565b90816020910312610223575190565b604080517f42b4d2fa00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84166004820152909493909190859083908180602481015b03915afa9182156104d0575f92612254575b506020916120d161151484830151151590565b61222b5773ffffffffffffffffffffffffffffffffffffffff916120f59151612036565b85517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015290939190911691908181602481865afa80156104d05784915f9161220e575b501090811561219c575b50612173576105859293506115bc60015473ffffffffffffffffffffffffffffffffffffffff1690565b600484517f2d8768f9000000000000000000000000000000000000000000000000000000008152fd5b85517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201529091508181604481865afa9081156104d05784925f926121f1575b5050105f612149565b6122079250803d106116da576116cb8183610537565b5f806121e8565b6122259150833d85116116da576116cb8183610537565b5f61213f565b600486517fd23f9521000000000000000000000000000000000000000000000000000000008152fd5b61226c919250853d871161174c5761173e8183610537565b905f6120be565b604080517f42b4d2fa00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201529093928490829060249082905afa9081156104d0575f91612331575b506020906122e561151483830151151590565b612308576120f573ffffffffffffffffffffffffffffffffffffffff9151612025565b600485517fd23f9521000000000000000000000000000000000000000000000000000000008152fd5b6123489150843d861161174c5761173e8183610537565b5f6122d2565b604080517f6a3a2c1b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84166004820152909493909190859083908180602481016120ac565b6123b290600254612036565b90813410611a12575f8080808573ffffffffffffffffffffffffffffffffffffffff600154165af115611a0557565b60025490818004600114821517156109e05781803410611a12575f8080809373ffffffffffffffffffffffffffffffffffffffff600154165af115611a0557565b6123b290600354612036565b601c5f60649281946020966040519860605260405260601b602c526f23b872dd000000000000000000000000600c525af13d1560015f5114171615612476575f606052604052565b637939f4245f526004601cfdfea26469706673582212208d6b6bb2eaca209e958908be5d0c33188215508ea5699df4b9997adeffb3a28764736f6c63430008160033";

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
