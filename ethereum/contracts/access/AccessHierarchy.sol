pragma solidity 0.4.24;


// @title A contract for granting and revoking access levels to different users 
// @author Kyle Dewhurst, MyBit Foundation
// @notice Made for platforms that require hierarchical access restrictions
contract AccessHierarchy {

  Database public database; 
  uint8 public upperAccessLevel; 

  // @notice Constructor: Inititalize Database
  constructor(address _database)
  public  {  
    database = Database(_database); 
  }

  // @notice Owner can manually grant access to a user here. WIll be used for KYC approval
  // @param Address of new user.
  // @param The level of access granted by owner/burningcontract
  function approveUser(address _newUser, uint _accessLevel)
  onlyPlatform
  noEmptyAddress(_newUser)
  public
  returns (bool) {
    require(_accessLevel < upperAccessLevel && _accessLevel != uint8(0));
    database.setUint(keccak256(abi.encodePacked("userAccess", _newUser)), _accessLevel);
    emit LogUserApproved(_newUser, _accessLevel);
    return true;
  }

  // @notice Owner can remove access for users 
  // @param User to be removed
  function removeUser(address _user)
  onlyOwner
  public
  returns (bool) {
    uint accessLevel = database.uintStorage(keccak256(abi.encodePacked("userAccess", _user)));
    database.deleteUint(keccak256(abi.encodePacked("userAccess", _user)));
    emit LogUserRemoved(_user, accessLevel);
    return true;
  }


  // @notice Owner can set the upper bound on access levels 
  // @param (uint8) _newUpperLimit = The highest access level on the platform
  function setUpperAccessLevel(uint8 _newUpperLimit) 
  public 
  onlyOwner {
    require(_newUpperLimit > uint8(0)); 
    upperAccessLevel = _newUpperLimit; 
  }


  // @notice Deny empty address parameters
  modifier noEmptyAddress(address _param) {
    require(_param != address(0));
    _;
  }

  // @notice Deny all callers except owner 
  modifier onlyOwner { 
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _; 
  }

  // @notice only contracts on the platform can call.
  modifier onlyPlatform { 
    require(database.boolStorage(keccak256(abi.encodePacked("contract", msg.sender)))); 
    _; 
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                        Events
  //------------------------------------------------------------------------------------------------------------------
  event LogUserApproved(address _user, uint _approvalLevel);
  event LogUserRemoved(address indexed _user, uint indexed _accessLevel);
}
