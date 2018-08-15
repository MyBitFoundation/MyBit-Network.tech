pragma solidity 0.4.24;



//------------------------------------------------------------------------------------------------------------------
// @title A contract for granting and revoking access levels to different users 
// @notice Made for platforms that have hierarchical access restrictions
//------------------------------------------------------------------------------------------------------------------
contract AccessHierarchy is Owned {

  mapping (address => uint) public accessLevel;    // TODO: make bytes4

  //------------------------------------------------------------------------------------------------------------------
  // Constructor: Inititalize Database
  //------------------------------------------------------------------------------------------------------------------
  constructor()
  public  {  }

  //------------------------------------------------------------------------------------------------------------------
  // Owner can manually grant access to a user here. WIll be used for KYC approval
  // Invariants: Only called by Token Burning contract or Owner. Access level must be between 1-4
  // @Param: Address of new user.
  // @Param: The level of access granted by owner/burningcontract
  // TODO: owner requirement is removed for alpha testing
  //------------------------------------------------------------------------------------------------------------------
  function approveUser(address _newUser, uint _accessLevel)
  onlyOwner
  noEmptyAddress(_newUser)
  external
  returns (bool) {
    require(_accessLevel < uint(4) && _accessLevel != uint(0));
    database.setUint(keccak256(abi.encodePacked("userAccess", _newUser)), _accessLevel);
    uint expiry = now + oneYear;
    assert (expiry > now && expiry > oneYear);   // Check for overflow
    database.setUint(keccak256(abi.encodePacked("userAccessExpiration", _newUser)), expiry);
    emit LogUserApproved(_newUser, _accessLevel);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Owner can remove access for users if needed
  // Invariants: Only owner can call.
  // @Param: User to be removed
  //------------------------------------------------------------------------------------------------------------------
  function removeUser(address _user)
  onlyOwner
  external
  returns (bool) {
    uint accessLevel = database.uintStorage(keccak256(abi.encodePacked("userAccess", _user)));
    database.deleteUint(keccak256(abi.encodePacked("userAccess", _user)));
    database.deleteUint(keccak256(abi.encodePacked("userAccessExpiration", _user)));
    emit LogUserRemoved(_user, accessLevel);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Owner can approve KYC for user
  //------------------------------------------------------------------------------------------------------------------
  function approveKYC(address _user)
  onlyOwner
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
  //                                        Events
  //------------------------------------------------------------------------------------------------------------------
  event LogUserApproved(address _user, uint _approvalLevel);
  event LogUserRemoved(address indexed _user, uint indexed _accessLevel);
  event LogKYCApproved(address _owner, address _user);
}
