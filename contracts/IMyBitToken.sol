pragma solidity ^0.4.2;
contract IMyBitToken {

	/* Send coins */
	function transfer(address _to, uint256 _value);
	function mintToken(address target, uint256 mintedAmount);
	/* Allow another contract to spend some tokens in your behalf */
	function approve(address _spender, uint256 _value) returns (bool success);
	/* Approve and then comunicate the approved contract in a single tx */
	function approveAndCall(address _spender, uint256 _value, bytes _extraData)
	returns (bool success);
	/* A contract attempts to get the coins */
	function transferFrom(address _from, address _to, uint256 _value) returns (bool success);
	/* This unnamed function is called whenever someone tries to send ether to it */

}
