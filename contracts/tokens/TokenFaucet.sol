pragma solidity 0.4.24;

import "./erc20/StandardToken.sol";
import "../interfaces/BurnableERC20.sol";
import "../math/SafeMath.sol";

interface DB { function boolStorage(bytes32 _key) external view returns (bool); }

// @notice Registers users and provides them with a minimum amount of MYB and Ether
// Note: Not secure. Use for test-net only.
contract TokenFaucet {
  using SafeMath for uint; 

  StandardToken public token;
  DB public database; 

  uint public tokensInFaucet;
  uint public balanceWEI; 

  uint public dripAmountToken = uint(10e21);     // User should have at least 10,000 MYB
  uint public dripAmountWEI = 500 finney;    // User should have at least .5 Ether 

  bytes32 private accessPass; 

  uint public oneYear = uint(31536000);    // 365 days in seconds


  constructor(address _database, address _tokenAddress, bytes32 _accessPass)
  public  {
    database = DB(_database); 
    token = StandardToken(_tokenAddress);
    accessPass = _accessPass; 
  }

  // For owner to deposit tokens easier
  // @dev call StandardToken.receiveAndCall(_spender=mybFaucet.address, _amount * 10^18, StandardToken.address, 0x0) 
  function receiveApproval(address _from, uint _amount, address _token, bytes _data)
  external {
    require(_token == msg.sender && _token == address(token));
    require(token.transferFrom(_from, this, _amount));
    tokensInFaucet = tokensInFaucet.add(_amount);
    emit LogTokenDeposited(_from, _amount, _data);
  }

  // Can deposit more WEI in here
  function depositWEI()
  external 
  payable { 
    balanceWEI = balanceWEI.add(msg.value); 
    emit LogEthDeposited(msg.sender, msg.value); 
  }

    // Lazy defence. accessPass is mild deterent, not secure. 
  function withdraw(string _pass)
  external {
    require (keccak256(abi.encodePacked(_pass)) == accessPass); 
    if (token.balanceOf(msg.sender) < dripAmountToken) { 
      uint amountMYB = dripAmountToken.sub(token.balanceOf(msg.sender)); 
      tokensInFaucet = tokensInFaucet.sub(amountMYB);
      token.transfer(msg.sender, amountMYB); 
    }
    if (msg.sender.balance < dripAmountWEI) { 
      uint amountWEI = dripAmountWEI.sub(msg.sender.balance); 
      balanceWEI = balanceWEI.sub(amountWEI); 
      msg.sender.transfer(amountWEI);
    }
    emit LogWithdraw(msg.sender, amountMYB, amountWEI);
  }

  function changePass(bytes32 _newPass)
  external 
  anyOwner
  returns (bool) { 
    accessPass = _newPass; 
    return true; 
  }

  function changeDripAmounts(uint _newAmountWEI, uint _newAmountMYB)
  external 
  anyOwner
  returns (bool) { 
    dripAmountWEI = _newAmountWEI; 
    dripAmountToken = _newAmountMYB; 
    return true; 
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verify that the sender is a registered owner
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  event LogWithdraw(address _sender, uint _amountToken, uint _amountWEI);
  event LogTokenDeposited(address _depositer, uint _amount, bytes _data);
  event LogEthDeposited(address _depositer, uint _amountWEI); 
  event LogEthWithdraw(address _withdrawer, uint _amountWEI); 
  event LogNewUser(address _user); 
}
