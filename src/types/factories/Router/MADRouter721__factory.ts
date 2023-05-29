/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  MADRouter721,
  MADRouter721Interface,
} from "../../Router/MADRouter721";
import type { PromiseOrValue } from "../../common";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

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
        name: "_paymentTokenAddress",
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
    name: "NotOwnerNorApproved",
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
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
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
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
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
    name: "FreeClaimState",
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
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
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
    name: "WhitelistMintState",
    type: "event",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
    ],
    name: "basicMintTo",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "bytes4",
        name: "sigHash",
        type: "bytes4",
      },
    ],
    name: "feeLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
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
    inputs: [],
    name: "maxFeeBurn",
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
    name: "maxFeeMint",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "setBase",
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
    ],
    name: "setBaseLock",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "setMintState",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_erc20",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x346200008357620014bb388190036080601f8201601f19168101906001600160401b03821190821017620000885760609282916040526080391262000083576200007360805162000050816200009e565b60a0516200005e816200009e565b60c051916200006d836200009e565b620000b0565b6040516112389081620002838239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116036200008357565b91903315620001655760018060a01b031992600091338584541617835533837f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768180a36703782dace9d900006002556001600160a01b0316801562000153577fbd4032c1c91da2791730ea1bbc82c6b6f857da7c0a8318143d19ef74e62cd9136200014b93826200015197600154161760015580a2620001d6565b62000233565b565b60405163d92e233d60e01b8152600490fd5b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b15620001a257565b60405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606490fd5b6000546001600160a01b039190620001f290831633146200019a565b8015620002255780600555167f24cd1310c8883cbeaf5b805ab13586ce018b79c022827158ff3e8df14d344936600080a2565b63d92e233d6000526004601cfd5b6000546001600160a01b0391906200024f90831633146200019a565b8015620002255780600455167f566f16f5ede69bb6f837d5da3a6cf41c863ba95621d677ff3c931aa687da6466600080a256fe6080604052600436101561001257600080fd5b60003560e01c806306e2d9b21461015757806306fdde0314610152578063089f8b1b1461014d5780630b78f9c01461014857806313af4035146101435780633bbed4a01461013e5780634328bd0014610139578063583fef3414610134578063586ba7821461012f5780635bb478081461012a57806366d003ac14610125578063785e9e86146101205780638da5cb5b1461011b578063c5cd1d3c14610116578063c99aa4e514610111578063e427affe1461010c578063edc9e7a414610107578063f12bd09e14610102578063f940e385146100fd5763fde3704e146100f857600080fd5b610d32565b610a88565b6109ee565b61092e565b61090b565b6108e8565b61084d565b610819565b6107e5565b6107b1565b61073c565b61071e565b610700565b610658565b61054d565b610478565b6103db565b6102f9565b6102c9565b6101bb565b73ffffffffffffffffffffffffffffffffffffffff81160361017a57565b600080fd5b604435906fffffffffffffffffffffffffffffffff8216820361017a57565b35906fffffffffffffffffffffffffffffffff8216820361017a57565b606060031936011261017a576004356101d38161015c565b6024356101df8161015c565b6101e761017f565b916101fe60ff6101f683610fb9565b9050166111cf565b73ffffffffffffffffffffffffffffffffffffffff809116803b1561017a576000926064916fffffffffffffffffffffffffffffffff60405196879586947f7e5a614e00000000000000000000000000000000000000000000000000000000865216600485015216602483015233604483015234905af180156102965761028157005b8061028e610294926105fe565b8061029b565b005b610d66565b600091031261017a57565b60005b8381106102b95750506000910152565b81810151838201526020016102a9565b3461017a57600060031936011261017a57602080526606726f7574657260465260606020f35b8015150361017a57565b3461017a57604060031936011261017a576004356103168161015c565b60ff60243591610325836102ef565b73ffffffffffffffffffffffffffffffffffffffff61034382610fb9565b90931691610350836111cf565b1691823b1561017a5760405180947f879fbedf0000000000000000000000000000000000000000000000000000000082521515938460048301528160246000978880945af18015610296576103c8575b507f0c2bd698c33cf5bea165c8a607bdd7c7d806b8b10284bfcd5b6899674b5a486d8480a480f35b8061028e6103d5926105fe565b386103a0565b3461017a57604060031936011261017a5760043560243561041573ffffffffffffffffffffffffffffffffffffffff60005416331461116a565b6706f05b59d3b2000081116722b1c8c1227a000083111761046a577f5c6323bf1c2d7aaea2c091a4751c1c87af7f2864650c336507a77d0557af37a191816040926003558160025582519182526020820152a1005b632d8768f96000526004601cfd5b3461017a57602060031936011261017a576004356104958161015c565b73ffffffffffffffffffffffffffffffffffffffff906000916104bc81845416331461116a565b81169081156104ef578255337f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768380a380f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c6964206f776e6572000000000000000000000000000000000000006044820152fd5b3461017a57602060031936011261017a5760043561056a8161015c565b73ffffffffffffffffffffffffffffffffffffffff60009161059082845416331461116a565b80156105c25780600455167f566f16f5ede69bb6f837d5da3a6cf41c863ba95621d677ff3c931aa687da64668280a280f35b63d92e233d83526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161061257604052565b6105cf565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761061257604052565b3461017a57604060031936011261017a576004356106758161015c565b6024359067ffffffffffffffff9081831161017a573660238401121561017a57826004013591821161061257604051916106d760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160184610617565b808352366024828601011161017a57602081600092602461029497018387013784010152610d92565b3461017a57600060031936011261017a576020600354604051908152f35b3461017a57600060031936011261017a576020600254604051908152f35b3461017a57602060031936011261017a576004356107598161015c565b73ffffffffffffffffffffffffffffffffffffffff60009161077f82845416331461116a565b80156105c25780600555167f24cd1310c8883cbeaf5b805ab13586ce018b79c022827158ff3e8df14d3449368280a280f35b3461017a57600060031936011261017a57602073ffffffffffffffffffffffffffffffffffffffff60045416604051908152f35b3461017a57600060031936011261017a57602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b3461017a57600060031936011261017a57602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b3461017a57600060206003193601126108e5578073ffffffffffffffffffffffffffffffffffffffff6004356108828161015c565b61089060ff6101f683610fb9565b16803b156108e25781906004604051809481937f66c879a90000000000000000000000000000000000000000000000000000000083525af18015610296576108d6575080f35b6108df906105fe565b80f35b50fd5b80fd5b3461017a57600060031936011261017a5760206040516722b1c8c1227a00008152f35b3461017a57600060031936011261017a5760206040516706f05b59d3b200008152f35b3461017a57602060031936011261017a576004357fffffffff000000000000000000000000000000000000000000000000000000008116810361017a576000907f44df8e70000000000000000000000000000000000000000000000000000000008114907f40d097c300000000000000000000000000000000000000000000000000000000146109e1576109d5576109d1905b6040519081529081906020820190565b0390f35b506109d16003546109c1565b50506109d16002546109c1565b604060031936011261017a57600435610a068161015c565b60243567ffffffffffffffff80821161017a573660238301121561017a578160040135908111610612578060051b9160405192602092610a4884830186610617565b84526024838501918301019136831161017a57602401905b828210610a71576102948587610e94565b838091610a7d8461019e565b815201910190610a60565b3461017a57604060031936011261017a5760ff60048035610aa88161015c565b60243591610ab58361015c565b610abe82610fb9565b90941692610acb846111cf565b73ffffffffffffffffffffffffffffffffffffffff8091169283151580610c9b575b15610bc05716610b11825473ffffffffffffffffffffffffffffffffffffffff1690565b90803b1561017a57604080517f9456fbcc00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff95861694810194855294909216602084015260009284928391859183910103925af1801561029657610bad575b505b33917ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a1600080a4005b8061028e610bba926105fe565b38610b82565b91925090803115610c72571690610beb815473ffffffffffffffffffffffffffffffffffffffff1690565b823b1561017a57610c4a92600092836040518096819582947f51cff8d9000000000000000000000000000000000000000000000000000000008452830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b03925af1801561029657610c5f575b50610b84565b8061028e610c6c926105fe565b38610c59565b826040517f43f9e110000000000000000000000000000000000000000000000000000000008152fd5b506040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82168482019081526020908290819083010381885afa90811561029657600091610d04575b501515610aed565b610d25915060203d8111610d2b575b610d1d8183610617565b810190610f69565b38610cfc565b503d610d13565b3461017a57600060031936011261017a57602073ffffffffffffffffffffffffffffffffffffffff60055416604051908152f35b6040513d6000823e3d90fd5b610d8a906020604051928284809451938492016102a6565b810103902090565b9073ffffffffffffffffffffffffffffffffffffffff60ff92610dbf610db782610fb9565b9095166111cf565b1690813b1561017a57600060405180937f55f804b30000000000000000000000000000000000000000000000000000000082526020600483015281836044827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8951806024850152610e3a818c602088880191016102a6565b011681010301925af191821561029657610e5992610e81575b50610d72565b907f43644489da8fbb6bf513e3cbb8aefbc47ed49a5d8159243b448b2444e1d38b9e600080a3565b8061028e610e8e926105fe565b38610e53565b73ffffffffffffffffffffffffffffffffffffffff90610eb860ff6101f683610fb9565b16803b1561017a5760405180927f1498ba570000000000000000000000000000000000000000000000000000000082526044820190604060048401528051809252606483019160208092019160005b828110610f405750505050918180600094336024830152039134905af1801561029657610f315750565b8061028e610f3e926105fe565b565b83516fffffffffffffffffffffffffffffffff1685528795509381019392810192600101610f07565b9081602091031261017a575190565b919082604091031261017a5760208251610f918161015c565b920151610f9d816102ef565b90565b9081602091031261017a575160ff8116810361017a5790565b9061104c610ff8610fdf60055473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b604080517f617d1d3b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90951660048601526020928390869081906024820190565b0381855afa9485156102965760009561114b575b5080517fb64bd5eb000000000000000000000000000000000000000000000000000000008152600481018690529185908284602481845afa928315610296576110e294869461111f575b505180809581947fd93cb8fd000000000000000000000000000000000000000000000000000000008352600483019190602083019252565b03915afa918215610296576000926110f957505090565b610f9d9250803d10611118575b6111108183610617565b810190610fa0565b503d611106565b61113e90823d8411611144575b6111368183610617565b810190610f78565b506110aa565b503d61112c565b611163919550833d8511610d2b57610d1d8183610617565b9338611060565b1561117157565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a454400000000000000000000000000000000000000006044820152fd5b6001036111d857565b60046040517fb9688461000000000000000000000000000000000000000000000000000000008152fdfea26469706673582212200f9aea9a11ec00d0a36b28f26cb2bbbfae2b355953dc910bdb363ae0271a01b064736f6c63430008130033";

type MADRouter721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MADRouter721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MADRouter721__factory extends ContractFactory {
  constructor(...args: MADRouter721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: PromiseOrValue<string>,
    _paymentTokenAddress: PromiseOrValue<string>,
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MADRouter721> {
    return super.deploy(
      _factory,
      _paymentTokenAddress,
      _recipient,
      overrides || {}
    ) as Promise<MADRouter721>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    _paymentTokenAddress: PromiseOrValue<string>,
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _paymentTokenAddress,
      _recipient,
      overrides || {}
    );
  }
  override attach(address: string): MADRouter721 {
    return super.attach(address) as MADRouter721;
  }
  override connect(signer: Signer): MADRouter721__factory {
    return super.connect(signer) as MADRouter721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MADRouter721Interface {
    return new utils.Interface(_abi) as MADRouter721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MADRouter721 {
    return new Contract(address, _abi, signerOrProvider) as MADRouter721;
  }
}
