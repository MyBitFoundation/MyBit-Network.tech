pragma solidity 0.4.24;

import '../database/Database.sol';

contract PlatformFunds {

  Database public database;

  // @notice initialize database
  constructor(address _database)
  public {
    database = Database(_database);
  }

  // @notice owners must set the wallet to receive payments here before initiating crowdsale
  // @dev will overwrite old wallet address
  function setPlatformWallet(address _walletAddress)
  external
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("platformWallet")), _walletAddress);
    emit LogPlatformWallet(_walletAddress);
  }

  // @notice
  function setPlatformToken(address _tokenAddress)
  external
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("platformToken")), _tokenAddress);
    emit LogPlatformToken(_tokenAddress);
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
  //                                                Events                                                                        //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  event LogPlatformWallet(address _platformWallet);
  event LogPlatformToken(address _platformToken);






}
