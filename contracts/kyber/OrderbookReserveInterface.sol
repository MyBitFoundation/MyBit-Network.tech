pragma solidity 0.4.24;


import "./OrderListFactoryInterface.sol";


interface OrderbookReserveInterface {
    function init() public returns(bool);
    function kncRateBlocksTrade() public view returns(bool);
}
