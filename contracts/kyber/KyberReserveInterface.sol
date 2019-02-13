pragma solidity ^0.4.24;

import "../interfaces/ERC20.sol";

/// @title Kyber Reserve contract
interface KyberReserveInterface {

    function trade(
        ERC20 srcToken,
        uint srcAmount,
        ERC20 destToken,
        address destAddress,
        uint conversionRate,
        bool validate
    )
        external
        payable
        returns(bool);

    function getConversionRate(ERC20 src, ERC20 dest, uint srcQty, uint blockNumber) external view returns(uint);
}
