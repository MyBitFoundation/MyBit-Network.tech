var artifacts = require('./lib/index.js');
var mybitContracts = require('./networks/mybit/Contracts.js');
var ropstenContracts = require('./networks/ropsten/Contracts.js');
var mainnetContracts = require('./networks/mainnet/Contracts.js');

module.exports = {
  artifacts : artifacts,
  addresses : {
    mybit : mybitContracts,
    ropsten : ropstenContracts,
    mainnet : mainnetContracts,
  },
  block : {
    mybit : '0',
    ropsten : '5901167',
    mainnet : '0',
  }
};
