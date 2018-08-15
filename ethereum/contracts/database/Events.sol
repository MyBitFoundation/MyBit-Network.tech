contract Events { 


  // @dev This will emit the event from the Event contract 
  function numberStored(address _sender, uint _number)
  external 
  onlyApprovedContract { 
      emit LogFavoriteNumberAdded(_sender, _number); 
  }

  event LogFavoriteNumberAdded(address indexed _sender, uint _number); 


  // --------------------------------------------------------------------------------------
  // Caller must be registered as a contract through ContractManager.sol
  // --------------------------------------------------------------------------------------
  modifier onlyApprovedContract() {
      require(database.boolStorage(keccak256(abi.encodePacked("contract", msg.sender))));
      _;
  }

}
