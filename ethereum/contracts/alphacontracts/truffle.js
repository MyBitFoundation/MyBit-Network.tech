module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 6500000,
      network_id: "5777"
    },
    ropsten: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 3,
      gas: 4700000
    }
  },
  compiler: {
     solc: "0.4.24"
  }
};
