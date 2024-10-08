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

export declare namespace FactoryTypes {
  export type CreateCollectionParamsStruct = {
    madFeeTokenAddress: AddressLike;
    tokenType: BigNumberish;
    tokenSalt: BytesLike;
    collectionName: string;
    collectionSymbol: string;
    price: BigNumberish;
    maxSupply: BigNumberish;
    uri: string;
    splitter: AddressLike;
    royalty: BigNumberish;
  };

  export type CreateCollectionParamsStructOutput = [
    madFeeTokenAddress: string,
    tokenType: bigint,
    tokenSalt: string,
    collectionName: string,
    collectionSymbol: string,
    price: bigint,
    maxSupply: bigint,
    uri: string,
    splitter: string,
    royalty: bigint
  ] & {
    madFeeTokenAddress: string;
    tokenType: bigint;
    tokenSalt: string;
    collectionName: string;
    collectionSymbol: string;
    price: bigint;
    maxSupply: bigint;
    uri: string;
    splitter: string;
    royalty: bigint;
  };

  export type CreateSplitterParamsStruct = {
    splitterSalt: BytesLike;
    ambassador: AddressLike;
    project: AddressLike;
    ambassadorShare: BigNumberish;
    projectShare: BigNumberish;
    madFeeTokenAddress: AddressLike;
  };

  export type CreateSplitterParamsStructOutput = [
    splitterSalt: string,
    ambassador: string,
    project: string,
    ambassadorShare: bigint,
    projectShare: bigint,
    madFeeTokenAddress: string
  ] & {
    splitterSalt: string;
    ambassador: string;
    project: string;
    ambassadorShare: bigint;
    projectShare: bigint;
    madFeeTokenAddress: string;
  };
}

export declare namespace FeeHandlerFactory {
  export type FeeStruct = { feeAmount: BigNumberish; isValid: boolean };

  export type FeeStructOutput = [feeAmount: bigint, isValid: boolean] & {
    feeAmount: bigint;
    isValid: boolean;
  };
}

