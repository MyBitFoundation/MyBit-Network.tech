pragma solidity 0.4.24;

import '../database/Database.sol';
import '../math/SafeMath.sol';

contract Operators {

  Database public database; 

  constructor(address _database) { 
    database = Database(_database); 
  }

  // @notice allows the platform owners to onboard a new operator. 
  // @notice operators will receive crowdfunding payments and are liable for producing/installing assets.
  function registerOperator(address _operatorAddress, string _operatorURI)
  external 
  onlyOwner { 
    bytes32 operatorID = keccak256(abi.encodePacked(_operatorURI)); 
    require(database.addressStorage(keccak256(abi.encodePacked("operator", operatorID))) == address(0)); 
    database.setAddress(keccak256(abi.encodePacked("operator", operatorID)), _operatorAddress); 
    emit LogOperatorRegistered(operatorID, _operatorURI); 
  }

  // @notice owners can remove operators from the platform here
  function removeOperator(bytes32 _operatorID)
  external 
  onlyOwner { 
    database.deleteAddress(keccak256(abi.encodePacked("operator", _operatorID)));
    emit LogOperatorRemoved(_operatorID, msg.sender); 
  }


  // @notice operator or owner can change the withdraw address of a registered operator
  function changeOperatorAddress(bytes32 _operatorID, address _newAddress)
  external { 
    address oldAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID)));
    require(oldAddress != address(0)); 
    require(msg.sender == oldAddress || database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    database.deleteAddress(keccak256(abi.encodePacked("operator", _operatorID)));
    database.setAddress(keccak256(abi.encodePacked("operator", _operatorID)), _newAddress);
    emit LogOperatorAddressChanged(_operatorID, msg.sender, _newAddress); 
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                Modifiers                                                                     //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                Modifiers                                                                     //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  event LogOperatorRegistered(bytes32 indexed _operatorID, string _operatorURI); 
  event LogOperatorRemoved(bytes32 indexed _operatorID, address _owner); 
  event LogOperatorAddressChanged(bytes32 indexed _operatorID, address _oldAddress, address _newAddress); 
}
