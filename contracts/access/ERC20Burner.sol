pragma solidity ^0.4.24;

import '../interfaces/BurnableERC20.sol';
import "../interfaces/DBInterface.sol";
import "../database/Events.sol";

/// @title A contract for burning ERC20 tokens as usage fee for dapps
/// @author Kyle Dewhurst & Peter Phillips MyBit Foundation
/// @notice Allows Dapps to call this contract to burn ERC20 tokens as a usage fee
/// @dev This contract does not accept tokens. It only burns tokens from investors wallets to run platform functionality
contract ERC20Burner {

  BurnableERC20 public token;  // The instance of the ERC20 burner contract
  DBInterface public database;   // The datbase instance
  Events public events; //Events contract


  // @notice constructor: initializes database and the MYB token
  // @param: the address for the database contract used by this platform
  constructor(address _database, address _events)
  public {
    database = DBInterface(_database);
    events = Events(_events);
    token = BurnableERC20(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", keccak256(abi.encodePacked("platformAssetID"))))));
    require(address(token) != address(0));
  }

  // @notice authorized contracts can burn mybit tokens here if the investor has approved this contract to do so
  // @param (address) _tokenHolder = the address of the mybit token holder who wishes to burn _amount of tokens
  // @param (uint) _amount = the amount of tokens to be burnt (must include decimal places)
  function burn(address _tokenHolder, uint _amount)
  external
  onlyPlatformContracts(msg.sender)
  acceptedState(_tokenHolder)
  returns (bool) {
    require(token.burnFrom(_tokenHolder, _amount));
    events.transaction('Platform Token Burnt', _tokenHolder, msg.sender, _amount, '');
    //emit LogMYBBurned(_tokenHolder, msg.sender, _amount);
    return true;
  }

  // @notice owners can set the cost of functionality on the platform here.
  // @dev _amount will be how many platformTokens are burned to call the method at _contractAddress
  // @param (bytes4) _methodID: the methodID of the function which is to require a burning fee
  // @param (address) _contractAddress: the address of the contract where this method is contained
  function setFee(bytes4 _methodID, address _contractAddress, uint _amount)
  external
  onlyOwner
  returns (bool) {
    //Sets the price to burn per function in MyB.
    database.setUint(keccak256(abi.encodePacked(_methodID, _contractAddress)), _amount);
    emit LogFeeAdded(_contractAddress, _methodID, _amount);
    return true;
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('ERC20Burner destroyed', address(this), msg.sender, address(this).balance, '');
    selfdestruct(msg.sender);
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
  modifier onlyPlatformContracts(address _burner) {
    require(database.boolStorage(keccak256(abi.encodePacked("contract", _burner))));
    _;
  }

  // @notice reverts if investor hasn't accepted current contract state or if he doesn't ignore state changes entirely
  modifier acceptedState(address _investor) {
    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));
    require(database.boolStorage(keccak256(abi.encodePacked(currentState, _investor))) || database.boolStorage(keccak256(abi.encodePacked("ignoreStateChanges", _investor))));
    _;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Events
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  event LogMYBBurned(address _tokenHolder, address _burningContract, uint _amount);
  event LogFeeAdded(address indexed _contractAddress, bytes4 _methodID, uint _amount);

}
