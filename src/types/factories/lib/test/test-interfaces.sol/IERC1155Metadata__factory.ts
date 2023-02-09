/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IERC1155Metadata,
  IERC1155MetadataInterface,
} from "../../../../lib/test/test-interfaces.sol/IERC1155Metadata";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IERC1155Metadata__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1155MetadataInterface {
    return new utils.Interface(_abi) as IERC1155MetadataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1155Metadata {
    return new Contract(address, _abi, signerOrProvider) as IERC1155Metadata;
  }
}
