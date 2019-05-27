pragma solidity ^0.4.24;

import '../database/Database.sol';
import '../database/Events.sol';
import '../math/SafeMath.sol';

contract Operators {

  Database private database;
  Events private events;

  constructor(address _database, address _events) public {
    database = Database(_database);
    events = Events(_events);
  }

  // @notice allows the platform owners to onboard a new operator.
  // @notice operators will receive crowdfunding payments and are liable for producing/installing assets.
  function registerOperator(address _operatorAddress, string _operatorURI, string _assetType, address _referrerAddress)
  external
  onlyOwner {
    require(_operatorAddress != address(0));
    bytes32 operatorID = keccak256(abi.encodePacked("operator.uri", _operatorURI));
    require(database.addressStorage(keccak256(abi.encodePacked("operator", operatorID))) == address(0));
    database.setAddress(keccak256(abi.encodePacked("operator", operatorID)), _operatorAddress);
    database.setBytes32(keccak256(abi.encodePacked("operator", _operatorAddress)), operatorID);
    if(_referrerAddress == address(0)){
      database.setAddress(keccak256(abi.encodePacked("referrer", operatorID)), database.addressStorage(keccak256(abi.encodePacked("platform.wallet.assets"))));
    } else {
      database.setAddress(keccak256(abi.encodePacked("referrer", operatorID)), _referrerAddress);
    }

    events.operator('Operator registered', operatorID, _operatorURI, _operatorAddress);
    events.operator('Asset type', operatorID, _assetType, _operatorAddress);
    //emit LogOperatorRegistered(operatorID, _operatorURI);
  }

  // @notice owners can remove operators from the platform here
  function removeOperator(bytes32 _operatorID)
  external
  onlyOwner {
    database.deleteAddress(keccak256(abi.encodePacked("operator", _operatorID)));
    events.operator('Operator removed', _operatorID, '', msg.sender);
    //emit LogOperatorRemoved(_operatorID, msg.sender);
  }


  // @notice operator or owner can change the withdraw address of a registered operator
  function changeOperatorAddress(bytes32 _operatorID, address _newAddress)
  external {
    address oldAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID)));
    require(oldAddress != address(0));
    require(msg.sender == oldAddress || database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    database.setAddress(keccak256(abi.encodePacked("operator", _operatorID)), _newAddress);
    database.deleteBytes32(keccak256(abi.encodePacked("operator", oldAddress)));
    database.setBytes32(keccak256(abi.encodePacked("operator", _newAddress)), _operatorID);
    events.operator('Operator address changed', _operatorID, '', _newAddress);
    //events.transaction('Operator address changed', oldAddress, _newAddress, 0, _operatorID);
    //emit LogOperatorAddressChanged(_operatorID, msg.sender, _newAddress);
  }

  function changeReferrerAddress(bytes32 _operatorID, address _newAddress)
  external {
    address oldAddress = database.addressStorage(keccak256(abi.encodePacked("referrer", _operatorID)));
    require(oldAddress != address(0));
    require(msg.sender == oldAddress || database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    database.setAddress(keccak256(abi.encodePacked("referrer", _operatorID)), _newAddress);
    events.operator('Referrer address changed', _operatorID, '', _newAddress);
  }

  // @notice operator can choose which ERC20 tokens he's willing to accept as payment
  function acceptERC20Token(bytes32 _operatorID, address _tokenAddress, bool _accept)
  external
  onlyOperator(_operatorID)
  returns (bool) {
    database.setBool(keccak256(abi.encodePacked("operator.acceptsToken", _operatorID, _tokenAddress)), _accept);
    return true;
  }

  // @notice operator can choose whether or not to accept Ether
  function acceptEther(bytes32 _operatorID, bool _accept)
  external
  onlyOperator(_operatorID)
  returns (bool) {
    database.setBool(keccak256(abi.encodePacked("operator.acceptsEther", _operatorID)), _accept);
    return true;
  }

  // @notice operator can choose which ERC20 tokens it pays out with
  function payoutERC20Token(bytes32 _operatorID, address _tokenAddress, bool _payout)
  external
  onlyOperator(_operatorID)
  returns (bool) {
    database.setBool(keccak256(abi.encodePacked("operator.payoutToken", _operatorID, _tokenAddress)), _payout);
    return true;
  }

  // @notice operator can choose whether or not to payout in Eth
  function payoutEther(bytes32 _operatorID, bool _payout)
  external
  onlyOperator(_operatorID)
  returns (bool) {
    database.setBool(keccak256(abi.encodePacked("operator.payoutEther", _operatorID)), _payout);
    return true;
  }

  function addAssetType(bytes32 _operatorID, string _assetType)
  external
  onlyOperator(_operatorID)
  returns (bool) {
    events.operator('Asset type', _operatorID, _assetType, msg.sender);
    return true;
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('Operators destroyed', address(this), msg.sender, address(this).balance, address(0));
    selfdestruct(msg.sender);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                Modifiers                                                                     //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  // @notice Sender must be the operator address for this operatorID
  modifier onlyOperator(bytes32 _operatorID) {
    require(database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))) == msg.sender);
    _;
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                Events                                                                        //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*
  event LogOperatorRegistered(bytes32 indexed _operatorID, string _operatorURI);
  event LogOperatorRemoved(bytes32 indexed _operatorID, address _owner);
  event LogOperatorAddressChanged(bytes32 indexed _operatorID, address _oldAddress, address _newAddress);
  event LogOperatorAcceptsToken(bytes32 indexed _operatorID, address _tokenAddress);
  */

}
