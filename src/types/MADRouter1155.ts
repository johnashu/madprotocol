/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface MADRouter1155Interface extends utils.Interface {
  functions: {
    "MADFactory1155()": FunctionFragment;
    "basicMintBatchTo(address,address,uint256[],uint256[])": FunctionFragment;
    "basicMintTo(address,address,uint256,uint256[])": FunctionFragment;
    "batchBurn(address,address,uint256[],uint256[])": FunctionFragment;
    "burn(address,uint256[],address[],uint256[])": FunctionFragment;
    "erc20()": FunctionFragment;
    "feeBurn()": FunctionFragment;
    "feeLookup(bytes4)": FunctionFragment;
    "feeMint()": FunctionFragment;
    "maxFeeBurn()": FunctionFragment;
    "maxFeeMint()": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "recipient()": FunctionFragment;
    "setFees(uint256,uint256)": FunctionFragment;
    "setMintState(address,bool)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setRecipient(address)": FunctionFragment;
    "setURI(address,string)": FunctionFragment;
    "setURILock(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "withdraw(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MADFactory1155"
      | "basicMintBatchTo"
      | "basicMintTo"
      | "batchBurn"
      | "burn"
      | "erc20"
      | "feeBurn"
      | "feeLookup"
      | "feeMint"
      | "maxFeeBurn"
      | "maxFeeMint"
      | "name"
      | "owner"
      | "pause"
      | "paused"
      | "recipient"
      | "setFees"
      | "setMintState"
      | "setOwner"
      | "setRecipient"
      | "setURI"
      | "setURILock"
      | "unpause"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MADFactory1155",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "basicMintBatchTo",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "basicMintTo",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "batchBurn",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "erc20", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeBurn", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeLookup",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "feeMint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxFeeBurn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxFeeMint",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFees",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMintState",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecipient",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setURI",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setURILock",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "MADFactory1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "basicMintBatchTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "basicMintTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "batchBurn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "erc20", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeBurn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeLookup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxFeeBurn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxFeeMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMintState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setURILock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "BaseURI(bytes32,string)": EventFragment;
    "FeesUpdated(uint256,uint256)": EventFragment;
    "FreeClaimState(bytes32,uint8,bool)": EventFragment;
    "OwnerUpdated(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "PaymentTokenUpdated(address)": EventFragment;
    "PublicMintState(bytes32,uint8,bool)": EventFragment;
    "RecipientUpdated(address)": EventFragment;
    "TokenFundsWithdrawn(bytes32,uint8,address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "WhitelistMintState(bytes32,uint8,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BaseURI"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FreeClaimState"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentTokenUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublicMintState"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecipientUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenFundsWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistMintState"): EventFragment;
}

export interface BaseURIEventObject {
  _id: string;
  _baseURI: string;
}
export type BaseURIEvent = TypedEvent<[string, string], BaseURIEventObject>;

export type BaseURIEventFilter = TypedEventFilter<BaseURIEvent>;

export interface FeesUpdatedEventObject {
  burnFees: BigNumber;
  mintFees: BigNumber;
}
export type FeesUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  FeesUpdatedEventObject
>;

export type FeesUpdatedEventFilter = TypedEventFilter<FeesUpdatedEvent>;

export interface FreeClaimStateEventObject {
  _id: string;
  _type: number;
  _state: boolean;
}
export type FreeClaimStateEvent = TypedEvent<
  [string, number, boolean],
  FreeClaimStateEventObject
>;

export type FreeClaimStateEventFilter = TypedEventFilter<FreeClaimStateEvent>;

export interface OwnerUpdatedEventObject {
  user: string;
  newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<
  [string, string],
  OwnerUpdatedEventObject
>;

export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface PaymentTokenUpdatedEventObject {
  newPaymentToken: string;
}
export type PaymentTokenUpdatedEvent = TypedEvent<
  [string],
  PaymentTokenUpdatedEventObject
>;

export type PaymentTokenUpdatedEventFilter =
  TypedEventFilter<PaymentTokenUpdatedEvent>;

export interface PublicMintStateEventObject {
  _id: string;
  _type: number;
  _state: boolean;
}
export type PublicMintStateEvent = TypedEvent<
  [string, number, boolean],
  PublicMintStateEventObject
>;

export type PublicMintStateEventFilter = TypedEventFilter<PublicMintStateEvent>;

export interface RecipientUpdatedEventObject {
  newRecipient: string;
}
export type RecipientUpdatedEvent = TypedEvent<
  [string],
  RecipientUpdatedEventObject
>;

export type RecipientUpdatedEventFilter =
  TypedEventFilter<RecipientUpdatedEvent>;

export interface TokenFundsWithdrawnEventObject {
  _id: string;
  _type: number;
  _payee: string;
}
export type TokenFundsWithdrawnEvent = TypedEvent<
  [string, number, string],
  TokenFundsWithdrawnEventObject
>;

export type TokenFundsWithdrawnEventFilter =
  TypedEventFilter<TokenFundsWithdrawnEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface WhitelistMintStateEventObject {
  _id: string;
  _type: number;
  _state: boolean;
}
export type WhitelistMintStateEvent = TypedEvent<
  [string, number, boolean],
  WhitelistMintStateEventObject
>;

export type WhitelistMintStateEventFilter =
  TypedEventFilter<WhitelistMintStateEvent>;

export interface MADRouter1155 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MADRouter1155Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MADFactory1155(overrides?: CallOverrides): Promise<[string]>;

    basicMintBatchTo(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _balances: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    basicMintTo(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _balances: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batchBurn(
      _token: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _balances: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    burn(
      _token: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      to: PromiseOrValue<string>[],
      _amount: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    erc20(overrides?: CallOverrides): Promise<[string]>;

    feeBurn(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeLookup(
      sigHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fee: BigNumber }>;

    feeMint(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxFeeBurn(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxFeeMint(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    recipient(overrides?: CallOverrides): Promise<[string]>;

    setFees(
      _feeMint: PromiseOrValue<BigNumberish>,
      _feeBurn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMintState(
      _token: PromiseOrValue<string>,
      _state: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRecipient(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setURI(
      _token: PromiseOrValue<string>,
      _uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setURILock(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _token: PromiseOrValue<string>,
      _erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  MADFactory1155(overrides?: CallOverrides): Promise<string>;

  basicMintBatchTo(
    _token: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _ids: PromiseOrValue<BigNumberish>[],
    _balances: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  basicMintTo(
    _token: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _balances: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batchBurn(
    _token: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _ids: PromiseOrValue<BigNumberish>[],
    _balances: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  burn(
    _token: PromiseOrValue<string>,
    _ids: PromiseOrValue<BigNumberish>[],
    to: PromiseOrValue<string>[],
    _amount: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  erc20(overrides?: CallOverrides): Promise<string>;

  feeBurn(overrides?: CallOverrides): Promise<BigNumber>;

  feeLookup(
    sigHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  feeMint(overrides?: CallOverrides): Promise<BigNumber>;

  maxFeeBurn(overrides?: CallOverrides): Promise<BigNumber>;

  maxFeeMint(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  recipient(overrides?: CallOverrides): Promise<string>;

  setFees(
    _feeMint: PromiseOrValue<BigNumberish>,
    _feeBurn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMintState(
    _token: PromiseOrValue<string>,
    _state: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRecipient(
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setURI(
    _token: PromiseOrValue<string>,
    _uri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setURILock(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _token: PromiseOrValue<string>,
    _erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MADFactory1155(overrides?: CallOverrides): Promise<string>;

    basicMintBatchTo(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _balances: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    basicMintTo(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _balances: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    batchBurn(
      _token: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _balances: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    burn(
      _token: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      to: PromiseOrValue<string>[],
      _amount: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    erc20(overrides?: CallOverrides): Promise<string>;

    feeBurn(overrides?: CallOverrides): Promise<BigNumber>;

    feeLookup(
      sigHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeMint(overrides?: CallOverrides): Promise<BigNumber>;

    maxFeeBurn(overrides?: CallOverrides): Promise<BigNumber>;

    maxFeeMint(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    recipient(overrides?: CallOverrides): Promise<string>;

    setFees(
      _feeMint: PromiseOrValue<BigNumberish>,
      _feeBurn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMintState(
      _token: PromiseOrValue<string>,
      _state: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRecipient(
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setURI(
      _token: PromiseOrValue<string>,
      _uri: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setURILock(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    withdraw(
      _token: PromiseOrValue<string>,
      _erc20: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BaseURI(bytes32,string)"(
      _id?: PromiseOrValue<BytesLike> | null,
      _baseURI?: PromiseOrValue<string> | null
    ): BaseURIEventFilter;
    BaseURI(
      _id?: PromiseOrValue<BytesLike> | null,
      _baseURI?: PromiseOrValue<string> | null
    ): BaseURIEventFilter;

    "FeesUpdated(uint256,uint256)"(
      burnFees?: null,
      mintFees?: null
    ): FeesUpdatedEventFilter;
    FeesUpdated(burnFees?: null, mintFees?: null): FeesUpdatedEventFilter;

    "FreeClaimState(bytes32,uint8,bool)"(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): FreeClaimStateEventFilter;
    FreeClaimState(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): FreeClaimStateEventFilter;

    "OwnerUpdated(address,address)"(
      user?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;
    OwnerUpdated(
      user?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "PaymentTokenUpdated(address)"(
      newPaymentToken?: PromiseOrValue<string> | null
    ): PaymentTokenUpdatedEventFilter;
    PaymentTokenUpdated(
      newPaymentToken?: PromiseOrValue<string> | null
    ): PaymentTokenUpdatedEventFilter;

    "PublicMintState(bytes32,uint8,bool)"(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): PublicMintStateEventFilter;
    PublicMintState(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): PublicMintStateEventFilter;

    "RecipientUpdated(address)"(
      newRecipient?: PromiseOrValue<string> | null
    ): RecipientUpdatedEventFilter;
    RecipientUpdated(
      newRecipient?: PromiseOrValue<string> | null
    ): RecipientUpdatedEventFilter;

    "TokenFundsWithdrawn(bytes32,uint8,address)"(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _payee?: PromiseOrValue<string> | null
    ): TokenFundsWithdrawnEventFilter;
    TokenFundsWithdrawn(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _payee?: PromiseOrValue<string> | null
    ): TokenFundsWithdrawnEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "WhitelistMintState(bytes32,uint8,bool)"(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): WhitelistMintStateEventFilter;
    WhitelistMintState(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): WhitelistMintStateEventFilter;
  };

  estimateGas: {
    MADFactory1155(overrides?: CallOverrides): Promise<BigNumber>;

    basicMintBatchTo(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _balances: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    basicMintTo(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _balances: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batchBurn(
      _token: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _balances: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    burn(
      _token: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      to: PromiseOrValue<string>[],
      _amount: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    erc20(overrides?: CallOverrides): Promise<BigNumber>;

    feeBurn(overrides?: CallOverrides): Promise<BigNumber>;

    feeLookup(
      sigHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeMint(overrides?: CallOverrides): Promise<BigNumber>;

    maxFeeBurn(overrides?: CallOverrides): Promise<BigNumber>;

    maxFeeMint(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<BigNumber>;

    setFees(
      _feeMint: PromiseOrValue<BigNumberish>,
      _feeBurn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMintState(
      _token: PromiseOrValue<string>,
      _state: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRecipient(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setURI(
      _token: PromiseOrValue<string>,
      _uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setURILock(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      _token: PromiseOrValue<string>,
      _erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MADFactory1155(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    basicMintBatchTo(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _balances: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    basicMintTo(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _balances: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batchBurn(
      _token: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _balances: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    burn(
      _token: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      to: PromiseOrValue<string>[],
      _amount: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    erc20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeBurn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeLookup(
      sigHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeMint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxFeeBurn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxFeeMint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFees(
      _feeMint: PromiseOrValue<BigNumberish>,
      _feeBurn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMintState(
      _token: PromiseOrValue<string>,
      _state: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRecipient(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setURI(
      _token: PromiseOrValue<string>,
      _uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setURILock(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _token: PromiseOrValue<string>,
      _erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
