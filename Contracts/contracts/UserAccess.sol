pragma solidity 0.4.24;

import './Database.sol';

//------------------------------------------------------------------------------------------------------------------
// This contract controls users access to the MyBit platform. TokenBurn will call this contract to add new users, once MyBit tokens have been burnt
// There are 3 levels of access on the platform. First is basic access (creating/funding assets), Second is ability to stake, Third is ability to trade assets
//------------------------------------------------------------------------------------------------------------------
contract UserAccess{

  Database public database;
  uint public oneYear = uint(31536000);    // 365 days in seconds

  //------------------------------------------------------------------------------------------------------------------
  // Constructor: Inititalize Database
  //------------------------------------------------------------------------------------------------------------------
  constructor(address _database)
  public  {
    database = Database(_database);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Owner can manually grant access to a user here. WIll be used for KYC approval
  // Invariants: Only called by Token Burning contract or Owner. Access level must be between 1-4
  // @Param: Address of new user.
  // @Param: The level of access granted by owner/burningcontract
  // TODO: owner requirement is removed for alpha testing
  //------------------------------------------------------------------------------------------------------------------
  function approveUser(address _newUser, uint _accessLevel)
  // anyOwner
  noEmptyAddress(_newUser)
  external
  returns (bool) {
    require(_accessLevel < uint(4) && _accessLevel != uint(0));
    database.setUint(keccak256(abi.encodePacked("userAccess", _newUser)), _accessLevel);
    uint expiry = now + oneYear;
    assert (expiry > now && expiry > oneYear);   // Check for overflow
    database.setUint(keccak256(abi.encodePacked("userAccessExpiry", _newUser)), expiry);
    emit LogUserApproved(_newUser, _accessLevel);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Owner can remove access for users if needed
  // Invariants: Only owner can call.
  // @Param: User to be removed
  //------------------------------------------------------------------------------------------------------------------
  function removeUser(address _user)
  anyOwner
  external
  returns (bool) {
    uint accessLevel = database.uintStorage(keccak256(abi.encodePacked("userAccess", _user)));
    database.deleteUint(keccak256(abi.encodePacked("userAccess", _user)));
    database.deleteUint(keccak256(abi.encodePacked("userAccessExpiry", _user)));
    emit LogUserRemoved(_user, accessLevel);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Owner can approve KYC for user
  //------------------------------------------------------------------------------------------------------------------
  function approveKYC(address _user)
  anyOwner
  external
  returns (bool) {
    database.setBool(keccak256(abi.encodePacked("kycApproved", msg.sender)), true);
    emit LogKYCApproved(msg.sender, _user);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Deny empty address parameters
  //------------------------------------------------------------------------------------------------------------------
  modifier noEmptyAddress(address _param) {
    require(_param != address(0));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Only owners can call these functions
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                        Events
  //------------------------------------------------------------------------------------------------------------------
  event LogUserApproved(address _user, uint _approvalLevel);
  event LogUserRemoved(address indexed _user, uint indexed _accessLevel);
  event LogKYCApproved(address _owner, address _user);
}
