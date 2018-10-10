pragma solidity 0.4.24;

import '../database/Database.sol';
import '../math/SafeMath.sol';

contract Operators {

  Database private database;

  constructor(address _database) public {
    database = Database(_database);
  }

  // @notice allows the platform owners to onboard a new operator.
  // @notice operators will receive crowdfunding payments and are liable for producing/installing assets.
  // TODO: Set preferred crowdfunding token (ERC20, ETH, DAI)  (which to reject)
  function registerOperator(address _operatorAddress, string _operatorURI)
  external
  onlyOwner {
    require(_operatorAddress != address(0));
    bytes32 operatorID = keccak256(abi.encodePacked(_operatorURI));
    require(database.addressStorage(keccak256(abi.encodePacked("operator", operatorID))) == address(0));
    database.setAddress(keccak256(abi.encodePacked("operator", operatorID)), _operatorAddress);
    //database.setBytes32(keccak256(abi.encodePacked("operator", _operatorAddress)), operatorID);
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

  // @notice operator can choose which ERC20 tokens he's willing to accept as payment
  function acceptERC20Token(bytes32 _operatorID, address _tokenAddress, bool _accept)
  external
  onlyOperator(_operatorID)
  returns (bool) {
    database.setBool(keccak256(abi.encodePacked("acceptsToken", _operatorID, _tokenAddress)), _accept);
    return true;
  }

  // @notice operator can choose whether or not to accept Ether
  function acceptEther(bytes32 _operatorID, bool _accept)
  external
  onlyOperator(_operatorID)
  returns (bool) {
    database.setBool(keccak256(abi.encodePacked("acceptsEther", _operatorID)), _accept);
    return true;
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



  event LogOperatorRegistered(bytes32 indexed _operatorID, string _operatorURI);
  event LogOperatorRemoved(bytes32 indexed _operatorID, address _owner);
  event LogOperatorAddressChanged(bytes32 indexed _operatorID, address _oldAddress, address _newAddress);
  event LogOperatorAcceptsToken(bytes32 indexed _operatorID, address _tokenAddress);

}
