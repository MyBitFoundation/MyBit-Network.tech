pragma solidity 0.4.24;

import './Database.sol';
import './MyBitToken.sol';
import './SafeMath.sol';

//------------------------------------------------------------------------------------------------------------------
// This contract is where asset managers can escrow their MYB tokens 
//------------------------------------------------------------------------------------------------------------------
contract TokenEscrow {
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

  //------------------ewr------------------------------------------------------------------------------------------------
  // Asset manager can deposit MyBit here to be locked for escrow
  // @notice This is alias for depositEscrow. Called directly from token contract. 
  // @param address _from: The user depositing escrow
  // @param uint _amount: Amount of MYB being deposited. 
  // @param address _token: The address of the calling token contract
  // @param bytes _data: An optional data field
  //------------------------------------------------------------------------------------------------------------------
  function receiveApproval(address _from, uint _amount, address _token, bytes _data)
  external
  returns (bool) {
    require(msg.sender == address(myBitToken)); 
    require(database.uintStorage(keccak256(abi.encodePacked("userAccess", _from))) >= uint(1));   // Make sure new asset manager is approved
    require(database.uintStorage(keccak256(abi.encodePacked("userAccessExpiration", _from))) > now);
    require(myBitToken.transferFrom(_from, address(this), _amount));
    uint depositedAmount = database.uintStorage(keccak256(abi.encodePacked("depositedMYB", _from)));
    database.setUint(keccak256(abi.encodePacked("depositedMYB", _from)), depositedAmount.add(_amount));
    emit LogEscrowDeposited(_from, _amount);
    return true;
  }


  //------------------------------------------------------------------------------------------------------------------
  // Asset manager can withdraw tokens here once they have unlocked them from a previous asset escrow
  //------------------------------------------------------------------------------------------------------------------
  function withdraw(uint _amount)
  external
  accessApproved(1)
  returns (bool){
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


  //------------------------------------------------------------------------------------------------------------------
  //                                              Events
  //------------------------------------------------------------------------------------------------------------------
  event LogEscrowWithdrawn(address _user, uint _amount);
  event LogEscrowDeposited(address _from, uint _amount);
}