export interface MADFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ADDRESS_ZERO"
      | "acceptOwnership"
      | "addCollectionType"
      | "collectionCheck"
      | "collectionInfo"
      | "collectionTypes"
      | "createCollection((address,uint8,bytes32,string,string,uint256,uint256,string,address,uint96))"
      | "createCollection((address,uint8,bytes32,string,string,uint256,uint256,string,address,uint96),address)"
      | "createSplitter"
      | "creatorAuth"
      | "feeCreateCollection"
      | "feeCreateCollectionErc20"
      | "feeCreateSplitter"
      | "feeCreateSplitterErc20"
      | "getDeployedAddress"
      | "getIDsLength"
      | "invalidateFee"
      | "name"
      | "owner"
      | "pendingOwner"
      | "recipient"
      | "renounceOwnership"
      | "router"
      | "setFees(uint256,uint256)"
      | "setFees(uint256,uint256,address)"
      | "setRecipient"
      | "setRouter"
      | "splitterInfo"
      | "transferOwnership"
      | "userTokens"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CollectionCreated"
      | "CollectionTypeAdded"
      | "FeesUpdated(uint256,uint256)"
      | "FeesUpdated(uint256,uint256,address)"
      | "OwnershipTransferStarted"
      | "OwnershipTransferred"
      | "PaymentTokenUpdated"
      | "RecipientUpdated"
      | "RouterUpdated"
      | "SplitterCreated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ADDRESS_ZERO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addCollectionType",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collectionCheck",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collectionInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collectionTypes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createCollection((address,uint8,bytes32,string,string,uint256,uint256,string,address,uint96))",
    values: [FactoryTypes.CreateCollectionParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "createCollection((address,uint8,bytes32,string,string,uint256,uint256,string,address,uint96),address)",
    values: [FactoryTypes.CreateCollectionParamsStruct, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createSplitter",
    values: [FactoryTypes.CreateSplitterParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "creatorAuth",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "feeCreateCollection",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeCreateCollectionErc20",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "feeCreateSplitter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeCreateSplitterErc20",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployedAddress",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getIDsLength",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "invalidateFee",
    values: [AddressLike, boolean, boolean]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFees(uint256,uint256)",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFees(uint256,uint256,address)",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecipient",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRouter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "splitterInfo",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userTokens",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESS_ZERO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCollectionType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectionCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectionInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectionTypes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCollection((address,uint8,bytes32,string,string,uint256,uint256,string,address,uint96))",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCollection((address,uint8,bytes32,string,string,uint256,uint256,string,address,uint96),address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSplitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creatorAuth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeCreateCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeCreateCollectionErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeCreateSplitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeCreateSplitterErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDeployedAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIDsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "invalidateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFees(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFees(uint256,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "splitterInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userTokens", data: BytesLike): Result;
}

export namespace CollectionCreatedEvent {
  export type InputTuple = [
    newSplitter: AddressLike,
    newCollection: AddressLike,
    collectionName: string,
    collectionSymbol: string,
    royalties: BigNumberish,
    maxSupply: BigNumberish,
    mintPrice: BigNumberish,
    tokenType: BigNumberish,
    collectionToken: AddressLike
  ];
  export type OutputTuple = [
    newSplitter: string,
    newCollection: string,
    collectionName: string,
    collectionSymbol: string,
    royalties: bigint,
    maxSupply: bigint,
    mintPrice: bigint,
    tokenType: bigint,
    collectionToken: string
  ];
  export interface OutputObject {
    newSplitter: string;
    newCollection: string;
    collectionName: string;
    collectionSymbol: string;
    royalties: bigint;
    maxSupply: bigint;
    mintPrice: bigint;
    tokenType: bigint;
    collectionToken: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CollectionTypeAddedEvent {
  export type InputTuple = [index: BigNumberish];
  export type OutputTuple = [index: bigint];
  export interface OutputObject {
    index: bigint;
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

export namespace OwnershipTransferStartedEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
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

export namespace RouterUpdatedEvent {
  export type InputTuple = [newRouter: AddressLike];
  export type OutputTuple = [newRouter: string];
  export interface OutputObject {
    newRouter: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SplitterCreatedEvent {
  export type InputTuple = [
    creator: AddressLike,
    shares: BigNumberish[],
    payees: AddressLike[],
    splitter: AddressLike,
    flag: BigNumberish
  ];
  export type OutputTuple = [
    creator: string,
    shares: bigint[],
    payees: string[],
    splitter: string,
    flag: bigint
  ];
  export interface OutputObject {
    creator: string;
    shares: bigint[];
    payees: string[];
    splitter: string;
    flag: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MADFactory extends BaseContract {
  connect(runner?: ContractRunner | null): MADFactory;
  waitForDeployment(): Promise<this>;

  interface: MADFactoryInterface;

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

  ADDRESS_ZERO: TypedContractMethod<[], [string], "view">;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  addCollectionType: TypedContractMethod<
    [index: BigNumberish, impl: BytesLike],
    [void],
    "nonpayable"
  >;

  collectionCheck: TypedContractMethod<
    [_collectionId: AddressLike],
    [boolean],
    "view"
  >;

  collectionInfo: TypedContractMethod<
    [collectionId: AddressLike],
    [
      [string, bigint, string, bigint, string, boolean] & {
        creator: string;
        collectionType: bigint;
        collectionSalt: string;
        blocknumber: bigint;
        splitter: string;
        isValid: boolean;
      }
    ],
    "view"
  >;

  collectionTypes: TypedContractMethod<
    [collectionIndex: BigNumberish],
    [string],
    "view"
  >;

  "createCollection((address,uint8,bytes32,string,string,uint256,uint256,string,address,uint96))": TypedContractMethod<
    [params: FactoryTypes.CreateCollectionParamsStruct],
    [void],
    "payable"
  >;

  "createCollection((address,uint8,bytes32,string,string,uint256,uint256,string,address,uint96),address)": TypedContractMethod<
    [
      params: FactoryTypes.CreateCollectionParamsStruct,
      collectionToken: AddressLike
    ],
    [void],
    "payable"
  >;

  createSplitter: TypedContractMethod<
    [params: FactoryTypes.CreateSplitterParamsStruct],
    [void],
    "payable"
  >;

  creatorAuth: TypedContractMethod<
    [_token: AddressLike, _user: AddressLike],
    [boolean],
    "view"
  >;

  feeCreateCollection: TypedContractMethod<[], [bigint], "view">;

  feeCreateCollectionErc20: TypedContractMethod<
    [madFeeTokenAddress: AddressLike],
    [FeeHandlerFactory.FeeStructOutput],
    "view"
  >;

  feeCreateSplitter: TypedContractMethod<[], [bigint], "view">;

  feeCreateSplitterErc20: TypedContractMethod<
    [madFeeTokenAddress: AddressLike],
    [FeeHandlerFactory.FeeStructOutput],
    "view"
  >;

  getDeployedAddress: TypedContractMethod<
    [_salt: BytesLike, _addr: AddressLike],
    [string],
    "view"
  >;

  getIDsLength: TypedContractMethod<[_user: AddressLike], [bigint], "view">;

  invalidateFee: TypedContractMethod<
    [
      madFeeTokenAddress: AddressLike,
      invalidateCollectionFee: boolean,
      invalidateSplitterFee: boolean
    ],
    [void],
    "nonpayable"
  >;

  name: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  pendingOwner: TypedContractMethod<[], [string], "view">;

  recipient: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  router: TypedContractMethod<[], [string], "view">;

  "setFees(uint256,uint256)": TypedContractMethod<
    [
      _feeCreateCollectionNew: BigNumberish,
      _feeCreateSplitterNew: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  "setFees(uint256,uint256,address)": TypedContractMethod<
    [
      _feeCreateCollectionErc20New: BigNumberish,
      _feeCreateSplitterErc20New: BigNumberish,
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  setRecipient: TypedContractMethod<
    [_recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  setRouter: TypedContractMethod<[_router: AddressLike], [void], "nonpayable">;

  splitterInfo: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [
      [string, string, string, string, bigint, bigint, boolean] & {
        splitter: string;
        splitterSalt: string;
        ambassador: string;
        project: string;
        ambassadorShare: bigint;
        projectShare: bigint;
        valid: boolean;
      }
    ],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  userTokens: TypedContractMethod<
    [collectionOwner: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ADDRESS_ZERO"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addCollectionType"
  ): TypedContractMethod<
    [index: BigNumberish, impl: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "collectionCheck"
  ): TypedContractMethod<[_collectionId: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "collectionInfo"
  ): TypedContractMethod<
    [collectionId: AddressLike],
    [
      [string, bigint, string, bigint, string, boolean] & {
        creator: string;
        collectionType: bigint;
        collectionSalt: string;
        blocknumber: bigint;
        splitter: string;
        isValid: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "collectionTypes"
  ): TypedContractMethod<[collectionIndex: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "createCollection((address,uint8,bytes32,string,string,uint256,uint256,string,address,uint96))"
  ): TypedContractMethod<
    [params: FactoryTypes.CreateCollectionParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "createCollection((address,uint8,bytes32,string,string,uint256,uint256,string,address,uint96),address)"
  ): TypedContractMethod<
    [
      params: FactoryTypes.CreateCollectionParamsStruct,
      collectionToken: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "createSplitter"
  ): TypedContractMethod<
    [params: FactoryTypes.CreateSplitterParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "creatorAuth"
  ): TypedContractMethod<
    [_token: AddressLike, _user: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "feeCreateCollection"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeCreateCollectionErc20"
  ): TypedContractMethod<
    [madFeeTokenAddress: AddressLike],
    [FeeHandlerFactory.FeeStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "feeCreateSplitter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeCreateSplitterErc20"
  ): TypedContractMethod<
    [madFeeTokenAddress: AddressLike],
    [FeeHandlerFactory.FeeStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDeployedAddress"
  ): TypedContractMethod<
    [_salt: BytesLike, _addr: AddressLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getIDsLength"
  ): TypedContractMethod<[_user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "invalidateFee"
  ): TypedContractMethod<
    [
      madFeeTokenAddress: AddressLike,
      invalidateCollectionFee: boolean,
      invalidateSplitterFee: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "recipient"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "router"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setFees(uint256,uint256)"
  ): TypedContractMethod<
    [
      _feeCreateCollectionNew: BigNumberish,
      _feeCreateSplitterNew: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFees(uint256,uint256,address)"
  ): TypedContractMethod<
    [
      _feeCreateCollectionErc20New: BigNumberish,
      _feeCreateSplitterErc20New: BigNumberish,
      madFeeTokenAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRecipient"
  ): TypedContractMethod<[_recipient: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRouter"
  ): TypedContractMethod<[_router: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "splitterInfo"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [
      [string, string, string, string, bigint, bigint, boolean] & {
        splitter: string;
        splitterSalt: string;
        ambassador: string;
        project: string;
        ambassadorShare: bigint;
        projectShare: bigint;
        valid: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "userTokens"
  ): TypedContractMethod<
    [collectionOwner: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  getEvent(
    key: "CollectionCreated"
  ): TypedContractEvent<
    CollectionCreatedEvent.InputTuple,
    CollectionCreatedEvent.OutputTuple,
    CollectionCreatedEvent.OutputObject
  >;
  getEvent(
    key: "CollectionTypeAdded"
  ): TypedContractEvent<
    CollectionTypeAddedEvent.InputTuple,
    CollectionTypeAddedEvent.OutputTuple,
    CollectionTypeAddedEvent.OutputObject
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
    key: "OwnershipTransferStarted"
  ): TypedContractEvent<
    OwnershipTransferStartedEvent.InputTuple,
    OwnershipTransferStartedEvent.OutputTuple,
    OwnershipTransferStartedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "PaymentTokenUpdated"
  ): TypedContractEvent<
    PaymentTokenUpdatedEvent.InputTuple,
    PaymentTokenUpdatedEvent.OutputTuple,
    PaymentTokenUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "RecipientUpdated"
  ): TypedContractEvent<
    RecipientUpdatedEvent.InputTuple,
    RecipientUpdatedEvent.OutputTuple,
    RecipientUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "RouterUpdated"
  ): TypedContractEvent<
    RouterUpdatedEvent.InputTuple,
    RouterUpdatedEvent.OutputTuple,
    RouterUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "SplitterCreated"
  ): TypedContractEvent<
    SplitterCreatedEvent.InputTuple,
    SplitterCreatedEvent.OutputTuple,
    SplitterCreatedEvent.OutputObject
  >;

  filters: {
    "CollectionCreated(address,address,string,string,uint256,uint256,uint256,uint8,address)": TypedContractEvent<
      CollectionCreatedEvent.InputTuple,
      CollectionCreatedEvent.OutputTuple,
      CollectionCreatedEvent.OutputObject
    >;
    CollectionCreated: TypedContractEvent<
      CollectionCreatedEvent.InputTuple,
      CollectionCreatedEvent.OutputTuple,
      CollectionCreatedEvent.OutputObject
    >;

    "CollectionTypeAdded(uint256)": TypedContractEvent<
      CollectionTypeAddedEvent.InputTuple,
      CollectionTypeAddedEvent.OutputTuple,
      CollectionTypeAddedEvent.OutputObject
    >;
    CollectionTypeAdded: TypedContractEvent<
      CollectionTypeAddedEvent.InputTuple,
      CollectionTypeAddedEvent.OutputTuple,
      CollectionTypeAddedEvent.OutputObject
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

    "OwnershipTransferStarted(address,address)": TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;
    OwnershipTransferStarted: TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
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

    "RouterUpdated(address)": TypedContractEvent<
      RouterUpdatedEvent.InputTuple,
      RouterUpdatedEvent.OutputTuple,
      RouterUpdatedEvent.OutputObject
    >;
    RouterUpdated: TypedContractEvent<
      RouterUpdatedEvent.InputTuple,
      RouterUpdatedEvent.OutputTuple,
      RouterUpdatedEvent.OutputObject
    >;

    "SplitterCreated(address,uint256[],address[],address,uint256)": TypedContractEvent<
      SplitterCreatedEvent.InputTuple,
      SplitterCreatedEvent.OutputTuple,
      SplitterCreatedEvent.OutputObject
    >;
    SplitterCreated: TypedContractEvent<
      SplitterCreatedEvent.InputTuple,
      SplitterCreatedEvent.OutputTuple,
      SplitterCreatedEvent.OutputObject
    >;
  };
}
