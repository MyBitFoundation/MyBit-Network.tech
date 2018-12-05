pragma solidity ^0.4.24;

import '../database/Database.sol';
import '../database/Events.sol';

contract Platform {

  Database public database;
  Events public events;

  // @notice initialize database
  constructor(address _database, address _events)
  public {
    database = Database(_database);
    events = Events(_events);
  }

  // @notice owners must set the wallet to receive payments here before initiating crowdsale
  // @dev will overwrite old wallet address
  function setPlatformWallet(address _walletAddress)
  external
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("platformWallet")), _walletAddress);
    //emit LogPlatformWallet(_walletAddress);
    events.registration('Platform wallet', _walletAddress);
  }

  // @notice
  function setPlatformToken(address _tokenAddress)
  external
  onlyOwner {
    //@dev Set the address for the platform token, using keccak256(abi.encodePacked("platformAssetID")) as the assetID for the platform
    database.setAddress(keccak256(abi.encodePacked("tokenAddress", keccak256(abi.encodePacked("platformAssetID")))), _tokenAddress);
    database.setAddress(keccak256(abi.encodePacked("platformToken")), _tokenAddress);
    //emit LogPlatformToken(_tokenAddress);
    events.registration('Platform token', _tokenAddress);
  }

  function setBurnrate(uint _percent)
  external
  onlyOwner {
    require(_percent < 100 && _percent >= 0);
    database.setUint(keccak256(abi.encodePacked("burnrate")), _percent);
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('PlatformFunds destroyed', address(this), msg.sender, address(this).balance, '');
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






}
