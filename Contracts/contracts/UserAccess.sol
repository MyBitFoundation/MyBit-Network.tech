pragma solidity ^0.4.18;

import './SafeMath.sol';
import './Database.sol';

// There are 3 levels of access on the platform. First is basic access (creating/funding assets), Second is ability to stake, Third is ability to trade assets
// Approval contract controls access to certain functions and contains the address of the different contracts used witin the Dapp
// myBitContracts must all be set before any assets are funded
// TODO: add authorization for removing owner
contract UserAccess{
  using SafeMath for *;
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
    require(_backupAddress != msg.sender);
    database.setAddress(keccak256("backupAddress", msg.sender), _backupAddress);
    LogBackupAddressSet(msg.sender, _backupAddress, block.number);
    return true;
  }

  function signBackupAddress(address _oldAddress)
  external
  mustHaveKYC
  mustHaveBackupSet(_oldAddress)
  noEmptyAddress(_oldAddress)
  returns (bool){
    require(_oldAddress != msg.sender);
    database.setBool(keccak256('backupAddress', msg.sender), true);
    LogBackupAddressSigned(_oldAddress, msg.sender, block.number);
    return true;
  }

  function switchAccessToBackup(address _oldAddress)
  external
  mustHaveKYC
  noEmptyAddress(_oldAddress)
  mustHaveBackupSet(_oldAddress)
  mustHaveBackupSigned
  returns (bool){
    uint currentAccessLevel = database.uintStorage(keccak256("userAccess", _oldAddress));
    database.setUint(keccak256('userAccess', msg.sender), currentAccessLevel);
  }

  function removeOldAddress(address _oldAddress)
  external
  mustHaveKYC
  noEmptyAddress(_oldAddress)
  mustHaveBackupSet(_oldAddress)
  mustHaveBackupSigned
  returns (bool){
    // delete all remains of this address
    // should transfer shares before ( one by one )
  }

  function moveSharesToBackup(bytes32 _assetID, address _oldAddress)
  external
  mustHaveKYC
  noEmptyAddress(_oldAddress)
  mustHaveBackupSigned
  returns (bool) {
    uint sharesFrom = database.uintStorage(keccak256("shares", _assetID, _oldAddress));
    require(sharesFrom > 0);
    uint sharesTo = database.uintStorage(keccak256("shares", _assetID, msg.sender));
    uint totalPaidToFunder = database.uintStorage(keccak256("totalPaidToFunder", _assetID, _oldAddress));

    database.deleteUint(keccak256("shares", _assetID, _oldAddress));
    database.deleteUint(keccak256('totalPaidToFunder', _assetID, _oldAddress));

    database.setUint(keccak256("shares", _assetID, msg.sender), sharesTo.add(sharesFrom));
    database.setUint(keccak256("totalPaidToFunder", _assetID, msg.sender), totalPaidToFunder);

    LogSharesMovedToBackup(_assetID, _oldAddress, msg.sender, sharesFrom, block.number);
    return true;
  }


  /* TODO; Need to fix this when tokenstaking is finalized*/
  function moveStakesToBackup(bytes32 _stakeID, address _oldAddress)
  external
  mustHaveKYC
  mustHaveBackupSigned
  return (bool){
    uint oldAddrOwed = database.uintStorage(keccak256('stakingRevenueOwedToUser', _oldAddress));
    uint oldAddrPaid = database.uintStorage(keccak256("rewardPaidToStaker", _stakeID)

    database.deleteUint(keccak256('stakingRevenueOwedToUser', _oldAddress));
    database.setUint(keccak256('stakingRevenueOwedToUser', msg.sender), oldAddrOwed);

    database.setUint(keccak256("rewardPaidToStaker", _stakeID), rewardPaidToStaker.add(owed));
  }


  // Owner can manually grant access to a user here. WIll be used for KYC approval
  // Invariants: Only called by Token Burning contract or Owner.  New address cannot be empty. Access level must be between 1-4
  // @Param: Address of new user.
  // @Param: The level of access granted by owner/burningcontract
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

  modifier mustHaveBackupSet(address _param) {
    require(database.addressStorage(keccak256("backupAddress", _param)) ==  msg.sender);
    _;
  }

  modifier mustHaveBackupSigned {
    require(database.boolStorage(keccak256('backupAddress', msg.sender)) == true);
    _;
  }

  // Only owners can call these functions
  modifier anyOwner {
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  event LogBackupAddressSet(address _user, address _backupAddress, uint _blockNumber);
  event LogBackupAddressSigned(address _user, address _backupAddressVerified, uint _blockNumber);
  event LogSharesMovedToBackup(bytes32 _assetID, address _from, address _to, uint _amount, uint _timestamp);
  event LogAddressChanged(address _oldAddress, address _newAddress, uint256 _timestamp);
  event LogUserApproved(address indexed _user, uint8 indexed _approvalLevel, uint256 indexed _timestamp);
  event LogUserRemoved(address indexed _user, uint256 indexed _timestamp);

}
