/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  FactoryEventsAndErrors1155,
  FactoryEventsAndErrors1155Interface,
} from "../../EventsAndErrors.sol/FactoryEventsAndErrors1155";

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
    name: "ERC1155LazyCreated",
    type: "event",
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
    name: "ERC1155MinimalCreated",
    type: "event",
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
    name: "ERC1155WhitelistCreated",
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
    ],
    name: "SplitterCreated",
    type: "event",
  },
];

export class FactoryEventsAndErrors1155__factory {
  static readonly abi = _abi;
  static createInterface(): FactoryEventsAndErrors1155Interface {
    return new utils.Interface(_abi) as FactoryEventsAndErrors1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FactoryEventsAndErrors1155 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FactoryEventsAndErrors1155;
  }
}
