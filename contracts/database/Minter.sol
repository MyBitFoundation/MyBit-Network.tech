pragma solidity ^0.4.24;

interface MintInterface{
  function mint(address _to, uint256 _amount) external returns (bool);
  function finishMinting() external returns (bool);
}

interface Minter_Database{
  function addressStorage(bytes32 _key) external view returns (address);
}

contract Minter {
  Minter_Database private database;

  constructor(address _database) public {
    database = Minter_Database(_database);
  }

  function mintAssetTokens(address _assetAddress, address _receiver, uint256 _amount) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleERC20"))) ||
            msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleETH"))) );
    require(MintInterface(_assetAddress).mint(_receiver, _amount));
    return true;
  }

  function stopMint(address _assetAddress) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleERC20"))) ||
            msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleETH"))) );
    require(MintInterface(_assetAddress).finishMinting());
    return true;
  }
}
