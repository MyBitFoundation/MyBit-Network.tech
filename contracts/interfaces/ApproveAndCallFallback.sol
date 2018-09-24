pragma solidity ^0.4.24;

// @notice Receive approval and then execute function
interface ApproveAndCallFallBack {
    function receiveApproval(address from, uint tokens, address token, bytes data) external;
}
