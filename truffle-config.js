//npm i dotenv
//gitignore .env
//create .env file
//npm install @truffle/hdwallet-provider
require('dotenv').config()
const HDWalletProvider = require("@truffle/hdwallet-provider")

require('babel-register');
require('babel-polyfill');

const private_keys = [
  process.env.PRIVATE_KEY_0,
  process.env.PRIVATE_KEY_1,
  process.env.PRIVATE_KEY_2
]

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },

    goerli: {
      provider: () => new HDWalletProvider({
        privateKeys: private_keys,
        providerOrUrl: process.env.GOERLI_SERVER,
        numberOfAddresses: 3
      }),
      network_id: 5,
      gas: 5500000,
      // confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },

  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.1",
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
