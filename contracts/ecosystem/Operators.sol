pragma solidity 0.4.24;

import '../database/Database.sol';
import '../math/SafeMath.sol';

contract Operators {

  Database public database; 

  constructor(address _database) { 
    database = Database(_database); 
  }


  function registerOperator(address _operatorAddress, string _operatorName, string _assetCode, string _country)
  external 
  onlyOwner { 
    bytes32 operatorID = keccak256(abi.encodePacked(_operatorAddress, _operatorName, _assetCode, _country)); 
    database.setBool(keccak256(abi.encodePacked("operator", operatorID)), true);
    emit LogOperatorRegistered(operatorID, _operatorAddress, _operatorName, _assetCode, _country); 
  }


  function removeOperator(bytes32 _operatorID)
  external 
  onlyOwner { 
    database.deleteBool(keccak256(abi.encodePacked("operator", _operatorID)));
    LogOperatorRemoved(_operatorID, msg.sender); 
  }


  function changeOperatorAddress(bytes32 _operatorID, address _newAddress)
  external { 
    require(database.boolStorage(keccak256(abi.encodePacked("operator", _operatorID))) || database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    database.deleteBool(keccak256(abi.encodePacked("operator", _operatorID)));
    database.setBool(keccak256(abi.encodePacked("operator", _operatorID)), true);
    LogOperatorAddressChanged(_operatorID, msg.sender, _newAddress); 
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


  event LogOperatorRegistered(bytes32 indexed _operatorID, address indexed _operatorAddress, string _operatorName, string _assetCode, string _country); 
  event LogOperatorRemoved(bytes32 indexed _operatorID, address _owner); 
  event LogOperatorAddressChanged(bytes32 indexed _operatorID, address _oldAddress, address _newAddress); 
}
