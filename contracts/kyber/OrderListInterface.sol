pragma solidity ^0.4.24;


interface OrderListInterface {
    function getOrderDetails(uint32 orderId) external view returns (address, uint128, uint128, uint32, uint32);
    function add(address maker, uint32 orderId, uint128 srcAmount, uint128 dstAmount) external returns (bool);
    function remove(uint32 orderId) external returns (bool);
    function update(uint32 orderId, uint128 srcAmount, uint128 dstAmount) external returns (bool);
    function getFirstOrder() external view returns(uint32 orderId, bool isEmpty);
    function allocateIds(uint32 howMany) external returns(uint32);
    function findPrevOrderId(uint128 srcAmount, uint128 dstAmount) external view returns(uint32);

    function addAfterId(address maker, uint32 orderId, uint128 srcAmount, uint128 dstAmount, uint32 prevId) external
        returns (bool);

    function updateWithPositionHint(uint32 orderId, uint128 srcAmount, uint128 dstAmount, uint32 prevId) external
        returns(bool, uint);
}
