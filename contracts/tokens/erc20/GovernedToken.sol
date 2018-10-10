pragma solidity 0.4.24;

import "./DividendToken.sol";
import "../../math/SafeMath.sol"; 


// @notice give GovernedToken access to view uint and bytes32 storage
interface DBAccess { 
  function uintStorage(bytes32 _key) external view returns (uint); 
  function bytes32Storage(bytes32 _key) external view returns (bytes32); 
}


contract GovernedToken is DividendToken { 
  using SafeMath for uint; 

  DBAccess public database; 


  // @notice constructor: initialized
  constructor(address _database, string _tokenURI, address _owner)
  public
  DividendToken(_tokenURI, _owner){
    database = DBAccess(_database); 
  }

  // @notice Restrict transfers on locked tokens
  function transfer(address _to, uint _amount)
  public
  returns (bool success) {
      require(_amount <= getAmountAvailable(msg.sender)); 
      super.transfer(_to, _amount);
      return true;
  }

  function transferFrom(address _from, address _to, uint _amount)
  public
  returns (bool success) {
      require(_amount <= getAmountAvailable(_from));
      super.transferFrom(_from, _to, _amount);
      return true;
  }


  // @notice returns the amount of tokens _user has locked for this asset
  function getAmountAvailable(address _user)
  internal 
  view 
  returns (uint) { 
    bytes32 assetID = database.bytes32Storage(keccak256(abi.encodePacked("assetTokenID", _user))); 
    uint amountLocked = database.uintStorage(keccak256(abi.encodePacked("tokensLocked", assetID))); 
    return super.balanceOf(_user).sub(amountLocked); 
  }


}


