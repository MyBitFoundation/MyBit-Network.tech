import { promisifyAll } from 'bluebird';

import ABIInterfaceArray from '../../util/abi/AssetCreation.json';

const SMART_CONTRACT_ADDRESS = '0x81C78897D9C1f222a389ED34f65d49e9EF72741A';
const instancePromisifier = instance =>
  promisifyAll(instance, { suffix: 'Async' });

var assetIDInstallerID;

export default class AssetCreationUtil {
  async load(web3, assetID) {
    const abi = await web3.eth.contract(ABIInterfaceArray);
    var instance = instancePromisifier(abi.at(SMART_CONTRACT_ADDRESS));
    assetIDInstallerID = {};

    /* Create Listeners */
    this.LogAssetInfo = instance.LogAssetInfo(
      { _assetID: assetID },
      { fromBlock: 0, toBlock: 'latest' }
    );
    this.setEventListeners();
  }

  async setEventListeners() {
    /* Listen for the events */
    let _installerID;
    let _assetID;
    this.LogAssetInfo.watch(function(e, r) {
      if (!e) {
        _assetID = r['args']['_assetID'];
        _installerID = r['args']['_installerID'];
        assetIDInstallerID[_assetID] = _installerID;
      }
    });
  }

  async returnInstallerID(assetID) {
    return parseInt(assetIDInstallerID[assetID]);
  }
}
