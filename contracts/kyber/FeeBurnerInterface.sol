pragma solidity ^0.4.24;

interface FeeBurnerInterface {
    function handleFees (uint tradeWeiAmount, address reserve, address wallet) external returns(bool);
    function setReserveData(address reserve, uint feesInBps, address kncWallet) external;
}
