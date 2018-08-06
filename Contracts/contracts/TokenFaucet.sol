pragma solidity 0.4.24;

import './MyBitToken.sol';
import './Database.sol'; 
import './SafeMath.sol'; 

// @notice Registers users and provides them with a minimum amount of MYB and Ether
// Note: Not secure. Use for test-net only.
contract TokenFaucet {
  using SafeMath for uint; 

  MyBitToken public mybToken;
  Database public database; 

  uint public mybTokensInFaucet;
  uint public balanceWEI; 

  uint public basicIncomeMYB = uint(10e21);     // User should have at least 10,000 MYB
  uint public basicIncomeWEI = 100 finney;    // User should have at least .1 Ether 

  bytes32 private accessPass; 

  uint public oneYear = uint(31536000);    // 365 days in seconds


  constructor(address _database, address _mybTokenAddress, bytes32 _accessPass)
  public  {
    database = Database(_database); 
    mybToken = MyBitToken(_mybTokenAddress);
    accessPass = _accessPass; 
  }

  // For owner to deposit mybTokens easier
  // @dev call myBitmybToken.receiveAndCall(_spender=mybFaucet.address, _amount * 10^18, mybitmybToken.address, 0x0) 
  function receiveApproval(address _from, uint _amount, address _mybToken, bytes _data)
  external {
    require(_mybToken == msg.sender && _mybToken == address(mybToken));
    require(mybToken.transferFrom(_from, this, _amount));
    mybTokensInFaucet = mybTokensInFaucet.add(_amount);
    emit LogMYBDeposited(_from, _amount, _data);
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
    uint expiry = now.add(oneYear);
    uint accessLevel = database.uintStorage(keccak256(abi.encodePacked("userAccess", msg.sender))); 
    if (accessLevel < 1){ 
      database.setUint(keccak256(abi.encodePacked("userAccess", msg.sender)), 1);   
      database.setUint(keccak256(abi.encodePacked("userAccessExpiration", msg.sender)), expiry);
      emit LogNewUser(msg.sender);
    }
    if (mybToken.balanceOf(msg.sender) < basicIncomeMYB) { 
      uint amountMYB = basicIncomeMYB.sub(mybToken.balanceOf(msg.sender)); 
      mybTokensInFaucet = mybTokensInFaucet.sub(amountMYB); 
    }
    if (msg.sender.balance < basicIncomeWEI) { 
      uint amountWEI = basicIncomeWEI.sub(msg.sender.balance); 
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

  //------------------------------------------------------------------------------------------------------------------
  // Verifies that desired access level is allowed. No user can downgrade access by burning mybTokens
  //------------------------------------------------------------------------------------------------------------------
  modifier basicVerification(uint _newAccessLevel) {
  uint currentLevel = database.uintStorage(keccak256(abi.encodePacked("userAccess", msg.sender)));
  require(currentLevel < _newAccessLevel || database.uintStorage(keccak256(abi.encodePacked("userAccessExpiration", msg.sender))) < now);       // Dont allow burning to downgrade access level unless access has expired
  require (_newAccessLevel < uint(4) && _newAccessLevel > uint(0));      // Must be 1, 2 or 3
  _;
}

  //------------------------------------------------------------------------------------------------------------------
  // Verify that the sender is a registered owner
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  event LogWithdraw(address _sender, uint _amountMYB, uint _amountWEI);
  event LogMYBDeposited(address _depositer, uint _amount, bytes _data);
  event LogEthDeposited(address _depositer, uint _amountWEI); 
  event LogEthWithdraw(address _withdrawer, uint _amountWEI); 
  event LogNewUser(address _user); 
}
