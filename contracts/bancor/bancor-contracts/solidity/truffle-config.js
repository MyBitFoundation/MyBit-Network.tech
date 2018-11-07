// See <http://truffleframework.com/docs/advanced/configuration>
module.exports = {
    networks: {
        development: {
            host:       "localhost",
            port:       7545,
            network_id: "*",          // Match any network id
            gasPrice:   20000000000,  // Gas price used for deploys
            gas:        5712388       // Gas limit used for deploys
        },
        production: {
            host:       "localhost",
            port:       7545,
            network_id: "*",          // Match any network id
            gasPrice:   20000000000,  // Gas price used for deploys
            gas:        5712388       // Gas limit used for deploys
        },
        coverage: {     // See <https://www.npmjs.com/package/solidity-coverage#network-configuration>
            host:       "localhost",
            port:       7555,         // Also in .solcover.js
            network_id: "*",          // Match any network id
            gasPrice:   0x01,         // Gas price used for deploys
            gas:        0xfffffffffff // Gas limit used for deploys
        }
    },
    mocha: {
        enableTimeouts: false,
        useColors:      true,
        bail:           true
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
};
