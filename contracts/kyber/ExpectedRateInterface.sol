pragma solidity ^0.4.24;

import "../interfaces/ERC20.sol";


interface ExpectedRateInterface {
    function getExpectedRate(ERC20 src, ERC20 dest, uint srcQty, bool usePermissionless) external view
        returns (uint expectedRate, uint slippageRate);
}
