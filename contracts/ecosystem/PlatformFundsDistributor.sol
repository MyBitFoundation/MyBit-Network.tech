pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import '../interfaces/DBInterface.sol';
import "../interfaces/KyberInterface.sol";
import "../interfaces/ERC20.sol";
import "../interfaces/BurnableERC20.sol";


contract PlatformFundsDistributor {
  using SafeMath for uint256;

  address public constant foundationWallet = address(0xd9d2B28E09921A38aD7aB1B4138357408bda8EBD);
  address public constant taskmarketWallet = address(0xFd1E4b568Bb3bcF706b0bac5960d4B91BacFF96F);
  //Any funds remaining after these percentages are sent, is burned as MYB
  //Combined value must not exceed 100 or funds sent here will never be retrieved
  uint256 public constant foundationPercent = 33;
  uint256 public constant taskmarketPercent = 33;

  DBInterface private database;
  KyberInterface private kyber;

  constructor(address _database, address _kyber) public {
    database = DBInterface(_database);
    kyber = KyberInterface(_kyber);
  }

  function distributeETH() external{
    BurnableERC20 platformToken = BurnableERC20(database.addressStorage(keccak256(abi.encodePacked("platform.token"))));
    uint256 total = address(this).balance;
    //Setup funding amounts
    uint256 foundationAmount = total.getFractionalAmount(foundationPercent);
    uint256 taskmarketAmount = total.getFractionalAmount(taskmarketPercent);
    uint256 burnAmount = total.sub(foundationAmount).sub(taskmarketAmount);
    //Transfer funds
    foundationWallet.transfer(foundationAmount);
    taskmarketWallet.transfer(taskmarketAmount);
    //Convert to platform token and burn
    uint256 platformBalance = platformToken.balanceOf(this);
    kyber.trade.value(burnAmount)(address(0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE), burnAmount, address(platformToken), address(this), 2**255, 0, 0);
    require(platformToken.burn(platformToken.balanceOf(this).sub(platformBalance)));
  }

  function distributeERC20(address _token) external{
    ERC20 erc20 = ERC20(_token);
    BurnableERC20 platformToken = BurnableERC20(database.addressStorage(keccak256(abi.encodePacked("platform.token"))));
    uint256 total = erc20.balanceOf(this);
    //Setup funding amounts
    uint256 foundationAmount = total.getFractionalAmount(foundationPercent);
    uint256 taskmarketAmount = total.getFractionalAmount(taskmarketPercent);
    uint256 burnAmount = total.sub(foundationAmount).sub(taskmarketAmount);
    //Transfer funds
    require(erc20.transfer(foundationWallet, foundationAmount));
    require(erc20.transfer(taskmarketWallet, taskmarketAmount));
    //Convert to platform token and burn
    uint256 platformBalance = platformToken.balanceOf(this);
    if(address(erc20) != address(platformToken)){
      require(erc20.approve(address(kyber), burnAmount));
      kyber.trade(_token, burnAmount, address(platformToken), address(this), 2**255, 0, 0);
    }
    require(platformToken.burn(platformToken.balanceOf(this).sub(platformBalance)));
  }

  // @notice fallback function
  function ()
  public
  payable {
    emit EtherReceived(msg.sender, msg.value);
  }

  // @notice platform owners can recover tokens here
  function recoverTokens(address _token)
  onlyOwner
  external {
    ERC20 erc20 = ERC20(_token);
    uint contractBalance = erc20.balanceOf(this);
    erc20.transfer(msg.sender, contractBalance);
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    selfdestruct(msg.sender);
  }

  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))), "Not owner");
    _;
  }

  event EtherReceived(address sender, uint amount);
}
