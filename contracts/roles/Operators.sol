pragma solidity ^0.4.24;

import '../database/Database.sol';
import '../database/Events.sol';

contract Operators {

  Database public database;
  Events public events;

  constructor(address _database, address _events) public {
    database = Database(_database);
    events = Events(_events);
  }

  // @notice allows the platform owners to onboard a new operator.
  // @notice operators will receive crowdfunding payments and are liable for producing/installing assets.
  function registerOperator(address _operatorAddress, string _operatorURI, string _ipfs, address _referrerAddress)
  external
  onlyOwner {
    require(_operatorAddress != address(0));
    bytes32 operatorID = keccak256(abi.encodePacked("operator.uri", _operatorURI));
    require(database.addressStorage(keccak256(abi.encodePacked("operator", operatorID))) == address(0));
    database.setBytes32(keccak256(abi.encodePacked("operator", _operatorAddress)), operatorID);
    database.setAddress(keccak256(abi.encodePacked("operator", operatorID)), _operatorAddress);
    database.setString(keccak256(abi.encodePacked("operator.ipfs", operatorID)), _ipfs);
    if(_referrerAddress == address(0)){
      database.setAddress(keccak256(abi.encodePacked("referrer", operatorID)), database.addressStorage(keccak256(abi.encodePacked("platform.wallet.assets"))));
    } else {
      database.setAddress(keccak256(abi.encodePacked("referrer", operatorID)), _referrerAddress);
    }

    events.operator('Operator registered', operatorID, _operatorURI, _ipfs, _operatorAddress);
  }

  // @notice owners can remove operators from the platform here
  function removeOperator(bytes32 _operatorID)
  external {
    address operatorAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID)));
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))) || msg.sender == operatorAddress);
    database.deleteBytes32(keccak256(abi.encodePacked("operator", operatorAddress)));
    database.deleteAddress(keccak256(abi.encodePacked("operator", _operatorID)));
    database.deleteAddress(keccak256(abi.encodePacked("referrer", _operatorID)));
    events.operator('Operator removed', _operatorID, '', '', msg.sender);
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
    events.operator('Operator address changed', _operatorID, '', '', _newAddress);
  }

  function changeReferrerAddress(bytes32 _operatorID, address _newAddress)
  external {
    address oldAddress = database.addressStorage(keccak256(abi.encodePacked("referrer", _operatorID)));
    require(oldAddress != address(0));
    require(msg.sender == oldAddress || database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    database.setAddress(keccak256(abi.encodePacked("referrer", _operatorID)), _newAddress);
    events.operator('Referrer address changed', _operatorID, '', '', _newAddress);
  }

  function updateIPFS(bytes32 _operatorID, string _ipfs)
  external
  onlyOperator(_operatorID)
  returns(bool){
    database.setString(keccak256(abi.encodePacked("operator.ipfs", _operatorID)), _ipfs);
    events.operator('Operator ipfs', _operatorID, '', _ipfs, msg.sender);
  }

  function addAsset(bytes32 _operatorID, string _name, string _ipfs, bool _acceptCrypto, bool _payoutCrypto, address _token)
  external
  onlyOperator(_operatorID)
  returns (bool) {
    bytes32 modelID = keccak256(abi.encodePacked('model.id', _operatorID, _name));
    require(database.addressStorage(keccak256(abi.encodePacked("model.operator", modelID))) == address(0));
    database.setAddress(keccak256(abi.encodePacked("model.operator", modelID)), msg.sender);
    database.setString(keccak256(abi.encodePacked('model.ipfs', modelID)), _ipfs);
    acceptToken(modelID, _token, _acceptCrypto);
    payoutToken(modelID, _token, _payoutCrypto);
    events.operator('Asset added', modelID, _name, _ipfs, msg.sender);
    return true;
  }

  function removeAsset(bytes32 _modelID)
  external
  onlyOperator(_modelID)
  returns (bool) {
    database.deleteAddress(keccak256(abi.encodePacked("model.operator", _modelID)));
    database.deleteString(keccak256(abi.encodePacked('model.ipfs', _modelID)));
    events.operator('Asset added', _modelID, '', '', msg.sender);
  }

  // @notice operator can choose which ERC20 tokens he's willing to accept as payment
  function acceptToken(bytes32 _modelID, address _tokenAddress, bool _accept)
  public
  onlyOperator(_modelID)
  returns (bool) {
    if(_tokenAddress == address(0)){
      database.setBool(keccak256(abi.encodePacked("model.acceptsEther", _modelID)), _accept);
    }
    database.setBool(keccak256(abi.encodePacked("model.acceptsToken", _modelID, _tokenAddress)), _accept);
    return true;
  }


  // @notice operator can choose which ERC20 tokens it pays out with
  function payoutToken(bytes32 _modelID, address _tokenAddress, bool _payout)
  public
  onlyOperator(_modelID)
  returns (bool) {
    if(_tokenAddress == address(0)){
      database.setBool(keccak256(abi.encodePacked("model.payoutEther", _modelID)), _payout);
    }
    database.setBool(keccak256(abi.encodePacked("model.payoutToken", _modelID, _tokenAddress)), _payout);
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

  // @notice Sender must be the operator address for this operatorID or modelID
  modifier onlyOperator(bytes32 _id) {
    require(database.addressStorage(keccak256(abi.encodePacked("operator", _id))) == msg.sender || database.addressStorage(keccak256(abi.encodePacked("model.operator", _id))) == msg.sender);
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
