pragma solidity 0.4.24;

// https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/math/SafeMath.sol

  //--------------------------------------------------------------------------------------------------
  // Math operations with safety checks that throw on error
  //--------------------------------------------------------------------------------------------------
library SafeMath {

  //--------------------------------------------------------------------------------------------------
  // Multiplies two numbers, throws on overflow.
  //--------------------------------------------------------------------------------------------------
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  //--------------------------------------------------------------------------------------------------
  // Integer division of two numbers, truncating the quotient.
  //--------------------------------------------------------------------------------------------------
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    // uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return a / b;
  }

  //--------------------------------------------------------------------------------------------------
  // Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  //--------------------------------------------------------------------------------------------------
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  //--------------------------------------------------------------------------------------------------
  // Adds two numbers, throws on overflow.
  //--------------------------------------------------------------------------------------------------
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }

  //--------------------------------------------------------------------------------------------------
  // Returns fractional amount
  //--------------------------------------------------------------------------------------------------
  function getFractionalAmount(uint256 _amount, uint256 _percentage)
  internal
  pure
  returns (uint256) {
    return div(mul(_amount, _percentage), 100);
  }

  //--------------------------------------------------------------------------------------------------
  // Convert bytes to uint
  // TODO: needs testing: use SafeMath
  //--------------------------------------------------------------------------------------------------
  function bytesToUint(bytes b) internal pure returns (uint256) {
      uint256 number;
      for(uint i=0; i < b.length; i++){
          number = number + uint(b[i]) * (2**(8 * (b.length - (i+1))));
      }
      return number;
  }

}
