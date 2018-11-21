const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require('fs');
/*
if (fs.existsSync('secrets.json')) {
  const secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
  ({ mnemonic } = secrets);
}

if (fs.existsSync('apiKey.json')) {
  const key = JSON.parse(fs.readFileSync('apiKey.json', 'utf8'));
  ({ apiKey } = key);
}
*/
const MNEMONIC = process.env.MNEMONIC_PHRASE;
const INFURA_API_KEY = process.env.INFURA_API_KEY;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 6500000,
      network_id: "*",
      gasPrice: 1
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/"+INFURA_API_KEY)
      },
      network_id: 3
    },
    ethpm: {
      ipfs_host: "127.0.0.1",
      ipfs_protocol: "http",
      registry: "0x8011df4830b4f696cd81393997e5371b93338878",
      install_provider_uri: "https://ropsten.infura.io/truffle"
    }
  },
  mocha: {
    enableTimeouts: false,
    useColors:      true,
    bail:           false
  },
  solc: {
    optimizer: {
        enabled: true,
        runs:    200
    }
  },
  compilers: {
    solc: {
        version: "0.4.24"
    }
  }

  /*
  compilers: {
    solc: {
        version: "node_modules/solc"
    }
  }
  */
};
