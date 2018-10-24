<p align="center">
  <a href="https://mybit.io/">
    <img alt="MyBit Logo" src="https://files.mybit.io/favicons/favicon-96x96.png" width="90">
  </a>
</p>

 [![MyBit Logo](https://files.mybit.io/mybit-icon-28x28.png)](https://mybit.io/) [MyBit Developer Portal](https://developer.mybit.io/portal/) &gt; [Contracts](https://developer.mybit.io/web)

## MyBit Network - Contract SDK

[![CircleCI](https://circleci.com/gh/MyBitFoundation/MyBit-Network.tech.svg?style=shield)](https://circleci.com/gh/MyBitFoundation/MyBit-Network.tech) [![Coverage Status](https://coveralls.io/repos/github/MyBitFoundation/MyBit-Network.tech/badge.svg)](https://coveralls.io/github/MyBitFoundation/MyBit-Network.tech)

A software development kit for the automated machine economy.

The contract SDK is a set of contracts that implement the business logic for the network. The Network SDK is a tool for building Wealth Management Decentralised Applications, without needing in depth blockchain knowledge. For a simple example you can see [Hello-Network](https://github.com/MyBitFoundation/hello-network). To quickly integrate the SDK contracts see [Network.js](https://github.com/MyBitFoundation/network.js).

## Getting Started
First install dependencies using [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable):

```bash
yarn
```

If successful you should see output similar to below:

```
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 5.69s.
```
## Testing
To start local blockchain, [Ganache](https://truffleframework.com/ganache) run:

```bash
yarn blockchain
````

In another terminal window, you can now run the tests:
```
yarn tests
```

To see code-coverage run:
```
yarn coverage
```

## [Roles](contracts/roles)
There are generally 4 different roles on the platform. The `Investor`, the `AssetManager`, the `Operator`, and the `PlatformOwners`. `Investors` can contribute ETH or Erc20 tokens to invest in new asset crowdsales. The continued functioning of the asset is ensured by the `AssetManager`, who receives a fee for his work and escrows tokens as collateral to investors. The `Operator` receives funds from the crowdsale and produces and installs the asset. `PlatformOwners` can choose how assets are governed, and whether or not a contract upgrade should happen. The platform owner can be a single account or a contract governed by many accounts.



## Contract overview
Before creating assets, certain variables and parameters have to be set:
* All contracts must be registered in ContractManager before writing to database
* All users must approve the current contract state, which changes everytime a contract is added/updated in ContractManager
* Users must approve ERC20Burner to burn platform tokens before using key functionality
* Platform wallet and platform token must be set
* Operators must be registered and choose which currencies they wish to accept

Basic functionality for these critical operations are outlined below.

All contracts are found [here](contracts)

### [Database](contracts/database)
Contracts in the SDK store all long-term data in a database contract, which allows for contracts to be upgraded without losing valuable data. The Database stores all data using a bytes32 type, which is often the keccak256 hash of the variableName, ID, address that make up that variable.

Storing an integer looks like this:
```javascript
  database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), 20000000);
```

The [Database](contracts/database/Database.sol) stores this with `key = sha3("fundingDeadline", assetID)` and `value = 20000000`
```javascript
function setUint(bytes32 _key, address _value)
onlyApprovedContract
external {
    uintStorage[_key] = _value;
}
```

### [API](contracts/database/API.sol)
The API contract can be used to easily fetch variables from the database
```javascript
  function getAssetFundingDeadline(bytes32 _assetID)
  public
  view
  returns(uint) {
    uint fundingDeadline = database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
    return fundingDeadline;
  }
```

### [ContractManagement](contracts/database/ContractManager.sol)
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
    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));    
    bytes32 newState = keccak256(abi.encodePacked(currentState, _contractAddress));
    database.setBytes32(keccak256(abi.encodePacked("currentState")), newState);
    emit LogContractAdded(_contractAddress, _name, block.number);
  }
```

Every time a contract is added or updated the contract state will change, requiring approval from users before they interact with the platform. Users can also choose to ignore future state changes. This can be done by calling the following function:

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

### [TokenBurning](contracts/access/ERC20Burner.sol)
To create new asset orders, or purchase existing asset orders, users must provably burn MYB using the [burner](contracts/access/ERC20Burner.sol). To do this each user must approve the burner contract to burn tokens by calling the MYB contract:

```javascript
  function approve(address _spender, uint256 _value) public returns (bool) {
    allowed[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
  }
```

* spender in this case should be the address of the ERC20Burner contract. value should be placed high enough to avoid needing to approve the burner every use

Tokens are burnt before the function runs due to the modifier `burnRequired` which calls `burn()` at the [burner](contracts/access/ERC20Burner.sol) contract:
```javascript
  function burn(address _tokenHolder, uint _amount)
  external
  onlyPlatformContracts(msg.sender)
  acceptedState(_tokenHolder)
  returns (bool) {
    require(token.burnFrom(_tokenHolder, _amount));
    emit LogMYBBurned(_tokenHolder, msg.sender, _amount);
    return true;
  }
```

Functions that require burning:
- `CrowdsaleGeneratorETH.createAssetOrderETH()`
- `CrowdsaleETH.buyAssetOrderETH()`
- `CrowdsaleGeneratorERC20.createAssetOrderERC20()`
- `CrowdsaleERC20.buyAssetOrderERC20()`
- `AssetExchange.buyAsset()`
- `AssetExchange.createBuyOrder()`

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
AND

```javascript
  // @notice
  function setPlatformToken(address _tokenAddress)
  external
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("platformToken")), _tokenAddress);
    emit LogPlatformToken(_tokenAddress);
  }
```
### [Onboarding Operators](contracts/roles/Operator.sol)
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
AND/OR
```javascript
function acceptEther(bytes32 _operatorID, bool _accept)
external
onlyOperator(_operatorID)
returns (bool) {
  database.setBool(keccak256(abi.encodePacked("acceptsEther", _operatorID)), _accept);
  return true;
}
```
:heavy_exclamation_mark: The Operator can choose to accept Ether and an unlimited number of ERC20 tokens if they want.

## Creating Assets
To create assets you will use [CrowdsaleGeneratorETH](contracts/crowdsale/CrowdsaleGeneratorETH) or [CrowdsaleGeneratorERC20](contracts/crowdsale/CrowdsaleGeneratorERC20)

For Ether based crowdsales you would call `createAssetOrderETH()` from the AssetManager account, effectively creating a new crowdsale
```javascript
  function createAssetOrderETH(string _assetURI, bytes32 _operatorID, uint _fundingLength, uint _amountToRaise, uint _assetManagerPerc)
  external
  burnRequired
  returns (bool) {
    require(_amountToRaise > 0);
    require(_assetManagerPerc < 100);
    require(database.boolStorage(keccak256(abi.encodePacked("acceptsEther", _operatorID))));
    require(database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))) != address(0));
    bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _amountToRaise, _operatorID, _assetURI));
    require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", assetID))) == 0);
    address assetAddress = address(new DividendToken(_assetURI, database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleETH")))));   // Gives this contract all new asset tokens
    database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), now.add(_fundingLength));
    uint assetManagerFee = _amountToRaise.mul(uint(100).mul(scalingFactor).div(uint(100).sub(_assetManagerPerc)).sub(scalingFactor)).div(scalingFactor);
    database.setUint(keccak256(abi.encodePacked("assetManagerFee", assetID)), assetManagerFee);
    database.setUint(keccak256(abi.encodePacked("amountToRaise", assetID)), _amountToRaise);
    database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), assetAddress);
    database.setBytes32(keccak256(abi.encodePacked("assetTokenID", assetAddress)), assetID);
    database.setAddress(keccak256(abi.encodePacked("assetManager", assetID)), msg.sender);
    database.setAddress(keccak256(abi.encodePacked("operator", assetID)), database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))));
    emit LogAssetFundingStarted(assetID, msg.sender, _assetURI, address(assetAddress));
    return true;
  }
```

## Funding Assets
To fund an asset you can use either [CrowdsaleETH](contracts/crowdsale/crowdsaleETH) or [CrowdsaleERC20](contracts/crowdsale/CrowdsaleERC20)

For Ether based crowdsales you would call `buyAssetOrderETH()` from the investor account:
```javascript
  function buyAssetOrderETH(bytes32 _assetID)
  external
  payable
  requiresEther
  validAsset(_assetID)
  beforeDeadline(_assetID)
  notFinalized(_assetID)
  burnRequired
  returns (bool) {
    EtherDividendInterface assetToken = EtherDividendInterface(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    uint amountToRaise = database.uintStorage(keccak256(abi.encodePacked("amountToRaise", _assetID)));
    uint tokensRemaining = amountToRaise.sub(assetToken.totalSupply());
    if (msg.value >= tokensRemaining) {
      // Give assetManager his portion of tokens
      require(assetToken.mint(database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID))), database.uintStorage(keccak256(abi.encodePacked("assetManagerFee", _assetID)))));
      require(finalizeCrowdsale(_assetID));    // delete unnecessary variables
      require(assetToken.mint(msg.sender, tokensRemaining));   // Send remaining asset tokens
      require(assetToken.finishMinting());
      require(payoutETH(_assetID, amountToRaise));          // 1 token = 1 wei
      msg.sender.transfer(msg.value.sub(tokensRemaining));     // Return leftover WEI after cost of tokens calculated and subtracted from msg.value
    }
    else {
      require(assetToken.mint(msg.sender, msg.value));
    }
    emit LogAssetPurchased(_assetID, msg.sender, msg.value);
    return true;
}
```

If the funding fails you can call `refund()` , which sends all funds to the asset-token contract to be redistributed to investors

## Distributing Revenue
By default all assets generated on the platform are able to receive payments and distribute revenue according to tokens held by investors. It accomplishes this by keeping track of how much value (WEI/Token) is contained in each asset-token. The token contract can receive payment in it's fallback function or by calling `issueDividends()`

Investors can withdraw income by calling `withdraw()` which updates their personal ledger:
```javascript
  function withdraw()
  public
  updateIncomeClaimed(msg.sender)
  returns (bool) {
      uint amount = incomeOwed[msg.sender].div(scalingFactor);
      delete incomeOwed[msg.sender];
      emit LogIncomeCollected(msg.sender, amount);
      msg.sender.transfer(amount);
      return true;
  }
```

## Onboarding Assets
Using the AssetGenerator contract, users are able to create already funded assets and manage them using the SDK's.

To create a funded asset call:
```javascript
function createAsset(string _tokenURI, address[] _tokenHolders, uint[] _amount)
external
burnRequired
returns (bool) {
  require (_tokenHolders.length == _amount.length && _tokenHolders.length <= 100);
  bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _tokenURI));
  require(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", assetID))) == address(0));
  FixedDistribution assetInstance = new FixedDistribution(_tokenURI, _tokenHolders, _amount);
  database.setAddress(keccak256(abi.encodePacked("assetManager", assetID)), msg.sender);
  database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), address(assetInstance));
  emit LogAssetCreated(assetID, address(assetInstance), msg.sender, _tokenURI);
  return true;
}
```

If you want the asset to be tradeable on ERC20 exchanges call:
```javascript
function createTradeableAsset(string _tokenURI, address[] _tokenHolders, uint[] _amount)
external
burnRequired
returns (bool) {
  require (_tokenHolders.length == _amount.length && _tokenHolders.length <= uint8(100));
  address assetGeneratorAddress = database.addressStorage(keccak256(abi.encodePacked("contract", "AssetGenerator")));
  bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _tokenURI));
  require(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", assetID))) == address(0));
  DividendToken assetInstance = new DividendToken(_tokenURI, assetGeneratorAddress);   // Gives this contract all new asset tokens
  for (uint8 i = 0; i < _tokenHolders.length; i++) {
    assetInstance.mint(_tokenHolders[i], _amount[i]);
  }
  assetInstance.finishMinting();
  database.setAddress(keccak256(abi.encodePacked("assetManager", assetID)), msg.sender);
  database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), address(assetInstance));
  emit LogTradeableAssetCreated(assetID, address(assetInstance), msg.sender, _tokenURI);
  return true;
}
```

## In-Development
:construction: The SDK's are a work in progress and we hope to implement more features such as asset-governance, platform-governance and obfuscated asset authentication.

### [Governance](contracts/ownership)
We are working on giving investors governance tools to vote for new AssetManagers if the need arises. Voting is based on token holdings and can be accomplished by approving a function call at a particular contract:
```javascript
  function voteForExecution(address _executingContract, bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash, uint _amountToLock)
  external
  validAsset(_assetID)
  returns (bool) {
    bytes32 executionID = keccak256(abi.encodePacked(_executingContract, _assetID, _methodID, _parameterHash));
    bytes32 numVotesID = keccak256(abi.encodePacked("voteTotal", executionID));
    bytes32 investorVotesID = keccak256(abi.encodePacked("investorVotes", executionID, msg.sender));
    uint256 numVotes = database.uintStorage(numVotesID);
    uint256 investorVotes = database.uintStorage(investorVotesID);
    require(lockTokens(_assetID, msg.sender, _amountToLock));
    database.setUint(numVotesID, numVotes.add(_amountToLock));
    database.setUint(investorVotesID, investorVotes.add(_amountToLock));
    return true;
  }
```

* executingContract = The address of the contract, where the function is to be called
* assetID = The ID of the asset in question
* methodID = The function signature of the funtion to be called ie. `bytes4(sha3("exampleFunction(address, uint256, bool)"))`
* parameterHash = The sha3 hash of the exact parameters to be called at that function
* amountToLock - The number of asset-tokens this investor wishes to lock towards this function call

✏️ All contracts are written in [Solidity](https://solidity.readthedocs.io/en/v0.4.24/) version 0.4.24.





## Documentation
Documentation is created using [Solidity-Docgen](https://github.com/OpenZeppelin/solidity-docgen)
```
cd docs/website
yarn build
```

To publish to GitHub Pages

```text
cd docs/website
GIT_USER=<GIT_USER> \
  USE_SSH=true \
  yarn run publish-gh-pages
```

⚠️ This application is unstable and has not undergone any rigorous security audits. Use at your own risk.

 MyBit Platform™ CHE-177.186.963  
