pragma solidity ^0.4.18;
import './Owned.sol';

  // There are 3 levels of access on the platform. First is basic acess (creating/funding assets), Second is ability to stake, Third is ability to trade assets
  // TODO: inheritance = same address
contract Approval is Owned{ 
  address public tokenBurn; 

  mapping (address => uint8) public userAccess;   // 0: Not approved for anything, 1: KYC approved, 2: Approved to fund assets/create assets,  3: Approved to lock tokens,  4: Approved to trade/exchange tokens
  mapping (address => bool) public blackListed;    // Banned users

  function Approval() { 
  }

  // Owner can set the tokenburn contract here
  function setBurnAddress(address _tokenBurn)
  external
  onlyOwner { 
    tokenBurn = _tokenBurn; 
  }

  // Called by tokenburn contract and owner. Burn contract checks that accesslevel 0 is approved before adding later ones. 
  function approveUser(address _newUser, uint8 _accessLevel)
  onlyTokenBurnOrOwner
  notBlacklisted
  external
  returns (bool) { 
    userAccess[_newUser] = _accessLevel; 
    return true;
  }

  // Owner can remove access for users if needed
  function removeUser(address _user, uint8 _newAccessLevel, bool _blacklist)
  onlyOwner
  external
  returns (bool) { 
    userAccess[_user] = _newAccessLevel;
    if (_blacklist) {
      blackListed[_user] = true; 
    } 
    return true;
  }

    // Allow owner or burning contract to give access to user
  modifier onlyTokenBurnOrOwner() { 
    require(msg.sender == tokenBurn || msg.sender == owner); 
    _;
  }
  
  modifier notBlacklisted() { 
    require(!blackListed[msg.sender]);
    _;
  }

}
