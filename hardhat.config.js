require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const API_URL = "https://goerli.infura.io/v3/";
const PRIVATE_KEY = "f5fc6845a475e3c68b70a81e9c6dfcfb2489b16022f89df794a5b79789f442fe";
const PUBLIC_KEY = "0xa3909d6A22e22469F56625f6D547f39255DfE35f";

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/5XAsUN8HMGvhqN9zt7xmQfh2HuZPxfDZ",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};