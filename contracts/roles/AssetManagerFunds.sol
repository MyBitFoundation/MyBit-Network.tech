pragma solidity 0.4.24;

import "../interfaces/ERC20.sol";
import "../interfaces/DBInterface.sol";
import "../math/SafeMath.sol";

interface DToken {
  function withdraw() external returns (bool);
  function getAmountOwed(address _user) external view returns (uint);
  function balanceOf(address _tokenHolder) external view returns (uint);
  function transfer(address _to, uint _amount) external returns (bool success);
  function getERC20() external  view returns (address);
}

// @title A dividend-token holding contract that locks tokens and retrieves dividends for assetManagers
// @notice This contract receives newly minted tokens and retrieves Ether or ERC20 tokens received from the asset
// @dev Tokens
contract AssetManagerFunds {
  using SafeMath for uint256;

  DBInterface public database;

  constructor(address _database)
  public {
    database = DBInterface(_database);
  }

  function withdraw(bytes32 _assetID)
  external
  returns (bool) {
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID))));
    DToken token = DToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    require(address(token) != address(0));
    uint amountOwed;
    uint balanceBefore;
    if (token.getERC20() == address(0)){
      balanceBefore = address(this).balance;
      amountOwed = token.getAmountOwed(address(this));
      require(amountOwed > 0);
      uint balanceAfter = balanceBefore.add(amountOwed);
      require(token.withdraw());
      require(address(this).balance == balanceAfter);
      msg.sender.transfer(amountOwed);
    }
    else {
      amountOwed = token.getAmountOwed(address(this));
      require(amountOwed > 0);
      balanceBefore = token.balanceOf(address(this));
      require(token.withdraw());
      require(token.balanceOf(address(this)).sub(amountOwed) == balanceBefore);
      token.transfer(msg.sender, amountOwed);
    }
    return true;
  }

  function retrieveAssetManagerTokens(bytes32[] _assetID)
  external
  returns (bool) {
    require(_assetID.length <= 42);
    uint[] memory payoutAmounts = new uint[](_assetID.length);
    address[] memory tokenAddresses = new address[](_assetID.length);
    uint8 numEntries;
    for(uint8 i = 0; i < _assetID.length; i++){
      require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID[i]))) );
      DToken token = DToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID[i]))));
      require(address(token) != address(0));
      uint tokensOwed = token.getAmountOwed(address(this));
      require(tokensOwed > 0);
      DToken fundingToken = DToken(token.getERC20());
      uint balanceBefore = fundingToken.balanceOf(address(this));
      uint8 tokenIndex = containsAddress(tokenAddresses, address(token));
      if (tokenIndex < _assetID.length) {  payoutAmounts[tokenIndex] = payoutAmounts[tokenIndex].add(tokensOwed); }
      else {
        tokenAddresses[numEntries] = address(fundingToken);
        payoutAmounts[numEntries] = tokensOwed;
        numEntries++;
      }
      require(token.withdraw());
      require(fundingToken.balanceOf(address(this)).sub(tokensOwed) == balanceBefore);
    }

    for(i = 0; i < numEntries; i++){
      require(ERC20(tokenAddresses[i]).transfer(msg.sender, payoutAmounts[i]));
    }
    return true;
  }


  function retrieveAssetManagerETH(bytes32[] _assetID)
  external
  returns (bool) {
    require(_assetID.length <= 93);
    uint weiOwed;
    for(uint8 i = 0; i < _assetID.length; i++){
      require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID[i]))));
      DToken token = DToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID[i]))));
      uint balanceBefore = address(this).balance;
      uint amountOwed = token.getAmountOwed(address(this));
      require(amountOwed > 0);
      uint balanceAfter = balanceBefore.add(amountOwed);
      require(token.withdraw());
      require(address(this).balance == balanceAfter);
      weiOwed = weiOwed.add(amountOwed);
    }
    msg.sender.transfer(weiOwed);
    return true;
  }

  function containsAddress(address[] _addressList, address _addr)
  internal
  pure
  returns (uint8) {
    for (uint8 i = 0; i < _addressList.length; i++){
      if (_addressList[i] == _addr) return i;
    }
    return uint8(_addressList.length + 1);
  }

  function ()
  payable
  public {}

}
