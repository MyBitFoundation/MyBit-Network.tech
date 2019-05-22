const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const API = artifacts.require("./database/API.sol")
const Operators = artifacts.require("./roles/Operators.sol");

contract('Operators', async(accounts) => {
  const owner = accounts[0];
  const operator = accounts[1];
  const operator2 = accounts[2];

  let db;
  let events;
  let cm;
  let operators;
  let operatorID;

  it('Deploy database contract', async() => {
    db = await Database.new([owner], true);
  });

  it('Deploy Events', async() => {
    events = await Events.new(db.address);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address, events.address);
    await db.enableContractManagement(cm.address);
  });

  it('Deploy API', async() => {
    api = await API.new(db.address);
  })

  it('Deploy operators', async() => {
    operators = await Operators.new(db.address, events.address);
    await cm.addContract('Operators', operators.address);
  });

  it('Fail to change operator', async() => {
    let err;
    try{
      await operators.changeOperatorAddress('', operator2);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set operator', async() => {
    let block = await web3.eth.getBlock('latest');
    await operators.registerOperator(operator, 'Operator', 'Asset Type', '0x0000000000000000000000000000000000000000');
    let logs = await events.getPastEvents('LogOperator', {filter: {messageID: web3.utils.sha3('Operator registered'), origin: owner}, fromBlock: block.number});
    operatorID = logs[0].args.operatorID;
    let apiGeneratedID = await api.generateOperatorID('Operator');
    let apiOperatorID = await api.getOperatorID(operator);
    let apiOperatorAddress = await api.getOperatorAddress(operatorID);
    assert.equal(operatorID, apiGeneratedID);
    assert.equal(operatorID, apiOperatorID);
    assert.equal(operator, apiOperatorAddress);
  });

  it('Fail to change operator', async() => {
    let err;
    try{
      await operators.changeOperatorAddress(operatorID, operator2, {from:operator2});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Change operator', async() => {
    await operators.changeOperatorAddress(operatorID, operator2, {from:operator});
    let apiOperatorID = await api.getOperatorID(operator2);
    let apiOperatorAddress = await api.getOperatorAddress(operatorID);
    assert.equal(operatorID, apiOperatorID);
    assert.equal(operator2, apiOperatorAddress);
  });

  it('Fail to remove operator', async() => {
    let err;
    try{
      await operators.removeOperator(operatorID, {from:operator});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to set operator', async() => {
    let err;
    try{
      await operators.registerOperator(operator, 'Operator', 'Asset Type', '0x0000000000000000000000000000000000000000');
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Remove operator', async() => {
    await operators.removeOperator(operatorID);
  });

});
