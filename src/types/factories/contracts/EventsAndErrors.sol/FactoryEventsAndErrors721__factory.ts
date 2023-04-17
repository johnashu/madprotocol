/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  FactoryEventsAndErrors721,
  FactoryEventsAndErrors721Interface,
} from "../../../contracts/EventsAndErrors.sol/FactoryEventsAndErrors721";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
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
    name: "ERC721BasicCreated",
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
] as const;

export class FactoryEventsAndErrors721__factory {
  static readonly abi = _abi;
  static createInterface(): FactoryEventsAndErrors721Interface {
    return new utils.Interface(_abi) as FactoryEventsAndErrors721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FactoryEventsAndErrors721 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FactoryEventsAndErrors721;
  }
}