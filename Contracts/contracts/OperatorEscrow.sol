pragma solidity 0.4.23;

import './Database.sol';
import './ERC20.sol';
import './SafeMath.sol';

//------------------------------------------------------------------------------------------------------------------
// This contract is where operators can deposit MyBit tokens to be eligable to create an asset on the platform.
// The escrowed tokens are available to withdraw if the Asset Fails funding or the operator is replaced or the Asset finishes it's lifecycle
// TODO: Variable names escrowed vs deposited (make clearer)
// TODO: Make function to switch assetManager 
//------------------------------------------------------------------------------------------------------------------
contract OperatorEscrow {
  using SafeMath for *;

  ERC20 public myBitToken;
  Database public database;

  //------------------------------------------------------------------------------------------------------------------
  // Constructor. Initiate Database and MyBitToken
  //------------------------------------------------------------------------------------------------------------------
  constructor(address _database, address _tokenAddress)
  public {
    database = Database(_database);
    myBitToken = ERC20(_tokenAddress);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Operator can deposit MyBit here to be locked for escrow
  //------------------------------------------------------------------------------------------------------------------
  function depositEscrow(uint _amount)
  external
  funderApproved
  returns (bool) {
    require(myBitToken.transferFrom(msg.sender, this, _amount));
    uint depositedAmount = database.uintStorage(keccak256("operatorAmountDeposited", msg.sender));
    database.setUint(keccak256("operatorAmountDeposited", msg.sender), depositedAmount.add(_amount));
    emit LogEscrowDeposited(msg.sender, _amount, now);
    return true;
  }

  function approveOperatorLending()
  external
  returns (bool) {

  }

  function requestOperatorLending()
  external returns (bool) {

  }

  //------------------------------------------------------------------------------------------------------------------
  // Operator can withdraw any escrowed tokens that are no longer needed in escrow here
  // To withdraw the asset must have: Not started funding (stage = 0), Failed Funding (stage = 2), Finished lifecycle (stage = 5))
  // TODO: let staker withdraw tokens for assetmanager in the case that assetmanager didn't put up escrow
  //------------------------------------------------------------------------------------------------------------------
  function unlockEscrow(bytes32 _assetID)
  external
  funderApproved {
    require(database.addressStorage(keccak256("assetOperator", _assetID)) == msg.sender);    // Make sure sender has escrowed tokens for this asset
    uint amountToUnlock = database.uintStorage(keccak256("lockedForAsset", _assetID));
    assert(amountToUnlock > 0);
    uint fundingStage = database.uintStorage(keccak256("fundingStage", _assetID));
    if (fundingStage == 0 || fundingStage == 2 || fundingStage == 5){    // is asset finished?
      releaseEscrow(amountToUnlock, _assetID);
    }
    else {
      uint amountRaised = database.uintStorage(keccak256("amountRaised", _assetID));
      uint assetIncome = database.uintStorage(keccak256("assetIncome", _assetID));
      uint percentageROI = database.uintStorage(keccak256(assetIncome, _assetID)).mul(100).div(amountRaised);
      if (percentageROI >= uint(100)) { releaseEscrow(amountToUnlock, _assetID); }
      if (percentageROI >= uint(75)) { releaseEscrow((uint(75).mul(amountRaised)).div(uint(100)), _assetID); }
      if (percentageROI >= uint(50)) { releaseEscrow((uint(50).mul(amountRaised)).div(uint(100)), _assetID); }
      if (percentageROI >= uint(25)) { releaseEscrow((uint(25).mul(amountRaised)).div(uint(100)), _assetID); }
    }
  }

  //------------------------------------------------------------------------------------------------------------------
  // Releases escrowed tokens. Only called internally.
  // TODO: add amount already paid to operator
  // TODO: reduce lockedForAsset
  //------------------------------------------------------------------------------------------------------------------
  function releaseEscrow(uint _amount, bytes32 _assetID)
  internal {
    uint amountLockedForAsset = database.uintStorage(keccak256("lockedForAsset", _assetID));
    uint totalEscrowedAmount = database.uintStorage(keccak256("operatorAmountEscrowed", msg.sender));
    uint depositedAmount = database.uintStorage(keccak256("operatorAmountDeposited", msg.sender));
    database.setUint(keccak256("lockedForAsset", _assetID), amountLockedForAsset.sub(_amount));
    database.setUint(keccak256("operatorAmountEscrowed", msg.sender), totalEscrowedAmount.sub(_amount));
    database.setUint(keccak256("operatorAmountDeposited", msg.sender), depositedAmount.add(totalEscrowedAmount.sub(_amount)));
  }

  //------------------------------------------------------------------------------------------------------------------
  // Operator can withdraw tokens here once they have unlocked them from a previous asset escrow
  // TODO: event
  //------------------------------------------------------------------------------------------------------------------
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

  //------------------------------------------------------------------------------------------------------------------
  // ---------Fallback Function------------
  //------------------------------------------------------------------------------------------------------------------
  function()
  external {
    revert();
  }


  //------------------------------------------------------------------------------------------------------------------
  // Get the amount of tokens that are not currently in escrow
  //------------------------------------------------------------------------------------------------------------------
  function getUnlockedBalance(address _operator)
  public
  view
  returns (uint){
    uint lockedBalance = database.uintStorage(keccak256("operatorAmountEscrowed", _operator));
    return database.uintStorage(keccak256("operatorAmountDeposited", _operator)).sub(lockedBalance);
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------------------------------------
  // Must have access level greater than or equal to 1
  //------------------------------------------------------------------------------------------------------------------
  modifier funderApproved {
    require(database.uintStorage(keccak256("userAccess", msg.sender)) >= uint(1));
    _;
  }



  //------------------------------------------------------------------------------------------------------------------
  //                                              Events
  //------------------------------------------------------------------------------------------------------------------

  event LogEscrowDeposited(address indexed _from, uint _amount, uint _timestamp);
}
