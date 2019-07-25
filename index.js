var artifacts = require('./lib/index.js');
var mybitContracts = require('./networks/mybit/Contracts.js');
var ropstenContracts = require('./networks/ropsten/Contracts.js');
var rinkebyContracts = require('./networks/rinkeby/Contracts.js');
var mainnetContracts = require('./networks/mainnet/Contracts.js');

module.exports = {
  artifacts : artifacts,
  addresses : {
    mybit : mybitContracts,
    ropsten : ropstenContracts,
    rinkeby : rinkebyContracts,
    mainnet : mainnetContracts,
  },
  block : {
    mybit : '0',
    ropsten : '6054029',
    rinkeby : '4780593',
    mainnet : '8215075',
  }
};
