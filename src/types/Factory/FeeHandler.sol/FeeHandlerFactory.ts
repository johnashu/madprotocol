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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace FeeHandlerFactory {
  export type FeeStruct = { feeAmount: BigNumberish; isValid: boolean };

  export type FeeStructOutput = [feeAmount: bigint, isValid: boolean] & {
    feeAmount: bigint;
    isValid: boolean;
  };
}

export interface FeeHandlerFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "feeCreateCollection"
      | "feeCreateCollectionErc20"
      | "feeCreateSplitter"
      | "feeCreateSplitterErc20"
      | "recipient"
  ): FunctionFragment;

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
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;

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
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
}

export interface FeeHandlerFactory extends BaseContract {
  connect(runner?: ContractRunner | null): FeeHandlerFactory;
  waitForDeployment(): Promise<this>;

  interface: FeeHandlerFactoryInterface;

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

  recipient: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

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
    nameOrSignature: "recipient"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
