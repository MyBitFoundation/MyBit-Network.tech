var bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

const EscrowReserve = artifacts.require("./database/EscrowReserve.sol");
const CrowdsaleReserve = artifacts.require("./database/CrowdsaleReserve.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const MyBitToken = artifacts.require("./tokens/ERC20/MyBitToken.sol");
const API = artifacts.require("./database/API.sol");

const ETH = bn(10**18);
const tokenSupply = bn(180000000).times(ETH);
const tokenPerAccount = bn(1000).times(ETH);

let token;
let crowdsaleReserve;
let escrowReserve;
let db;
let events;
let cm;
let api;

contract('Reserves', async(accounts) => {
  const owner = accounts[0];
  const escrow = accounts[1];
  const crowdsale = accounts[2];
  const user = accounts[3];

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
    reserve = await CrowdsaleReserve.new(db.address, events.address);
    await cm.addContract("CrowdsaleReserve", reserve.address);
  });

  it('Deploy EscrowReserve', async() => {
    escrowReserve = await EscrowReserve.new(db.address, events.address);
    await cm.addContract("EscrowReserve", escrowReserve.address);
  });

  it('Add fake contracts', async() => {
    await cm.addContract("CrowdsaleERC20", crowdsale);
    await cm.addContract("AssetManagerEscrow", escrow);
    assert.equal(await api.getContractAddress('CrowdsaleERC20'), crowdsale);
    assert.equal(await api.getContractAddress('AssetManagerEscrow'), escrow);
  })

  it('Deploy MyB token', async() => {
    token = await MyBitToken.new('MyBit', 'MYB', tokenSupply.toString());
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
  it("Send token to reserve", async() => {
    token.transfer(escrowReserve.address, tokenPerAccount.toString());
    assert.equal(bn(await token.balanceOf(escrowReserve.address)).eq(tokenPerAccount), true);
  });

  it("Issue erc20 from escrow reserve", async() => {
    let balanceBefore = bn(await token.balanceOf(user));
    await escrowReserve.issueERC20(user, bn(100).times(ETH).toString(), token.address, {from:escrow});
    let balanceAfter = bn(await token.balanceOf(user));
    assert.equal(balanceAfter.minus(balanceBefore).eq(bn(100).times(ETH)), true);
  });

  it("Request erc20 to escrow reserve", async() => {
    await token.approve(escrowReserve.address, bn(100).times(ETH).toString(), {from:user});
    await escrowReserve.requestERC20(user, bn(100).times(ETH).toString(), token.address, {from:escrow});
    let balanceAfter = bn(await token.balanceOf(user));
    assert.equal(balanceAfter.eq(0), true);
  });

  it("Escrow reserve approve user to transfer from", async() => {
    await escrowReserve.approveERC20(user, bn(100).times(ETH).toString(), token.address, {from:escrow});
    let balanceBefore = bn(await token.balanceOf(user));
    await token.transferFrom(escrowReserve.address, user, bn(100).times(ETH).toString(), {from:user});
    let balanceAfter = bn(await token.balanceOf(user));
    assert.equal(balanceAfter.minus(balanceBefore).eq(bn(100).times(ETH)), true);
  });

  it("Burn erc20 from escrow reserve", async() => {
    let balanceBefore = bn(await token.balanceOf(escrowReserve.address));
    await escrowReserve.burnERC20(bn(100).times(ETH).toString(), token.address, {from:escrow});
    let balanceAfter = bn(await token.balanceOf(escrowReserve.address));
    assert.equal(balanceBefore.minus(balanceAfter).eq(bn(100).times(ETH)), true);
  });


});
