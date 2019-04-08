pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/ERC20.sol";
import "../interfaces/KyberInterface.sol";

interface BurnToken {
  function decimals() external view returns (uint8);
  function balanceOf(address _who) external view returns (uint256);
  function burn(uint _amount) external returns (bool success);
  function burnFrom(address _from, uint _amount) external returns (bool success);
}
interface LogTransaction {  function transaction(string _message, address _from, address _to, uint _amount, address _token)  external; }
interface DB {
  function addressStorage(bytes32 _key) external view returns (address);
  function bytes32Storage(bytes32 _key) external view returns (bytes32);
  function boolStorage(bytes32 _key) external view returns (bool);
  function setUint(bytes32 _key, uint _value) external;
}

/// @title A contract for burning ERC20 tokens as usage fee for dapps
/// @author Kyle Dewhurst & Peter Phillips MyBit Foundation
/// @notice Allows Dapps to call this contract to burn ERC20 tokens as a usage fee
/// @dev This contract does not accept tokens. It only burns tokens from investors wallets to run platform functionality
contract ERC20Burner {
  using SafeMath for uint256;

  BurnToken public token;  // The instance of the ERC20 burner contract
  DB public database;   // The datbase instance
  LogTransaction public events; //LogTransaction contract
  KyberInterface kyber;
  uint256 decimals;

  // @notice constructor: initializes database and the MYB token
  // @param: the address for the database contract used by this platform
  constructor(address _database, address _events, address _kyber)
  public {
    database = DB(_database);
    events = LogTransaction(_events);
    token = BurnToken(database.addressStorage(keccak256(abi.encodePacked("platform.token"))));
    require(address(token) != address(0));
    kyber = KyberInterface(_kyber);
    uint dec = token.decimals();
    decimals = 10**dec;
  }

  // @notice authorized contracts can burn mybit tokens here if the investor has approved this contract to do so
  // @param (address) _tokenHolder = the address of the mybit token holder who wishes to burn _amount of tokens
  // @param (uint) _amount = the amount of tokens to be burnt (must include decimal places)
  function burn(address _tokenHolder, uint _amount, address _burnToken)
  payable
  external
  returns (bool) {
    //onlyPlatformContracts:
    require(database.boolStorage(keccak256(abi.encodePacked("contract", msg.sender))));
    //acceptedState:
    require(database.boolStorage(keccak256(abi.encodePacked(database.bytes32Storage(keccak256(abi.encodePacked("currentState"))), _tokenHolder))) || database.boolStorage(keccak256(abi.encodePacked("ignoreStateChanges", _tokenHolder))));
    if(_burnToken == address(token)){
      require(token.burnFrom(_tokenHolder, _amount));
      events.transaction('Platform Token Burnt', _tokenHolder, msg.sender, _amount, address(token));
    } else {
      //Calculate the estimate cost of given ERC20 to get convert to correct amount of platform token
      (uint expectedRate, uint minRate) = kyber.getExpectedRate(_burnToken, address(token), 0);
      uint estimatedCost = expectedRate.mul(_amount).div(decimals);
      if(_burnToken == address(0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)){
        //Ether was chosen as the burn token
        require(msg.value >= estimatedCost, 'Not enough funds');
        convert(_tokenHolder, _burnToken, address(token), msg.value, _amount, minRate, true);
      } else {
        ERC20 burnToken = ERC20(_burnToken);
        //Transfer burn token from the user
        require(burnToken.transferFrom(_tokenHolder, address(this), estimatedCost));
        // Mitigate ERC20 Approve front-running attack, by initially setting
        // allowance to 0
        require(burnToken.approve(address(kyber), 0));
        // Approve tokens so network can take them during the swap
        burnToken.approve(address(kyber), estimatedCost);
        convert(_tokenHolder, _burnToken, address(token), estimatedCost, _amount, minRate, false);
      }
      //Get amount of the platform token held by this contract (in case it differs from the _amount parameter)
      uint amount = token.balanceOf(this);
      //Burn the platform token
      require(token.burn(amount));
      events.transaction('Platform Token Burnt', _tokenHolder, msg.sender, amount, address(token));

    }
    return true;
  }

  function convert(address _user, address _from, address _to, uint _amount, uint _max, uint _minRate, bool _eth)
  private
  returns (uint){
    uint balanceBefore;
    uint change;
    emit Trade(_from, _amount, _to, address(this), _max, _minRate, address(0));
    if(_eth == true){
      require(_amount <= address(this).balance, "Not enough funds in contract");
      balanceBefore = address(this).balance;
      kyber.trade.value(_amount)(_from, _amount, _to, address(this), _max, _minRate, 0);
      change = _amount.sub(balanceBefore.sub(address(this).balance));
      _user.transfer(change);
    } else {
      ERC20 erc20 = ERC20(_from);
      balanceBefore = erc20.balanceOf(this);
      kyber.trade(_from, _amount, _to, address(this), _max, _minRate, 0);
      change = _amount.sub(balanceBefore.sub(erc20.balanceOf(this)));
      erc20.transfer(_user, change);
    }
    return change;
  }

  // @notice owners can set the cost of functionality on the platform here.
  // @dev _amount will be how many platformTokens are burned to call the method at _contractAddress
  // @param (bytes4) _methodID: the methodID of the function which is to require a burning fee
  // @param (address) _contractAddress: the address of the contract where this method is contained
  function setFee(bytes4 _methodID, address _contractAddress, uint _amount)
  external
  onlyOwner
  returns (bool) {
    //Sets the price to burn per function in MyB.
    database.setUint(keccak256(abi.encodePacked(_methodID, _contractAddress)), _amount);
    emit LogFeeAdded(_contractAddress, _methodID, _amount);
    return true;
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('ERC20Burner destroyed', address(this), msg.sender, address(this).balance, address(0));
    selfdestruct(msg.sender);
  }

  // @notice fallback function. We need to receive Ether from Kyber Network
  function ()
  external
  payable {
    emit EtherReceived(msg.sender, msg.value);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // @notice reverts if msg.sender isn't the owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  // @notice reverts if address isn't authorized to burn MYB
  modifier onlyPlatformContracts(address _burner) {
    require(database.boolStorage(keccak256(abi.encodePacked("contract", _burner))));
    _;
  }

  // @notice reverts if investor hasn't accepted current contract state or if he doesn't ignore state changes entirely
  modifier acceptedState(address _investor) {
    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));
    require(database.boolStorage(keccak256(abi.encodePacked(currentState, _investor))) || database.boolStorage(keccak256(abi.encodePacked("ignoreStateChanges", _investor))));
    _;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Events
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  event LogMYBBurned(address _tokenHolder, address _burningContract, uint _amount);
  event LogFeeAdded(address indexed _contractAddress, bytes4 _methodID, uint _amount);
  event LogTokenAddress(address tokenAddress);
  event Trade(address src, uint amount, address dest, address receiver, uint max, uint minRate, address walletID);
  event EtherReceived(address sender, uint amount);
}
