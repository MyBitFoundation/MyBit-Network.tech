module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 6500000,
      network_id: "5777"
    }
  },
  compiler: {
     solc: "0.4.23"
  }
};
