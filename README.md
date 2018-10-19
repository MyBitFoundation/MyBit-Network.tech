<p align="center">
  <a href="https://mybit.io/">
    <img alt="MyBit Logo" src="https://files.mybit.io/favicons/favicon-96x96.png" width="70">
  </a>
</p>



# MyBit-Network: Contract SDK
[![CircleCI](https://circleci.com/gh/MyBitFoundation/MyBit-Network.tech.svg?style=shield)](https://circleci.com/gh/MyBitFoundation/MyBit-Network.tech) [![Coverage Status](https://coveralls.io/repos/github/MyBitFoundation/MyBit-Network.tech/badge.svg)](https://coveralls.io/github/MyBitFoundation/MyBit-Network.tech)

A software development kit for the automated machine economy.

The SDK's contain contracts that can be deployed to create varied decentralized asset management platforms. The contracts enable for the crowdsale of digital assets, which are represented as ERC20 dividend tokens. Crowdsales can receive ETH or ERC20 tokens, depending on the preferences of the operator and asset dividends can be paid in ETH or ERC20 tokens depending on the preferences of the investors.


## Getting Started
First install dependencies using [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable):

```bash
yarn
```

You should see an output similar to below:

```
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 0.66s.
```

Then get a local test blockchain running using [Ganache](https://truffleframework.com/ganache)

```bash
yarn blockchain
````

You should see 20 accounts load up and see the local chain info:

If you see this error:

```
Error: listen EADDRINUSE 127.0.0.1:8545
    at Server.setupListenHandle [as _listen2] (net.js:1360:14)
    at listenInCluster (net.js:1401:12)
    at doListen (net.js:1510:7)
    at _combinedTickCallback (internal/process/next_tick.js:142:11)
    at process._tickCallback (internal/process/next_tick.js:181:9)
    at Function.Module.runMain (module.js:696:11)
    at startup (bootstrap_node.js:204:16)
    at bootstrap_node.js:625:3
error Command failed with exit code 1.
```
You need to first close any other processes that are using this port and start (ie. Geth, Parity, Ganache-cli, TestRPC etc..)


You can now run the tests:
```
yarn tests
```

You can run code-coverage tests:
```
yarn coverage
```

## [Contracts](contracts)
:no_entry_sign: The SDK contracts can be upgradeable and thus before using variables and permissions must be set in the Database, Contract Manager, Platform Funds, Operator and approval for the ERC20Burner before use
Contracts in the SDK abstract storage into a non-upgradeable Database. All users of the platform must agree to the current state, and signal whether they wish to accept future upgrades by default. To run key functionality on the platform users must burn MYB tokens, using the [erc20 burner](contracts/access/ERC20Burner.sol).

### [Database](contracts/database)
Contracts in the SDK store all long-term data in a non-upgradeable database contract. This allows for contracts to be upgraded without losing valuable data. The Database stores all data in a simple key:value manner. The key is always of bytes32 type, as they are the keccak256 hash of the variableName, ID, address etc:

Storing an unsigned integer looks like this:
```javascript
  database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), 20000000);
```

The [Database](contracts/database/Database.sol) then stores this with the function. `key = sha3("fundingDeadline", assetID)`, `value = tokenAddress`
```javascript
function setUint(bytes32 _key, address _value)
onlyApprovedContract
external {
    uintStorage[_key] = _value;
}
```

The [API](contracts/database/API.sol) can be used to easily fetch variables from the database
```javascript
  function getAssetFundingDeadline(bytes32 _assetID)
  public
  view
  returns(uint) {
    uint fundingDeadline = database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
    return fundingDeadline;
  }
```

### [ContractManager](contracts/database/ContractManager.sol)
To give a contract write access to the database, you must call `addContract(contractName, contractAddress)` from a platform owner account
```javascript
  function addContract(string _name, address _contractAddress)
  external
  isTrue(_contractAddress != address(0))
  isTrue(bytes(_name).length != uint(0))
  anyOwner {
    require(!database.boolStorage(keccak256(abi.encodePacked("contract", _contractAddress))));
    require(database.addressStorage(keccak256(abi.encodePacked("contract", _name))) == address(0));
    database.setAddress(keccak256(abi.encodePacked("contract", _name)), _contractAddress);
    database.setBool(keccak256(abi.encodePacked("contract", _contractAddress)), true);
    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));      //Update currentState
    bytes32 newState = keccak256(abi.encodePacked(currentState, _contractAddress));
    database.setBytes32(keccak256(abi.encodePacked("currentState")), newState);
    emit LogContractAdded(_contractAddress, _name, block.number);
  }
