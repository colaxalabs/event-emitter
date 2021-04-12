/* global task */
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("deploy:kovan", "Deploy contract(s) to Kovan testnet").setAction(
  async (hre) => {
    // get signer
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deployer: ", await deployer.getAddress());

    // deploy counter address
    const counter = await (await hre.ethers.getContractFactory("Counter"))
      .connect(deployer)
      .deploy();
    console.log("Counter deployed at: ", counter.address);
  }
);
