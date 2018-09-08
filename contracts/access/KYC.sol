pragma solidity 0.4.24;

import './AccessHierarchy.sol'; 

// @title A contract that manages KYC approval
// @notice KYC can be granted or revoked here
// @author Kyle Dewhurst, MyBit Foundation

contract KYC is AccessHierarchy { 

  //------------------------------------------------------------------------------------------------------------------
  // Owner can approve KYC for user
  //------------------------------------------------------------------------------------------------------------------
  function approveKYC(address _user)
  onlyOwner
  external {
    database.setBool(keccak256(abi.encodePacked("kycApproved", _user)), true);
    emit LogKYCApproved(msg.sender, _user);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Owner can approve KYC for user
  //------------------------------------------------------------------------------------------------------------------
  function revokeKYC(address _user)
  onlyOwner
  external  {
    database.deleteBool(keccak256(abi.encodePacked("kycApproved", _user)));
  }


  event LogKYCApproved(address _owner, address _user);
}