```

Everytime a contract is added or updated the contract state will change, requiring approval from users before they interact with the platform. This can be done by calling the following function:

```javascript
  function setContractStatePreferences(bool _acceptCurrentState, bool _ignoreStateChanges)
  external
  returns (bool) {
    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));
    database.setBool(keccak256(abi.encodePacked(currentState, msg.sender)), _acceptCurrentState);
    database.setBool(keccak256(abi.encodePacked("ignoreStateChanges", msg.sender)), _ignoreStateChanges);
    emit LogContractStatePreferenceChanged(msg.sender, _acceptCurrentState, _ignoreStateChanges);
    return true;
  }
```

### [ERC20Burner](contracts/access/ERC20Burner.sol)
To create new asset orders, or purchase existing asset orders, users must provably burn MYB using the burner. To do this each user must approve the burner contract to burn tokens by calling the MYB contract:

```javascript
  function approve(address _spender, uint256 _value) public returns (bool) {
    allowed[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
  }
```

:interrobang: `_spender in this case is the address of the ERC20Burner contract. _value should be placed high enough to avoid needing to approve the burner every use`

### [Platform-Variables](contracts/ecosystem/PlatformFunds.sol)
Before assets can be funded the platform owners must set the `platform token` and the `platform wallet` by using:
```javascript
  function setPlatformWallet(address _walletAddress)
  external
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("platformWallet")), _walletAddress);
    emit LogPlatformWallet(_walletAddress);
  }
```
:heavy_plus_sign:

```javascript
  // @notice
  function setPlatformToken(address _tokenAddress)
  external
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("platformToken")), _tokenAddress);
    emit LogPlatformToken(_tokenAddress);
  }
```
### [Operator](contracts/roles/Operator.sol)
The Operator must be registered and define what currencies they are willing to receive as payment. To set the operators you can call:

```javascript
function registerOperator(address _operatorAddress, string _operatorURI)
external
onlyOwner {
  require(_operatorAddress != address(0));
  bytes32 operatorID = keccak256(abi.encodePacked(_operatorURI));
  require(database.addressStorage(keccak256(abi.encodePacked("operator", operatorID))) == address(0));
  database.setAddress(keccak256(abi.encodePacked("operator", operatorID)), _operatorAddress);
  database.setBytes32(keccak256(abi.encodePacked("operator", _operatorAddress)), operatorID);
  emit LogOperatorRegistered(operatorID, _operatorURI);
}
```

To choose which currencies the operator would like to accept they can call:

```javascript
function acceptERC20Token(bytes32 _operatorID, address _tokenAddress, bool _accept)
external
onlyOperator(_operatorID)
returns (bool) {
  database.setBool(keccak256(abi.encodePacked("acceptsToken", _operatorID, _tokenAddress)), _accept);
  return true;
}
```
OR
```javascript
function acceptEther(bytes32 _operatorID, bool _accept)
external
onlyOperator(_operatorID)
returns (bool) {
  database.setBool(keccak256(abi.encodePacked("acceptsEther", _operatorID)), _accept);
  return true;
}
```

## [Roles](contracts/roles)
The MYB SDK's have 4 fundamental roles:

* Investor `must burn MYB to participate`
* AssetManager  `must burn MYB to participate`
* Operator `must be registered by owners`
* Platform Owner(s)

Investors can contribute ETH or Erc20 tokens to invest in new asset crowdsales. The assets are managed by the AssetManager, who receives a fee for his work and escrows tokens as collateral to investors. The Operator receives funds from the crowdsale and produces and install the asset. Platform owners can choose how assets are governed, and whether or not a contract upgrade should happen. The platform owner can be a single account or a contract governed by many accounts.



✏️ All contracts are written in [Solidity](https://solidity.readthedocs.io/en/v0.4.24/) version 0.4.24.





## Documentation
Documentation is created using Zeppelins [Solidity-Docgen](https://github.com/OpenZeppelin/solidity-docgen)
```
cd docs/website
yarn build
```

To publish to GitHub Pages

```
cd docs/website
GIT_USER=<GIT_USER> \
  USE_SSH=true \
  yarn run publish-gh-pages
```



### ⚠️ Warning
This application is unstable and has not undergone any rigorous security audits. Use at your own risk.


<p align="center">
MyBit Platform™ CHE-177.186.963<br/>
</p>
