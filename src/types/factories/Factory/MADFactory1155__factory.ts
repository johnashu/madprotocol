/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  MADFactory1155,
  MADFactory1155Interface,
} from "../../Factory/MADFactory1155";
import type { PromiseOrValue } from "../../common";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketplace",
        type: "address",
      },
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_paymentTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidRoyalty",
    type: "error",
  },
  {
    inputs: [],
    name: "SplitterFail",
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
        name: "newSplitter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCollection",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "royalties",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintPrice",
        type: "uint256",
      },
    ],
    name: "ERC1155BasicCreated",
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
        indexed: true,
        internalType: "address",
        name: "newMarket",
        type: "address",
      },
    ],
    name: "MarketplaceUpdated",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
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
        name: "newRouter",
        type: "address",
      },
    ],
    name: "RouterUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newSigner",
        type: "address",
      },
    ],
    name: "SignerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "shares",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "splitter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "flag",
        type: "uint256",
      },
    ],
    name: "SplitterCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "colInfo",
    outputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "enum Types.ERC1155Type",
        name: "colType",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "colSalt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "blocknumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "splitter",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_tokenType",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_tokenSalt",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
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
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "address",
        name: "_splitter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_royalty",
        type: "uint256",
      },
    ],
    name: "createCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "creatorAuth",
    outputs: [
      {
        internalType: "bool",
        name: "stdout",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_colID",
        type: "bytes32",
      },
    ],
    name: "creatorCheck",
    outputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "check",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20",
    outputs: [
      {
        internalType: "contract ERC20",
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
        name: "_colAddress",
        type: "address",
      },
    ],
    name: "getColID",
    outputs: [
      {
        internalType: "bytes32",
        name: "colID",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_salt",
        type: "string",
      },
    ],
    name: "getDeployedAddr",
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
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getIDsLength",
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
    name: "market",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "router",
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
        internalType: "address",
        name: "_market",
        type: "address",
      },
    ],
    name: "setMarket",
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
        name: "_router",
        type: "address",
      },
    ],
    name: "setRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "setSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "signer",
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
        internalType: "string",
        name: "_splitterSalt",
        type: "string",
      },
      {
        internalType: "address",
        name: "_ambassador",
        type: "address",
      },
      {
        internalType: "address",
        name: "_project",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ambShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_projectShare",
        type: "uint256",
      },
    ],
    name: "splitterCheck",
    outputs: [],
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
    ],
    name: "splitterInfo",
    outputs: [
      {
        internalType: "address",
        name: "splitter",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "splitterSalt",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "ambassador",
        type: "address",
      },
      {
        internalType: "address",
        name: "project",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ambShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "projectShare",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_colID",
        type: "bytes32",
      },
    ],
    name: "typeChecker",
    outputs: [
      {
        internalType: "uint8",
        name: "pointer",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userTokens",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0346200026857601f6200227838819003918201601f191683019291906001600160401b038411838510176200026d5781606092849260409687528339810103126200026857620000518162000283565b6200006c83620000646020850162000283565b930162000283565b9033156200023457600091825485519033857f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768180a36001600160a81b0319163360ff60a01b191617845560018055306080526001600160a01b03928084169182151590818062000228575b15620001f85750620000ea9062000298565b6006557f210690abd7fd6cdbb8f2beb202b2a253d58d7a0813b2175c4172c14c0c1af6dc8480a2818416936200012285151562000298565b6007558451937f5553331329228fbd4123164423717a4a7539f6dfa1c3279a923b98fd681a6c738480a216918215801562000170575b8451611fa09081620002d8823960805181611eea0152f35b620001b65750600280546001600160a01b031916831790557fbd4032c1c91da2791730ea1bbc82c6b6f857da7c0a8318143d19ef74e62cd9139080a23880808062000158565b62461bcd60e51b815260206004820152601560248201527f496e76616c696420746f6b656e206164647265737300000000000000000000006044820152606490fd5b62461bcd60e51b815260206004820152600b60248201526a5a65726f4164647265737360a81b6044820152606490fd5b508588161515620000d8565b835162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200026857565b15620002a057565b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fdfe6080604052600436101561001257600080fd5b60003560e01c806306fdde031461019757806313af403514610192578063238ac9331461018d5780633f4ba83a146101885780635c975abb14610183578063617d1d3b1461017e5780636c19e783146101795780636dcea85f1461017457806376de0f3d1461016f578063785e9e861461016a57806380f55605146101655780638456cb59146101605780638691fe461461015b5780638da5cb5b1461015657806395cd5193146101515780639750f2e01461014c578063b64bd5eb14610147578063b7762c6d14610142578063bc8b58381461013d578063c0d7865514610138578063d93cb8fd14610133578063f887ea401461012e578063f9f411d8146101295763fa2405171461012457600080fd5b610e15565b610db8565b610d61565b610d2d565b610cbf565b610b75565b6109bb565b610958565b6108b4565b61080d565b6106e4565b6106a7565b610631565b610608565b6105df565b6104ed565b610457565b6103e9565b6103b4565b61038e565b6102ef565b6102c6565b610228565b6101dc565b919082519283825260005b8481106101c8575050826000602080949584010152601f8019910116010190565b6020818301810151848301820152016101a7565b3461020357600036600319011261020357602080526707666163746f727960475260606020f35b600080fd5b6001600160a01b0381160361020357565b60e4359061022682610208565b565b346102035760203660031901126102035760043561024581610208565b60018060a01b039060009161025e818454163314611e6f565b8116908115610291578255337f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768380a380f35b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b34610203576000366003190112610203576007546040516001600160a01b039091168152602090f35b346102035760008060031936011261038b578054610317336001600160a01b03831614611e6f565b60ff8160a01c161561035b5760ff60a01b191681556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa90602090a180f35b60405162461bcd60e51b8152602060048201526008602482015267155394105554d15160c21b6044820152606490fd5b80fd5b3461020357600036600319011261020357602060ff60005460a01c166040519015158152f35b346102035760203660031901126102035760206004356103d381610208565b604051906001600160601b03199060601b168152f35b346102035760203660031901126102035760043561040681610208565b6000546001600160a01b039061041f9082163314611e6f565b81169061042d821515611eaa565b6007557f5553331329228fbd4123164423717a4a7539f6dfa1c3279a923b98fd681a6c73600080a2005b346102035760203660031901126102035760043561047481610208565b6000546001600160a01b039061048d9082163314611e6f565b81169061049b821515611eaa565b6006557f210690abd7fd6cdbb8f2beb202b2a253d58d7a0813b2175c4172c14c0c1af6dc600080a2005b6040906003190112610203576004356104dd81610208565b906024356104ea81610208565b90565b34610203576104fb366104c5565b60009160065433036105cd5782604080516003602082015284828201522054156105c5575b156105c0575b6001600160601b03199060601b166105596105538360018060a01b03166000526003602052604060002090565b54611dae565b519160005b838110610576576040518515158152602090f35b0390f35b6105a861059e826105998560018060a01b03166000526003602052604060002090565b610d8a565b90549060031b1c90565b83146105b7575b60010161055e565b600194506105af565b610526565b506000610520565b6001630995110d60e31b038352600483fd5b34610203576000366003190112610203576002546040516001600160a01b039091168152602090f35b34610203576000366003190112610203576006546040516001600160a01b039091168152602090f35b346102035760008060031936011261038b578054610659336001600160a01b03831614611e6f565b61066960ff8260a01c161561108d565b60ff60a01b1916600160a01b1781556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602090a180f35b34610203576020366003190112610203576004356106c481610208565b60018060a01b031660005260036020526020604060002054604051908152f35b34610203576000366003190112610203576000546040516001600160a01b039091168152602090f35b6004359060ff8216820361020357565b634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761074f57604052565b61071d565b90601f8019910116810190811067ffffffffffffffff82111761074f57604052565b6040519060a0820182811067ffffffffffffffff82111761074f57604052565b6040519060e0820182811067ffffffffffffffff82111761074f57604052565b81601f820112156102035780359067ffffffffffffffff821161074f57604051926107eb601f8401601f191660200185610754565b8284526020838301011161020357816000926020809301838601378301015290565b34610203576101203660031901126102035761082761070d565b67ffffffffffffffff90602435828111610203576108499036906004016107b6565b604435838111610203576108619036906004016107b6565b916064358481116102035761087a9036906004016107b6565b9160c435948511610203576108966108b29536906004016107b6565b9161089f610219565b93610104359560a4359360843593610ecd565b005b346102035760e06108f06108c7366104c5565b6001600160a01b0391821660009081526004602090815260408083209385168352929052209091565b908082541691600181015491806002830154169060038301541660048301549160ff600660058601549501541694604051968752602087015260408601526060850152608084015260a0830152151560c0820152f35b60209060031901126102035760043590565b346102035761096636610946565b600090610971611de0565b8152600860205260408120546001600160a01b0316903282146109b3575b156109a557604090815190815260016020820152f35b634ca888676000526004601cfd5b50600161098f565b346102035760a03660031901126102035760043567ffffffffffffffff8111610203576109ec9036906004016107b6565b6024356109f881610208565b60443590610a0582610208565b6064359160843590610a1a6001805414610e94565b6002600155610a27611ee8565b610a3960ff60005460a01c161561108d565b6001600160a01b03838116158080610b6b575b15610a6957505050505050610a6090611936565b6108b260018055565b8015918280610b61575b80610b58575b80610b4e575b15610a97575050505050610a9292611830565b610a60565b83959396949616151580918192610b46575b5080610b3d575b80610b33575b15610ac85750505050610a929261172b565b92939281610b2b575b5080610b22575b80610b18575b80610b0f575b80610b05575b15610af857610a9294611551565b62adecf06000526004601cfd5b5060478410610aea565b50831515610ae4565b5060158310610ade565b50821515610ad8565b905038610ad1565b50605b8610610ab6565b50851515610ab0565b905038610aa9565b5060158710610a7f565b50861515610a79565b5080841615610a73565b5081831615610a4c565b346102035760203660031901126102035760043567ffffffffffffffff811161020357610ca5610bac6105729236906004016107b6565b60208151910120604051610bbf81610733565b601081526f67363d3d37363d34f03d5260086018f360801b6020918201526040516001600160f81b03199181019182526bffffffffffffffffffffffff193060601b16602182015260358101929092527f21c35dbe1b344a2488cf3321d6ce542f8e9f305544ff09e4993a62319a497c1f6055808401919091528252601f1991610c5e9190610c4f607582610754565b5190206001600160a01b031690565b6040516135a560f21b6020820190815260609290921b6bffffffffffffffffffffffff19166022820152600160f81b6036820152603792830181529091610c4f9082610754565b6040516001600160a01b0390911681529081906020820190565b3461020357602036600319011261020357600435610cdc81610208565b6000546001600160a01b0390610cf59082163314611e6f565b811690610d03821515611eaa565b6005557f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc80600080a2005b3461020357610d3b36610946565b610d43611de0565b6000526008602052602060406000205460a01c60ff60405191168152f35b34610203576000366003190112610203576005546040516001600160a01b039091168152602090f35b8054821015610da25760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b3461020357604036600319011261020357600435610dd581610208565b6001600160a01b031660009081526003602052604090208054602435919082101561020357602091610e0691610d8a565b90549060031b1c604051908152f35b3461020357610e2336610946565b600052600860205260406000208054600360ff8260a01c1692600181015460028201549160018060a01b0393849101541692604051941684526004851015610e7e5760a0946020850152604084015260608301526080820152f35b634e487b7160e01b600052602160045260246000fd5b15610e9b57565b60405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606490fd5b96809893959196610f0c8287959a610ee86001805414610e94565b6002600155610ef5611ee8565b610f0760ff60005460a01c161561108d565b611e20565b610f1585611e00565b6005546001600160a01b0316600254909890610f55906001600160a01b03168760409b8c968888519c8d9889986355d253b560e01b8a5260048a016110de565b038173__$fcf875cc5906322e911192ca0ce957b541$__5af4928315611088577fb43c8475aa9c4cf4da7fc44af5e7f20a6c524658de0c04167eb16162eecc1b2296600095869561104e575b5061102761104295966110228c6110126001600160601b03198b60601b1691610fe583610fe03260018060a01b03166000526003602052604060002090565b611148565b610fed610776565b3281529460016020870152858801524360608601526001600160a01b03166080850152565b6000526008602052604060002090565b611182565b516001600160a01b0395861699909516979495869586611212565b0390a361022660018055565b6110279650611042955061107790823d8411611081575b61106f8183610754565b8101906110c2565b9690969550610fa1565b503d611065565b61113c565b1561109457565b60405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606490fd5b919082604091031261020357602082519201516104ea81610208565b96929897939060e09695926110fe61110c92610100808c528b019061019c565b9089820360208b015261019c565b604088019990995260608701526001600160a01b03908116608087015292831660a086015260c085015216910152565b6040513d6000823e3d90fd5b80546801000000000000000081101561074f5761116a91600182018155610d8a565b819291549060031b91821b91600019901b1916179055565b815181546001600160a01b0319166001600160a01b039190911617815560208201516004811015610e7e57815460ff60a01b191660a09190911b60ff60a01b1617815560408201516001820155606082015160028201556080919091015161022691906003906001600160a01b0316910180546001600160a01b0319166001600160a01b03909216919091179055565b9161123d9061122f6080959897969360a0865260a086019061019c565b90848203602086015261019c565b95604083015260608201520152565b9190826040910312610203576020825161126581610208565b92015190565b919061127f9060608452606084019061019c565b916020928181038483015283808451928381520193019060005b8181106112dc57505050604081830391015281808451928381520193019160005b8281106112c8575050505090565b8351855293810193928101926001016112ba565b82516001600160a01b031685529385019391850191600101611299565b91909392936080830160808452815180915260a084019060208093019060005b81811061137b575050508381038285015281808451928381520193019160005b82811061135e575050506001600160a01b039094166040830152925060039060600152565b83516001600160a01b031685529381019392810192600101611339565b825184529284019291840191600101611319565b91909392936080830160808452815180915260a084019060208093019060005b818110611411575050508381038285015281808451928381520193019160005b8281106113f4575050506001600160a01b039094166040830152925060029060600152565b83516001600160a01b0316855293810193928101926001016113cf565b8251845292840192918401916001016113af565b91909392936080830160808452815180915260a084019060208093019060005b8181106114a7575050508381038285015281808451928381520193019160005b82811061148a575050506001600160a01b039094166040830152925060019060600152565b83516001600160a01b031685529381019392810192600101611465565b825184529284019291840191600101611445565b91909392936080830160808452815180915260a084019060208093019060005b81811061153d575050508381038285015281808451928381520193019160005b828110611520575050506001600160a01b039094166040830152925060009060600152565b83516001600160a01b0316855293810193928101926001016114fb565b8251845292840192918401916001016114db565b9190929361155f8285611b0a565b918161156c849388611cac565b96879560409485916115918351998a938493636ec6cf1560e01b85526004850161126b565b038173__$e0b3dea100c37e1c0d530933159e390817$__5af492831561108857600080516020611f4b8339815191529760009788956116de575b50916116176116cd94926116076116d99897956115e6610796565b6001600160a01b038d1681529660208801526001600160a01b031688870152565b6001600160a01b03166060850152565b608083015260a0820152600160c08201525b3260009081526004602090815260408083206001600160a01b038a1684529091529020815181546001600160a01b03199081166001600160a01b03928316178355602084015160018401556040840151600284018054918416918316919091179055606084015160038401805491909316911617905560c0906006906080840151600482015560a0840151600582015501910151151560ff80198354169116179055565b519283923296846112f9565b0390a2565b61160798508695506116cd9492611713611617926116d9999694963d8a11611724575b61170b8183610754565b81019061124c565b909a509697509294509092906115cb565b503d611701565b61173482611a4f565b8061173e85611beb565b948593604092839161176383519788938493636ec6cf1560e01b85526004850161126b565b038173__$e0b3dea100c37e1c0d530933159e390817$__5af490811561108857600080516020611f4b8339815191529560009586936117ff575b50916117f3916117db6116d995946117b3610796565b6001600160a01b038a1681529360208501526000868501526001600160a01b03166060840152565b6000608083015260a0820152600160c0820152611629565b5192839232968461138f565b6117db9650849350916118246117f3936116d9963d87116117245761170b8183610754565b9097509394509161179d565b61183982611ad6565b8061184385611c77565b948593604092839161186883519788938493636ec6cf1560e01b85526004850161126b565b038173__$e0b3dea100c37e1c0d530933159e390817$__5af490811561108857600080516020611f4b833981519152956000958693611905575b50916118f9916118d96116d995946118b8610796565b6001600160a01b038a1681529360208501526001600160a01b031685840152565b600060608301526080820152600060a082015261162960c0820160019052565b51928392329684611425565b6118d996508493509161192a6118f9936116d9963d87116117245761170b8183610754565b909750939450916118a2565b611950604051906001825232602083015260408201604052565b809161196d60405190600182526064602083015260408201604052565b928391604093849161199283519586938493636ec6cf1560e01b85526004850161126b565b038173__$e0b3dea100c37e1c0d530933159e390817$__5af492831561108857600080516020611f4b833981519152936000938491611a23575b5090611a176116d9926119dd610796565b6001600160a01b03871681529060208201526000838201526000606082015260006080820152600060a082015261162960c0820160019052565b519283923296846114bb565b611a179450829150611a44906116d9933d84116117245761170b8183610754565b9490949192506119cc565b9060609180158060011680600114611aba5715611a6a575050565b80600114611a985715611a7a5750565b91506040519160028352602083015232604083015260608201604052565b5050905060405190600282526000602083015232604083015260608201604052565b5050509050604051906001825232602083015260408201604052565b90606091600181151680600114611aef5715611a7a5750565b50509050604051906001825232602083015260408201604052565b606092918115811581811660018114611bc65715611b29575b50505050565b80600114611b9f5715611b3d575b80611b23565b80600114611b7a5715611b51575b80611b37565b909250604051926003845260208401526040830152326060830152608082016040523880611b4b565b5092505060405191600283526020830152326040830152606082016040523880611b4b565b50505091506040519160028352602083015232604083015260608201604052388080611b37565b5050505050905060405190600182523260208301526040820160405238808080611b23565b9060609180158060011680600114611c5a5715611c06575050565b80600114611c375715611c165750565b91506040519160028352806020840152606403604083015260608201604052565b505090506040519060028252600060208301526064604083015260608201604052565b505050905060405190600182526064602083015260408201604052565b90606091600181151680600114611c905715611c165750565b5050905060405190600182526064602083015260408201604052565b606092918115811581811660018114611d705715611cca5750505050565b80600114611d465715611cdd5780611b23565b80600114611d1e5715611cf05780611b37565b9092506040519260038452806020850152816040850152016064036060830152608082016040523880611b4b565b5092505060405191600283528060208401526064036040830152606082016040523880611b4b565b50505091506040519160028352806020840152606403604083015260608201604052388080611b37565b505050505090506040519060018252606460208301526040820160405238808080611b23565b67ffffffffffffffff811161074f5760051b60200190565b90611db882611d96565b611dc56040519182610754565b8281528092611dd6601f1991611d96565b0190602036910137565b6005543303611deb57565b6001630995110d60e31b036000908152600490fd5b6103e8601982061515911117611e1257565b63e0e54ced6000526004601cfd5b906006611e4e60ff9232600052600460205260406000209060018060a01b0316600052602052604060002090565b01541615906001141517611e5e57565b634ca8886760e01b60005260046000fd5b15611e7657565b60405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606490fd5b15611eb157565b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163003611f1a57565b60405162461bcd60e51b815260206004820152600860248201526710905117d0d0531360c21b6044820152606490fdfec3e98be3c2ca9aa1dd4c2412a92784c1fbec2743569dcf90660acad411161f7fa26469706673582212208fb9360664f34538715528d6b122645b14bbbaa1d2b4736362af940622cb4e4c64736f6c63430008130033";

type MADFactory1155ConstructorParams =
  | [linkLibraryAddresses: MADFactory1155LibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MADFactory1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class MADFactory1155__factory extends ContractFactory {
  constructor(...args: MADFactory1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        MADFactory1155__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: MADFactory1155LibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$fcf875cc5906322e911192ca0ce957b541\\$__", "g"),
      linkLibraryAddresses[
        "contracts/lib/deployers/ERC1155Deployer.sol:ERC1155BasicDeployer"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$e0b3dea100c37e1c0d530933159e390817\\$__", "g"),
      linkLibraryAddresses[
        "contracts/lib/deployers/SplitterDeployer.sol:SplitterDeployer"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    _marketplace: PromiseOrValue<string>,
    _signer: PromiseOrValue<string>,
    _paymentTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MADFactory1155> {
    return super.deploy(
      _marketplace,
      _signer,
      _paymentTokenAddress,
      overrides || {}
    ) as Promise<MADFactory1155>;
  }
  override getDeployTransaction(
    _marketplace: PromiseOrValue<string>,
    _signer: PromiseOrValue<string>,
    _paymentTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _marketplace,
      _signer,
      _paymentTokenAddress,
      overrides || {}
    );
  }
  override attach(address: string): MADFactory1155 {
    return super.attach(address) as MADFactory1155;
  }
  override connect(signer: Signer): MADFactory1155__factory {
    return super.connect(signer) as MADFactory1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MADFactory1155Interface {
    return new utils.Interface(_abi) as MADFactory1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MADFactory1155 {
    return new Contract(address, _abi, signerOrProvider) as MADFactory1155;
  }
}

export interface MADFactory1155LibraryAddresses {
  ["contracts/lib/deployers/ERC1155Deployer.sol:ERC1155BasicDeployer"]: string;
  ["contracts/lib/deployers/SplitterDeployer.sol:SplitterDeployer"]: string;
}