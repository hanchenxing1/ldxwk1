require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  networks: {
    hardhat: {
      chainId: 137,
    },
    testnet: {
      url: "https://polygon-rpc.com", // baobab testnet
      accounts: [process.env.PrivateKey], // add the account that will deploy the contract (private key)
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};
