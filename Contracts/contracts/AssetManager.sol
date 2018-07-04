  pragma solidity 0.4.24;
import './SafeMath.sol';
import './Database.sol';

//------------------------------------------------------------------------------------------------------------------
// @title where AssetManagers and Stakers can manage escrowed tokens
//------------------------------------------------------------------------------------------------------------------
contract AssetManager {
using SafeMath for uint;

  Database public database;


  //------------------------------------------------------------------------------------------------------------------
  // Constructor
  // @Param: Address of the database contract
  //------------------------------------------------------------------------------------------------------------------
  constructor(address _database)
  public {
    database = Database(_database);
  }

  //------------------------------------------------------------------------------------------------------------------
  // AssetManager can withdraw any escrowed tokens that are no longer needed in escrow here
  // Invariant: If asset has a staker, then the escrow belongs to staker. Otherwise it belongs to AssetManager
  // TODO: Clean this function up 
  //------------------------------------------------------------------------------------------------------------------
  function unlockEscrow(bytes32 _assetID)
  external
  accessApproved(1) {
    if (database.addressStorage(keccak256(abi.encodePacked("assetStaker", _assetID))) != address(0)) { 
      require(database.addressStorage(keccak256(abi.encodePacked("assetStaker", _assetID))) == msg.sender);
      require(database.uintStorage(keccak256(abi.encodePacked("stakingExpiration", _assetID))) < now); 
    }
    else { require(database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID))) == msg.sender); }
    uint amountToUnlock = database.uintStorage(keccak256(abi.encodePacked("escrowedForAsset", _assetID)));
    assert(amountToUnlock > uint(0));
    uint fundingStage = database.uintStorage(keccak256(abi.encodePacked("fundingStage", _assetID)));
    if (fundingStage == uint(2) || fundingStage == uint(5) || fundingStage == uint(0)) { 
      releaseEscrow(_assetID, msg.sender, amountToUnlock);     // Unlock all of the escrowed MYB since asset has finished it's lifecycle
    }
    else {
      uint amountRaised = database.uintStorage(keccak256(abi.encodePacked("amountRaised", _assetID)));
      uint assetIncome = database.uintStorage(keccak256(abi.encodePacked("assetIncome", _assetID)));
      uint percentageROI = database.uintStorage(keccak256(abi.encodePacked(assetIncome, _assetID))).mul(uint(100)).div(amountRaised);    // Ratio of  incomeProduced / funding cost  (both in WEI)
      if (percentageROI > uint(100)) { releaseEscrow(_assetID, msg.sender, amountToUnlock); }
      if (percentageROI > uint(75)) { releaseEscrow(_assetID, msg.sender, amountToUnlock.mul(uint(75)).div(uint(100))); }
      if (percentageROI > uint(50)) { releaseEscrow(_assetID, msg.sender, amountToUnlock.mul(uint(50)).div(uint(100))); }
      if (percentageROI > uint(25)) { releaseEscrow(_assetID, msg.sender, amountToUnlock.mul(uint(25)).div(uint(100))); }
    }
  }

  //------------------------------------------------------------------------------------------------------------------
  // Releases escrowed tokens. Only called internally.
  // TODO: make sure safemath throws if there is not enough MYB deposited
  //------------------------------------------------------------------------------------------------------------------
  function releaseEscrow(bytes32 _assetID, address _user, uint _amount)
  internal {
    assert (_amount > 0); 
    uint amountLockedForAsset = database.uintStorage(keccak256(abi.encodePacked("escrowedForAsset", _assetID)));
    uint totalEscrowedAmount = database.uintStorage(keccak256(abi.encodePacked("escrowedMYB", _user)));
    uint depositedAmount = database.uintStorage(keccak256(abi.encodePacked("depositedMYB", _user)));
    database.setUint(keccak256(abi.encodePacked("escrowedForAsset", _assetID)), amountLockedForAsset.sub(_amount));
    database.setUint(keccak256(abi.encodePacked("escrowedMYB", _user)), totalEscrowedAmount.sub(_amount));
    database.setUint(keccak256(abi.encodePacked("depositedMYB", _user)), depositedAmount.add(_amount));
    emit LogEscrowUnlocked(_assetID, _user, _amount);
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
    require(database.uintStorage(keccak256(abi.encodePacked("userAccessExpiration", _newManager))) > now);
    address oldAssetManager = database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID)));
    require(oldAssetManager != address(0));
    database.setAddress(keccak256(abi.encodePacked("assetManager", _assetID)), _newManager);
    emit LogAssetManagerReplaced(_assetID, oldAssetManager, _newManager);
    return true;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------------------------------------
  // Must have access level greater than or equal to 1
  //------------------------------------------------------------------------------------------------------------------
  modifier accessApproved(uint _accessLevel) {
    require(database.uintStorage(keccak256(abi.encodePacked("userAccess", msg.sender))) >= uint(_accessLevel));
    require(database.uintStorage(keccak256(abi.encodePacked("userAccessExpiration", msg.sender))) > now);
    _;
  }

    //------------------------------------------------------------------------------------------------------------------
  // Verify that the sender is a registered owner
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  event LogEscrowUnlocked(bytes32 _assetID, address _user, uint _amount);
  event LogAssetManagerReplaced(bytes32 _assetID, address oldAssetManager, address _newManager);


}
