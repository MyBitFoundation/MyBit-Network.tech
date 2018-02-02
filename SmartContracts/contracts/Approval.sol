pragma solidity ^0.4.18;
import './Owned.sol';

// There are 3 levels of access on the platform. First is basic acess (creating/funding assets), Second is ability to stake, Third is ability to trade assets
// Approval contract controls access to certain functions and contains the address of the different contracts used witin the Dapp 
// myBitContracts must all be set before any assets are funded
contract Approval is Owned{ 

  // NOTE: MyBitFoundation, AssetEscrow, TokenStake, TokenBurn, MarketPlace must all be set here 
  mapping (bytes32 => address) public myBitContracts;    // The hash of the name of MyBit related contracts will be here + MyBitFoundation + Asset escrow  


  mapping (address => address) public backupAddress;    // User can set a backup address incase of loss 
  mapping (address => uint8) public userAccess;   // 0: Not approved for anything, 1: KYC approved, 2: Approved to fund assets/create assets,  3: Approved to stake tokens,  4: Approved to trade/exchange tokens

  function Approval(address _owner, address _ownerTwo, address _ownerThree) 
  noEmptyAddress(_owner)
  noEmptyAddress(_ownerTwo)
  noEmptyAddress(_ownerThree)
  public
  { 
    owner[0] = _owner;
    owner[1] = _ownerTwo;
    owner[2] = _ownerThree;
  }


  function setMyBitContract(string _contractName, address _contractAddress)
  external 
  onlyOwner { 
    myBitContracts[keccak256(_contractName)] = _contractAddress;
  }


  // TODO: test
  function setBackupAddress(address _backupAddress)
  external
  mustHaveKYC
  noEmptyAddress(_backupAddress)
  returns (bool) { 
    backupAddress[msg.sender] = _backupAddress; 
    return true;
  }
  
  // TODO: test
  function switchToBackup(address _oldAddress, address _newBackup)
  external
  mustHaveKYC
  noEmptyAddress(_oldAddress)
  noEmptyAddress(_newBackup)
  returns (bool) { 
    require(msg.sender == backupAddress[_oldAddress]); 
    userAccess[msg.sender] = userAccess[_oldAddress];
    backupAddress[_newBackup] = _newBackup; 
    return true;
  }

  // Users can be approved to use the MyBit platform here, by burning tokens or approved by owner address. 
  // Invariants: Only called by Token Burning contract or Owner.  New address cannot be empty. Access level must be between 1-4
  // @Param: Address of new user. 
  // @Param: The level of access granted by owner/burningcontract
  function approveUser(address _newUser, uint8 _accessLevel)
  onlyTokenBurnOrOwner
  noEmptyAddress(_newUser)
  external
  returns (bool) { 
    require(_accessLevel < 5 && _accessLevel != 0);
    userAccess[_newUser] = _accessLevel; 
    LogUserApproved(_newUser, _accessLevel, block.timestamp); 
    return true;
  }

  // Owner can remove access for users if needed
  // Invariants: Only owner can call. 
  // @Param: User to be removed
  function removeUser(address _user)
  onlyOwner
  external
  returns (bool) { 
    delete userAccess[_user];
    delete backupAddress[_user];
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
    require(userAccess[msg.sender] > 0); 
    _;
  }

    // Allow owner or burning contract to give access to user
  modifier onlyTokenBurnOrOwner() { 
    require(msg.sender == myBitContracts[keccak256("TokenBurn")] || msg.sender == owner[0]); 
    _;
  }

  event LogBackupAddressUsed(address _oldAddress, address _newAddress, uint256 _timestamp); 
  event LogUserApproved(address _user, uint8 _approvalLevel, uint256 _timestamp); 
  event LogUserRemoved(address _user, uint256 _timestamp); 

}
