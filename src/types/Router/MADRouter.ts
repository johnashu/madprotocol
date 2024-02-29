/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace FeeHandler {
  export type FeeStruct = { feeAmount: BigNumberish; isValid: boolean };

  export type FeeStructOutput = [feeAmount: bigint, isValid: boolean] & {
    feeAmount: bigint;
    isValid: boolean;
  };
}

export interface MADRouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "batchBurn(address,address,uint128[],uint128[],address)"
      | "batchBurn(address,address,uint128[],uint128[])"
      | "burn(address,uint128[],address[],uint128[])"
      | "burn(address,uint128[],address[],uint128[],address)"
      | "burn(address,uint128[],address)"
      | "burn(address,uint128[])"
      | "feeBurn"
      | "feeBurnErc20"
      | "feeMint"
      | "feeMintErc20"
      | "invalidateFee"
      | "madFactory"
      | "mint(address,address,uint128,uint128,address)"
      | "mint(address,address,uint128,uint128)"
      | "mint(address,uint128,address)"
      | "mint(address,uint128)"
      | "mintBatchTo(address,address,uint128[],uint128[],address)"
      | "mintBatchTo(address,address,uint128[],uint128[])"
      | "mintTo(address,address,uint128,uint128,address)"
      | "mintTo(address,address,uint128,uint128)"
      | "mintTo(address,address,uint128,address)"
      | "mintTo(address,address,uint128)"
      | "name"
      | "owner"
      | "recipient"
      | "setFactory"
      | "setFees(uint256,uint256)"
      | "setFees(uint256,uint256,address)"
      | "setOwner"
      | "setRecipient"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BaseURISet"
      | "FactoryUpdated"
      | "FeesUpdated(uint256,uint256)"
      | "FeesUpdated(uint256,uint256,address)"
      | "OwnerUpdated"
      | "PaymentTokenUpdated"
      | "PublicMintState"
      | "RecipientUpdated"
      | "TokenFundsWithdrawn"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "batchBurn(address,address,uint128[],uint128[],address)",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "batchBurn(address,address,uint128[],uint128[])",
    values: [AddressLike, AddressLike, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burn(address,uint128[],address[],uint128[])",
    values: [AddressLike, BigNumberish[], AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burn(address,uint128[],address[],uint128[],address)",
    values: [
      AddressLike,
      BigNumberish[],
      AddressLike[],
      BigNumberish[],
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "burn(address,uint128[],address)",
    values: [AddressLike, BigNumberish[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "burn(address,uint128[])",
    values: [AddressLike, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "feeBurn", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeBurnErc20",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "feeMint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeMintErc20",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "invalidateFee",
    values: [AddressLike, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "madFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint(address,address,uint128,uint128,address)",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mint(address,address,uint128,uint128)",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint(address,uint128,address)",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mint(address,uint128)",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintBatchTo(address,address,uint128[],uint128[],address)",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mintBatchTo(address,address,uint128[],uint128[])",
    values: [AddressLike, AddressLike, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "mintTo(address,address,uint128,uint128,address)",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mintTo(address,address,uint128,uint128)",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintTo(address,address,uint128,address)",
    values: [AddressLike, AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mintTo(address,address,uint128)",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFactory",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFees(uint256,uint256)",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFees(uint256,uint256,address)",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecipient",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchBurn(address,address,uint128[],uint128[],address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchBurn(address,address,uint128[],uint128[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burn(address,uint128[],address[],uint128[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burn(address,uint128[],address[],uint128[],address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burn(address,uint128[],address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burn(address,uint128[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeBurn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeBurnErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeMintErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "invalidateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "madFactory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mint(address,address,uint128,uint128,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mint(address,address,uint128,uint128)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mint(address,uint128,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mint(address,uint128)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintBatchTo(address,address,uint128[],uint128[],address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintBatchTo(address,address,uint128[],uint128[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintTo(address,address,uint128,uint128,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintTo(address,address,uint128,uint128)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintTo(address,address,uint128,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintTo(address,address,uint128)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFactory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFees(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFees(uint256,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRecipient",
    data: BytesLike
  ): Result;
}

export namespace BaseURISetEvent {
  export type InputTuple = [_id: AddressLike, _baseURI: string];
  export type OutputTuple = [_id: string, _baseURI: string];
  export interface OutputObject {
    _id: string;
    _baseURI: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FactoryUpdatedEvent {
  export type InputTuple = [newFactory: AddressLike];
  export type OutputTuple = [newFactory: string];
  export interface OutputObject {
    newFactory: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesUpdated_uint256_uint256_Event {
  export type InputTuple = [feeVal2: BigNumberish, feeVal3: BigNumberish];
  export type OutputTuple = [feeVal2: bigint, feeVal3: bigint];
  export interface OutputObject {
    feeVal2: bigint;
    feeVal3: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesUpdated_uint256_uint256_address_Event {
  export type InputTuple = [
    feeVal2: BigNumberish,
    feeVal3: BigNumberish,
    erc20Token: AddressLike
  ];
  export type OutputTuple = [
    feeVal2: bigint,
    feeVal3: bigint,
    erc20Token: string
  ];
  export interface OutputObject {
    feeVal2: bigint;
    feeVal3: bigint;
    erc20Token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnerUpdatedEvent {
  export type InputTuple = [user: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [user: string, newOwner: string];
  export interface OutputObject {
    user: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PaymentTokenUpdatedEvent {
  export type InputTuple = [newPaymentToken: AddressLike];
  export type OutputTuple = [newPaymentToken: string];
  export interface OutputObject {
    newPaymentToken: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PublicMintStateEvent {
  export type InputTuple = [
    _id: AddressLike,
    _type: BigNumberish,
    _state: boolean
  ];
  export type OutputTuple = [_id: string, _type: bigint, _state: boolean];
  export interface OutputObject {
    _id: string;
    _type: bigint;
    _state: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RecipientUpdatedEvent {
  export type InputTuple = [newRecipient: AddressLike];
  export type OutputTuple = [newRecipient: string];
  export interface OutputObject {
    newRecipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenFundsWithdrawnEvent {
  export type InputTuple = [
    _id: AddressLike,
    _type: BigNumberish,
    _payee: AddressLike
  ];
  export type OutputTuple = [_id: string, _type: bigint, _payee: string];
  export interface OutputObject {
    _id: string;
    _type: bigint;
    _payee: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MADRouter extends BaseContract {
  connect(runner?: ContractRunner | null): MADRouter;
  waitForDeployment(): Promise<this>;

  interface: MADRouterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  "batchBurn(address,address,uint128[],uint128[],address)": TypedContractMethod<
    [
      collection: AddressLike,
      _from: AddressLike,
      _ids: BigNumberish[],
      _balances: BigNumberish[],
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;

  "batchBurn(address,address,uint128[],uint128[])": TypedContractMethod<
    [
      collection: AddressLike,
      _from: AddressLike,
      _ids: BigNumberish[],
      _balances: BigNumberish[]
    ],
    [void],
    "payable"
  >;

  "burn(address,uint128[],address[],uint128[])": TypedContractMethod<
    [
      collection: AddressLike,
      _ids: BigNumberish[],
      to: AddressLike[],
      _amount: BigNumberish[]
    ],
    [void],
    "payable"
  >;

  "burn(address,uint128[],address[],uint128[],address)": TypedContractMethod<
    [
      collection: AddressLike,
      _ids: BigNumberish[],
      to: AddressLike[],
      _amount: BigNumberish[],
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;

  "burn(address,uint128[],address)": TypedContractMethod<
    [
      collection: AddressLike,
      _ids: BigNumberish[],
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;

  "burn(address,uint128[])": TypedContractMethod<
    [collection: AddressLike, _ids: BigNumberish[]],
    [void],
    "payable"
  >;

  feeBurn: TypedContractMethod<[], [bigint], "view">;

  feeBurnErc20: TypedContractMethod<
    [madFeeTokenAddress: AddressLike],
    [FeeHandler.FeeStructOutput],
    "view"
  >;

  feeMint: TypedContractMethod<[], [bigint], "view">;

  feeMintErc20: TypedContractMethod<
    [madFeeTokenAddress: AddressLike],
    [FeeHandler.FeeStructOutput],
    "view"
  >;

  invalidateFee: TypedContractMethod<
    [
      madFeeTokenAddress: AddressLike,
      invalidateBurnFee: boolean,
      invalidateMintFee: boolean
    ],
    [void],
    "nonpayable"
  >;

  madFactory: TypedContractMethod<[], [string], "view">;

  "mint(address,address,uint128,uint128,address)": TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _id: BigNumberish,
      _amount: BigNumberish,
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;

  "mint(address,address,uint128,uint128)": TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _id: BigNumberish,
      _amount: BigNumberish
    ],
    [void],
    "payable"
  >;

  "mint(address,uint128,address)": TypedContractMethod<
    [
      collection: AddressLike,
      _amount: BigNumberish,
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;

  "mint(address,uint128)": TypedContractMethod<
    [collection: AddressLike, _amount: BigNumberish],
    [void],
    "payable"
  >;

  "mintBatchTo(address,address,uint128[],uint128[],address)": TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _ids: BigNumberish[],
      _balances: BigNumberish[],
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;

  "mintBatchTo(address,address,uint128[],uint128[])": TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _ids: BigNumberish[],
      _balances: BigNumberish[]
    ],
    [void],
    "payable"
  >;

  "mintTo(address,address,uint128,uint128,address)": TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _balance: BigNumberish,
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;

  "mintTo(address,address,uint128,uint128)": TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _balance: BigNumberish
    ],
    [void],
    "payable"
  >;

  "mintTo(address,address,uint128,address)": TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;

  "mintTo(address,address,uint128)": TypedContractMethod<
    [collection: AddressLike, _to: AddressLike, _amount: BigNumberish],
    [void],
    "payable"
  >;

  name: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  recipient: TypedContractMethod<[], [string], "view">;

  setFactory: TypedContractMethod<
    [_factory: AddressLike],
    [void],
    "nonpayable"
  >;

  "setFees(uint256,uint256)": TypedContractMethod<
    [_feeMint: BigNumberish, _feeBurn: BigNumberish],
    [void],
    "nonpayable"
  >;

  "setFees(uint256,uint256,address)": TypedContractMethod<
    [
      _feeMint: BigNumberish,
      _feeBurn: BigNumberish,
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  setOwner: TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  setRecipient: TypedContractMethod<
    [_recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "batchBurn(address,address,uint128[],uint128[],address)"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _from: AddressLike,
      _ids: BigNumberish[],
      _balances: BigNumberish[],
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "batchBurn(address,address,uint128[],uint128[])"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _from: AddressLike,
      _ids: BigNumberish[],
      _balances: BigNumberish[]
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "burn(address,uint128[],address[],uint128[])"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _ids: BigNumberish[],
      to: AddressLike[],
      _amount: BigNumberish[]
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "burn(address,uint128[],address[],uint128[],address)"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _ids: BigNumberish[],
      to: AddressLike[],
      _amount: BigNumberish[],
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "burn(address,uint128[],address)"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _ids: BigNumberish[],
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "burn(address,uint128[])"
  ): TypedContractMethod<
    [collection: AddressLike, _ids: BigNumberish[]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "feeBurn"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeBurnErc20"
  ): TypedContractMethod<
    [madFeeTokenAddress: AddressLike],
    [FeeHandler.FeeStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "feeMint"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeMintErc20"
  ): TypedContractMethod<
    [madFeeTokenAddress: AddressLike],
    [FeeHandler.FeeStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "invalidateFee"
  ): TypedContractMethod<
    [
      madFeeTokenAddress: AddressLike,
      invalidateBurnFee: boolean,
      invalidateMintFee: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "madFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "mint(address,address,uint128,uint128,address)"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _id: BigNumberish,
      _amount: BigNumberish,
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "mint(address,address,uint128,uint128)"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _id: BigNumberish,
      _amount: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "mint(address,uint128,address)"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _amount: BigNumberish,
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "mint(address,uint128)"
  ): TypedContractMethod<
    [collection: AddressLike, _amount: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "mintBatchTo(address,address,uint128[],uint128[],address)"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _ids: BigNumberish[],
      _balances: BigNumberish[],
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "mintBatchTo(address,address,uint128[],uint128[])"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _ids: BigNumberish[],
      _balances: BigNumberish[]
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "mintTo(address,address,uint128,uint128,address)"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _balance: BigNumberish,
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "mintTo(address,address,uint128,uint128)"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _balance: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "mintTo(address,address,uint128,address)"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "mintTo(address,address,uint128)"
  ): TypedContractMethod<
    [collection: AddressLike, _to: AddressLike, _amount: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "recipient"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setFactory"
  ): TypedContractMethod<[_factory: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFees(uint256,uint256)"
  ): TypedContractMethod<
    [_feeMint: BigNumberish, _feeBurn: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFees(uint256,uint256,address)"
  ): TypedContractMethod<
    [
      _feeMint: BigNumberish,
      _feeBurn: BigNumberish,
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRecipient"
  ): TypedContractMethod<[_recipient: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "BaseURISet"
  ): TypedContractEvent<
    BaseURISetEvent.InputTuple,
    BaseURISetEvent.OutputTuple,
    BaseURISetEvent.OutputObject
  >;
  getEvent(
    key: "FactoryUpdated"
  ): TypedContractEvent<
    FactoryUpdatedEvent.InputTuple,
    FactoryUpdatedEvent.OutputTuple,
    FactoryUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "FeesUpdated(uint256,uint256)"
  ): TypedContractEvent<
    FeesUpdated_uint256_uint256_Event.InputTuple,
    FeesUpdated_uint256_uint256_Event.OutputTuple,
    FeesUpdated_uint256_uint256_Event.OutputObject
  >;
  getEvent(
    key: "FeesUpdated(uint256,uint256,address)"
  ): TypedContractEvent<
    FeesUpdated_uint256_uint256_address_Event.InputTuple,
    FeesUpdated_uint256_uint256_address_Event.OutputTuple,
    FeesUpdated_uint256_uint256_address_Event.OutputObject
  >;
  getEvent(
    key: "OwnerUpdated"
  ): TypedContractEvent<
    OwnerUpdatedEvent.InputTuple,
    OwnerUpdatedEvent.OutputTuple,
    OwnerUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "PaymentTokenUpdated"
  ): TypedContractEvent<
    PaymentTokenUpdatedEvent.InputTuple,
    PaymentTokenUpdatedEvent.OutputTuple,
    PaymentTokenUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "PublicMintState"
  ): TypedContractEvent<
    PublicMintStateEvent.InputTuple,
    PublicMintStateEvent.OutputTuple,
    PublicMintStateEvent.OutputObject
  >;
  getEvent(
    key: "RecipientUpdated"
  ): TypedContractEvent<
    RecipientUpdatedEvent.InputTuple,
    RecipientUpdatedEvent.OutputTuple,
    RecipientUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "TokenFundsWithdrawn"
  ): TypedContractEvent<
    TokenFundsWithdrawnEvent.InputTuple,
    TokenFundsWithdrawnEvent.OutputTuple,
    TokenFundsWithdrawnEvent.OutputObject
  >;

  filters: {
    "BaseURISet(address,string)": TypedContractEvent<
      BaseURISetEvent.InputTuple,
      BaseURISetEvent.OutputTuple,
      BaseURISetEvent.OutputObject
    >;
    BaseURISet: TypedContractEvent<
      BaseURISetEvent.InputTuple,
      BaseURISetEvent.OutputTuple,
      BaseURISetEvent.OutputObject
    >;

    "FactoryUpdated(address)": TypedContractEvent<
      FactoryUpdatedEvent.InputTuple,
      FactoryUpdatedEvent.OutputTuple,
      FactoryUpdatedEvent.OutputObject
    >;
    FactoryUpdated: TypedContractEvent<
      FactoryUpdatedEvent.InputTuple,
      FactoryUpdatedEvent.OutputTuple,
      FactoryUpdatedEvent.OutputObject
    >;

    "FeesUpdated(uint256,uint256)": TypedContractEvent<
      FeesUpdated_uint256_uint256_Event.InputTuple,
      FeesUpdated_uint256_uint256_Event.OutputTuple,
      FeesUpdated_uint256_uint256_Event.OutputObject
    >;
    "FeesUpdated(uint256,uint256,address)": TypedContractEvent<
      FeesUpdated_uint256_uint256_address_Event.InputTuple,
      FeesUpdated_uint256_uint256_address_Event.OutputTuple,
      FeesUpdated_uint256_uint256_address_Event.OutputObject
    >;

    "OwnerUpdated(address,address)": TypedContractEvent<
      OwnerUpdatedEvent.InputTuple,
      OwnerUpdatedEvent.OutputTuple,
      OwnerUpdatedEvent.OutputObject
    >;
    OwnerUpdated: TypedContractEvent<
      OwnerUpdatedEvent.InputTuple,
      OwnerUpdatedEvent.OutputTuple,
      OwnerUpdatedEvent.OutputObject
    >;

    "PaymentTokenUpdated(address)": TypedContractEvent<
      PaymentTokenUpdatedEvent.InputTuple,
      PaymentTokenUpdatedEvent.OutputTuple,
      PaymentTokenUpdatedEvent.OutputObject
    >;
    PaymentTokenUpdated: TypedContractEvent<
      PaymentTokenUpdatedEvent.InputTuple,
      PaymentTokenUpdatedEvent.OutputTuple,
      PaymentTokenUpdatedEvent.OutputObject
    >;

    "PublicMintState(address,uint8,bool)": TypedContractEvent<
      PublicMintStateEvent.InputTuple,
      PublicMintStateEvent.OutputTuple,
      PublicMintStateEvent.OutputObject
    >;
    PublicMintState: TypedContractEvent<
      PublicMintStateEvent.InputTuple,
      PublicMintStateEvent.OutputTuple,
      PublicMintStateEvent.OutputObject
    >;

    "RecipientUpdated(address)": TypedContractEvent<
      RecipientUpdatedEvent.InputTuple,
      RecipientUpdatedEvent.OutputTuple,
      RecipientUpdatedEvent.OutputObject
    >;
    RecipientUpdated: TypedContractEvent<
      RecipientUpdatedEvent.InputTuple,
      RecipientUpdatedEvent.OutputTuple,
      RecipientUpdatedEvent.OutputObject
    >;

    "TokenFundsWithdrawn(address,uint8,address)": TypedContractEvent<
      TokenFundsWithdrawnEvent.InputTuple,
      TokenFundsWithdrawnEvent.OutputTuple,
      TokenFundsWithdrawnEvent.OutputObject
    >;
    TokenFundsWithdrawn: TypedContractEvent<
      TokenFundsWithdrawnEvent.InputTuple,
      TokenFundsWithdrawnEvent.OutputTuple,
      TokenFundsWithdrawnEvent.OutputObject
    >;
  };
}
