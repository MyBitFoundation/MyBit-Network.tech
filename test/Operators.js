const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const Operators = artifacts.require("./ecosystem/Operators.sol");


const owner = web3.eth.accounts[0];
const operator = web3.eth.accounts[1];
const operator2 = web3.eth.accounts[2];

contract('Operators', async() => {
  let db;
  let cm;
  let operators;
  let operatorID;

  it('Deploy database contract', async() => {
    db = await Database.new([owner], true);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address);
    await db.enableContractManagement(cm.address);
  });

  it('Deploy operators', async() => {
    operators = await Operators.new(db.address);
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
    let tx = await operators.registerOperator(operator, 'Operator');
    operatorID = tx.logs[0].args._operatorID;
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
      let tx = await operators.registerOperator(operator, 'Operator');
      operatorID = tx.logs[0].args._operatorID;
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Remove operator', async() => {
    await operators.removeOperator(operatorID);
  });

});
