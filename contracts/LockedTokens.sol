pragma solidity ^0.4.11;
import './MyBitHub.sol'; 
import './SafeMath.sol';

// Users will lock their tokens here
contract LockedTokens is Owned{ 
using SafeMath for *; 

address myBitToken;
address myBitHub;  

function LockedTokens(address _myBitToken) public { 
	myBitHub = msg.sender; 
	myBitToken = _myBitToken; 
}

function tokensReceived(uint amount) onlyOwner 
    returns (bool success) 
  {
      return ERC20Interface(tokenAddress).transfer(owner, amount);
  }



}