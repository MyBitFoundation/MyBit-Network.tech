import { promisifyAll } from 'bluebird';
import ABIInterfaceArray from '../../util/abi/HashFunctions.json';

const SMART_CONTRACT_ADDRESS = '0xBb8737ACA3d995D08076856C785F2CeC47F2996b';
const instancePromisifier = instance =>
  promisifyAll(instance, { suffix: 'Async' });

export default class HashFunctionsUtil {
  async load(web3) {
    const abi = await web3.eth.contract(ABIInterfaceArray);
    this.instance = instancePromisifier(abi.at(SMART_CONTRACT_ADDRESS));
    this.web3 = web3;
  }

  async uintHash(_uint) {
    const uintHashRes = await this.instance.uintHashAsync(_uint);
    return uintHashRes;
  }


  async stakingID(_staker, _blockNumber, _amount) {
    const stakingIDRes = await this.instance.getStakingIDAsync(
      _staker, _blockNumber, _amount);
    return stakingIDRes;
  }

  async sha3Call(_name) {
    const sha3ResultRes = await this.instance.sha3Async(_name);
    return sha3ResultRes;
  }

  async addressHash(_address) {
    const addressHashRes = await this.instance.addressHashAsync(_address);
    return addressHashRes;
  }

  async contractHash(_name) {
    const contractHashRes = await this.instance.contractHashAsync(_name);
    return contractHashRes;
  }

  async stringAddress(_string, _address){
    const stringAddressRes = await this.instance.stringAddressAsync(
      _string, _address);
    return stringAddressRes;
  }

  async stringBytes(_string, _bytes){
    const stringBytesRes = await this.instance.stringBytesAsync(
      _string, _bytes);
    return stringBytesRes;
  }

  async stringUint(_string, _uint){
    const stringUintRes = await this.instance.stringUintAsync(
      _string, _uint);
    return stringUintRes;
  }

  async stringBytesAddress(_string, _bytes, _address){
    const stringBytesAddressRes = await this.instance.stringBytesAddressAsync(
      _string, _bytes, _address);
    return stringBytesAddressRes;
  }

  async addressUintUint(_address, _uint, _uint2){
    const addressUintUintRes = await this.instance.addressUintUintAsync(
      _address, _uint, _uint2);
    return addressUintUintRes;
  }

  async getAuthorizeHash(_contractAddress, _owner, _fnName, _recipient){
    const getAuthorizeHashRes = await this.instance.getAuthorizeHashAsync(
      _contractAddress, _owner, _fnName, _recipient);
    return getAuthorizeHashRes;
  }

  async uintUintUint(_uint, _uint1, _uint2){
    const uintUintUintRes = await this.instance.getAuthorizeHashAsync(
      _uint, _uint1, _uint2);
    return uintUintUintRes;
  }


}
