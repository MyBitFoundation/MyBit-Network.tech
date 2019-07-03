pragma solidity ^0.4.24;

import "../interfaces/ERC20.sol";
import "../interfaces/DBInterface.sol";
import "../database/Events.sol";
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
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
contract AssetManagerFunds {
  using SafeMath for uint256;

  DBInterface public database;
  Events public events;

  uint256 private transactionNumber;

  // @notice constructor: initializes database
  constructor(address _database, address _events)
  public {
    database = DBInterface(_database);
    events = Events(_events);
  }

  // @notice asset manager can withdraw his dividend fee from assets here
  // @param : address _assetAddress = the address of this asset on the platform
  function withdraw(address _assetAddress)
  external
  nonReentrant
  returns (bool) {
    require(_assetAddress != address(0));
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress))));
    DToken token = DToken( _assetAddress);
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
      DToken fundingToken = DToken(token.getERC20());
      balanceBefore = fundingToken.balanceOf(address(this));
      require(token.withdraw());
      require(fundingToken.balanceOf(address(this)).sub(amountOwed) == balanceBefore);
      fundingToken.transfer(msg.sender, amountOwed);
    }
    return true;
  }

  function retrieveAssetManagerTokens(address[] _assetAddress)
  external
  nonReentrant
  returns (bool) {
    require(_assetAddress.length <= 42);
    uint[] memory payoutAmounts = new uint[](_assetAddress.length);
    address[] memory tokenAddresses = new address[](_assetAddress.length);
    uint8 numEntries;
    for(uint8 i = 0; i < _assetAddress.length; i++){
      require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress[i]))) );
      DToken token = DToken(_assetAddress[i]);
      require(address(token) != address(0));
      uint tokensOwed = token.getAmountOwed(address(this));
      if(tokensOwed > 0){
        DToken fundingToken = DToken(token.getERC20());
        uint balanceBefore = fundingToken.balanceOf(address(this));
        uint8 tokenIndex = containsAddress(tokenAddresses, address(token));
        if (tokenIndex < _assetAddress.length) {  payoutAmounts[tokenIndex] = payoutAmounts[tokenIndex].add(tokensOwed); }
        else {
          tokenAddresses[numEntries] = address(fundingToken);
          payoutAmounts[numEntries] = tokensOwed;
          numEntries++;
        }
        require(token.withdraw());
        require(fundingToken.balanceOf(address(this)).sub(tokensOwed) == balanceBefore);
      }
    }

    for(i = 0; i < numEntries; i++){
      require(ERC20(tokenAddresses[i]).transfer(msg.sender, payoutAmounts[i]));
    }
    return true;
  }


  function retrieveAssetManagerETH(address[] _assetAddress)
  external
  nonReentrant
  returns (bool) {
    require(_assetAddress.length <= 93);
    uint weiOwed;
    for(uint8 i = 0; i < _assetAddress.length; i++){
      require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress[i]))));
      DToken token = DToken(_assetAddress[i]);
      uint balanceBefore = address(this).balance;
      uint amountOwed = token.getAmountOwed(address(this));
      if(amountOwed > 0){
        uint balanceAfter = balanceBefore.add(amountOwed);
        require(token.withdraw());
        require(address(this).balance == balanceAfter);
        weiOwed = weiOwed.add(amountOwed);
      }
    }
    msg.sender.transfer(weiOwed);
    return true;
  }

  function viewBalance(address _assetAddress, address _assetManager)
  external
  view
  returns (uint){
    require(_assetAddress != address(0), 'Empty address passed');
    require(_assetManager == database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress))), 'That user does not manage the asset');
    DToken token = DToken( _assetAddress);
    uint balance = token.balanceOf(address(this));
    return balance;
  }

  function viewAmountOwed(address _assetAddress, address _assetManager)
  external
  view
  returns (uint){
    require(_assetAddress != address(0), 'Empty address passed');
    require(_assetManager == database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress))), 'That user does not manage the asset');
    DToken token = DToken( _assetAddress);
    uint amountOwed = token.getAmountOwed(address(this));
    return amountOwed;
  }

  // @notice returns the index if the address is in the list, otherwise returns list length + 1
  function containsAddress(address[] _addressList, address _addr)
  internal
  pure
  returns (uint8) {
    for (uint8 i = 0; i < _addressList.length; i++){
      if (_addressList[i] == _addr) return i;
    }
    return uint8(_addressList.length + 1);
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('AssetManagerFunds destroyed', address(this), msg.sender, address(this).balance, address(0));
    selfdestruct(msg.sender);
  }

  // @notice prevents calls from re-entering contract
  modifier nonReentrant() {
    transactionNumber += 1;
    uint256 localCounter = transactionNumber;
    _;
    require(localCounter == transactionNumber);
  }

  // @notice reverts if caller is not the owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))) == true);
    _;
  }

  function ()
  payable
  public {
    emit EtherReceived(msg.sender, msg.value);
  }

  event EtherReceived(address sender, uint amount);

}
