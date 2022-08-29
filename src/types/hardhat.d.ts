/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "FactoryEventsAndErrors1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FactoryEventsAndErrors1155__factory>;
    getContractFactory(
      name: "FactoryEventsAndErrors721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FactoryEventsAndErrors721__factory>;
    getContractFactory(
      name: "MarketplaceEventsAndErrors1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketplaceEventsAndErrors1155__factory>;
    getContractFactory(
      name: "MarketplaceEventsAndErrors721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketplaceEventsAndErrors721__factory>;
    getContractFactory(
      name: "RouterEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RouterEvents__factory>;
    getContractFactory(
      name: "FactoryVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FactoryVerifier__factory>;
    getContractFactory(
      name: "Owned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Owned__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "SplitterImpl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SplitterImpl__factory>;
    getContractFactory(
      name: "MockERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC20__factory>;
    getContractFactory(
      name: "MockERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC2981__factory>;
    getContractFactory(
      name: "MockERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC721__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Metadata__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "ERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2981__factory>;
    getContractFactory(
      name: "ERC1155B",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155B__factory>;
    getContractFactory(
      name: "ERC1155TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155TokenReceiver__factory>;
    getContractFactory(
      name: "ERC1155BasicEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155BasicEventsAndErrors__factory>;
    getContractFactory(
      name: "ERC1155LazyEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155LazyEventsAndErrors__factory>;
    getContractFactory(
      name: "ERC1155MinimalEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155MinimalEventsAndErrors__factory>;
    getContractFactory(
      name: "ERC1155WhitelistEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155WhitelistEventsAndErrors__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "ERC1155Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Holder__factory>;
    getContractFactory(
      name: "ERC1155Basic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Basic__factory>;
    getContractFactory(
      name: "ERC1155Lazy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Lazy__factory>;
    getContractFactory(
      name: "ERC1155Minimal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Minimal__factory>;
    getContractFactory(
      name: "ERC1155Whitelist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Whitelist__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721TokenReceiver__factory>;
    getContractFactory(
      name: "ERC721BasicEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721BasicEventsAndErrors__factory>;
    getContractFactory(
      name: "ERC721LazyEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721LazyEventsAndErrors__factory>;
    getContractFactory(
      name: "ERC721MinimalEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721MinimalEventsAndErrors__factory>;
    getContractFactory(
      name: "ERC721WhitelistEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721WhitelistEventsAndErrors__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "ERC721Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Holder__factory>;
    getContractFactory(
      name: "ERC721Basic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Basic__factory>;
    getContractFactory(
      name: "ERC721Lazy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Lazy__factory>;
    getContractFactory(
      name: "ERC721Minimal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Minimal__factory>;
    getContractFactory(
      name: "ERC721Whitelist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Whitelist__factory>;
    getContractFactory(
      name: "Counters",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Counters__factory>;
    getContractFactory(
      name: "MAD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MAD__factory>;
    getContractFactory(
      name: "MADFactory1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADFactory1155__factory>;
    getContractFactory(
      name: "MADFactory721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADFactory721__factory>;
    getContractFactory(
      name: "MADMarketplace1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADMarketplace1155__factory>;
    getContractFactory(
      name: "MADMarketplace721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADMarketplace721__factory>;
    getContractFactory(
      name: "MADRouter1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADRouter1155__factory>;
    getContractFactory(
      name: "MADRouter721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADRouter721__factory>;

    getContractAt(
      name: "FactoryEventsAndErrors1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FactoryEventsAndErrors1155>;
    getContractAt(
      name: "FactoryEventsAndErrors721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FactoryEventsAndErrors721>;
    getContractAt(
      name: "MarketplaceEventsAndErrors1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketplaceEventsAndErrors1155>;
    getContractAt(
      name: "MarketplaceEventsAndErrors721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketplaceEventsAndErrors721>;
    getContractAt(
      name: "RouterEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RouterEvents>;
    getContractAt(
      name: "FactoryVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FactoryVerifier>;
    getContractAt(
      name: "Owned",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Owned>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "SplitterImpl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SplitterImpl>;
    getContractAt(
      name: "MockERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC20>;
    getContractAt(
      name: "MockERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC2981>;
    getContractAt(
      name: "MockERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC721>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Metadata>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2981>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "ERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC2981>;
    getContractAt(
      name: "ERC1155B",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155B>;
    getContractAt(
      name: "ERC1155TokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155TokenReceiver>;
    getContractAt(
      name: "ERC1155BasicEventsAndErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155BasicEventsAndErrors>;
    getContractAt(
      name: "ERC1155LazyEventsAndErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155LazyEventsAndErrors>;
    getContractAt(
      name: "ERC1155MinimalEventsAndErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155MinimalEventsAndErrors>;
    getContractAt(
      name: "ERC1155WhitelistEventsAndErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155WhitelistEventsAndErrors>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "ERC1155Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Holder>;
    getContractAt(
      name: "ERC1155Basic",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Basic>;
    getContractAt(
      name: "ERC1155Lazy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Lazy>;
    getContractAt(
      name: "ERC1155Minimal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Minimal>;
    getContractAt(
      name: "ERC1155Whitelist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Whitelist>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721TokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721TokenReceiver>;
    getContractAt(
      name: "ERC721BasicEventsAndErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721BasicEventsAndErrors>;
    getContractAt(
      name: "ERC721LazyEventsAndErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721LazyEventsAndErrors>;
    getContractAt(
      name: "ERC721MinimalEventsAndErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721MinimalEventsAndErrors>;
    getContractAt(
      name: "ERC721WhitelistEventsAndErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721WhitelistEventsAndErrors>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "ERC721Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Holder>;
    getContractAt(
      name: "ERC721Basic",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Basic>;
    getContractAt(
      name: "ERC721Lazy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Lazy>;
    getContractAt(
      name: "ERC721Minimal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Minimal>;
    getContractAt(
      name: "ERC721Whitelist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Whitelist>;
    getContractAt(
      name: "Counters",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Counters>;
    getContractAt(
      name: "MAD",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MAD>;
    getContractAt(
      name: "MADFactory1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADFactory1155>;
    getContractAt(
      name: "MADFactory721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADFactory721>;
    getContractAt(
      name: "MADMarketplace1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADMarketplace1155>;
    getContractAt(
      name: "MADMarketplace721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADMarketplace721>;
    getContractAt(
      name: "MADRouter1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADRouter1155>;
    getContractAt(
      name: "MADRouter721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MADRouter721>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
