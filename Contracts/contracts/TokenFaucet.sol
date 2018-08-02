pragma solidity 0.4.24;

import './MyBitToken.sol';
import './Database.sol'; 

// Can use this contract to give tokens away.
// Note: This is not secure and has no limits placed. Use for test-net only.
contract TokenFaucet {

  MyBitToken public token;
  Database public database; 
  uint public tokensInFaucet;
  bytes32 private accessPass; 

  uint public oneYear = uint(31536000);    // 365 days in seconds


  constructor(address _database, address _tokenAddress, bytes32 _accessPass)
  public  {
    database = Database(_database); 
    token = MyBitToken(_tokenAddress);
    accessPass = _accessPass; 
  }

  // For owner to deposit tokens easier
  function receiveApproval(address _from, uint _amount, address _token, bytes _data)
  external {
    require(_token == msg.sender && _token == address(token));
    require(token.transferFrom(_from, this, _amount));
    tokensInFaucet += _amount;
    emit TokenDeposit(_from, _amount, block.number);
  }

  function deposit(uint _amount)
  external {
    require(token.transferFrom(msg.sender, this, _amount));
    tokensInFaucet += _amount;
    emit TokenDeposit(msg.sender, _amount, block.number);
  }

  // Weak defense with password. Not Secure
  function withdraw(uint _amount, string _pass)
  external {
    require (tokensInFaucet >= _amount);
    require (keccak256(abi.encodePacked(_pass)) == accessPass); 
    tokensInFaucet -= _amount;
    token.transfer(msg.sender, _amount);
    emit TokenWithdraw(msg.sender, _amount, block.number);
  }

    // Weak defense with password. Not Secure
  function register(uint _amount, string _pass)
  external {
    require (tokensInFaucet >= _amount);
    require (keccak256(abi.encodePacked(_pass)) == accessPass); 
    tokensInFaucet -= _amount;
    token.transfer(msg.sender, _amount);
    database.setUint(keccak256(abi.encodePacked("userAccess", msg.sender)), 1);
    uint expiry = now + oneYear;
    assert (expiry > now && expiry > oneYear);   // Check for overflow
    database.setUint(keccak256(abi.encodePacked("userAccessExpiration", msg.sender)), expiry);
    emit TokenWithdraw(msg.sender, _amount, block.number);
  }

  function changePass(bytes32 _newPass)
  external 
  anyOwner
  returns (bool) { 
    accessPass = _newPass; 
    return true; 
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verify that the sender is a registered owner
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  event TokenWithdraw(address _sender, uint _amount, uint _blockNumber);
  event TokenDeposit(address _depositer, uint _amount, uint _blockNumber);
}
