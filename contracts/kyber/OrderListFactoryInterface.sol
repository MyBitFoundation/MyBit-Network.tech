pragma solidity ^0.4.24;


import "./OrderListInterface.sol";


interface OrderListFactoryInterface {
    function newOrdersContract(address admin) external returns(OrderListInterface);
}
