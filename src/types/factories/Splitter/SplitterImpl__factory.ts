/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../common";
import type {
  SplitterImpl,
  SplitterImplInterface,
} from "../../Splitter/SplitterImpl";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shares_",
        type: "uint256[]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyPayee",
    type: "error",
  },
  {
    inputs: [],
    name: "DeadAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "DeniedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShare",
    type: "error",
  },
  {
    inputs: [],
    name: "LengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "NoPayees",
    type: "error",
  },
  {
    inputs: [],
    name: "NoShares",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC20PaymentReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_payees",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_shares",
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
    name: "payeesLength",
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
        name: "account",
        type: "address",
      },
    ],
    name: "releasable",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "releasable",
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
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "releaseAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
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
        name: "account",
        type: "address",
      },
    ],
    name: "released",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "totalReleased",
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
    name: "totalReleased",
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
    name: "totalShares",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60406080815262000ca5803803806200001881620002a5565b92833981018282820312620002805781516001600160401b0390818111620002805783019180601f840112156200028057825191602094620000646200005e85620002cb565b620002a5565b948686868152018760059660051b8301019185831162000280578801905b8282106200028457505050858101519182116200028057019080601f8301121562000280578151620000b86200005e82620002cb565b92868085848152019260051b820101928311620002805786809101915b8383106200026f5750505050825192815184036200025b5783156200024a575f5b8481106200010d5786516109ac9081620002f98239f35b6001600160a01b03620001218284620002e3565b511690620001308185620002e3565b518215620002395780156200022857825f52858852885f20546200021757600680549068010000000000000000821015620002035760018201808255821015620001ef575f52885f20018360018060a01b0319825416179055825f5285885280895f20555f54818101809111620001db576001937f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac928b925f5582519182528a820152a101620000f6565b634e487b7160e01b5f52601160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52604160045260245ffd5b885163215a865160e11b8152600490fd5b885163040357dd60e21b8152600490fd5b88516384ff3e1b60e01b8152600490fd5b8551637b21919d60e01b8152600490fd5b85516001621398b960e31b03198152600490fd5b8251815291810191879101620000d5565b5f80fd5b81516001600160a01b03811681036200028057815290880190880162000082565b6040519190601f01601f191682016001600160401b038111838210176200020357604052565b6001600160401b038111620002035760051b60200190565b8051821015620001ef5760209160051b01019056fe604060808152600436101561004b575b3615610019575f80fd5b513381523460208201527f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be77090604090a1005b5f3560e01c8063191655871461041c578063283248be146103cd5780633a98ef39146103b0578063406072a91461035957806348b750441461032e578063580fc80a146102b85780635be7fde81461024d5780639852595c14610209578063a3f8eace146101e4578063b34c8caf146101a0578063c45ac0501461016c578063d79779b214610128578063e33b7de31461010a5763e919ecad0361000f5734610106575f600319360112610106576020906006549051908152f35b5f80fd5b5034610106575f600319360112610106576020906001549051908152f35b50346101065760206003193601126101065760209073ffffffffffffffffffffffffffffffffffffffff61015a6104b8565b165f5260038252805f20549051908152f35b503461010657806003193601126101065760209061019961018b6104b8565b6101936104db565b906107d1565b9051908152f35b50346101065760206003193601126101065760209073ffffffffffffffffffffffffffffffffffffffff6101d26104b8565b165f5260058252805f20549051908152f35b5034610106576020600319360112610106576020906101996102046104b8565b610794565b50346101065760206003193601126101065760209073ffffffffffffffffffffffffffffffffffffffff61023b6104b8565b165f5260028252805f20549051908152f35b34610106575f600319360112610106576006545f5b81811061026b57005b8073ffffffffffffffffffffffffffffffffffffffff61028c600193610456565b90549060031b1c1661029d81610794565b6102a9575b5001610262565b6102b290610538565b836102a2565b34610106576020600319360112610106576102d16104b8565b6006545f5b8181106102df57005b8073ffffffffffffffffffffffffffffffffffffffff610300600193610456565b90549060031b1c1661031281866107d1565b61031e575b50016102d6565b610328908561063c565b84610317565b503461010657600319360112610106576103576103496104b8565b6103516104db565b9061063c565b005b50346101065780600319360112610106576020906103756104b8565b61037d6104db565b9073ffffffffffffffffffffffffffffffffffffffff8091165f5260048452825f2091165f528252805f20549051908152f35b5034610106575f600319360112610106576020905f549051908152f35b503461010657602060031936011261010657600435906006548210156101065773ffffffffffffffffffffffffffffffffffffffff61040d602093610456565b92905490519260031b1c168152f35b346101065760206003193601126101065760043573ffffffffffffffffffffffffffffffffffffffff811681036101065761035790610538565b60065481101561048b5760065f527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f01905f90565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361010657565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361010657565b9190820180921161050b57565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff16805f5260056020526040805f2054156106135761056a82610794565b9182156105ea57805f52600260205261058683835f20546104fe565b815f526002602052825f205561059e836001546104fe565b6001555f80808086855af1156105dd577fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b0569282519182526020820152a1565b63b12d13eb5f526004601cfd5b600482517fb8e10e7e000000000000000000000000000000000000000000000000000000008152fd5b600490517fb317087b000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff80831692835f526005602052604092835f20541561076b5761067382826107d1565b92831561074257604460105f84819460209616998a83526004875289832090835286528882206106a48982546104fe565b9055898252600386528882206106bb8982546104fe565b905586601452876034526fa9059cbb00000000000000000000000082525af13d1560015f5114171615610735575f603452915173ffffffffffffffffffffffffffffffffffffffff909216825260208201527f3be5b7a71e84ed12875d241991c70855ac5817d847039e17a9d895c1ceb0f18a90604090a2565b6390b8ec185f526004601cfd5b600485517fb8e10e7e000000000000000000000000000000000000000000000000000000008152fd5b600484517fb317087b000000000000000000000000000000000000000000000000000000008152fd5b6107ce906107a547600154906104fe565b73ffffffffffffffffffffffffffffffffffffffff82165f52600260205260405f2054916108ff565b90565b9073ffffffffffffffffffffffffffffffffffffffff80921660408051937f70a0823100000000000000000000000000000000000000000000000000000000855230600486015260208086602481875afa9586156108f5575f96610862575b506108496107ce96855f5260038352845f2054906104fe565b935f5260048152825f209185165f52525f2054916108ff565b9550803d82116108ee575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f820116870187811067ffffffffffffffff8211176108c1578291889186528101031261010657945194610849610830565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b503d61086d565b83513d5f823e3d90fd5b73ffffffffffffffffffffffffffffffffffffffff165f52600560205260405f20549081810291818304149015171561050b575f54908115610949570490810390811161050b5790565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffdfea26469706673582212206eccfbedc3169c194ca081c9f8188ce45bd717d6f7d44a191cb893bb78ffe63064736f6c63430008170033";

type SplitterImplConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SplitterImplConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SplitterImpl__factory extends ContractFactory {
  constructor(...args: SplitterImplConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    payees: AddressLike[],
    shares_: BigNumberish[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(payees, shares_, overrides || {});
  }
  override deploy(
    payees: AddressLike[],
    shares_: BigNumberish[],
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(payees, shares_, overrides || {}) as Promise<
      SplitterImpl & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SplitterImpl__factory {
    return super.connect(runner) as SplitterImpl__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SplitterImplInterface {
    return new Interface(_abi) as SplitterImplInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SplitterImpl {
    return new Contract(address, _abi, runner) as unknown as SplitterImpl;
  }
}
