pragma solidity ^0.4.24;

import '../interfaces/BurnableERC20.sol';
import '../database/Database.sol';

/// @title A contract for burning ERC20 tokens as usage fee for dapps
/// @author Kyle Dewhurst, MyBit Foundation
/// @notice Allows Dapps to call this contract to burn ERC20 tokens as a usage fee
/// @dev This contract does not accept tokens. It only burns tokens from users wallets when approved to do so
contract ERC20Burner {

  BurnableERC20 public token;  // The instance of the ERC20 burner contract
  Database public database;


  // @notice constructor: instantiates myb token address and sets owner
  // @param (address) _myBitTokenAddress = The MyBit token address
  constructor(address _myBitTokenAddress, address _database)
  public {
    database = Database(_database);
    token = BurnableERC20(_myBitTokenAddress);
  }

  // @notice authorized contracts can burn mybit tokens here if the user has approved this contract to do so
  // @param (address) _tokenHolder = the address of the mybit token holder who wishes to burn _amount of tokens
  // @param (uint) _amount = the amount of tokens to be burnt (must include decimal places)
  function burn(address _tokenHolder, uint _amount)
  external
  onlyAuthorizedBurner(msg.sender)
  returns (bool) {
    require(token.allowance(_tokenHolder, address(this)) >= _amount);
    require(token.burnFrom(_tokenHolder, _amount));
    emit LogMYBBurned(_tokenHolder, msg.sender, _amount);
    return true;
  }

  // @notice owner can authorize a contract to burn tokens here
  // @param the address of the dapp contract
  function authorizeBurner(address _burningContract)
  external
  onlyOwner
  returns (bool) {
    require(!database.boolStorage(keccak256(abi.encodePacked("authorizedBurner", _burningContract))));
    database.setBool(keccak256(abi.encodePacked("authorizedBurner", _burningContract)), true);
    emit LogBurnerAuthorized(msg.sender, _burningContract);
    return true;
  }

  // @notice owner can revoke a contracts authorization to burn tokens here
  // @param the address of the dapp contract
  function removeBurner(address _burningContract)
  external
  onlyAuthorizedBurner(_burningContract)
  onlyOwner
  returns (bool) {
    database.deleteBool(keccak256(abi.encodePacked("authorizedBurner", _burningContract)));
    emit LogBurnerRemoved(msg.sender, _burningContract);
    return true;
  }

  // @notice fallback function. Rejects all ether
  function ()
  external
  payable {
    revert();
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // @notice reverts if msg.sender isn't the owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  // @notice reverts if address isn't authorized to burn MYB
  modifier onlyAuthorizedBurner(address _burner) {
    require(database.boolStorage(keccak256(abi.encodePacked("authorizedBurner", _burner))));
    _;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Events
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  event LogMYBBurned(address indexed _tokenHolder, address indexed _burningContract, uint _amount);
  event LogBurnerAuthorized(address _owner, address _burningContract);
  event LogBurnerRemoved(address _owner, address _burningContract);
}
