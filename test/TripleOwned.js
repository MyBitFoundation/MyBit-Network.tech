var bn = require('bignumber.js');

// This test will encapsulate everything the MyBit-Go platform will be using for the alpha contracts. 
// Ownership: Triple-Owned 
// Database: Upgradeable 


const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");


const ownerOne = web3.eth.accounts[0];
const ownerTwo = web3.eth.accounts[1];
const ownerThree = web3.eth.accounts[2]; 


contract('TripleOwned', async() => {
  let db;
  let cm;


});
