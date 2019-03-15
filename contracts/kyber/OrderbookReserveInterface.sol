pragma solidity 0.4.24;


import "./OrderListFactoryInterface.sol";


interface OrderbookReserveInterface {
    function init() external returns(bool);
    function kncRateBlocksTrade() external view returns(bool);
}
