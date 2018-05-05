import { promisifyAll } from 'bluebird';

import ABIInterfaceArray from '../../util/abi/FundingHub.json';

const SMART_CONTRACT_ADDRESS = '0x566019cdaD6ece4b37B5551d23be8f453fDd467F';
const instancePromisifier = instance =>
  promisifyAll(instance, { suffix: 'Async' });

var totalContributorsPerAssetID;

export default class FundingHubUtil {
  async load(web3, assetID) {
    const abi = await web3.eth.contract(ABIInterfaceArray);
    this.instance = instancePromisifier(abi.at(SMART_CONTRACT_ADDRESS));
    this.web3 = web3;

    totalContributorsPerAssetID = {};

    this.LogNewFunder = this.instance.LogNewFunder(
      { _assetID: assetID },
      { fromBlock: 0, toBlock: 'latest' }
    );
    this.setEventListeners();
  }

  async setEventListeners() {
    /* Listen for the events */
    let _assetID;
    let _totalContributors = 0;
    this.LogNewFunder.watch(function(e, r) {
      if (!e) {
        _assetID = r['args']['_assetID'];
        _totalContributors += 1;
        totalContributorsPerAssetID[_assetID] = _totalContributors;
      }
    });
  }

  async returnContributers(_assetID) {
    return parseInt(totalContributorsPerAssetID[_assetID]);
  }

  async fund(_assetID, _value) {
    let ethValue = this.web3.toWei(_value);
    let iT = this.instance;
    let w3 = this.web3;
    this.instance.fund.estimateGas(_assetID,
      {from:this.web3.eth.coinbase,value:ethValue}, async function(error,result){
        if(!error){
          await iT.fundAsync(_assetID, {
            from:w3.eth.coinbase,value:ethValue, gas:parseInt(result)});
          }
      });
    }

  async payout(_assetID) {
    let iT = this.instance;
    let w3 = this.web3;
    this.instance.payout.estimateGas(_assetID,
      {from:this.web3.eth.coinbase}, async function(error,result){
        if(!error){
          await iT.payoutAsync(_assetID, {
            from:w3.eth.coinbase, gas:parseInt(result)});
          }
      });
    }

  async initiateRefund(_assetID) {
    let iT = this.instance;
    let w3 = this.web3;
    this.instance.initiateRefund.estimateGas(_assetID,
      {from:this.web3.eth.coinbase}, async function(error,result){
        if(!error){
          await iT.initiateRefundAsync(_assetID, {
            from:w3.eth.coinbase, gas:parseInt(result)});
          }
      });
    }

  async refund(_assetID) {
    let iT = this.instance;
    let w3 = this.web3;
    this.instance.refundAsync.estimateGas(_assetID,
      {from:this.web3.eth.coinbase}, async function(error,result){
        if(!error){
          await iT.refundAsync(_assetID, {
            from:w3.eth.coinbase, gas:parseInt(result)});
          }
      });
    }
}
