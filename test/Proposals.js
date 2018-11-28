var bn = require('bignumber.js');

const Token = artifacts.require('MyBitToken');
const Proposals = artifacts.require('Proposals');
const Database = artifacts.require('Database');
const Events = artifacts.require('Events');
const ContractManager = artifacts.require('ContractManager');
const API = artifacts.require('API');
const PlatformFunds = artifacts.require('PlatformFunds');




async function rejects (promise) {
  try {
    await promise;
    console.log("Promise succeeds");
    assert.fail('Incorrect success');
  } catch (e) {
    console.log("Promise fails");
  }
}

function increaseTime (seconds) {
  web3.currentProvider.send({
    jsonrpc: "2.0",
    method: "evm_increaseTime",
    params: [seconds], id: 0
  });
}

contract('Proposals', async (accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const user3 = accounts[3];

  const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
  const tokenSupply = bn(180000000000000000000000000);
  const voteDurationDays = bn(15);
  const voteDuration = bn(voteDurationDays).times(24).times(60).times(60); // In seconds
  const unlockDays = voteDurationDays + 1;
  const closeDays = voteDurationDays + 1;
  const tier2Days = bn(180 + 1);
  const tier3Days = bn(365 + 1);
  const tier1Multiplier = 100;
  const tier2Multiplier = 150;
  const tier3Multiplier = 200;
  const quorum = bn(20); // 20%
  const threshold = bn(51); // 51%

  let token, timedVote, db, ev, cm, api, platformFunds, platformAssetID, governedToken;


  });
