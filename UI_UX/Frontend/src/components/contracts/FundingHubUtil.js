import { promisifyAll } from 'bluebird';

import ABIInterfaceArray from '../../util/abi/FundingHub.json';

const SMART_CONTRACT_ADDRESS = '0xeC4C8f87aA7f0Bd86FA471521f47dDA40feb67d2';
const instancePromisifier = instance =>
  promisifyAll(instance, { suffix: 'Async' });

var totalContributorsPerAssetID;

export default class FundingHubUtil {
  async load(web3, assetID) {
    const abi = await web3.eth.contract(ABIInterfaceArray);
    this.instance = instancePromisifier(abi.at(SMART_CONTRACT_ADDRESS));
    this.web3 = web3;
    this.LogNewFunder = this.instance.LogNewFunder(
      { _assetID: assetID },
      { fromBlock: 0, toBlock: 'latest' }
    );
  }

  async setEventListeners() {
    /* Listen for the events */
    this.LogNewFunder.watch(function(e, r) {
      if (!e) {
        totalContributorsPerAssetID[r['args']['_assetID']] += 1;
        console.log(totalContributorsPerAssetID[r['args']['_assetID']]);
      }
    });
  }

  async fund(_assetID, _value) {
    const response = await this.instance.fundAsync(_assetID, {
      from: this.web3.eth.coinbase,
      gas: 2000000,
      value: _value
    });
    return response;
    /*      if(this.modifier.fundingLimitValue(_assetID) &&
         this.modifier.fundingLimitTime(_assetID) &&
         this.modifier.onlyApproved(2) &&
         this.modifier.atStage(_assetID, 1) &&
         this.modifier.notZero(_value)
      ){
        this.instance.fund.estimateGas(
          _assetID,
          {from: this.web3.eth.coinbase, value:_value},
          async function(e,gasEstimate){
            if(!e){
              const response = await this.instance.fundAsync(_assetID,{
                  from: this.web3.eth.coinbase, gas:gasEstimate, value: _value});
                }
              })
            }
          };*/
  }

  async payout(_assetID) {
    const response = await this.instance.payoutAsync(_assetID, {
      from: this.web3.eth.coinbase,
      gas: 2000000
    });
    return response;
    /*  if(this.modifier.atStage(_assetID, 3) &&
         this.modifier.fundingPeriodOver(_assetID)
      ){
        this.instance.payout.estimateGas(
          _assetID,
          {from: this.web3.eth.coinbase},
          async function(e,gasEstimate){
            if(!e){
              const response = await this.instance.payoutAsync(_assetID,{
                from: this.web3.eth.coinbase, gas:gasEstimate});
              }
          }
        )
      }
    }*/
  }

  async initiateRefund(_assetID) {
    const response = await this.instance.initiateRefundAsync(_assetID, {
      from: this.web3.eth.coinbase,
      gas: 2000000
    });
    return response;

    /*      if(this.modifier.fundingPeriodOver(_assetID) &&
         this.modifier.atStage(_assetID, 1)
      ){
        this.instance.initiateRefund.estimateGas(
          _assetID,
          {from: this.web3.eth.coinbase},
          async function(e,gasEstimate){
            if(!e){
              const response = await this.instance.initiateRefundAsync(_assetID,{
                from: this.web3.eth.coinbase, gas:gasEstimate});
              }
          }
        )
      }
    }*/
  }

  async refund(_assetID) {
    const response = await this.instance.refundAsync(_assetID, {
      from: this.web3.eth.coinbase,
      gas: 2000000
    });
    return response;

    /*if(this.modifier.atStage(_assetID, 1))
        {
          this.instance.refund.estimateGas(
            _assetID,
            {from:this.web3.eth.coinbase},
            async function(e,gasEstimate){
              if(!e){
                const response = await this.instance.refundAsync(_assetID,{
                from: this.web3.eth.coinbase, gas:gasEstimate});
              }
            }
          )
        }
      }*/
  }
}
