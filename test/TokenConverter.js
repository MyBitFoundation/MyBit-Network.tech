/* global artifacts, contract, before, it, assert, web3 */
/* eslint-disable prefer-reflect */

const Whitelist = artifacts.require('Whitelist.sol');
const BancorNetwork = artifacts.require('BancorNetwork.sol');
const ContractIds = artifacts.require('ContractIds.sol');
const BancorConverter = artifacts.require('BancorConverter.sol');
const SmartToken = artifacts.require('SmartToken.sol');
const BancorFormula = artifacts.require('BancorFormula.sol');
const BancorGasPriceLimit = artifacts.require('BancorGasPriceLimit.sol');
const ContractRegistry = artifacts.require('ContractRegistry.sol');
const ContractFeatures = artifacts.require('ContractFeatures.sol');
const EtherToken = artifacts.require('EtherToken.sol');
const TestERC20Token = artifacts.require('TestERC20Token.sol');
const utils = require('../contracts/bancor/test/helpers/Utils');
const ethUtil = require('ethereumjs-util');
const web3Utils = require('web3-utils');
const TokenConverter = artifacts.require('TokenConverter.sol');

let etherToken;
let smartToken1;
let smartToken2;
let smartToken3;
let smartToken4;
let myBitToken;
let contractRegistry;
let contractIds;
let converter1;
let converter2;
let converter3;
let converter4;
let bancorNetwork;
let smartToken1BuyPath;
let smartToken2BuyPath;
let smartToken1SellPath;
let smartToken2SellPath;
let mybBuyPath1;
let mybBuyPath2;
let defaultGasPriceLimit = BancorGasPriceLimit.class_defaults.gasPrice;
let tokenConverter;
function sign(msgToSign, signerAddress) {
    try {
        const sig = web3.eth.sign(signerAddress, ethUtil.bufferToHex(msgToSign));
        const { v, r, s } = ethUtil.fromRpcSig(sig);
        return { v: v, r: ethUtil.bufferToHex(r), s: ethUtil.bufferToHex(s) };
    }
    catch (err) {
        return err;
    }
}

/*
Token network structure:

         SmartToken2
         /         \
    SmartToken1   SmartToken3
          \          \
           \        SmartToken4
            \        /      \
            EtherToken     ERC20Token

*/

contract('BancorNetwork', accounts => {
    const trustedAddress = accounts[3];
    const untrustedAddress = accounts[1];
    before(async () => {
        contractRegistry = await ContractRegistry.new();
        contractIds = await ContractIds.new();

        let contractFeatures = await ContractFeatures.new();
        let contractFeaturesId = await contractIds.CONTRACT_FEATURES.call();
        await contractRegistry.registerAddress(contractFeaturesId, contractFeatures.address);

        let gasPriceLimit = await BancorGasPriceLimit.new(defaultGasPriceLimit);
        let gasPriceLimitId = await contractIds.BANCOR_GAS_PRICE_LIMIT.call();
        await contractRegistry.registerAddress(gasPriceLimitId, gasPriceLimit.address);

        let formula = await BancorFormula.new();
        let formulaId = await contractIds.BANCOR_FORMULA.call();
        await contractRegistry.registerAddress(formulaId, formula.address);

        bancorNetwork = await BancorNetwork.new(contractRegistry.address);
        let bancorNetworkId = await contractIds.BANCOR_NETWORK.call();
        await contractRegistry.registerAddress(bancorNetworkId, bancorNetwork.address);
        await bancorNetwork.setSignerAddress(accounts[3]);

        etherToken = await EtherToken.new();
        await etherToken.deposit({ value: 10000000 });

        await bancorNetwork.registerEtherToken(etherToken.address, true);

        smartToken1 = await SmartToken.new('Token1', 'TKN1', 2);
        await smartToken1.issue(accounts[0], 1000000);

        smartToken2 = await SmartToken.new('Token2', 'TKN2', 2);
        await smartToken2.issue(accounts[0], 2000000);

        smartToken3 = await SmartToken.new('Token3', 'TKN3', 2);
        await smartToken3.issue(accounts[0], 3000000);

        smartToken4 = await SmartToken.new('Token4', 'TKN4', 2);
        await smartToken4.issue(accounts[0], 2500000);

        myBitToken = await TestERC20Token.new('MyBit', 'MyB', 1000000);

        converter1 = await BancorConverter.new(smartToken1.address, contractRegistry.address, 0, etherToken.address, 250000);

        converter2 = await BancorConverter.new(smartToken2.address, contractRegistry.address, 0, smartToken1.address, 300000);
        await converter2.addConnector(smartToken3.address, 150000, false);

        converter3 = await BancorConverter.new(smartToken3.address, contractRegistry.address, 0, smartToken4.address, 350000);

        converter4 = await BancorConverter.new(smartToken4.address, contractRegistry.address, 0, etherToken.address, 150000);
        await converter4.addConnector(myBitToken.address, 220000, false);

        await etherToken.transfer(converter1.address, 50000);
        await smartToken1.transfer(converter2.address, 40000);
        await smartToken3.transfer(converter2.address, 25000);
        await smartToken4.transfer(converter3.address, 30000);
        await etherToken.transfer(converter4.address, 20000);
        await myBitToken.transfer(converter4.address, 35000);

        await smartToken1.transferOwnership(converter1.address);
        await converter1.acceptTokenOwnership();

        await smartToken2.transferOwnership(converter2.address);
        await converter2.acceptTokenOwnership();

        await smartToken3.transferOwnership(converter3.address);
        await converter3.acceptTokenOwnership();

        await smartToken4.transferOwnership(converter4.address);
        await converter4.acceptTokenOwnership();

        smartToken1BuyPath = [etherToken.address, smartToken1.address, smartToken1.address];
        smartToken2BuyPath = [etherToken.address, smartToken1.address, smartToken1.address, smartToken2.address, smartToken2.address];

        smartToken1SellPath = [smartToken1.address, smartToken1.address, etherToken.address];
        smartToken2SellPath = [smartToken2.address, smartToken2.address, smartToken1.address, smartToken1.address, etherToken.address];

        tokenConverter = await TokenConverter.new(myBitToken.address, bancorNetwork.address);

        mybBuyPath1 = [etherToken.address, smartToken4.address, myBitToken.address];
        mybBuyPath2 = [smartToken3.address, smartToken3.address, smartToken4.address, smartToken4.address, myBitToken.address];
        await tokenConverter.addPath(etherToken.address, mybBuyPath1);
        await tokenConverter.addPath(smartToken3.address, mybBuyPath2);
    });

    it('verifies that convert function in TokenConverter works', async () => {
        let whitelist = await Whitelist.new();
        await whitelist.addAddress(accounts[0]);
        await whitelist.addAddress(tokenConverter.address);
        await converter1.setConversionWhitelist(whitelist.address);
        await converter2.setConversionWhitelist(whitelist.address);
        await converter3.setConversionWhitelist(whitelist.address);
        await converter4.setConversionWhitelist(whitelist.address);
        let balanceBeforeTransfer = await myBitToken.balanceOf(accounts[0]);
        smartToken3.approve(tokenConverter.address, 10000);
        await tokenConverter.convertTokenToMyBit(smartToken3.address, 10000, 1, {from: accounts[0], value: 0 });
        let balanceAfterTransfer = await myBitToken.balanceOf(accounts[0]);
        assert.isBelow(balanceBeforeTransfer.toNumber(), balanceAfterTransfer.toNumber(), 'amount transfered');
    });
});
