/* global describe, it, ethers, before */

const { expect } = require("chai");

describe("Counter", function () {
  let counterContract;

  before("setup Counter contract", async () => {
    const Counter = await ethers.getContractFactory("Counter");
    counterContract = await Counter.deploy();
  });

  it("Should return the new counter value once it's changed", async function () {
    expect(await counterContract.getCount()).to.equal(ethers.BigNumber.from(0));

    await counterContract.increment();
    expect(await counterContract.getCount()).to.equal(ethers.BigNumber.from(1));
  });

  it("Should emit ValueChanged event correctly when tracking counters", async function () {
    await expect(counterContract.increment())
      .to.emit(counterContract, "ValueChanged")
      .withArgs(ethers.BigNumber.from(1), ethers.BigNumber.from(2));
  });
});
