pragma solidity ^0.4.24;

import "../interfaces/ERC20.sol";


/// @title Kyber Network interface
interface KyberNetworkInterface {
    function maxGasPrice() external view returns(uint);
    function getUserCapInWei(address user) external view returns(uint);
    function getUserCapInTokenWei(address user, ERC20 token) external view returns(uint);
    function enabled() external view returns(bool);
    function info(bytes32 id) external view returns(uint);

    function getExpectedRate(ERC20 src, ERC20 dest, uint srcQty) external view
        returns (uint expectedRate, uint slippageRate);

    function tradeWHint(address trader, ERC20 src, uint srcAmount, ERC20 dest, address destAddress,
        uint maxDestAmount, uint minConversionRate, address walletId, bytes hint) external payable returns(uint);
}
