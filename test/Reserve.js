var bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

const EscrowReserve = artifacts.require("./database/EscrowReserve.sol");
const CrowdsaleReserve = artifacts.require("./database/CrowdsaleReserve.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const MyBitToken = artifacts.require("./tokens/ERC20/MyBitToken.sol");
const MiniMeTokenFactory = artifacts.require("MiniMeTokenFactory");
const MiniMeToken = artifacts.require("MiniMeToken")
const API = artifacts.require("./database/API.sol");

const ETH = bn(10**18);
const tokenSupply = bn(180000000).times(ETH);
const tokenPerAccount = bn(1000).times(ETH);

let token;
let asset1;
let asset2;
let factory;
let crowdsaleReserve;
let escrowReserve;
let db;
let events;
let cm;
let api;
let gasPrice;

contract('Reserves', async(accounts) => {
  const owner = accounts[0];
  const escrow = accounts[1];
  const crowdsaleERC20 = accounts[2];
  const crowdsaleETH = accounts[3]
  const user = accounts[4];

  it('Get network ID and set max gas', async() => {
    id = await web3.eth.net.getId();
    if(id >= 1500000000000){
      gasPrice = 1;
    } else {
      gasPrice = 7000000000;
    }
  });

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

  it('Deploy CrowdsaleReserve', async() => {
    crowdsaleReserve = await CrowdsaleReserve.new(db.address, events.address);
    await cm.addContract("CrowdsaleReserve", crowdsaleReserve.address);
  });

  it('Deploy EscrowReserve', async() => {
    escrowReserve = await EscrowReserve.new(db.address, events.address);
    await cm.addContract("EscrowReserve", escrowReserve.address);
  });

  it('Add fake contracts', async() => {
    await cm.addContract("CrowdsaleERC20", crowdsaleERC20);
    await cm.addContract("CrowdsaleETH", crowdsaleETH);
    await cm.addContract("AssetManagerEscrow", escrow);
    assert.equal(await api.getContractAddress('CrowdsaleERC20'), crowdsaleERC20);
    assert.equal(await api.getContractAddress('CrowdsaleETH'), crowdsaleETH);
    assert.equal(await api.getContractAddress('AssetManagerEscrow'), escrow);
  })

  it('Deploy MyB token', async() => {
    token = await MyBitToken.new('MyBit', 'MYB', tokenSupply.toString());
  });

  it('Deploy MiniMeTokenFactory + MiniMeToken', async() => {
    factory = await MiniMeTokenFactory.new()
    tx = await factory.createCloneToken('0x0000000000000000000000000000000000000000', 0, 'Asset1', 18, 'ASS1', true, token.address)
    console.log(tx.logs[0].address)
    asset1 = await MiniMeToken.at(tx.logs[0].args.token)
    await asset1.generateTokens(user, ETH.toString())
    tx = await factory.createCloneToken('0x0000000000000000000000000000000000000000', 0, 'Asset2', 18, 'ASS2', true, '0x0000000000000000000000000000000000000000')
    console.log(tx.logs[0].address)
    asset2 = await MiniMeToken.at(tx.logs[0].args.token)
    await asset2.generateTokens(user, ETH.toString())
  });

  /*
  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 1; i < accounts.length; i++) {
      //console.log(accounts[i]);
      await token.transfer(accounts[i], tokenPerAccount.toString());
      userBalance = bn(await token.balanceOf(accounts[i]));
      assert.equal(userBalance.eq(tokenPerAccount), true);
    }
    // Check token ledger is correct
    let totalTokensCirculating = (accounts.length-1) * tokenPerAccount;
    let remainingTokens = bn(tokenSupply).minus(totalTokensCirculating);
    let ledgerTrue = bn(await token.balanceOf(owner)).eq(remainingTokens);
    assert.equal(ledgerTrue, true);
  });
  */

  it("Send token to reserves", async() => {
    token.transfer(escrowReserve.address, tokenPerAccount.toString());
    token.transfer(crowdsaleReserve.address, tokenPerAccount.toString());
    assert.equal(bn(await token.balanceOf(escrowReserve.address)).eq(tokenPerAccount), true);
    assert.equal(bn(await token.balanceOf(crowdsaleReserve.address)).eq(tokenPerAccount), true);
  });

  //Escrow reserve

  it("Fail to issue erc20 from escrow reserve: not approved contract", async() => {
    let err;
    try{
      await escrowReserve.issueERC20(user, bn(100).times(ETH).toString(), token.address, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to issue erc20 from escrow reserve: receiver address is 0", async() => {
    let err;
    try{
      await escrowReserve.issueERC20('0x0000000000000000000000000000000000000000', bn(100).times(ETH).toString(), token.address, {from:escrow});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to issue erc20 from escrow reserve: amount too high", async() => {
    let err;
    try{
      await escrowReserve.issueERC20(user, bn(1001).times(ETH).toString(), token.address, {from:escrow});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Issue erc20 from escrow reserve", async() => {
    let balanceBefore = bn(await token.balanceOf(user));
    await escrowReserve.issueERC20(user, bn(100).times(ETH).toString(), token.address, {from:escrow});
    let balanceAfter = bn(await token.balanceOf(user));
    assert.equal(balanceAfter.minus(balanceBefore).eq(bn(100).times(ETH)), true);
  });

  it("Fail to request erc20 to escrow reserve: user did not approve transfer", async() => {
    let err;
    try{
      await escrowReserve.requestERC20(user, bn(100).times(ETH).toString(), token.address, {from:escrow});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to request erc20 to escrow reserve: not approved contract", async() => {
    let err;
    try{
      await token.approve(escrowReserve.address, bn(100).times(ETH).toString(), {from:user});
      await escrowReserve.requestERC20(user, bn(100).times(ETH).toString(), token.address, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Request erc20 to escrow reserve", async() => {
    let balanceBefore = bn(await token.balanceOf(user));
    await token.approve(escrowReserve.address, bn(100).times(ETH).toString(), {from:user});
    await escrowReserve.requestERC20(user, bn(100).times(ETH).toString(), token.address, {from:escrow});
    let balanceAfter = bn(await token.balanceOf(user));
    assert.equal(balanceAfter.plus(bn(100).times(ETH)).eq(balanceBefore), true);
  });

  it("Fail to approve user to transfer from escrow reserve: not approved contract", async() => {
    let err;
    try{
      await escrowReserve.approveERC20(user, bn(100).times(ETH).toString(), token.address, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Escrow reserve approve user to transfer from", async() => {
    await escrowReserve.approveERC20(user, bn(100).times(ETH).toString(), token.address, {from:escrow});
    let balanceBefore = bn(await token.balanceOf(user));
    await token.transferFrom(escrowReserve.address, user, bn(100).times(ETH).toString(), {from:user});
    let balanceAfter = bn(await token.balanceOf(user));
    assert.equal(balanceAfter.minus(balanceBefore).eq(bn(100).times(ETH)), true);
  });

  it("Fail to burn erc20 from escrow reserve: not approved contract", async() => {
    let err;
    try{
      await escrowReserve.burnERC20(bn(100).times(ETH).toString(), token.address, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to burn erc20 from escrow reserve: amount too much", async() => {
    let err;
    try{
      await escrowReserve.burnERC20(bn(10000).times(ETH).toString(), token.address, {from:escrow});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Burn erc20 from escrow reserve", async() => {
    let balanceBefore = bn(await token.balanceOf(escrowReserve.address));
    await escrowReserve.burnERC20(bn(100).times(ETH).toString(), token.address, {from:escrow});
    let balanceAfter = bn(await token.balanceOf(escrowReserve.address));
    assert.equal(balanceBefore.minus(balanceAfter).eq(bn(100).times(ETH)), true);
  });


  //Crowdsale reserve

  it("Fail to issue erc20 from crowdsale reserve: not approved contract", async() => {
    let err;
    try{
      await crowdsaleReserve.issueERC20(user, bn(100).times(ETH).toString(), token.address, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to issue erc20 from crowdsale reserve: receiver address is 0", async() => {
    let err;
    try{
      await crowdsaleReserve.issueERC20('0x0000000000000000000000000000000000000000', bn(100).times(ETH).toString(), token.address, {from:crowdsaleERC20});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to issue erc20 from crowdsale reserve: amount too high", async() => {
    let err;
    try{
      await crowdsaleReserve.issueERC20(user, bn(1001).times(ETH).toString(), token.address, {from:crowdsaleERC20});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Issue erc20 from crowdsale reserve", async() => {
    let balanceBefore = bn(await token.balanceOf(user));
    await crowdsaleReserve.issueERC20(user, bn(100).times(ETH).toString(), token.address, {from:crowdsaleERC20});
    let balanceAfter = bn(await token.balanceOf(user));
    assert.equal(balanceAfter.minus(balanceBefore).eq(bn(100).times(ETH)), true);
  });

  it("Fail to request erc20 to crowdsale reserve: user did not approve transfer", async() => {
    let err;
    try{
      await crowdsaleReserve.requestERC20(user, bn(100).times(ETH).toString(), token.address, {from:crowdsaleERC20});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to request erc20 to crowdsale reserve: not approved contract", async() => {
    let err;
    try{
      await token.approve(crowdsaleReserve.address, bn(100).times(ETH).toString(), {from:user});
      await crowdsaleReserve.requestERC20(user, bn(100).times(ETH).toString(), token.address, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Request erc20 to crowdsale reserve", async() => {
    let balanceBefore = bn(await token.balanceOf(user));
    await token.approve(crowdsaleReserve.address, bn(100).times(ETH).toString(), {from:user});
    await crowdsaleReserve.requestERC20(user, bn(100).times(ETH).toString(), token.address, {from:crowdsaleERC20});
    let balanceAfter = bn(await token.balanceOf(user));
    assert.equal(balanceAfter.plus(bn(100).times(ETH)).eq(balanceBefore), true);
  });

  it("Fail to approve user to transfer from crowdsale reserve: not approved contract", async() => {
    let err;
    try{
      await crowdsaleReserve.approveERC20(user, bn(100).times(ETH).toString(), token.address, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Escrow reserve approve user to transfer from", async() => {
    await crowdsaleReserve.approveERC20(user, bn(100).times(ETH).toString(), token.address, {from:crowdsaleERC20});
    let balanceBefore = bn(await token.balanceOf(user));
    await token.transferFrom(crowdsaleReserve.address, user, bn(100).times(ETH).toString(), {from:user});
    let balanceAfter = bn(await token.balanceOf(user));
    assert.equal(balanceAfter.minus(balanceBefore).eq(bn(100).times(ETH)), true);
  });

  it("Fail to refund from crowdsale reserve: cannot send zero", async() => {
    let err;
    try{
      await crowdsaleReserve.refundERC20Asset(asset1.address, 0, token.address, {from:crowdsaleERC20});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Escrow reserve approve user to transfer from", async() => {
    await crowdsaleReserve.refundERC20Asset(asset1.address, bn(10).times(ETH).toString(), token.address, {from:crowdsaleERC20});
    let balanceBefore = bn(await token.balanceOf(user));
    await asset1.withdraw({from: user});
    let balanceAfter = bn(await token.balanceOf(user));
    assert.equal(balanceAfter.minus(balanceBefore).eq(bn(10).times(ETH)), true);
  });

  it("Fail to receive to crowdsale reserve: not approved contract", async() => {
    let err;
    try{
      await crowdsaleReserve.receiveETH(user, {from:user, value: ETH.toString()});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Receive eth to crowdsale reserve", async() => {
    let balanceBefore = bn(await web3.eth.getBalance(crowdsaleETH));
    tx = await crowdsaleReserve.receiveETH(user, {from:crowdsaleETH, value: ETH.toString()});
    gas = bn(tx.receipt.gasUsed).times(gasPrice)
    let balanceAfter = bn(await web3.eth.getBalance(crowdsaleETH));
    assert.equal(balanceAfter.plus(ETH).plus(gas).eq(balanceBefore), true);
  });

  it("Fail to issue eth from crowdsale reserve: not approved contract", async() => {
    let err;
    try{
      await crowdsaleReserve.issueETH(user, ETH.dividedBy(2).toString(), {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to issue eth from crowdsale reserve: amount too high", async() => {
    let err;
    try{
      await crowdsaleReserve.issueETH(user, bn(1001).times(ETH).toString(), {from:crowdsaleETH});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Issue eth from crowdsale reserve", async() => {
    let balanceBefore = bn(await web3.eth.getBalance(user));
    await crowdsaleReserve.issueETH(user, ETH.dividedBy(2).toString(), {from:crowdsaleETH});
    let balanceAfter = bn(await web3.eth.getBalance(user));
    assert.equal(balanceAfter.minus(balanceBefore).eq(ETH.dividedBy(2)), true);
  });

  it("Fail to refund from crowdsale reserve: cannot send zero", async() => {
    let err;
    try{
      await crowdsaleReserve.refundETHAsset(asset2.address, 0, {from:crowdsaleETH});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Escrow reserve approve user to transfer from", async() => {
    await crowdsaleReserve.refundETHAsset(asset2.address, ETH.dividedBy(2).toString(), {from:crowdsaleETH});
    let balanceBefore = bn(await web3.eth.getBalance(user));
    tx = await asset2.withdraw({from: user});
    gas = bn(tx.receipt.gasUsed).times(gasPrice)
    let balanceAfter = bn(await web3.eth.getBalance(user));
    assert.equal(balanceAfter.minus(balanceBefore).eq(ETH.dividedBy(2).minus(gas)), true);
  });

});
