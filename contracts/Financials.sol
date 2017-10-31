pragma solidity ^0.4.15;
library Financials {

  function calculateOwed(uint256 totalOwed, uint256 amountOwned, uint256 totalOwned) internal constant returns (uint256) { 
      uint256 amountFunded = mul(amountOwned, 1000);   // Multiply to avoid solidity error with fractions
      uint256 weight = div(amountFunded, totalOwned);   // get relative holding of funder
      uint256 roi = mul(weight, totalOwed); 
      roi = div(roi, 1000);    // give relative amount of payment cycle earnings from viewers  (divide to return to normal value)
      return roi;
  }

 }