/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  FunctionFragment,
  Interface,
  EventFragment,
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
} from "../../../common";

export interface IERC721EventsStructsAndErrorsInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "PublicMintDatesSet"
      | "PublicMintLimitSet"
      | "PublicMintPriceSet"
      | "PublicMintStateSet"
      | "PublicMintValuesSet"
  ): EventFragment;
}

export namespace PublicMintDatesSetEvent {
  export type InputTuple = [
    newStartDate: BigNumberish,
    newEndDate: BigNumberish
  ];
  export type OutputTuple = [newStartDate: bigint, newEndDate: bigint];
  export interface OutputObject {
    newStartDate: bigint;
    newEndDate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PublicMintLimitSetEvent {
  export type InputTuple = [limit: BigNumberish];
  export type OutputTuple = [limit: bigint];
  export interface OutputObject {
    limit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PublicMintPriceSetEvent {
  export type InputTuple = [newPrice: BigNumberish];
  export type OutputTuple = [newPrice: bigint];
  export interface OutputObject {
    newPrice: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PublicMintStateSetEvent {
  export type InputTuple = [newPublicState: boolean];
  export type OutputTuple = [newPublicState: boolean];
  export interface OutputObject {
    newPublicState: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PublicMintValuesSetEvent {
  export type InputTuple = [
    newPublicMintState: boolean,
    newPrice: BigNumberish,
    newLimit: BigNumberish,
    newStartDate: BigNumberish,
    newEndDate: BigNumberish
  ];
  export type OutputTuple = [
    newPublicMintState: boolean,
    newPrice: bigint,
    newLimit: bigint,
    newStartDate: bigint,
    newEndDate: bigint
  ];
  export interface OutputObject {
    newPublicMintState: boolean;
    newPrice: bigint;
    newLimit: bigint;
    newStartDate: bigint;
    newEndDate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IERC721EventsStructsAndErrors extends BaseContract {
  connect(runner?: ContractRunner | null): IERC721EventsStructsAndErrors;
  waitForDeployment(): Promise<this>;

  interface: IERC721EventsStructsAndErrorsInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "PublicMintDatesSet"
  ): TypedContractEvent<
    PublicMintDatesSetEvent.InputTuple,
    PublicMintDatesSetEvent.OutputTuple,
    PublicMintDatesSetEvent.OutputObject
  >;
  getEvent(
    key: "PublicMintLimitSet"
  ): TypedContractEvent<
    PublicMintLimitSetEvent.InputTuple,
    PublicMintLimitSetEvent.OutputTuple,
    PublicMintLimitSetEvent.OutputObject
  >;
  getEvent(
    key: "PublicMintPriceSet"
  ): TypedContractEvent<
    PublicMintPriceSetEvent.InputTuple,
    PublicMintPriceSetEvent.OutputTuple,
    PublicMintPriceSetEvent.OutputObject
  >;
  getEvent(
    key: "PublicMintStateSet"
  ): TypedContractEvent<
    PublicMintStateSetEvent.InputTuple,
    PublicMintStateSetEvent.OutputTuple,
    PublicMintStateSetEvent.OutputObject
  >;
  getEvent(
    key: "PublicMintValuesSet"
  ): TypedContractEvent<
    PublicMintValuesSetEvent.InputTuple,
    PublicMintValuesSetEvent.OutputTuple,
    PublicMintValuesSetEvent.OutputObject
  >;

  filters: {
    "PublicMintDatesSet(uint256,uint256)": TypedContractEvent<
      PublicMintDatesSetEvent.InputTuple,
      PublicMintDatesSetEvent.OutputTuple,
      PublicMintDatesSetEvent.OutputObject
    >;
    PublicMintDatesSet: TypedContractEvent<
      PublicMintDatesSetEvent.InputTuple,
      PublicMintDatesSetEvent.OutputTuple,
      PublicMintDatesSetEvent.OutputObject
    >;

    "PublicMintLimitSet(uint256)": TypedContractEvent<
      PublicMintLimitSetEvent.InputTuple,
      PublicMintLimitSetEvent.OutputTuple,
      PublicMintLimitSetEvent.OutputObject
    >;
    PublicMintLimitSet: TypedContractEvent<
      PublicMintLimitSetEvent.InputTuple,
      PublicMintLimitSetEvent.OutputTuple,
      PublicMintLimitSetEvent.OutputObject
    >;

    "PublicMintPriceSet(uint256)": TypedContractEvent<
      PublicMintPriceSetEvent.InputTuple,
      PublicMintPriceSetEvent.OutputTuple,
      PublicMintPriceSetEvent.OutputObject
    >;
    PublicMintPriceSet: TypedContractEvent<
      PublicMintPriceSetEvent.InputTuple,
      PublicMintPriceSetEvent.OutputTuple,
      PublicMintPriceSetEvent.OutputObject
    >;

    "PublicMintStateSet(bool)": TypedContractEvent<
      PublicMintStateSetEvent.InputTuple,
      PublicMintStateSetEvent.OutputTuple,
      PublicMintStateSetEvent.OutputObject
    >;
    PublicMintStateSet: TypedContractEvent<
      PublicMintStateSetEvent.InputTuple,
      PublicMintStateSetEvent.OutputTuple,
      PublicMintStateSetEvent.OutputObject
    >;

    "PublicMintValuesSet(bool,uint256,uint256,uint256,uint256)": TypedContractEvent<
      PublicMintValuesSetEvent.InputTuple,
      PublicMintValuesSetEvent.OutputTuple,
      PublicMintValuesSetEvent.OutputObject
    >;
    PublicMintValuesSet: TypedContractEvent<
      PublicMintValuesSetEvent.InputTuple,
      PublicMintValuesSetEvent.OutputTuple,
      PublicMintValuesSetEvent.OutputObject
    >;
  };
}
