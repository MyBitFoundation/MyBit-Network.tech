pragma solidity ^0.4.24;

contract WhiteListInterface {
    function getUserCapInWei(address user) external view returns (uint userCapWei);
}
