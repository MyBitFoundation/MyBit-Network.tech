pragma solidity ^0.4.24;

import "./DividendTokenERC20.sol";
import "./BurnableToken.sol";
import "../../math/SafeMath.sol";

// @notice give GovernedToken access to view uint and bytes32 storage
interface DBAccess {
  function uintStorage(bytes32 _key) external view returns (uint);
  function bytes32Storage(bytes32 _key) external view returns (bytes32);
}

// @title A Dividend token that has governance features and receives ERC20 tokens as payment
// @notice This token contract can receive ERC20 tokens as payments and token owners can lock tokens while submitting votes
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
// @dev Dividend tokens aren't actually locked, but restricted from transferring to avoid locking contravt having to distribute dividends.
contract GovernedTokenERC20 is DividendTokenERC20, BurnableToken{
  DBAccess public database;


  // @notice constructor: initializes database and DividendTokenERC20
  // @param (address) _database = the address of the platform database
  // @param (string) _tokenURI = The URI where details of the token (asse) can be found
  // @param (address) _owner = The minting authority for this token
  // @param (address) _erc20Address = The address of the erc20 token to be sent for dividends
  constructor(address _database, string _tokenURI, address _owner, address _erc20Address)
  public
  DividendTokenERC20(_tokenURI, _owner, _erc20Address){
    database = DBAccess(_database);
  }

  // @notice Standard DividendToke transfer function, which checks for locked tokens before sending
  function transfer(address _to, uint _amount)
  public
  returns (bool success) {
      require(_amount <= getAmountAvailable(msg.sender));
      super.transfer(_to, _amount);
      return true;
  }

  // @notice Standard DividendToke transferFrom function, which checks for locked tokens before sending
  function transferFrom(address _from, address _to, uint _amount)
  public
  returns (bool success) {
      require(_amount <= getAmountAvailable(_from));
      super.transferFrom(_from, _to, _amount);
      return true;
  }

  // @notice returns the amount of tokens _investor has locked for this asset
  function getAmountAvailable(address _investor)
  public
  view
  returns (uint) {
    uint amountLocked = database.uintStorage(keccak256(abi.encodePacked("commitment.value", address(this), _investor)));
    uint balance = balances[_investor];
    uint available = balance.sub(amountLocked);
    return available;
  }

}
