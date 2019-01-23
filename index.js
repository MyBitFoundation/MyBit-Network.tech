var fs = require("fs");
var path = require('path');
var appRoot = path.resolve(__dirname);
var artifacts = require(`${appRoot}/lib/index.js`);

module.exports = {
  artifacts : artifacts,
  addresses : {
    mybit : function(){
      return JSON.parse(fs.readFileSync(appRoot + '/networks/mybit/contracts.json'));
    },
    ropsten : function(){
      return JSON.parse(fs.readFileSync(appRoot + '/networks/ropsten/contracts.json'));
    }
  }

};
