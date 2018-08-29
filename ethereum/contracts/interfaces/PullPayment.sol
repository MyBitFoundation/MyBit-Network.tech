pragma solidity ^0.4.24;

// @notice allows contract to call a basic withdraw() function taking no parameters on another contract
interface PullPayment { 
 

	function withdraw()	external returns (bool);

}
