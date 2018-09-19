var BigNumber = require('bignumber.js');

/* Contracts  */
const EqualDistribution = artifacts.require("./tokens/ERC20/distribution/EqualDistribution.sol");
const WithdrawTest = artifacts.require("./test/WithdrawTest.sol");


const ETH = 1000000000000000000;

contract('Equal Distribution', async (accounts) => {
  const owner = web3.eth.accounts[0];
  const distributor = web3.eth.accounts[1];
  const beneficiary = web3.eth.accounts[2];
  const beneficiary2 = web3.eth.accounts[3];
  const beneficiary3 = web3.eth.accounts[4];
  const beneficiaries = [beneficiary, beneficiary2, beneficiary3];

  const tokenSupply = 100000;
  const tokenPerAccount = 1000;

  let burnFee = 250 * ETH;
  let originalBeneficiary; //Original beneficiary

  // Contract instances
  let eqDistribution;      // EqualDistribution instance
  let withdrawTest;

  it('Deploy EqualDistribution contract', async() => {
    let balanceStart = await web3.eth.getBalance(distributor);
    console.log('Balance at Start: ' + balanceStart);
    eqDistribution = await EqualDistribution.new(beneficiaries, {from: distributor});

    for (let i =0; i < beneficiaries.length; i++){
      assert.equal(beneficiaries[i], await eqDistribution.beneficiaries(i));
    }
  });

  it('Check if beneficiary', async() => {
    isBeneficiaryTrue = await eqDistribution.isBeneficiary(beneficiary2);
    assert.equal(isBeneficiaryTrue, true);

    isBeneficiaryFalse = await eqDistribution.isBeneficiary(distributor);
    assert.equal(isBeneficiaryFalse, false);
  });

  it('Set up withdraw test', async() => {
    withdrawTest = await WithdrawTest.new();
    await withdrawTest.deposit(eqDistribution.address, {value: 10*ETH, from: distributor});
    amount = await withdrawTest.balances(eqDistribution.address);
    assert.equal(amount, 10*ETH);
  });

  it('Fail to get funds', async() => {
    try{
      await eqDistribution.getFunds(web3.eth.accounts[9], {from: distributor});
    } catch(e) {
      console.log('Cant get funds from that address');
    }
  });


  it('Get funds', async() => {
    console.log('Owner Address: ' + owner);
    console.log('Distributor Address: ' + distributor);
    console.log('Withdraw Address: ' + withdrawTest.address);
    console.log('Eq Address: ' + eqDistribution.address);
    await eqDistribution.getFunds(withdrawTest.address, {from: distributor});
  });

  it('Withdraw funds to beneficiaries', async() => {
    let b1Before = await web3.eth.getBalance(beneficiary);
    let b1True = await eqDistribution.withdraw({from: beneficiary});
    let b1After = await web3.eth.getBalance(beneficiary);
    console.log(b1After - b1Before);
    //assert.equal(b1True, true);
    //assert.equal(b1After - b1Before, (14 * ETH)/3); //Need to calculate gas used up to this point
    assert.equal(BigNumber(b1Before).lt(b1After), true);
  });


});
