pragma solidity 0.4.24;

import "./DividendTokenERC20.sol";

// @notice give GovernedToken access to view uint and bytes32 storage
interface DBAccess {
  function uintStorage(bytes32 _key) external view returns (uint);
  function bytes32Storage(bytes32 _key) external view returns (bytes32);
}

contract GovernedTokenERC20 is DividendTokenERC20{
  DBAccess public database;


  // @notice constructor: initialized
  constructor(address _database, string _tokenURI, address _owner, address _erc20Address)
  public
  DividendTokenERC20(_tokenURI, _owner, _erc20Address){
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
  public
  view
  returns (uint) {
    bytes32 assetID = database.bytes32Storage(keccak256(abi.encodePacked("assetTokenID", address(this))));
    uint amountLocked = database.uintStorage(keccak256(abi.encodePacked("tokensLocked", assetID, _user)));
    uint balance = balances[_user];
    uint available = balance.sub(amountLocked);
    return available;
  }

}
