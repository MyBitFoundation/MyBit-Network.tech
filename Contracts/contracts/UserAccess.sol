pragma solidity ^0.4.19;

import './Database.sol';

// This contract controls users access to the MyBit platform. TokenBurn will call this contract to add new users, once MyBit tokens have been burnt
// There are 3 levels of access on the platform. First is basic access (creating/funding assets), Second is ability to stake, Third is ability to trade assets
contract UserAccess{ 
 
  Database public database;

  function UserAccess(address _database) 
  public  { 
    database = Database(_database);
  }


  // User can set a recovery address here. If initial address is lost they can still access the platform with the backup. 
  // Note: BackupAddress must also go through KYC approval
  // @Param: The address of the desired backup account
  function setBackupAddress(address _backupAddress)
  external
  mustHaveKYC
  noEmptyAddress(_backupAddress)
  returns (bool) { 
    database.setAddress(keccak256("backupAddress", msg.sender), _backupAddress);
    LogBackupAddressSet(msg.sender, _backupAddress, block.number); 
    return true;
  }
  
  // User can activate their backup account here. 
  // @Param: The old account
  // @Param: The new desired backup account
  // Invariants: Must be calling from pre-set backup address. Parameters must not be null. AccessLevel must be above 1
  function switchToBackup(address _oldAddress, address _newBackup)
  external
  mustHaveKYC
  noEmptyAddress(_oldAddress)
  noEmptyAddress(_newBackup)
  returns (bool) { 
    require(msg.sender == database.addressStorage(keccak256("backupAddress", _oldAddress)));
    require(_oldAddress != _newBackup);  
    uint currentAccessLevel = database.uintStorage(keccak256("userAccess", _oldAddress));
    database.deleteUint(keccak256("userAccess", _oldAddress));
    database.deleteAddress(keccak256("backupAddress", _oldAddress));
    database.setAddress(keccak256("backupAddress", msg.sender), _newBackup);
    database.setUint(keccak256("userAccess", msg.sender), currentAccessLevel);
    LogAddressChanged(_oldAddress, _newBackup, block.number);
    return true;
  }


  // TODO: Move share references to an ID to allow easier changing of address then allow for share transfers

  // function moveSharesToBackup(bytes32 _assetID, address _oldAddress)
  // external
  // mustHaveKYC
  // noEmptyAddress(_oldAddress)
  // mustHaveBackupSigned
  // returns (bool) {
  //   uint sharesFrom = database.uintStorage(keccak256("shares", _assetID, _oldAddress));
  //   require(sharesFrom > 0);
  //   uint sharesTo = database.uintStorage(keccak256("shares", _assetID, msg.sender));
  //   uint totalPaidToFunder = database.uintStorage(keccak256("totalPaidToFunder", _assetID, _oldAddress));

  //   database.deleteUint(keccak256("shares", _assetID, _oldAddress));
  //   database.deleteUint(keccak256('totalPaidToFunder', _assetID, _oldAddress));

  //   database.setUint(keccak256("shares", _assetID, msg.sender), sharesTo.add(sharesFrom));
  //   database.setUint(keccak256("totalPaidToFunder", _assetID, msg.sender), totalPaidToFunder);

  //   LogSharesMovedToBackup(_assetID, _oldAddress, msg.sender, sharesFrom, block.number);
  //   return true;
  // }


  // /* TODO; Need to fix this when tokenstaking is finalized*/
  // function moveStakesToBackup(bytes32 _stakeID, address _oldAddress)
  // external
  // mustHaveKYC
  // mustHaveBackupSigned
  // return (bool){
  //   uint oldAddrOwed = database.uintStorage(keccak256('stakingRevenueOwedToUser', _oldAddress));
  //   uint oldAddrPaid = database.uintStorage(keccak256("rewardPaidToStaker", _stakeID)

  //   database.deleteUint(keccak256('stakingRevenueOwedToUser', _oldAddress));
  //   database.setUint(keccak256('stakingRevenueOwedToUser', msg.sender), oldAddrOwed);

  //   database.setUint(keccak256("rewardPaidToStaker", _stakeID), rewardPaidToStaker.add(owed));
  // }


  // Owner can manually grant access to a user here. WIll be used for KYC approval
  // Invariants: Only called by Token Burning contract or Owner.  New address cannot be empty. Access level must be between 1-4
  // @Param: Address of new user. 
  // @Param: The level of access granted by owner/burningcontract
  // TODO: owner requirement is removed for alpha testing
  function approveUser(address _newUser, uint8 _accessLevel)
  // anyOwner
  noEmptyAddress(_newUser)
  external
  returns (bool) { 
    require(_accessLevel < 5 && _accessLevel != 0);
    database.setUint(keccak256("userAccess", _newUser), _accessLevel);
    LogUserApproved(_newUser, _accessLevel, block.timestamp); 
    return true;
  }

  // Owner can remove access for users if needed
  // Invariants: Only owner can call. 
  // @Param: User to be removed
  function removeUser(address _user)
  anyOwner
  external
  returns (bool) { 
    database.deleteUint(keccak256("userAccess", _user));
    database.deleteAddress(keccak256("backupAddress", _user));
    LogUserRemoved(_user, block.timestamp); 
    return true;
  }

  // Deny empty address parameters
  modifier noEmptyAddress(address _param) {
    require(_param != address(0)); 
    _;
  }

  // User must have identification approved
  modifier mustHaveKYC { 
    require(database.uintStorage(keccak256("userAccess", msg.sender)) > 0);
    _;
  }

  // Only owners can call these functions
  modifier anyOwner { 
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  event LogBackupAddressSet(address _user, address _backupAddress, uint _blockNumber); 
  event LogAddressChanged(address _oldAddress, address _newAddress, uint256 _timestamp); 
  event LogUserApproved(address indexed _user, uint8 indexed _approvalLevel, uint256 indexed _timestamp); 
  event LogUserRemoved(address indexed _user, uint256 indexed _timestamp); 

}
