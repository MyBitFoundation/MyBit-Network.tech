pragma solidity 0.4.23;

import './Database.sol';
import './MyBitToken.sol';
import './SafeMath.sol';

//------------------------------------------------------------------------------------------------------------------
// This contract is where asset managers can deposit MyBit tokens to be eligable to create an asset on the platform.
// The escrowed tokens are available to withdraw if the Asset Fails funding or the asset managers is replaced or the Asset finishes it's lifecycle
// TODO: Make function to switch assetManager
//------------------------------------------------------------------------------------------------------------------
contract AssetManager {
  using SafeMath for *;

  MyBitToken public myBitToken;
  Database public database;

  uint public stakingExpiry = 604800;     // One-week

  //------------------------------------------------------------------------------------------------------------------
  // Constructor. Initiate Database and MyBitToken
  //------------------------------------------------------------------------------------------------------------------
  constructor(address _database, address _tokenAddress)
  public {
    database = Database(_database);
    myBitToken = MyBitToken(_tokenAddress);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Asset manager can deposit MyBit here to be locked for escrow
  //------------------------------------------------------------------------------------------------------------------
  function depositEscrow(uint _amount)
  external
  accessApproved(1)
  returns (bool) {
    require(myBitToken.transferFrom(msg.sender, this, _amount));
    uint depositedAmount = database.uintStorage(keccak256("depositedMYB", msg.sender));
    database.setUint(keccak256("depositedMYB", msg.sender), depositedAmount.add(_amount));
    emit LogEscrowDeposited(msg.sender, _amount, now);
    return true;
  }


  //------------------------------------------------------------------------------------------------------------------
  // Asset manager can be changed by owner or governance authority here
  // @Param: Address of the replacement operator
  //------------------------------------------------------------------------------------------------------------------
  function replaceAssetManager(address _newOperator)
  external
  anyOwner
  returns (bool) {
    require(database.uintStorage(keccak256("userAccess", _newOperator)) >= uint(1));
    require(database.uintStorage(keccak256("userAccessExpiry", _newOperator)) > now);


  }

  //------------------------------------------------------------------------------------------------------------------
  // AssetManager can withdraw any escrowed tokens that are no longer needed in escrow here
  // Invariant: Must not be in following stages: Failed Funding (stage = 2), Finished lifecycle (stage = 5))
  // Invariant: If asset has a staker, then the escrow belongs to staker. Otherwise it belongs to AssetManager
  //------------------------------------------------------------------------------------------------------------------
  function unlockEscrow(bytes32 _assetID)
  external
  accessApproved(1) {
    if (database.addressStorage(keccak256("assetStaker", _assetID)) == address(0)) { require(database.addressStorage(keccak256("assetManager", _assetID)) == msg.sender); }
    else { require(database.addressStorage(keccak256("assetStaker", _assetID)) == msg.sender); }
    uint amountToUnlock = database.uintStorage(keccak256("escrowedForAsset", _assetID));
    assert(amountToUnlock > 0);
    uint fundingStage = database.uintStorage(keccak256("fundingStage", _assetID));
    if (fundingStage == uint(2) || fundingStage == uint(5)){    // has asset failed or finished it's lifecycle?
      releaseEscrow(amountToUnlock, _assetID);
    }
    else {
      uint amountRaised = database.uintStorage(keccak256("amountRaised", _assetID));
      uint assetIncome = database.uintStorage(keccak256("assetIncome", _assetID));
      uint percentageROI = database.uintStorage(keccak256(assetIncome, _assetID)).mul(100).div(amountRaised);
      // TODO: find better algorithm
      if (percentageROI >= uint(100)) { releaseEscrow(amountToUnlock, _assetID); }
      if (percentageROI >= uint(75)) { releaseEscrow((uint(75).mul(amountRaised)).div(uint(100)), _assetID); }
      if (percentageROI >= uint(50)) { releaseEscrow((uint(50).mul(amountRaised)).div(uint(100)), _assetID); }
      if (percentageROI >= uint(25)) { releaseEscrow((uint(25).mul(amountRaised)).div(uint(100)), _assetID); }
    }
  }

  //------------------------------------------------------------------------------------------------------------------
  // Releases escrowed tokens. Only called internally.
  // TODO: add amount already paid to asset manager
  //------------------------------------------------------------------------------------------------------------------
  function releaseEscrow(uint _amount, bytes32 _assetID)
  internal {
    uint amountLockedForAsset = database.uintStorage(keccak256("escrowedForAsset", _assetID));
    uint totalEscrowedAmount = database.uintStorage(keccak256("escrowedMYB", msg.sender));
    uint depositedAmount = database.uintStorage(keccak256("depositedMYB", msg.sender));
    database.setUint(keccak256("escrowedForAsset", _assetID), amountLockedForAsset.sub(_amount));
    database.setUint(keccak256("escrowedMYB", msg.sender), totalEscrowedAmount.sub(_amount));
    database.setUint(keccak256("depositedMYB", msg.sender), depositedAmount.add(totalEscrowedAmount.sub(_amount)));
  }

  //------------------------------------------------------------------------------------------------------------------
  // Asset manager can withdraw tokens here once they have unlocked them from a previous asset escrow
  // TODO: event
  //------------------------------------------------------------------------------------------------------------------
  function withdraw(uint _amount)
  external
  accessApproved(1)
  returns (bool){
    uint unlockedBalance = getUnlockedBalance(msg.sender);
    assert (unlockedBalance >= _amount);
    uint depositedAmount = database.uintStorage(keccak256("depositedMYB", msg.sender));
    assert (depositedAmount >= _amount);
    database.setUint(keccak256("depositedMYB", msg.sender), depositedAmount.sub(_amount));
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
  function getUnlockedBalance(address _assetManager)
  public
  view
  returns (uint){
    uint lockedBalance = database.uintStorage(keccak256("escrowedMYB", _assetManager));
    return database.uintStorage(keccak256("depositedMYB", _assetManager)).sub(lockedBalance);
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------------------------------------
  // Must have access level greater than or equal to 1
  //------------------------------------------------------------------------------------------------------------------
  modifier accessApproved(uint _accessLevel) {
    require(database.uintStorage(keccak256("userAccess", msg.sender)) >= uint(_accessLevel));
    require(database.uintStorage(keccak256("userAccessExpiry", msg.sender)) > now);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verify that the sender is a registered owner
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                              Events
  //------------------------------------------------------------------------------------------------------------------

  event LogEscrowDeposited(address indexed _from, uint _amount, uint _timestamp);
}
