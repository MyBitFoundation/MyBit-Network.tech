var path = require('path');
var appRoot = path.resolve(__dirname);
var artifacts = require(`${appRoot}/lib/index.js`);
var mybitContracts = require(`${appRoot}/networks/mybit/Contracts.js`);
var ropstenContracts = require(`${appRoot}/networks/ropsten/Contracts.js`)

module.exports = {
  artifacts : artifacts,
  addresses : {
    mybit : mybitContracts,
    ropsten : ropstenContracts,
  }
};
