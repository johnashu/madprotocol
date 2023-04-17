/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../../../common";
import type {
  ERC721Basic,
  ERC721BasicInterface,
} from "../../../../../../contracts/lib/tokens/ERC721/Impl/ERC721Basic";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
      {
        internalType: "contract SplitterImpl",
        name: "_splitter",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "_fraction",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_erc20",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "LoopOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxSupplyReached",
    type: "error",
  },
  {
    inputs: [],
    name: "NotMintedYet",
    type: "error",
  },
  {
    inputs: [],
    name: "PublicMintClosed",
    type: "error",
  },
  {
    inputs: [],
    name: "UriLocked",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongPrice",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
    ],
    name: "BaseURILocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "newBaseURI",
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
        internalType: "bool",
        name: "newPublicState",
        type: "bool",
      },
    ],
    name: "PublicMintStateSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newRoyaltyFee",
        type: "uint256",
      },
    ],
    name: "RoyaltyFeeSet",
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
    name: "RoyaltyRecipientSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "baseURILock",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "erc20Owner",
        type: "address",
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
    name: "feeCount",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    name: "getBaseURI",
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
  {
    inputs: [],
    name: "getMintCount",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "erc20Owner",
        type: "address",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "payable",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
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
    name: "publicMintState",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setBaseURILock",
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
        internalType: "bool",
        name: "_publicMintState",
        type: "bool",
      },
    ],
    name: "setPublicMintState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "splitter",
    outputs: [
      {
        internalType: "contract SplitterImpl",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234620005945762002b4f803803806200001d8162000599565b92833981019061012081830312620005945780516001600160401b03929083811162000594578162000051918401620005bf565b906020808401518581116200059457826200006e918601620005bf565b9160408501519086821162000594576200008a918601620005bf565b93606081015160808201519060a08301519560018060a01b0394858816809803620005945760c08501516001600160601b03811699908a9003620005945760e0860151958787168097036200059457610100015196871680970362000594578251918b83116200057e576000988954936001958686811c9616801562000573575b848710146200047a578190601f968781116200051d575b5084908d888411600114620004b95792620004ad575b5050600019600383901b1c191690861b178a555b8051908d8211620004995785548681811c911680156200048e575b848210146200047a5790818684931162000427575b508390868311600114620003c3578c92620003b7575b5050600019600383901b1c191690851b1784555b60018060a01b03199680886008541617600855897f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7681604051a38360095581519b8c11620003a357600f548481811c9116801562000398575b82821014620003845780848e921162000339575b505080928c11600114620002be5750998092819260008051602062002b2f8339815191529a9b9c8a94620002b2575b50501b916000199060031b1c191617600f555b6011556012558481600a541617600a558560065584816007541617600755600b541617600b55604051937fc36422dcc77a5c93a5c48743078f8130c9fcc2a0ff893904ee62a3565688117c8286a283a26124fd9081620006328239f35b01519250388062000242565b909a91601f1983169b600f8a528c838b20938b915b8210620003205750508360008051602062002b2f8339815191529b9c9d1062000306575b505050811b01600f5562000255565b015160001960f88460031b161c19169055388080620002f7565b8284015185559386019392830192908101908e620002d3565b600f8b5284838c20918482850160051c840194106200037a575b0160051c019085905b8281106200036e57508d915062000213565b8b81550185906200035c565b9250819262000353565b634e487b7160e01b8a52602260045260248afd5b90607f1690620001ff565b634e487b7160e01b89526041600452602489fd5b01519050388062000192565b878d52848d208894509190601f1984168e5b87828210620004105750508411620003f6575b505050811b018455620001a6565b015160001960f88460031b161c19169055388080620003e8565b8385015186558b97909501949384019301620003d5565b909150868c52838c208680850160051c82019286861062000470575b918991869594930160051c01915b828110620004615750506200017c565b8e815585945089910162000451565b9250819262000443565b634e487b7160e01b8c52602260045260248cfd5b90607f169062000167565b634e487b7160e01b8b52604160045260248bfd5b01519050388062000138565b9190899450601f198416838052878420935b88828210620005065750508411620004ec575b505050811b018a556200014c565b015160001960f88460031b161c19169055388080620004de565b8385015186558c97909501949384019301620004cb565b9091508c8052848d208780850160051c82019287861062000569575b859493910160051c9091019089908f5b8382106200055a5750505062000122565b81558594508a91018f62000549565b9250819262000539565b95607f16956200010b565b634e487b7160e01b600052604160045260246000fd5b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200057e57604052565b919080601f84011215620005945782516001600160401b0381116200057e57602090620005f5601f8201601f1916830162000599565b92818452828287010111620005945760005b8181106200061d57508260009394955001015290565b85810183015184820184015282016200060756fe60806040526004361015610013575b600080fd5b60003560e01c806301ffc9a7146102cf57806306fdde03146102c6578063081812fc146102bd578063095ea7b3146102b457806313af4035146102ab578063150b7a02146102a257806318160ddd1461029957806322ab47a11461029057806323b872dd146102875780632a55205a1461027e578063362c0cb5146102755780633cd8045e1461026c57806342842e0e14610263578063438b1b4b1461025a5780634edd2d491461025157806351cff8d91461024857806355f804b31461023f5780636352211e1461023657806366c879a91461022d57806370a0823114610224578063714c53981461021b578063785e9e8614610212578063879fbedf146102095780638da5cb5b146102005780638fc3b549146101f75780639456fbcc146101ee57806395d89b41146101e5578063a035b1fe146101dc578063a0712d68146101d3578063a22cb465146101ca578063b88d4fde146101c1578063c87b56dd146101b8578063d5abeb01146101af578063e1c38ed9146101a65763e985e9c51461019e57600080fd5b61000e6117ef565b5061000e6117d0565b5061000e6117b1565b5061000e6116f2565b5061000e61160e565b5061000e61157b565b5061000e611425565b5061000e611406565b5061000e611360565b5061000e6110dc565b5061000e6110bd565b5061000e611093565b5061000e611023565b5061000e610ff9565b5061000e610f63565b5061000e610ee0565b5061000e610e70565b5061000e610e30565b5061000e610da5565b5061000e610ae3565b5061000e610abf565b5061000e610a06565b5061000e610928565b5061000e6108fe565b5061000e610870565b5061000e61080c565b5061000e6107f2565b5061000e6107a2565b5061000e610783565b5061000e61075e565b5061000e610652565b5061000e610579565b5061000e610524565b5061000e610440565b5061000e6102ea565b6001600160e01b031981160361000e57565b503461000e57602036600319011261000e57602060043561030a816102d8565b63ffffffff60e01b166301ffc9a760e01b8114908115610360575b811561034f575b811561033e575b506040519015158152f35b63152a902d60e11b14905038610333565b635b5e139f60e01b8114915061032c565b6380ac58cd60e01b81149150610325565b90600182811c921680156103a1575b602083101461038b57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610380565b50634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176103e457604052565b6103ec6103ab565b604052565b60005b8381106104045750506000910152565b81810151838201526020016103f4565b6040916020825261043481518092816020860152602086860191016103f1565b601f01601f1916010190565b503461000e57600080600319360112610521576040519080805461046381610371565b808552916001918083169081156104f7575060011461049d575b6104998561048d818703826103c2565b60405191829182610414565b0390f35b80809450527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b8284106104df57505050810160200161048d8261049961047d565b805460208587018101919091529093019281016104c4565b8695506104999693506020925061048d94915060ff191682840152151560051b820101929361047d565b80fd5b503461000e57602036600319011261000e576004356000526004602052602060018060a01b0360406000205416604051908152f35b6001600160a01b0381160361000e57565b6024359061057782610559565b565b503461000e57604036600319011261000e5760043561059781610559565b602435600081815260026020526040812054909291906001600160a01b0390811690338214801561062f575b6105cc906118cc565b610603846105e4856000526004602052604060002090565b80546001600160a01b0319166001600160a01b03909216919091179055565b6040519316907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258585a4f35b50818552600560209081526040808720336000908152925290205460ff166105c3565b503461000e57602036600319011261000e5760043561067081610559565b6008546001600160a01b03906106899082163314611858565b811680156106c25760009160085560405190337f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768484a3f35b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b608060031982011261000e5760043561070f81610559565b9160243561071c81610559565b916044359160643567ffffffffffffffff9283821161000e578060238301121561000e57816004013593841161000e576024848301011161000e576024019190565b503461000e5761076d366106f7565b50505050506020604051630a85bd0160e11b8152f35b503461000e57600036600319011261000e576020600c54604051908152f35b503461000e57600036600319011261000e57602060ff601354166040519015158152f35b606090600319011261000e576004356107de81610559565b906024356107eb81610559565b9060443590565b503461000e5761080a610804366107c6565b91611949565b005b503461000e57604036600319011261000e57604060018060a01b036007541661271061083c6006546024356120e6565b0482519182526020820152f35b60209067ffffffffffffffff8111610863575b60051b0190565b61086b6103ab565b61085c565b50604036600319011261000e5760043567ffffffffffffffff811161000e573660238201121561000e578060040135906108a982610849565b906108b760405192836103c2565b82825260209260248484019160051b8301019136831161000e57602401905b8282106108ef5761080a846108e961056a565b90611f3c565b813581529084019084016108d6565b503461000e57600036600319011261000e57600a546040516001600160a01b039091168152602090f35b503461000e5761080a61093a366107c6565b9190610947838284611949565b803b1592831561095a575b505050611b19565b604051630a85bd0160e11b8082523360048301526001600160a01b03948516602483015260448201929092526080606482015260006084820181905291945092602092849260a4928492165af19081156109f9575b6000916109cb575b506001600160e01b03191614388080610952565b6109ec915060203d81116109f2575b6109e481836103c2565b810190611af4565b386109b7565b503d6109da565b610a01611b0c565b6109af565b50606036600319011261000e57600435610a1f81610559565b60243590604435610a2f81610559565b610a4460018060a01b03600854163314611858565b600d54838101809111610ab2575b60125410610aa057610a63906120f9565b6000905b828210610a84575010610a7657005b63dfb035c96000526004601cfd5b90600190610a99610a93612262565b84611dcc565b0190610a67565b60405163d05cb60960e01b8152600490fd5b610aba611db5565b610a52565b503461000e57600036600319011261000e57602060ff601054166040519015158152f35b503461000e5760208060031936011261000e576004803591610b0483610559565b6008546001600160a01b039190610b1e9083163314611858565b600a548390610b3d906001600160a01b03165b6001600160a01b031690565b948260409687519687809263e919ecad60e01b82525afa948515610d98575b600095610d79575b50610b6e85612068565b92610b7886612068565b94600e549081151580610d6e575b15610d635790610ba191610b9a824761209a565b941661236f565b610bab6000600e55565b600a546000908590610bc5906001600160a01b0316610b31565b915b89898210610c155789898460005b838110610bde57005b80610c0f610bfe610bf16001948661202f565b516001600160a01b031690565b610c08838761202f565b519061236f565b01610bd5565b610cc6610cc0600194610c8887868a8d8882610cce9a518096631419245f60e11b82528180610c4b898883019190602083019252565b03915afa948515610d56575b600095610d25575b505163b34c8caf60e01b81526001600160a01b0385169181019182529485918291602090910190565b03818d5afa928315610d18575b600093610ce1575b50610cac90610cbb939461202f565b6001600160a01b039091169052565b6120c4565b876120e6565b612710900490565b610cd8828a61202f565b52018590610bc7565b610cbb935090610d09610cac928d803d10610d11575b610d0181836103c2565b810190612059565b935090610c9d565b503d610cf7565b610d20611b0c565b610c95565b610d4791929550833d8511610d4f575b610d3f81836103c2565b8101906120af565b939038610c5f565b503d610d35565b610d5e611b0c565b610c57565b505090504790610bab565b508084161515610b86565b610d91919550833d8511610d1157610d0181836103c2565b9338610b64565b610da0611b0c565b610b5c565b503461000e57602036600319011261000e5760043567ffffffffffffffff80821161000e573660238301121561000e578160040135908111610e23575b60405190610dfa601f8201601f1916602001836103c2565b808252366024828501011161000e57602081600092602461080a96018386013783010152611b58565b610e2b6103ab565b610de2565b503461000e57602036600319011261000e576004356000526002602052602060018060a01b0360406000205416610e68811515611893565b604051908152f35b503461000e57600036600319011261000e57610e9760018060a01b03600854163314611858565b600160ff196010541617601055600060405180610eb381611d38565b039020604051907f8f0a54da7ee5bbe880036935fcef1dc9f0568cbde68bcbd5e1eedd56df052ca08383a2f35b503461000e57602036600319011261000e57600435610efe81610559565b6001600160a01b03168015610f2f576000526003602052610499604060002054604051918291829190602083019252565b60405162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b6044820152606490fd5b503461000e57600080600319360112610521576040519080600f54610f8781610371565b808552916001918083169081156104f75750600114610fb0576104998561048d818703826103c2565b9250600f83526000805160206124a88339815191525b828410610fe157505050810160200161048d8261049961047d565b80546020858701810191909152909301928101610fc6565b503461000e57600036600319011261000e57600b546040516001600160a01b039091168152602090f35b503461000e57602036600319011261000e5760043580151580910361000e5760009061105a60018060a01b03600854163314611858565b60ff196013541660ff821617601355604051907f2f3b349e2956d565a50532dcc875a49be7f558411642122cf5e50ca9b4bb14e68383a2f35b503461000e57600036600319011261000e576008546040516001600160a01b039091168152602090f35b503461000e57600036600319011261000e576020600d54604051908152f35b503461000e5760408060031936011261000e576004908135916110fe83610559565b6024359261110b84610559565b6008546001600160a01b0392906111259084163314611858565b600a5461113a906001600160a01b0316610b31565b90845193849263e919ecad60e01b8452838360209586935afa948515611353575b600095611334575b5061116d85612068565b9661117786612068565b93600086858a600e549384151580611329575b156112bd5750516370a0823160e01b815230918101918252949593946111de946111d79385938892849291839003602001918391165afa9081156112b0575b600091611293575b5061209a565b9387612436565b6111e86000600e55565b600a546000908990611202906001600160a01b0316610b31565b915b8989821061124a575050505050505060005b83811061121f57005b80611244611232610bf16001948a61202f565b61123c838661202f565b519086612436565b01611216565b610cc6610cc0600194610c8887868a8d88826112809a518096631419245f60e11b82528180610c4b898883019190602083019252565b61128a828961202f565b52018990611204565b6112aa9150863d8811610d1157610d0181836103c2565b386111d1565b6112b8611b0c565b6111c9565b90516370a0823160e01b815230898201908152959791965094879450859350839003602001915082908a165afa91821561131c575b916112ff575b50906111e8565b6113169150823d8411610d1157610d0181836103c2565b386112f8565b611324611b0c565b6112f2565b50878716151561118a565b61134c919550833d8511610d1157610d0181836103c2565b9338611163565b61135b611b0c565b61115b565b503461000e57600080600319360112610521576040519080600180549161138683610371565b808652928281169081156104f757506001146113ac576104998561048d818703826103c2565b92508083527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8284106113ee57505050810160200161048d8261049961047d565b805460208587018101919091529093019281016113d3565b503461000e57600036600319011261000e576020601154604051908152f35b50602036600319011261000e57600480356001806009540361154a57600260095560ff601354161561153957600d5482810180911161152c575b6012541061151b57601154611472612308565b600e5481810180911161150e575b600e55611496846114903361228e565b936120e6565b908101809111611501575b036114f0576114af33612160565b6000905b8282106114d65750106114ca5761080a6001600955565b63dfb035c9600052601cfd5b80916114e96114e3612262565b33611dcc565b01906114b3565b60405163f7760f2560e01b81528390fd5b611509611db5565b6114a1565b611516611db5565b611480565b60405163d05cb60960e01b81528390fd5b611534611db5565b61145f565b6040516316851fc760e11b81528390fd5b60405162461bcd60e51b8152602081850152600a6024820152695245454e5452414e435960b01b6044820152606490fd5b503461000e57604036600319011261000e5760043561159981610559565b6024359081151580920361000e573360009081526005602090815260408083206001600160a01b0385168452909152902060ff1981541660ff841617905560405191825260018060a01b0316907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b503461000e5761080a611620366106f7565b909261162d838287611949565b803b1593841561163f575b8685611b19565b82945060006020949660a4604051809881978296630a85bd0160e11b9c8d855233600486015260018060a01b038097166024860152604485015260806064850152816084850152848401378181018301859052601f01601f19168101030193165af19081156116e5575b6000916116c7575b506001600160e01b031916148038808080611638565b6116df915060203d81116109f2576109e481836103c2565b386116b1565b6116ed611b0c565b6116a9565b503461000e57602036600319011261000e57600435600d54811161179f576040519060808201604052607f820190600a80603092818106840185530491825b6117865761049961176961048d86886080601f1992838101920301815261177a60405194859261176360208501611d38565b90611d01565b64173539b7b760d91b815260050190565b039081018352826103c2565b9080929360001901938181068301855304919082611731565b604051635d68437560e11b8152600490fd5b503461000e57600036600319011261000e576020601254604051908152f35b503461000e57600036600319011261000e576020600e54604051908152f35b503461000e57604036600319011261000e57602060ff61184c60043561181481610559565b6024359061182182610559565b60018060a01b03166000526005845260406000209060018060a01b0316600052602052604060002090565b54166040519015158152f35b1561185f57565b60405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606490fd5b1561189a57565b60405162461bcd60e51b815260206004820152600a6024820152691393d517d3525395115160b21b6044820152606490fd5b156118d357565b60405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b6044820152606490fd5b1561191057565b60405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b6044820152606490fd5b9060018060a01b0380611966856000526002602052604060002090565b541691818416928303611ac2576119bc6119f792821694611988861515611909565b8433148015611a7b575b8015611a47575b6119a2906118cc565b6001600160a01b0316600090815260036020526040902090565b80546000190190556001600160a01b0381166000908152600360205260409020805460010190556105e4856000526002602052604060002090565b611a1e611a0e846000526004602052604060002090565b80546001600160a01b0319169055565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6000604051a4565b506119a2611a72610b31611a658a6000526004602052604060002090565b546001600160a01b031690565b33149050611999565b50611abd611ab633611a9f8460018060a01b03166000526005602052604060002090565b9060018060a01b0316600052602052604060002090565b5460ff1690565b611992565b60405162461bcd60e51b815260206004820152600a60248201526957524f4e475f46524f4d60b01b6044820152606490fd5b9081602091031261000e5751611b09816102d8565b90565b506040513d6000823e3d90fd5b15611b2057565b60405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b6044820152606490fd5b90611b6e60018060a01b03600854163314611858565b6001918260ff60105416151514611c9057805167ffffffffffffffff8111611c83575b611ba581611ba0600f54610371565b611ca2565b60209384601f8311600114611c0f5750818091611bdb9596600093611c04575b501b916000199060031b1c191617600f55611d18565b7ff9c7803e94e0d3c02900d8a90893a6d5e90dd04d32a4cfe825520f82bf9f32f66000604051a2565b850151925038611bc5565b600f600052601f198316959192916000805160206124a8833981519152916000905b888210611c6c57505082611bdb969710611c53575b5050811b01600f55611d18565b84015160001960f88460031b161c191690553880611c46565b808684958294958a01518155019401920190611c31565b611c8b6103ab565b611b91565b604051639619d74760e01b8152600490fd5b601f8111611cae575050565b600090600f82526000805160206124a8833981519152906020601f850160051c83019410611cf7575b601f0160051c01915b828110611cec57505050565b818155600101611ce0565b9092508290611cd7565b90611d14602092828151948592016103f1565b0190565b611d30906020604051928284809451938492016103f1565b810103902090565b600f5460009291611d4882610371565b91600190818116908115611da25750600114611d6357505050565b9091929350600f6000526000805160206124a8833981519152906000915b848310611d8f575050500190565b8181602092548587015201920191611d81565b60ff191683525050811515909102019150565b50634e487b7160e01b600052601160045260246000fd5b906001600160a01b038083169190611de5831515611909565b6000908282526002602052604082205416611f06576001600160a01b0384166000908152600360205260409020610577949060018154019055611e36816105e4856000526002602052604060002090565b604051908385847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8186a43b15938415611e74575b50505050611b19565b630a85bd0160e11b80835233600484015260006024840181905260448401959095526080606484015260848301949094529293509091602090829060a490829086905af1918215611ef9575b91611edb575b506001600160e01b0319161438808080611e6b565b611ef3915060203d81116109f2576109e481836103c2565b38611ec6565b611f01611b0c565b611ec0565b60405162461bcd60e51b815260206004820152600e60248201526d1053149150511657d3525395115160921b6044820152606490fd5b90611f5c60018060a01b0391611f5783600854163314611858565b6121a0565b6000908251925b838310611f7357505010610a7657565b9091600c90815480156120215760019260001980920190556000611f97838661202f565b51918282527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef826020926002845260409060038b838520541695611fdc871515611893565b86855252818320908154019055612000611a0e876000526002602052604060002090565b612017611a0e876000526004602052604060002090565b51a4019190611f63565b63ce3a3d376000526004601cfd5b80518210156120435760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b9081602091031261000e575190565b9061207282610849565b61207f60405191826103c2565b8281528092612090601f1991610849565b0190602036910137565b919082039182116120a757565b610577611db5565b9081602091031261000e5751611b0981610559565b60649080600019048211811515166120da570290565b6120e2611db5565b0290565b80600019048211811515166120da570290565b6121028161228e565b6001600160a01b0333838216148015612154575b61211f57505050565b612127612308565b820361214657600b54168061213b57505050565b6105779230916123ba565b63f7760f256000526004601cfd5b5080600b541615612116565b6121698161228e565b6001600160a01b0333838216148015612194575b61218657505050565b600b54168061213b57505050565b5080600b54161561217d565b6121a98161228e565b6001600160a01b0333838216148015612256575b6121c657505050565b6008546000908216803b63ffffffff166121f0575082905061214657600b54168061213b57505050565b604051633b7279e960e21b815263044df8e760e41b600482015290602090829060249082905afa918215612249575b9161222b575b50612127565b612243915060203d8111610d1157610d0181836103c2565b38612225565b612251611b0c565b61221f565b5080600b5416156121bd565b6001600c5401600c55600d5460018101809111612281575b80600d5590565b612289611db5565b61227a565b600b546001600160a01b03908116919082156123015760446020926040519485938492636eb1769f60e11b84521660048301523060248301525afa9081156122f4575b6000916122dc575090565b611b09915060203d8111610d1157610d0181836103c2565b6122fc611b0c565b6122d1565b5050503490565b6008546000906001600160a01b0316803b63ffffffff1661232a575050600090565b604051633b7279e960e21b81526340d097c360e01b600482015290602090829060249082905afa918215612362575b916122dc575090565b61236a611b0c565b612359565b600080809381935af11561237f57565b60405162461bcd60e51b815260206004820152601360248201527211551217d514905394d1915497d19052531151606a1b6044820152606490fd5b9060006064926020958295604051946323b872dd60e01b86526004860152602485015260448401525af13d15601f3d11600160005114161716156123fa57565b60405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606490fd5b600091826044926020956040519363a9059cbb60e01b8552600485015260248401525af13d15601f3d116001600051141617161561247057565b60405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606490fdfe8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac802a26469706673582212205db998cc9f64bcf7e9e72e2a1a949343bb454402dbf89c83cbacf4285ceb19f964736f6c634300081000332a5a1009e36beb67c3a1ada61dd1343d7e9ec62c70965492fbaa06234f8316b1";

type ERC721BasicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721BasicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Basic__factory extends ContractFactory {
  constructor(...args: ERC721BasicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _baseURI: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _maxSupply: PromiseOrValue<BigNumberish>,
    _splitter: PromiseOrValue<string>,
    _fraction: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<string>,
    _erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721Basic> {
    return super.deploy(
      _name,
      _symbol,
      _baseURI,
      _price,
      _maxSupply,
      _splitter,
      _fraction,
      _router,
      _erc20,
      overrides || {}
    ) as Promise<ERC721Basic>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _baseURI: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _maxSupply: PromiseOrValue<BigNumberish>,
    _splitter: PromiseOrValue<string>,
    _fraction: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<string>,
    _erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _baseURI,
      _price,
      _maxSupply,
      _splitter,
      _fraction,
      _router,
      _erc20,
      overrides || {}
    );
  }
  override attach(address: string): ERC721Basic {
    return super.attach(address) as ERC721Basic;
  }
  override connect(signer: Signer): ERC721Basic__factory {
    return super.connect(signer) as ERC721Basic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721BasicInterface {
    return new utils.Interface(_abi) as ERC721BasicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Basic {
    return new Contract(address, _abi, signerOrProvider) as ERC721Basic;
  }
}