pragma solidity 0.4.24;

import './Database.sol';
import './MyBitToken.sol';
import './SafeMath.sol';

//------------------------------------------------------------------------------------------------------------------
// This contract is where asset managers can deposit MyBit tokens to be eligable to create an asset on the platform.
// The escrowed tokens are available to withdraw if the Asset Fails funding or the asset managers is replaced or the Asset finishes it's lifecycle
// TODO: Make function to switch assetManager
//------------------------------------------------------------------------------------------------------------------
contract AssetManager {
  using SafeMath for uint;

  MyBitToken public myBitToken;
  Database public database;

  uint public stakingExpiry = uint(604800);     // One-week

  //------------------------------------------------------------------------------------------------------------------
  // Constructor. Initiate Database and MyBitToken
  //------------------------------------------------------------------------------------------------------------------
  constructor(address _database, address _mybTokenAddress)
  public {
    database = Database(_database);
    myBitToken = MyBitToken(_mybTokenAddress);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Asset manager can deposit MyBit here to be locked for escrow
  // @Param: The amount of MYB being deposited: No decimals included (ie: 1 MYB == 1 * 10^18)
  //------------------------------------------------------------------------------------------------------------------
  function depositEscrow(uint _amount)
  external
  accessApproved(1)
  returns (bool) {
    require(myBitToken.transferFrom(msg.sender, address(this), _amount));
    uint depositedAmount = database.uintStorage(keccak256(abi.encodePacked("depositedMYB", msg.sender)));
    database.setUint(keccak256(abi.encodePacked("depositedMYB", msg.sender)), depositedAmount.add(_amount));
    emit LogEscrowDeposited(msg.sender, _amount);
    return true;
  }


  //------------------------------------------------------------------------------------------------------------------
  // Asset manager can be changed by owner or governance authority here
  // @Param: Address of the replacement operator
  //------------------------------------------------------------------------------------------------------------------
  function replaceAssetManager(address _newManager, bytes32 _assetID)
  external
  anyOwner
  returns (bool) {
    require(database.uintStorage(keccak256(abi.encodePacked("userAccess", _newManager))) >= uint(1));   // Make sure new asset manager is approved
    require(database.uintStorage(keccak256(abi.encodePacked("userAccessExpiry", _newManager))) > now);
    address oldAssetManager = database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID)));
    require(oldAssetManager != address(0));
    database.setAddress(keccak256(abi.encodePacked("assetManager", _assetID)), _newManager);
    emit LogAssetManagerReplaced(_assetID, oldAssetManager, _newManager);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // AssetManager can withdraw any escrowed tokens that are no longer needed in escrow here
  // Invariant: If asset has a staker, then the escrow belongs to staker. Otherwise it belongs to AssetManager
  //------------------------------------------------------------------------------------------------------------------
  function unlockEscrow(bytes32 _assetID)
  external
  accessApproved(1) {
    if (database.addressStorage(keccak256(abi.encodePacked("assetStaker", _assetID))) == address(0)) { require(database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID))) == msg.sender); }
    else { require(database.addressStorage(keccak256(abi.encodePacked("assetStaker", _assetID))) == msg.sender); }
    uint amountToUnlock = database.uintStorage(keccak256(abi.encodePacked("escrowedForAsset", _assetID)));
    assert(amountToUnlock > uint(0));
    uint fundingStage = database.uintStorage(keccak256(abi.encodePacked("fundingStage", _assetID)));
    if (fundingStage == uint(2) || fundingStage == uint(5)){    // has asset failed or finished it's lifecycle?
      releaseEscrow(_assetID, msg.sender, amountToUnlock);     // Unlock all of the escrowed MYB since asset has finished it's lifecycle
    }
    else {
      uint amountRaised = database.uintStorage(keccak256(abi.encodePacked("amountRaised", _assetID)));
      uint assetIncome = database.uintStorage(keccak256(abi.encodePacked("assetIncome", _assetID)));
      uint percentageROI = database.uintStorage(keccak256(abi.encodePacked(assetIncome, _assetID))).mul(uint(100)).div(amountRaised);    // Ratio of  incomeProduced / funding cost  (both in WEI)
      // TODO: find better algorithm
      if (percentageROI >= uint(100)) { releaseEscrow(_assetID, msg.sender, amountToUnlock); }
      if (percentageROI >= uint(75)) { releaseEscrow(_assetID, msg.sender, (uint(75).mul(amountRaised)).div(uint(100))); }
      if (percentageROI >= uint(50)) { releaseEscrow(_assetID, msg.sender, (uint(50).mul(amountRaised)).div(uint(100))); }
      if (percentageROI >= uint(25)) { releaseEscrow(_assetID, msg.sender, (uint(25).mul(amountRaised)).div(uint(100))); }
    }
  }

  //------------------------------------------------------------------------------------------------------------------
  // Releases escrowed tokens. Only called internally.
  // TODO: make sure safemath throws if there is not enough MYB deposited
  //------------------------------------------------------------------------------------------------------------------
  function releaseEscrow(bytes32 _assetID, address _user, uint _amount)
  internal {
    uint amountLockedForAsset = database.uintStorage(keccak256(abi.encodePacked("escrowedForAsset", _assetID)));
    uint totalEscrowedAmount = database.uintStorage(keccak256(abi.encodePacked("escrowedMYB", _user)));
    uint depositedAmount = database.uintStorage(keccak256(abi.encodePacked("depositedMYB", _user)));
    database.setUint(keccak256(abi.encodePacked("escrowedForAsset", _assetID)), amountLockedForAsset.sub(_amount));
    database.setUint(keccak256(abi.encodePacked("escrowedMYB", _user)), totalEscrowedAmount.sub(_amount));
    database.setUint(keccak256(abi.encodePacked("depositedMYB", _user)), depositedAmount.add(totalEscrowedAmount.sub(_amount)));
    emit LogEscrowUnlocked(_assetID, _user, _amount);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Asset manager can withdraw tokens here once they have unlocked them from a previous asset escrow
  //------------------------------------------------------------------------------------------------------------------
  function withdraw(uint _amount)
  external
  accessApproved(1)
  returns (bool){
    uint unlockedBalance = getUnlockedBalance(msg.sender);
    assert (unlockedBalance >= _amount);
    uint depositedAmount = database.uintStorage(keccak256(abi.encodePacked("depositedMYB", msg.sender)));
    assert (depositedAmount >= _amount);
    database.setUint(keccak256(abi.encodePacked("depositedMYB", msg.sender)), depositedAmount.sub(_amount));
    myBitToken.transfer(msg.sender, _amount);
    emit LogEscrowWithdrawn(msg.sender, _amount);
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
    uint lockedBalance = database.uintStorage(keccak256(abi.encodePacked("escrowedMYB", _assetManager)));
    return database.uintStorage(keccak256(abi.encodePacked("depositedMYB", _assetManager))).sub(lockedBalance);
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------------------------------------
  // Must have access level greater than or equal to 1
  //------------------------------------------------------------------------------------------------------------------
  modifier accessApproved(uint _accessLevel) {
    require(database.uintStorage(keccak256(abi.encodePacked("userAccess", msg.sender))) >= uint(_accessLevel));
    require(database.uintStorage(keccak256(abi.encodePacked("userAccessExpiry", msg.sender))) > now);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verify that the sender is a registered owner
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                              Events
  //------------------------------------------------------------------------------------------------------------------
  event LogEscrowUnlocked(bytes32 _assetID, address _user, uint _amount);
  event LogEscrowWithdrawn(address _user, uint _amount);
  event LogAssetManagerReplaced(bytes32 _assetID, address oldAssetManager, address _newManager);
  event LogEscrowDeposited(address _from, uint _amount);
}
