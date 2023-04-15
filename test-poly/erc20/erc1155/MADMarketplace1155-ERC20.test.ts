import "@nomicfoundation/hardhat-chai-matchers";
// import "hardhat-tracer";
import {
  loadFixture,
  mine,
} from "@nomicfoundation/hardhat-network-helpers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber, ContractReceipt, Wallet } from "ethers";
import {
  ethers,
  network, // tracer
} from "hardhat";

import {
  MADFactory1155,
  MADMarketplace1155,
  MADRouter1155,
  MockERC20,
  MockERC20__factory,
} from "../../../src/types";
import { MarketplaceErrors } from "./../../utils/errors";
import {
  dead,
  getOrderId1155,
  madFixture1155F,
} from "./../../utils/madFixtures";

describe("MADMarketplace1155 - ERC20 Payments", () => {
  type WalletWithAddress = Wallet & SignerWithAddress;

  // contract deployer/admin
  let owner: WalletWithAddress;

  // ambassador
  let amb: WalletWithAddress;

  // marketplace address
  let mad: WalletWithAddress;

  // extra EOAs
  let acc01: WalletWithAddress;
  let acc02: WalletWithAddress;
  let acc03: WalletWithAddress;

  let f1155: MADFactory1155;
  let m1155: MADMarketplace1155;
  let r1155: MADRouter1155;
  let erc20: MockERC20;

  const price: BigNumber = ethers.utils.parseEther("1");
  const erc20Balance: BigNumber =
    ethers.utils.parseEther("500");

  before("Set signers and reset network", async () => {
    [owner, amb, mad, acc01, acc02, acc03] =
      await // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (ethers as any).getSigners();

    await network.provider.send("hardhat_reset", [
      {
        forking: {
          jsonRpcUrl: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
          blockNumber: 39835000,
        },
      },
    ]);
  });
  beforeEach("Load deployment fixtures", async () => {
    ({ f1155, m1155, r1155, erc20 } = await loadFixture(
      madFixture1155F,
    ));
    await r1155.deployed();
    await m1155.deployed();
    await f1155.deployed();
    let tx = await acc01.sendTransaction({
      to: erc20.address,
      value: erc20Balance,
    });
    await tx.wait();

    tx = await acc02.sendTransaction({
      to: erc20.address,
      value: erc20Balance,
    });
    await tx.wait();

    tx = await acc03.sendTransaction({
      to: erc20.address,
      value: erc20Balance,
    });
    await tx.wait();
  });

  describe("Init", async () => {
    it("Marketplace should initialize with ERC20 payment token", async () => {
      expect(m1155).to.be.ok;
      expect(await m1155.callStatic.name()).to.eq("market");
      expect(await m1155.erc20()).to.eq(erc20.address);
      expect(await r1155.erc20()).to.eq(erc20.address);
      expect(await m1155.recipient()).to.eq(owner.address);
      expect(await m1155.minOrderDuration()).to.eq(300);
      expect(await m1155.minAuctionIncrement()).to.eq(300);
      expect(await m1155.minBidValue()).to.eq(20);
      expect(await m1155.MADFactory1155()).to.eq(
        f1155.address,
      );
    });
  });
  // describe("Owner Functions", async () => {
  //   it("Should update ERC20 payment token address", async () => {
  //     const tx = await m1155.setPaymentToken(erc20.address);

  //     expect(tx).to.be.ok;
  //     expect(await m1155.callStatic.erc20()).to.eq(
  //       erc20.address,
  //     );
  //     await expect(
  //       m1155.connect(acc02).setPaymentToken(erc20.address),
  //     ).to.be.revertedWith(MarketplaceErrors.Unauthorized);
  //   });
  // });
  describe("Buying", async () => {
    it("Should revert buy if buyer has insufficient ERC20 balance", async () => {
      // acc02 = seller
      // acc01 = buyer
      await m1155.updateSettings(300, 10, 20, 31536000);
      await f1155
        .connect(acc02)
        .splitterCheck(
          "MADSplitter1",
          amb.address,
          dead,
          20,
          0,
        );
      const splAddr = await f1155.callStatic.getDeployedAddr(
        "MADSplitter1",
      );
      const minAddr = await f1155.callStatic.getDeployedAddr(
        "MinSalt",
      );
      await f1155
        .connect(acc02)
        .createCollection(
          0,
          "MinSalt",
          "1155Minimal",
          "MIN",
          price,
          1,
          "cid/id.json",
          splAddr,
          750,
        );
      const min = await ethers.getContractAt(
        "ERC1155Minimal",
        minAddr,
      );

      await erc20
        .connect(acc02)
        .approve(
          r1155.address,
          ethers.utils.parseEther("0.25"),
        );
      await r1155
        .connect(acc02)
        .minimalSafeMint(min.address, acc02.address, 1, {
          value: ethers.utils.parseEther("0.25"),
        });
      const tx = await min
        .connect(acc02)
        .setApprovalForAll(m1155.address, true);
      const blockTimestamp = (
        await m1155.provider.getBlock(tx.blockNumber || 0)
      ).timestamp;

      const fpTx = await m1155
        .connect(acc02)
        .fixedPrice(
          min.address,
          1,
          1,
          price,
          blockTimestamp + 301,
        );
      const fpRc: ContractReceipt = await fpTx.wait();
      const fpBn = fpRc.blockNumber;
      const fpOrderId = getOrderId1155(
        fpBn,
        min.address,
        1,
        1,
        acc02.address,
      );

      await expect(
        m1155.connect(acc01).buy(fpOrderId),
      ).to.be.revertedWithCustomError(
        m1155,
        MarketplaceErrors.WrongPrice,
      );
    });
    it("Should buy token with ERC20, distribute ERC20 splitter and fees", async () => {
      // acc02 = seller
      // acc01 = buyer

      const ownerERC20Bal = await erc20.balanceOf(
        await m1155.callStatic.recipient(),
      );

      // Mint and list token
      await m1155.updateSettings(300, 10, 20, 31536000);
      await f1155
        .connect(acc02)
        .splitterCheck(
          "MADSplitter1",
          amb.address,
          dead,
          20,
          0,
        );
      const splAddr = await f1155.callStatic.getDeployedAddr(
        "MADSplitter1",
      );
      const minAddr = await f1155.callStatic.getDeployedAddr(
        "MinSalt",
      );
      await f1155
        .connect(acc02)
        .createCollection(
          0,
          "MinSalt",
          "1155Minimal",
          "MIN",
          price,
          1,
          "cid/id.json",
          splAddr,
          1000,
        );
      const min = await ethers.getContractAt(
        "ERC1155Minimal",
        minAddr,
      );
      const splitter = await ethers.getContractAt(
        "SplitterImpl",
        splAddr,
      );

      // Mint the token with erc20
      await erc20
        .connect(acc02)
        .approve(
          r1155.address,
          ethers.utils.parseEther("0.25"),
        );
      await r1155
        .connect(acc02)
        .minimalSafeMint(min.address, acc02.address, 1);

      // acc02 = erc20Balance - 0.25
      expect(await erc20.balanceOf(acc02.address)).to.equal(
        erc20Balance.sub(ethers.utils.parseEther("0.25")),
      );

      // Create marketplace order
      const tx = await min
        .connect(acc02)
        .setApprovalForAll(m1155.address, true);
      const blockTimestamp = (
        await m1155.provider.getBlock(tx.blockNumber || 0)
      ).timestamp;
      const fpTx = await m1155
        .connect(acc02)
        .fixedPrice(
          min.address,
          1,
          1,
          price,
          blockTimestamp + 301,
        );
      const fpRc: ContractReceipt = await fpTx.wait();
      const fpBn = fpRc.blockNumber;
      const fpOrderId = getOrderId1155(
        fpBn,
        min.address,
        1,
        1,
        acc02.address,
      );
      await mine(10);

      // Set ERC20 balances and approve for maretplace purchase
      const erc20Tx = await erc20
        .connect(acc01)
        .approve(m1155.address, price);
      expect(erc20Tx).to.be.ok;
      const result = await erc20.callStatic.allowance(
        acc01.address,
        m1155.address,
      );
      expect(result).to.equal(price);

      // Buy the token
      const buyTx = await m1155.connect(acc01).buy(fpOrderId);

      // Test ERC20 buy response
      await expect(buyTx)
        .to.be.ok.and.to.emit(m1155, "Claim")
        .withArgs(
          minAddr,
          1,
          1,
          fpOrderId,
          acc02.address,
          acc01.address,
          price,
        );

      // Validate buyer and seller ERC20 balances
      // acc02 = erc20Balance - 0.25 + (1 - 10%.royalties - 10%.fee)
      expect(await erc20.balanceOf(acc02.address)).to.equal(
        erc20Balance
          .sub(ethers.utils.parseEther("0.25"))
          .add(ethers.utils.parseEther("0.8")),
      );

      expect(await erc20.balanceOf(acc01.address)).to.equal(
        erc20Balance.sub(ethers.utils.parseEther("1")),
      );

      // Validate buyer ERC20 balances after royalties paid out
      // acc02 = erc20Balance - 0.25 + (1 - 10%.royalties - 10%.fee) + 10%.royalties
      const splitTxCreator = await splitter[
        "release(address,address)"
      ](erc20.address, acc02.address);
      expect(splitTxCreator).to.be.ok;
      expect(await erc20.balanceOf(acc02.address)).to.equal(
        erc20Balance
          .sub(ethers.utils.parseEther("0.25"))
          .add(ethers.utils.parseEther("0.8"))
          .add(ethers.utils.parseEther("0.08")),
      );

      // Validate ERC2O amb payout balances
      const splitTxAmb = await splitter[
        "release(address,address)"
      ](erc20.address, amb.address);
      expect(splitTxAmb).to.be.ok;
      expect(await erc20.balanceOf(amb.address)).to.equal(
        ethers.utils.parseEther("0.02"),
      );

      // Validate ERC2O MAD fee payout balances
      expect(
        await erc20.balanceOf(
          await m1155.callStatic.recipient(),
        ),
      ).to.equal(
        ownerERC20Bal.add(ethers.utils.parseEther("0.1")),
      );
    });
    it("Should revert bid if bidder has insufficient ERC20 balance", async () => {
      // acc02 = seller
      // acc01 = buyer
      await m1155.updateSettings(300, 10, 20, 31536000);
      await f1155
        .connect(acc02)
        .splitterCheck(
          "MADSplitter1",
          amb.address,
          dead,
          20,
          0,
        );
      const splAddr = await f1155.callStatic.getDeployedAddr(
        "MADSplitter1",
      );
      const minAddr = await f1155.callStatic.getDeployedAddr(
        "MinSalt",
      );
      await f1155
        .connect(acc02)
        .createCollection(
          0,
          "MinSalt",
          "1155Minimal",
          "MIN",
          price,
          1,
          "cid/id.json",
          splAddr,
          750,
        );
      const min = await ethers.getContractAt(
        "ERC1155Minimal",
        minAddr,
      );
      await erc20
        .connect(acc02)
        .approve(
          r1155.address,
          ethers.utils.parseEther("0.25"),
        );
      await r1155
        .connect(acc02)
        .minimalSafeMint(min.address, acc02.address, 1, {
          value: ethers.utils.parseEther("0.25"),
        });
      const tx = await min
        .connect(acc02)
        .setApprovalForAll(m1155.address, true);
      const blockTimestamp = (
        await m1155.provider.getBlock(tx.blockNumber || 0)
      ).timestamp;

      const fpTx = await m1155
        .connect(acc02)
        .englishAuction(
          min.address,
          1,
          1,
          price,
          blockTimestamp + 301,
        );
      const fpRc: ContractReceipt = await fpTx.wait();
      const fpBn = fpRc.blockNumber;
      const fpOrderId = getOrderId1155(
        fpBn,
        min.address,
        1,
        1,
        acc02.address,
      );

      await expect(
        m1155.connect(acc01).bid(fpOrderId),
      ).to.be.revertedWithCustomError(
        m1155,
        MarketplaceErrors.WrongPrice,
      );
    });
    it("Should bid, then out bid, and win token with ERC20, distribute ERC20 splitter and fees", async () => {
      // acc02 = seller
      // acc01 = buyer

      const ownerERC20Bal = await erc20.balanceOf(
        await m1155.callStatic.recipient(),
      );

      // Mint token
      await m1155.updateSettings(300, 10, 20, 31536000);
      await f1155
        .connect(acc02)
        .splitterCheck(
          "MADSplitter1",
          amb.address,
          dead,
          20,
          0,
        );
      const splAddr = await f1155.callStatic.getDeployedAddr(
        "MADSplitter1",
      );
      const minAddr = await f1155.callStatic.getDeployedAddr(
        "MinSalt",
      );
      await f1155
        .connect(acc02)
        .createCollection(
          0,
          "MinSalt",
          "1155Minimal",
          "MIN",
          price,
          1,
          "cid/id.json",
          splAddr,
          1000,
        );
      const min = await ethers.getContractAt(
        "ERC1155Minimal",
        minAddr,
      );
      const splitter = await ethers.getContractAt(
        "SplitterImpl",
        splAddr,
      );

      // Mint the token with erc20
      await erc20
        .connect(acc02)
        .approve(
          r1155.address,
          ethers.utils.parseEther("0.25"),
        );
      await r1155
        .connect(acc02)
        .minimalSafeMint(min.address, acc02.address, 1);

      // acc02 = erc20Balance - 0.25
      expect(await erc20.balanceOf(acc02.address)).to.equal(
        erc20Balance.sub(ethers.utils.parseEther("0.25")),
      );

      // List token
      const tx = await min
        .connect(acc02)
        .setApprovalForAll(m1155.address, true);
      const blockTimestamp = (
        await m1155.provider.getBlock(tx.blockNumber || 0)
      ).timestamp;
      const fpTx = await m1155
        .connect(acc02)
        .englishAuction(
          min.address,
          1,
          1,
          ethers.utils.parseEther("0.1"),
          blockTimestamp + 301,
        );
      const fpRc: ContractReceipt = await fpTx.wait();
      const fpBn = fpRc.blockNumber;
      const fpOrderId = getOrderId1155(
        fpBn,
        min.address,
        1,
        1,
        acc02.address,
      );

      // Bid for the token
      await erc20
        .connect(acc01)
        .approve(
          m1155.address,
          ethers.utils.parseEther("0.1"),
        );
      const bidTx = await m1155.connect(acc01).bid(fpOrderId);
      expect(bidTx).to.be.ok;
      await mine(300);

      // Bid again for the token with a higher price
      await erc20
        .connect(acc01)
        .approve(m1155.address, price);
      const bidTx2 = await m1155
        .connect(acc01)
        .bid(fpOrderId);
      expect(bidTx2).to.be.ok;

      // wait for auction to close and claim
      await mine(600);
      const claimTx = await m1155
        .connect(acc01)
        .claim(fpOrderId);

      // Test ERC20 buy response
      await expect(claimTx)
        .to.be.ok.and.to.emit(m1155, "Claim")
        .withArgs(
          minAddr,
          1,
          1,
          fpOrderId,
          acc02.address,
          acc01.address,
          price,
        );

      // Validate buyer and seller ERC20 balances
      // acc02 = erc20Balance - 0.25 + (1 - 10%.royalties - 10%.fee
      expect(await erc20.balanceOf(acc02.address)).to.equal(
        erc20Balance
          .sub(ethers.utils.parseEther("0.25"))
          .add(ethers.utils.parseEther("0.8")),
      );

      expect(await erc20.balanceOf(acc01.address)).to.equal(
        erc20Balance
          .sub(ethers.utils.parseEther("1"))
          .sub(ethers.utils.parseEther("0.1")),
      );

      // Validate buyer ERC20 balances after royalties paid out
      // acc02 = erc20Balance - 0.25 + (1 - 10%.royalties - 10%.fee) + 10%.royalties
      const splitTxCreator = await splitter[
        "release(address,address)"
      ](erc20.address, acc02.address);
      expect(splitTxCreator).to.be.ok;
      expect(await erc20.balanceOf(acc02.address)).to.equal(
        erc20Balance.add(ethers.utils.parseEther("0.63")),
      );

      // Validate ERC2O amb payout balances
      const splitTxAmb = await splitter[
        "release(address,address)"
      ](erc20.address, amb.address);
      expect(splitTxAmb).to.be.ok;
      expect(await erc20.balanceOf(amb.address)).to.equal(
        ethers.utils.parseEther("0.02"),
      );

      // Validate ERC2O MAD fee payout balances
      expect(
        await erc20.balanceOf(
          await m1155.callStatic.recipient(),
        ),
      ).to.equal(
        ownerERC20Bal.add(ethers.utils.parseEther("0.1")),
      );

      // user withdraw their balance
      expect(
        await m1155
          .connect(acc01)
          .withdrawOutbid(erc20.address, 0, 0),
      ).to.be.ok;

      const bal2 = await m1155
        .connect(acc01)
        .getOutbidBalance();
      expect(bal2).to.equal(0);

      expect(await erc20.balanceOf(acc01.address)).to.equal(
        // we didn't reclaim yet
        erc20Balance.sub(ethers.utils.parseEther("1")),
      );
    });
    it("Should bid, then out bid, and win token with ERC20, distribute ERC20 splitter and fees, withdraw ERC20 (swapped to WBTC)", async () => {
      // acc02 = seller
      // acc01 = buyer

      const ownerERC20Bal = await erc20.balanceOf(
        await m1155.callStatic.recipient(),
      );

      // Mint token
      await m1155.updateSettings(300, 10, 20, 31536000);
      await f1155
        .connect(acc02)
        .splitterCheck(
          "MADSplitter1",
          amb.address,
          dead,
          20,
          0,
        );
      const splAddr = await f1155.callStatic.getDeployedAddr(
        "MADSplitter1",
      );
      const minAddr = await f1155.callStatic.getDeployedAddr(
        "MinSalt",
      );
      await f1155
        .connect(acc02)
        .createCollection(
          0,
          "MinSalt",
          "1155Minimal",
          "MIN",
          price,
          1,
          "cid/id.json",
          splAddr,
          1000,
        );
      const min = await ethers.getContractAt(
        "ERC1155Minimal",
        minAddr,
      );
      const splitter = await ethers.getContractAt(
        "SplitterImpl",
        splAddr,
      );

      // Mint the token with erc20
      await erc20
        .connect(acc02)
        .approve(
          r1155.address,
          ethers.utils.parseEther("0.25"),
        );
      await r1155
        .connect(acc02)
        .minimalSafeMint(min.address, acc02.address, 1);

      // acc02 = erc20Balance - 0.25
      expect(await erc20.balanceOf(acc02.address)).to.equal(
        erc20Balance.sub(ethers.utils.parseEther("0.25")),
      );

      // List token
      const tx = await min
        .connect(acc02)
        .setApprovalForAll(m1155.address, true);
      const blockTimestamp = (
        await m1155.provider.getBlock(tx.blockNumber || 0)
      ).timestamp;
      const fpTx = await m1155
        .connect(acc02)
        .englishAuction(
          min.address,
          1,
          1,
          ethers.utils.parseEther("0.1"),
          blockTimestamp + 301,
        );
      const fpRc: ContractReceipt = await fpTx.wait();
      const fpBn = fpRc.blockNumber;
      const fpOrderId = getOrderId1155(
        fpBn,
        min.address,
        1,
        1,
        acc02.address,
      );

      // Bid for the token
      await erc20
        .connect(acc01)
        .approve(
          m1155.address,
          ethers.utils.parseEther("0.1"),
        );
      const bidTx = await m1155.connect(acc01).bid(fpOrderId);
      expect(bidTx).to.be.ok;
      await mine(300);

      // Bid again for the token with a higher price
      await erc20
        .connect(acc01)
        .approve(m1155.address, price);
      const bidTx2 = await m1155
        .connect(acc01)
        .bid(fpOrderId);
      expect(bidTx2).to.be.ok;

      // wait for auction to close and claim
      await mine(600);
      const claimTx = await m1155
        .connect(acc01)
        .claim(fpOrderId);

      // Test ERC20 buy response
      await expect(claimTx)
        .to.be.ok.and.to.emit(m1155, "Claim")
        .withArgs(
          minAddr,
          1,
          1,
          fpOrderId,
          acc02.address,
          acc01.address,
          price,
        );

      // Validate buyer and seller ERC20 balances
      // acc02 = erc20Balance - 0.25 + (1 - 10%.royalties - 10%.fee
      expect(await erc20.balanceOf(acc02.address)).to.equal(
        erc20Balance
          .sub(ethers.utils.parseEther("0.25"))
          .add(ethers.utils.parseEther("0.8")),
      );

      expect(await erc20.balanceOf(acc01.address)).to.equal(
        erc20Balance
          .sub(ethers.utils.parseEther("1"))
          .sub(ethers.utils.parseEther("0.1")),
      );

      // Validate buyer ERC20 balances after royalties paid out
      // acc02 = erc20Balance - 0.25 + (1 - 10%.royalties - 10%.fee) + 10%.royalties
      const splitTxCreator = await splitter[
        "release(address,address)"
      ](erc20.address, acc02.address);
      expect(splitTxCreator).to.be.ok;
      expect(await erc20.balanceOf(acc02.address)).to.equal(
        erc20Balance.add(ethers.utils.parseEther("0.63")),
      );

      // Validate ERC2O amb payout balances
      const splitTxAmb = await splitter[
        "release(address,address)"
      ](erc20.address, amb.address);
      expect(splitTxAmb).to.be.ok;
      expect(await erc20.balanceOf(amb.address)).to.equal(
        ethers.utils.parseEther("0.02"),
      );

      // Validate ERC2O MAD fee payout balances
      expect(
        await erc20.balanceOf(
          await m1155.callStatic.recipient(),
        ),
      ).to.equal(
        ownerERC20Bal.add(ethers.utils.parseEther("0.1")),
      );

      const erc20_btc = MockERC20__factory.connect(
        "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
        acc01,
      );
      expect(
        await erc20_btc.balanceOf(acc01.address),
      ).to.equal(0);

      // user withdraw their balance
      expect(
        await m1155
          .connect(acc01)
          .withdrawOutbid(
            "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
            0,
            0,
          ),
      ).to.be.ok;
      const bal2 = await m1155
        .connect(acc01)
        .getOutbidBalance();
      expect(bal2).to.equal(0);

      expect(
        await erc20_btc.balanceOf(acc01.address),
      ).to.be.gt(0);

      expect(await erc20.balanceOf(acc01.address)).to.equal(
        // claimed but got BTC
        erc20Balance
          .sub(ethers.utils.parseEther("1"))
          .sub(ethers.utils.parseEther("0.1")),
      );
    });
  });
  it("Test full end-to-end purchase and then withdraw; pause then clear the contract of the tokens (outbid and sold out)", async () => {
    // acc02 = seller
    // acc01 = buyer
    const ownerERC20Bal = await erc20.balanceOf(
      await m1155.callStatic.recipient(),
    );

    // Mint token
    await m1155.updateSettings(300, 10, 20, 31536000);
    await f1155
      .connect(acc02)
      .splitterCheck(
        "MADSplitter1",
        amb.address,
        dead,
        20,
        0,
      );
    const splAddr = await f1155.callStatic.getDeployedAddr(
      "MADSplitter1",
    );
    const minAddr = await f1155.callStatic.getDeployedAddr(
      "MinSalt",
    );
    await f1155
      .connect(acc02)
      .createCollection(
        0,
        "MinSalt",
        "ERC1155Minimal",
        "MIN",
        price,
        1,
        "cid/id.json",
        splAddr,
        1000,
      );
    const min = await ethers.getContractAt(
      "ERC1155Minimal",
      minAddr,
    );
    const splitter = await ethers.getContractAt(
      "SplitterImpl",
      splAddr,
    );

    // Mint the token with erc20
    await erc20
      .connect(acc02)
      .approve(
        r1155.address,
        ethers.utils.parseEther("0.25"),
      );
    await r1155
      .connect(acc02)
      .minimalSafeMint(min.address, acc02.address, 1);

    // acc02 = erc20Balance - 0.25
    expect(await erc20.balanceOf(acc02.address)).to.equal(
      erc20Balance.sub(ethers.utils.parseEther("0.25")),
    );

    // List token
    const tx = await min
      .connect(acc02)
      .setApprovalForAll(m1155.address, true);
    const blockTimestamp = (
      await m1155.provider.getBlock(tx.blockNumber || 0)
    ).timestamp;
    const fpTx = await m1155
      .connect(acc02)
      .englishAuction(
        min.address,
        1,
        1,
        ethers.utils.parseEther("0.1"),
        blockTimestamp + 301,
      );
    const fpRc: ContractReceipt = await fpTx.wait();
    const fpBn = fpRc.blockNumber;
    const fpOrderId = getOrderId1155(
      fpBn,
      min.address,
      1,
      1,
      acc02.address,
    );

    // Bid for the token
    await erc20
      .connect(acc01)
      .approve(m1155.address, ethers.utils.parseEther("0.1"));
    const bidTx = await m1155.connect(acc01).bid(fpOrderId);
    expect(bidTx).to.be.ok; // bid 1
    await mine(300);

    // Bid for the token and wait for auction to close, then claim
    await erc20.connect(acc01).approve(m1155.address, price);
    const bidTx2 = await m1155.connect(acc01).bid(fpOrderId); // bid again?
    expect(bidTx2).to.be.ok;

    await mine(300);

    await erc20
      .connect(acc03)
      .approve(m1155.address, price.mul(2));
    const bidTx3 = await m1155.connect(acc03).bid(fpOrderId); // bid again?
    expect(bidTx3).to.be.ok;

    // users bid
    // pause
    // user withdraw
    // with one bid stuck because the contract is paused

    console.log(
      await m1155.connect(acc01).getOutbidBalance(),
    );
    console.log(
      await m1155.connect(acc03).getOutbidBalance(),
    );
    console.log(await erc20.balanceOf(m1155.address));

    await mine(600);
    await m1155.pause();

    console.log(await m1155.totalOutbid());

    expect(await m1155.totalOutbid()).to.be.equal(
      ethers.utils.parseEther("1.1"),
    );
    expect(await erc20.balanceOf(m1155.address)).to.be.equal(
      ethers.utils.parseEther("3.1"),
    );

    // withdraw after pause
    console.log(await m1155.owner());
    console.log(owner.address);
    console.log(
      (await erc20.balanceOf(m1155.address))
        .sub(await m1155.totalOutbid())
        .toString(),
    );
    await m1155.connect(owner).withdrawERC20(erc20.address);

    // withdraw outbids
    await m1155
      .connect(acc03)
      .withdrawOutbid(erc20.address, 0, 0);
    await expect(
      m1155.connect(owner).autoTransferFunds([owner.address]),
    ).to.be.reverted;
    await expect(
      m1155.connect(owner).autoTransferFunds([acc01.address]),
    ).to.be.ok;
    await expect(
      m1155.connect(owner).autoTransferFunds([acc01.address]),
    ).to.be.reverted;

    console.log(await m1155.totalOutbid());
    console.log(
      await m1155.connect(acc01).getOutbidBalance(),
    );
    console.log(
      await m1155.connect(acc03).getOutbidBalance(),
    );

    expect(await m1155.totalOutbid()).to.be.equal(
      ethers.utils.parseEther("0"),
    );
    expect(await erc20.balanceOf(m1155.address)).to.be.equal(
      ethers.utils.parseEther("0"),
    );
    await expect(
      m1155
        .connect(acc01)
        .withdrawOutbid(erc20.address, 0, 0),
    ).to.be.reverted;
    await expect(
      m1155.connect(owner).withdrawERC20(erc20.address),
    ).to.be.reverted;
  });
});
