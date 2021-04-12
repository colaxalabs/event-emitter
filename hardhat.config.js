/* globals process */

require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

require("./scripts/deploy");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
  solidity: "0.7.3",
};
