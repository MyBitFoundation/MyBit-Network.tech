pragma solidity ^0.4.18;
library SafeMath {
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a * b;
    assert(a == 0 || c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }

  function calculateOwed(uint256 _totalOwed, uint256 _amountFunded, uint256 _totalOwned) internal pure returns (uint256) {
    uint256 amountFunded = mul(_amountFunded, 1000);   // Multiply to avoid solidity error with fractions
    uint256 weight = div(amountFunded, _totalOwned);   // get relative holding of funder
    uint256 roi = mul(weight, _totalOwed);
    roi = div(roi, 1000);    // give relative amount of payment cycle earnings from viewers  (divide to return to normal value)
    return roi;
  }

  // Give the total amount and the percentage as a whole number to get the fractional amount
  // NOTE: parameters must be given as a whole number
  // NOTE: Solidity will round down when faced with a fraction
  function getFractionalAmount(uint256 _amount, uint256 _percentage) internal pure returns (uint256) {
    uint256 fixedPointPercentage = mul(_percentage, 1000);
    uint256 fractionalAmount = mul(_amount, fixedPointPercentage);
    return div(fractionalAmount, 100000);
  }

  // NOTE: Experimental function. Trying to avoid settling all payments at once
  // _numberOfMultipliedTokens = total number of locked tokens * full multpliers
  // Calculates amount of tokens 
  function addMultiplier(uint256 _numberOfMultipliedTokens, uint256 _percentageIntoPeriod, uint256 _multiplierPercentage) internal pure returns (uint256) { 
    uint256 relativeMultiplier = mul(_multiplierPercentage, _percentageIntoPeriod); 
    return mul(_numberOfMultipliedTokens, relativeMultiplier); 
  }



}
