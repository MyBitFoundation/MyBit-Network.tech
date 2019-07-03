var bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

const Minter = artifacts.require("./database/Minter.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const MyBitToken = artifacts.require("./tokens/ERC20/MyBitToken.sol");
const MiniMeTokenFactory = artifacts.require("MiniMeTokenFactory");
const MiniMeToken = artifacts.require("MiniMeToken")
const Platform = artifacts.require("Platform")
const API = artifacts.require("./database/API.sol");

const ETH = bn(10**18);
const tokenSupply = bn(180000000).times(ETH);
const tokenPerAccount = bn(1000).times(ETH);

let minter;
let token;
let asset;
let factory;
let db;
let events;
let cm;
let api;
let platform;

contract('Reserves', async(accounts) => {
  const owner = accounts[0];
  const crowdsaleGenerator = accounts[1]
  const crowdsale = accounts[2];
  const deployer = accounts[3];
  const user = accounts[4];

  it('Deploy Database', async() => {
    db = await Database.new([owner], true);
  });

  it('Deploy API', async() => {
    api = await API.new(db.address);
  });

  it('Deploy Events', async() => {
    events = await Events.new(db.address);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address, events.address);
    await db.enableContractManagement(cm.address);
  });

  it('Deploy Platform', async() => {
    platform = await Platform.new(db.address, events.address);
    await cm.addContract("Platform", platform.address);
  });

  it('Deploy Minter', async() => {
    minter = await Minter.new(db.address);
    await cm.addContract("Minter", minter.address);
  });

  it('Deploy MiniMeTokenFactory', async() => {
    factory = await MiniMeTokenFactory.new();
    await cm.addContract("MiniMeTokenFactory", factory.address);
    await platform.setTokenFactory(factory.address);
  });

  it('Add fake contracts', async() => {
    await cm.addContract("CrowdsaleGeneratorERC20", crowdsaleGenerator);
    await cm.addContract("CrowdsaleERC20", crowdsale);
    await cm.addContract("DAODeployer", deployer);
    assert.equal(await api.getContractAddress('CrowdsaleGeneratorERC20'), crowdsaleGenerator);
    assert.equal(await api.getContractAddress('CrowdsaleERC20'), crowdsale);
    assert.equal(await api.getContractAddress('DAODeployer'), deployer);
  })

  it('Deploy MyB token', async() => {
    token = await MyBitToken.new('MyBit', 'MYB', tokenSupply.toString());
  });

  it("Fail to create clone token: not approved contract", async() => {
    let err;
    try{
      await minter.cloneToken('Asset', token.address, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Create clone token", async() => {
    await minter.cloneToken('Asset', token.address, {from:crowdsaleGenerator});
    logs = await factory.getPastEvents('NewToken');
    asset = await MiniMeToken.at(logs[0].args.token)
  });

  it("Fail to mint asset token: not approved contract", async() => {
    let err;
    try{
      await minter.mintAssetTokens(asset.address, user, ETH.toString(), {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Mint asset token", async() => {
    await minter.mintAssetTokens(asset.address, user, ETH.toString(), {from:crowdsale});
    let balanceAfter = bn(await asset.balanceOf(user));
    assert.equal(balanceAfter.eq(ETH), true)
  });

  it("Fail to change controller: not approved contract", async() => {
    let err;
    try{
      await minter.changeTokenController(asset.address, user, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Change controller", async() => {
    assert.equal(await asset.controller(), minter.address)
    await minter.changeTokenController(asset.address, user, {from:deployer});
    assert.equal(await asset.controller(), user)
  });

  it("Fail to mint asset token: not controller", async() => {
    let err;
    try{
      await minter.mintAssetTokens(asset.address, user, ETH.toString(), {from:crowdsale});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });
});
