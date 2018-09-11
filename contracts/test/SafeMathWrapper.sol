pragma solidity 0.4.24;

import "../math/SafeMath.sol";

contract SafeMathWrapper {
  using SafeMath for uint;

  function multiply(uint256 a, uint256 b) external pure returns (uint256) {
    return a.mul(b);
  }

  function divide(uint256 a, uint256 b) external pure returns (uint256) {
    return a.div(b);
  }

  function subtract(uint256 a, uint256 b) external pure returns (uint256) {
    return a.sub(b);
  }

  function addto(uint256 a, uint256 b) external pure returns (uint256) {
    return a.add(b);
  }

}
