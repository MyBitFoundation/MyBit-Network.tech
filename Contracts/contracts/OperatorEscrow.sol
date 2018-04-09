pragma solidity ^0.4.19;

import './Database.sol';
import './MyBitToken.sol';
import './SafeMath.sol';

// This contract is where operators can deposit MyBit tokens to be eligable to create an asset on the platform.
// The escrowed tokens are available to withdraw if the Asset Fails funding or the operator is replaced or the Asset finishes it's lifecycle
contract OperatorEscrow {
  using SafeMath for *;
  MyBitToken public myBitToken;
  Database public database;

  // Constructor. Initiate Database and MyBitToken
  function OperatorEscrow(address _database, address _tokenAddress)
  public {
    database = Database(_database);
    myBitToken = MyBitToken(_tokenAddress);
  }

  // Operator can deposit MyBit here to be locked for escrow
  function depositEscrow(uint _amount)
  external
  funderApproved
  returns (bool) {
    require(myBitToken.transferFrom(msg.sender, this, _amount));
    uint depositedAmount = database.uintStorage(keccak256("operatorAmountDeposited", msg.sender));
    database.setUint(keccak256("operatorAmountDeposited", msg.sender), depositedAmount.add(_amount));
    LogEscrowDeposited(msg.sender, _amount, now);
    return true;
  }

  // Operator can withdraw any escrowed tokens that are no longer needed in escrow here
  // To withdraw the asset must have: Not started funding (stage = 0), Failed Funding (stage = 2), Finished lifecycle (stage = 5))
  function unlockEscrow(bytes32 _assetID)
  external
  funderApproved {
    require(database.boolStorage(keccak256("operatorEscrowed", _assetID, msg.sender)));    // Make sure sender has escrowed tokens for this asset
    uint fundingStage = database.uintStorage(keccak256("fundingStage", _assetID));
    assert (fundingStage == 0 || fundingStage == 2 || fundingStage == 5);    // check that asset is not live
    database.deleteBool(keccak256("operatorEscrowed", _assetID, msg.sender));    // Remove senders as operator
    uint lockedAmount = database.uintStorage(keccak256("operatorAmountEscrowed", msg.sender));
    uint assetLockedAmount = database.uintStorage(keccak256("assetEscrowRequirement", _assetID));
    uint depositedAmount = database.uintStorage(keccak256("operatorAmountDeposited", msg.sender));
    database.setUint(keccak256("operatorAmountEscrowed", msg.sender), lockedAmount.sub(assetLockedAmount));
    database.setUint(keccak256("operatorAmountDeposited", msg.sender), depositedAmount.add(lockedAmount.sub(assetLockedAmount)));
  }

  function withdrawToken(uint _amount)
  external
  funderApproved
  returns (bool){
    uint unlockedBalance = getUnlockedBalance(msg.sender);
    assert (unlockedBalance >= _amount);
    uint depositedAmount = database.uintStorage(keccak256("operatorAmountDeposited", msg.sender));
    assert (depositedAmount >= _amount);
    database.setUint(keccak256("operatorAmountDeposited", msg.sender), depositedAmount.sub(_amount));
    myBitToken.transfer(msg.sender, _amount);
    return true;
  }


  // ---------Fallback Function------------
  function()
  external {
    revert();
  }

  // --------------Read Only---------------

  // Get the amount of tokens that are not currently in escrow
  function getUnlockedBalance(address _operator)
  public
  view
  returns (uint){
    uint lockedBalance = database.uintStorage(keccak256("operatorAmountEscrowed", _operator));
    return database.uintStorage(keccak256("operatorAmountDeposited", _operator)).sub(lockedBalance);
  }

  // ----------------------------Modifiers-----------------------

  modifier funderApproved {
    require(database.uintStorage(keccak256("userAccess", msg.sender)) >= uint(1));
    _;
  }

  event LogPaymentReceived(bytes32 indexed _assetID, uint indexed _amount, address indexed _operator);
  event LogEscrowDeposited(address indexed _from, uint _amount, uint _timestamp);
}
