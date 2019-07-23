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

## Deploying the MyBit Platform
### Setup Web3 in Truffle
Our truffle.js file is setup to provide web3 via HDWalletProvider. We have a mnemonic in a json file labelled `mnemonic.json`. It has the following format:
```json
{
  "mnemonic": "your mnemonic here",
  "infura": "your infura key here"
}
```

However, if you prefer not to rely on a mnemonic you will have to setup a custom truffle.js file to handle your web3 provider.

### Set Owners
In the `migrations` folder, go to (2_deploy_databases.js)[migrations/2_deploy_databases.js] and find the line that sets `let OWNERS`. You'll want to change that value for the network you will be deploying on. The `OWNERS` value is an array of all the Ethereum addresses that have the right to add, remove, or update contracts on the platform and call special functions that set values to the database. For the deployment, you'll want one of the addresses to be the account you are deploying from (i.e. `accounts[0]`). You can remove that account after deployment is complete.

### Set Platform Values
Also in `migrations` is a file called (6_deploy_platform.js)[migrations/6_deploy_platform.js]. There are several variables you will need to set to deploy a platform that fits your needs.

- **FUNDS_WALLET** The wallet where platform fees paid by investors will go.
- **ASSETS_WALLET** The wallet where a percentage of asset tokens for the platform will go. This can be the same wallet as FUNDS_WALLET.
- **PLATFORM_FEE** The percentage of an investors payment that goes to the platform.
- **PLATFORM_PERCENTAGE** The percentage of an asset that goes to the platform.
- **PLATFORM_TOKEN** The token that is used to hold an asset manager's collateral. This token should be burnable and available on Kyber to make use of all our contracts. Some functions will fail if it is not.
- **BASE_COLLATERAL** The base percentage that all asset managers must put up as collateral regardless of the number of successful crowdsales they've completed.
- **LOW_COLLATERAL** Extra collateral for asset managers that have completed 0-4 crowdsales
- **MID_COLLATERAL** Extra collateral for asset managers that have completed 5-9 crowdsales
- **HIGH_COLLATERAL** Extra collateral for asset managers that have completed 10-24 crowdsales

For collateral, generally you'd want the collateral percentage to reduce as the asset managers manage more assets.

### Deploy Platform
Once these values are set, you simply call `truffle migrate` for the particular network you'd like to deploy on. e.g.:
```bash
truffle migrate --network ropsten
```

## Deployed Contracts
### [Mainnet](networks/mainnet/contracts.json)

### [Ropsten](networks/ropsten/contracts.json)
**MyBitToken** 0xC68D7C356e1b725F75cBaf1306A2603abd7157CA

**Database** 0xf63348C132aE8e0bD14b67308f8Ba0E5B4d2fD5d

**Events** 0x2f8bc59171837704147035EC5AceDF8B09E63A45

**ContractManager** 0x44ec50e1E2Bc1C9A991C9C6e247432cbB04989c6

**API** 0x1D8c4f0eE9199F62da8e77997EC1062Bd5323bB7

**MultiOwned** 0x3e97C2AfB575e312dE4F94D14ad02e9847c73CD4

**Pausible** 0x65C7CBE92227022D54cC605247DEf02BaeF2fDE3

**Platform** 0xCdfa75ce049E566074F9a064Cb2f4048ed8B3544

**Operators** 0x44719aEF63DA0E46bA95035787107de2409839D3

**AssetManagerEscrow** 0x0e1ddcf74242be4ba79ce27681aa8f7eef215cda

**AssetManagerFunds** 0xFcd8aF0dE75008340E644097b6fb6a6A4b2EfaAD

**AssetGenerator** 0x41705a8B43B15D37577ea858bfe8616b11a3aFb3

**CrowdsaleETH** 0xc470f70ae526171b56d08873417d619cd89b5001

**CrowdsaleGeneratorETH** 0x46fa9f2417f923b5b44290717b4b62acacb1c096

**CrowdsaleERC20** 0x6c9aeaa2d1edc1b203c36dfe086c77afb9d99c9e

**CrowdsaleGeneratorERC20** 0x4bf115a3966e72e24d20b1c25aef77075a61b11c

**CrowdsaleReserve** 0xF78Fbb1aa0c76C98CE0a9011186c108a468E724D

**EscrowReserve** 0xc0CB9A08636287Fb38D283c34e9f45a79438C87a

**Minter** 0x7e3D6F98F68357e2EdE07c624b3f7Ff1e5056915

**MiniMeTokenFactory** 0xa465498E89ddb202F303e30538b68A10574BD202

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

The Database stores any data type under a bytes32 key:
```javascript
mapping(bytes32 => uint) public uintStorage;
mapping(bytes32 => string) public stringStorage;
mapping(bytes32 => address) public addressStorage;
mapping(bytes32 => bytes) public bytesStorage;
mapping(bytes32 => bytes32) public bytes32Storage;
mapping(bytes32 => bool) public boolStorage;
mapping(bytes32 => int) public intStorage;
```


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

### [Events](contracts/database/Events.sol)
The events contract is used as a central store of all events that happen on the platform.

A contract may emit an event by calling a function in the events contract:
```javascript
  events.asset('Asset funding started', _assetURI, assetAddress, msg.sender);
```

There are several event functions that emit different data types depending on their use case. One can filter using the event's `messageID` and `origin` which are indexed values that are shared by all event functions.

Events can be queried in javascript like so:
```javascript
  await eventsContract.getPastEvents('LogAsset', {
                        filter: {
                          messageID: web3.utils.sha3('Asset funding started'),
                          origin: '0x00000000...' },
                        fromBlock: 0,
                        toBlock: 'latest'});
```

### [API](contracts/database/API.sol)
The API contract can be used to easily fetch variables from the database
```javascript
  function getCrowdsaleDeadline(address _assetAddress)
  public
  view
  returns(uint) {
    return database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress)));
  }
```

### [ContractManagement](contracts/database/ContractManager.sol)

The Database restricts write access to only contract that are on the platform
```javascript
// Caller must be registered as a contract through ContractManager.sol
modifier onlyApprovedContract() {
    require(boolStorage[keccak256(abi.encodePacked("contract", msg.sender))]);
    _;
}
```

To give a contract write access to the database, you must call `addContract(contractName, contractAddress)` from a platform owner account:
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

Functions which directly effect the user in case of contract upgrades will use the `acceptedState()` modifier to prevent users from accidentally interacting with contracts that they haven't agreed to interact with.
```javascript
modifier acceptedState(address _investor) {
  bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));
  require(database.boolStorage(keccak256(abi.encodePacked(currentState, _investor))) || database.boolStorage(keccak256(abi.encodePacked("ignoreStateChanges", _investor))));
  _;
}
```

### [CrowdsaleReserve](contracts/database/CrowdsaleReserve.sol)
To accomodate upgrading the crowdsale contract, all funds for ongoing crowdsales are stored inside the crowdsale reserve contract. Only the current crowdsale contracts have permission to use these functions.

To transfer funds from an investor to the reserve, the crowdsale contract calls this function (this will fail if the investor has not approved the reserve contract to transfer funds):
```javascript
  function requestERC20(address _payer, uint256 _amount, address _tokenAddress) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleERC20"))), 'Contract not authorized');
    require(ERC20(_tokenAddress).transferFrom(_payer, address(this), _amount), 'Transfer failed');
    events.transaction("ERC20 received by crowdsale reserve", _payer, address(this), _amount, _tokenAddress);
  }
```

And to send funds the crowdsale contract must call this function:
```javascript
  function issueERC20(address _receiver, uint256 _amount, address _tokenAddress) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleERC20"))), 'Contract not authorized');
    ERC20 erc20 = ERC20(_tokenAddress);
    require(erc20.balanceOf(this) >= _amount, 'Not enough funds');
    require(erc20.transfer(_receiver, _amount), 'Transfer failed');
    events.transaction("ERC20 withdrawn from crowdsale reserve", address(this), _receiver, _amount, _tokenAddress);
    return true;
  }
```

### [EscrowReserve](contracts/database/EscrowReserve.sol)
Much like the crowdsale reserve, the escrow reserve is used to store funds that are used as collateral by asset managers. Only `AssetManagerEscrow`, `CrowdsaleGeneratorETH`, and `CrowdsaleGeneratorERC20` contracts are able to interact with this contract.

To transfer funds from an asset mangaer to the reserve, the crowdsale generator contract calls this function:
```javascript
  function requestERC20(address _payer, uint256 _amount, address _tokenAddress) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "AssetManagerEscrow"))) ||
            msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleGeneratorETH"))) ||
            msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleGeneratorERC20"))));
    require(BurnableERC20(_tokenAddress).transferFrom(_payer, address(this), _amount));
    events.transaction("ERC20 received by escrow reserve", _payer, address(this), _amount, _tokenAddress);
  }
```

To return funds, the `AssetManagerEscrow` contract can call:
```javascript
  function issueERC20(address _receiver, uint256 _amount, address _tokenAddress) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "AssetManagerEscrow"))));
    BurnableERC20 erc20 = BurnableERC20(_tokenAddress);
    require(erc20.balanceOf(this) >= _amount);
    require(erc20.transfer(_receiver, _amount));
    events.transaction("ERC20 withdrawn from escrow reserve", address(this), _receiver, _amount, _tokenAddress);
    return true;
  }
```

### [Minter](contracts/database/Minter.sol)
This contract controls the creation and minting of the asset tokens (which handle the distribution of income from assets).

The crowdsale generator contracts may create new tokens upon the creation of a new crowdsale:
```javascript
  function cloneToken(string _uri, address _erc20Address) external returns (address asset) {
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleGeneratorERC20"))) ||
            msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleGeneratorETH"))) ||
            msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "AssetGenerator"))) );
    Minter_MiniMeTokenFactory factory = Minter_MiniMeTokenFactory(database.addressStorage(keccak256(abi.encodePacked("platform.tokenFactory"))));
    asset = factory.createCloneToken(address(0), 0, _uri, uint8(18), _uri, true, _erc20Address);
    return asset;
  }
```

New tokens are minted by the crowdsale contracts:
```javascript
  function mintAssetTokens(address _assetAddress, address _receiver, uint256 _amount) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleERC20"))) ||
            msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleETH"))) ||
            msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "AssetGenerator"))) );
    require(Minter_MiniMeToken(_assetAddress).generateTokens(_receiver, _amount));
    return true;
  }
```

Control of the token can be passed to a DAO by the DAO deployer contract (which will allow the DAO to mint more tokens):
```javascript
  function changeTokenController(address _assetAddress, address _newController) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "DAODeployer"))));
    Minter_MiniMeToken(_assetAddress).changeController(_newController);
  }
```

However, depending on an investor vote, `AssetManagerEscrow` can also burn the asset manager's collateral:
```javascript
  function burnERC20(uint256 _amount, address _tokenAddress) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "AssetManagerEscrow"))));
    require(BurnableERC20(_tokenAddress).burn(_amount));
    events.transaction("ERC20 burnt by escrow reserve", address(this), address(0), _amount, _tokenAddress);
    return true;
  }
```


### [Platform-Variables](contracts/ecosystem/Platform.sol)
Before assets can be funded the platform owners must set the `platform token`, `platform funds wallet`, `platform assets wallet`, `platform fee`, `platform percentage`, `token factory`, and `collateral levels` by using:

```javascript
  // @notice The token that the platform uses for holding collateral
  function setPlatformToken(address _tokenAddress)
  external
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("platformToken")), _tokenAddress);
    emit LogPlatformToken(_tokenAddress);
  }
```
AND

```javascript
  // @notice The wallet to receive payments here before initiating crowdsale
  function setPlatformFundsWallet(address _walletAddress)
  external
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("platform.wallet.funds")), _walletAddress);
    //emit LogPlatformWallet(_walletAddress);
    events.registration('Platform funds wallet', _walletAddress);
  }
```
AND

```javascript
  // @notice The wallet to receive asset tokens here before initiating crowdsale
  function setPlatformAssetsWallet(address _walletAddress)
  external
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("platform.wallet.assets")), _walletAddress);
    events.registration('Platform assets wallet', _walletAddress);
  }  
```
AND

```javascript
  // @notice The percentage of the payment that the platform receives when investors contribute
  function setPlatformFee(uint _percent)
  external
  onlyOwner {
    database.setUint(keccak256(abi.encodePacked("platform.fee")), _percent);
  }
```
AND

```javascript
  // @notice The percentage of the asset tokens the platform receives from the crowdsale
  function setPlatformPercentage(uint _percent)
  external
  onlyOwner {
    database.setUint(keccak256(abi.encodePacked("platform.percentage")), _percent);
  }
```
AND

```javascript
  // @notice Set the address of the token factory that clones the asset tokens
  function setTokenFactory(address _factory)
  external
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("platform.tokenFactory")), _factory);
  }
```
AND

```javascript
  // @notice Set the required collateral based on how many assets are managed by a user
  function setCollateralLevels(uint _base, uint _low, uint _mid, uint _high)
  external
  onlyOwner {
    database.setUint(keccak256(abi.encodePacked("collateral.base")), _base);
    for(uint i=0; i<5; i++){
      database.setUint(keccak256(abi.encodePacked("collateral.level", i)), _low);
    }
    for(i=5; i<10; i++){
      database.setUint(keccak256(abi.encodePacked("collateral.level", i)), _mid);
    }
    for(i=10; i<25; i++){
      database.setUint(keccak256(abi.encodePacked("collateral.level", i)), _high);
    }
  }
```


### [Onboarding Operators](contracts/roles/Operator.sol)
The Operator must be registered, they must set what assets they operate, what currencies the assets take to purchase, and what currency they payout with. To set the operators you can call:


```javascript
  function registerOperator(address _operatorAddress, string _operatorURI, string _ipfs, address _referrerAddress)
  external
  onlyOwner {
    require(_operatorAddress != address(0));
    bytes32 operatorID = keccak256(abi.encodePacked("operator.uri", _operatorURI));
    require(database.addressStorage(keccak256(abi.encodePacked("operator", operatorID))) == address(0));
    database.setBytes32(keccak256(abi.encodePacked("operator", _operatorAddress)), operatorID);
    database.setAddress(keccak256(abi.encodePacked("operator", operatorID)), _operatorAddress);
    database.setString(keccak256(abi.encodePacked("operator.ipfs", operatorID)), _ipfs);
    if(_referrerAddress == address(0)){
      database.setAddress(keccak256(abi.encodePacked("referrer", operatorID)), database.addressStorage(keccak256(abi.encodePacked("platform.wallet.assets"))));
    } else {
      database.setAddress(keccak256(abi.encodePacked("referrer", operatorID)), _referrerAddress);
    }

    events.operator('Operator registered', operatorID, _operatorURI, _ipfs, _operatorAddress);
  }
```

To add an asset (and set the initial currency):

```javascript
  function addAsset(bytes32 _operatorID, string _name, string _ipfs, bool _acceptCrypto, bool _payoutCrypto, address _token)
  external
  onlyOperator(_operatorID)
  returns (bool) {
    bytes32 modelID = keccak256(abi.encodePacked('model.id', _operatorID, _name));
    require(database.addressStorage(keccak256(abi.encodePacked("model.operator", modelID))) == address(0));
    database.setAddress(keccak256(abi.encodePacked("model.operator", modelID)), msg.sender);
    database.setString(keccak256(abi.encodePacked('model.ipfs', modelID)), _ipfs);
    acceptToken(modelID, _token, _acceptCrypto);
    payoutToken(modelID, _token, _payoutCrypto);
    events.operator('Asset added', modelID, _name, _ipfs, msg.sender);
    return true;
  }
```
AND to set any other currencies:
```javascript
  // @notice operator can choose which ERC20 tokens he's willing to accept as payment
  function acceptToken(bytes32 _modelID, address _tokenAddress, bool _accept)
  public
  onlyOperator(_modelID)
  returns (bool) {
    if(_tokenAddress == address(0)){
      database.setBool(keccak256(abi.encodePacked("model.acceptsEther", _modelID)), _accept);
    }
    database.setBool(keccak256(abi.encodePacked("model.acceptsToken", _modelID, _tokenAddress)), _accept);
    return true;
  }
```
AND/OR
```javascript
// @notice operator can choose which ERC20 tokens it pays out with
  function payoutToken(bytes32 _modelID, address _tokenAddress, bool _payout)
  public
  onlyOperator(_modelID)
  returns (bool) {
    if(_tokenAddress == address(0)){
      database.setBool(keccak256(abi.encodePacked("model.payoutEther", _modelID)), _payout);
    }
    database.setBool(keccak256(abi.encodePacked("model.payoutToken", _modelID, _tokenAddress)), _payout);
    return true;
  }
```

:heavy_exclamation_mark: The Operator can choose to accept Ether and an unlimited number of ERC20 tokens if they want.

## Creating Assets
To create assets you will use [CrowdsaleGeneratorETH](contracts/crowdsale/CrowdsaleGeneratorETH) or [CrowdsaleGeneratorERC20](contracts/crowdsale/CrowdsaleGeneratorERC20)

For ERC-20 based crowdsales you would call `createAssetOrderERC20()` from the AssetManager account, effectively creating a new crowdsale.
```javascript
  function createAssetOrderERC20(string _assetURI, string _ipfs, bytes32 _modelID, uint _fundingLength, uint _amountToRaise, uint _assetManagerPerc, uint _escrow, address _fundingToken, address _paymentToken)
  payable
  external
  {
    if(_paymentToken == address(0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)){
      require(msg.value == _escrow);
    } else {
      require(msg.value == 0);
    }
    require(_amountToRaise >= 100, "Crowdsale goal is too small");
    require((_assetManagerPerc + database.uintStorage(keccak256(abi.encodePacked("platform.percentage")))) < 100, "Manager percent need to be less than 100");
    require(database.addressStorage(keccak256(abi.encodePacked("model.operator", _modelID))) != address(0), "Model not set");
    require(!database.boolStorage(keccak256(abi.encodePacked("asset.uri", _assetURI))), "Asset URI is not unique"); //Check that asset URI is unique
    address assetAddress = minter.cloneToken(_assetURI, _fundingToken);
    require(setCrowdsaleValues(assetAddress, _fundingLength, _amountToRaise));
    require(setAssetValues(assetAddress, _assetURI, _ipfs, _modelID, msg.sender, _assetManagerPerc, _amountToRaise, _fundingToken));
    uint minEscrow = calculateEscrowERC20(_amountToRaise, msg.sender, _modelID, _fundingToken);
    require(lockEscrowERC20(msg.sender, assetAddress, _paymentToken, _fundingToken, _escrow, minEscrow));
    events.asset('Asset funding started', _assetURI, assetAddress, msg.sender);
    events.asset('New asset ipfs', _ipfs, assetAddress, msg.sender);
  }
```

## Funding Assets
To fund an asset you can use either [CrowdsaleETH](contracts/crowdsale/crowdsaleETH) or [CrowdsaleERC20](contracts/crowdsale/CrowdsaleERC20)

For ERC-20 based crowdsales you would call `buyAssetOrderERC20()` from the investor account:
```javascript
  function buyAssetOrderERC20(address _assetAddress, uint _amount, address _paymentToken)
  external
  payable
  returns (bool) {
    require(database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress))) != address(0), "Invalid asset");
    require(now <= database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress))), "Past deadline");
    require(!database.boolStorage(keccak256(abi.encodePacked("crowdsale.finalized", _assetAddress))), "Crowdsale finalized");

    if(_paymentToken == address(0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)){
      require(msg.value == _amount, 'Msg.value does not match amount');
    } else {
      require(msg.value == 0, 'Msg.value should equal zero');
    }
    ERC20 fundingToken = ERC20(DividendInterface(_assetAddress).getERC20());
    uint fundingRemaining = database.uintStorage(keccak256(abi.encodePacked("crowdsale.remaining", _assetAddress)));
    uint collected; //This will be the value received by the contract after any conversions
    uint amount; //The number of tokens that will be minted
    //Check if the payment token is the same as the funding token. If not, convert, else just collect the funds
    if(_paymentToken == address(fundingToken)){
      collected = collectPayment(msg.sender, _amount, fundingRemaining, fundingToken);
    } else {
      collected = convertTokens(msg.sender, _amount, fundingToken, ERC20(_paymentToken), fundingRemaining);
    }
    require(collected > 0);
    if(collected < fundingRemaining){
      amount = collected.mul(100).div(uint(100).add(database.uintStorage(keccak256(abi.encodePacked("platform.fee")))));
      database.setUint(keccak256(abi.encodePacked("crowdsale.remaining", _assetAddress)), fundingRemaining.sub(collected));
      require(minter.mintAssetTokens(_assetAddress, msg.sender, amount), "Investor minting failed");
      require(fundingToken.transfer(address(reserve), collected));
    } else {
      amount = fundingRemaining.mul(100).div(uint(100).add(database.uintStorage(keccak256(abi.encodePacked("platform.fee")))));
      database.setBool(keccak256(abi.encodePacked("crowdsale.finalized", _assetAddress)), true);
      database.deleteUint(keccak256(abi.encodePacked("crowdsale.remaining", _assetAddress)));
      require(minter.mintAssetTokens(_assetAddress, msg.sender, amount), "Investor minting failed");   // Send remaining asset tokens to investor
      require(fundingToken.transfer(address(reserve), fundingRemaining));
      if(collected > fundingRemaining){
        require(fundingToken.transfer(msg.sender, collected.sub(fundingRemaining)));    // return extra funds
      }
    }
    events.transaction('Asset purchased', address(this), msg.sender, amount, _assetAddress);
    return true;
  }
```

After a crowdsale is funded, anyone can initiate payout to the asset manager:
```javascript
  function payoutERC20(address _assetAddress)
  external
  whenNotPaused
  returns (bool) {
    require(database.boolStorage(keccak256(abi.encodePacked("crowdsale.finalized", _assetAddress))), "Crowdsale not finalized");
    require(!database.boolStorage(keccak256(abi.encodePacked("crowdsale.paid", _assetAddress))), "Crowdsale has paid out");
    //Set paid to true
    database.setBool(keccak256(abi.encodePacked("crowdsale.paid", _assetAddress)), true);
    //Setup token
    address fundingToken = DividendInterface(_assetAddress).getERC20();
    //Mint tokens for the asset manager and platform
    address platformAssetsWallet = database.addressStorage(keccak256(abi.encodePacked("platform.wallet.assets")));
    require(platformAssetsWallet != address(0), "Platform assets wallet not set");
    require(minter.mintAssetTokens(_assetAddress, database.addressStorage(keccak256(abi.encodePacked("contract", "AssetManagerFunds"))), database.uintStorage(keccak256(abi.encodePacked("asset.managerTokens", _assetAddress)))), "Manager minting failed");
    require(minter.mintAssetTokens(_assetAddress, platformAssetsWallet, database.uintStorage(keccak256(abi.encodePacked("asset.platformTokens", _assetAddress)))), "Platform minting failed");
    //Get the addresses for the receiver and platform
    address receiver = database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress)));
    address platformFundsWallet = database.addressStorage(keccak256(abi.encodePacked("platform.wallet.funds")));
    require(receiver != address(0) && platformFundsWallet != address(0), "Platform funds walllet or receiver address not set");
    //Calculate amounts for platform and receiver
    uint amount = database.uintStorage(keccak256(abi.encodePacked("crowdsale.goal", _assetAddress)));
    uint platformFee = amount.getFractionalAmount(database.uintStorage(keccak256(abi.encodePacked("platform.fee"))));
    //Transfer funds to receiver and platform
    require(reserve.issueERC20(platformFundsWallet, platformFee, fundingToken), 'Platform funds not paid');
    require(reserve.issueERC20(receiver, amount, fundingToken), 'Receiver funds not paid');
    //Delete crowdsale start time
    database.deleteUint(keccak256(abi.encodePacked("crowdsale.start", _assetAddress)));
    //Increase asset count for manager
    address manager = database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress)));
    database.setUint(keccak256(abi.encodePacked("manager.assets", manager)), database.uintStorage(keccak256(abi.encodePacked("manager.assets", manager))).add(1));
    //Emit event
    events.transaction('Asset payout', _assetAddress, receiver, amount, fundingToken);
    return true;
  }
```

If the funding fails you can call refund, which sends all funds to the asset-token contract to be redistributed to investors.
```javascript
  function refund(address _assetAddress)
  public
  whenNotPaused
  validAsset(_assetAddress)
  afterDeadline(_assetAddress)
  notFinalized(_assetAddress)
  returns (bool) {
    require(database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress))) != 0);
    database.deleteUint(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress)));
    DividendInterface assetToken = DividendInterface(_assetAddress);
    address tokenAddress = assetToken.getERC20();
    uint refundValue = assetToken.totalSupply().mul(uint(100).add(database.uintStorage(keccak256(abi.encodePacked("platform.fee"))))).div(100); //total supply plus platform fees
    reserve.refundERC20Asset(_assetAddress, refundValue, tokenAddress);
    return true;
  }
```

An asset manager may cancel the crowdsale at anytime prior to the crowdsale finshing to initiate a refund.
```javascript
  function cancel(address _assetAddress)
  external
  whenNotPaused
  validAsset(_assetAddress)
  beforeDeadline(_assetAddress)
  notFinalized(_assetAddress)
  returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress))));
    database.setUint(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress)), 1);
    refund(_assetAddress);
  }
```

After a crowdsale refund, investors may retrieve their funds by calling the withdraw function of their asset token contract.

## Distributing Revenue
By default all assets generated on the platform are able to receive payments and distribute revenue according to tokens held by investors. It accomplishes this by keeping track of how much value (WEI/Token) is contained in each asset token. The token contract can receive payment in it's fallback function or by calling `issueDividends()`

Investors can withdraw income by calling `withdraw()` which updates their personal ledger:
```javascript
  function withdraw()
  external
  updateIncomeClaimed(msg.sender)
  returns (bool) {
      uint amount = incomeOwed[msg.sender].div(scalingFactor);
      delete incomeOwed[msg.sender];
      assetIncomeIssued = assetIncomeIssued.add(amount);
      if(address(erc20) == address(0)){
        msg.sender.transfer(amount);
      } else {
        require(erc20.transfer(msg.sender, amount));
      }
      emit LogIncomeCollected(msg.sender, amount);
      return true;
  }
```

## Onboarding Assets
Using the AssetGenerator contract, users are able to create already funded assets and manage them using the SDK's.

To create a funded asset call:
```javascript
  function createAsset(string _tokenURI, address[] _tokenHolders, uint[] _amount)
  external
  returns (bool) {
    require (_tokenHolders.length == _amount.length && _tokenHolders.length <= 100);
    FixedDistribution assetInstance = new FixedDistribution(_tokenURI, _tokenHolders, _amount);
    database.setAddress(keccak256(abi.encodePacked("asset.manager", address(assetInstance))), msg.sender);
    events.asset('Asset created', _tokenURI, address(assetInstance), msg.sender);
    return true;
  }
```

If you want the asset to be tradeable on ERC20 exchanges or capable of being turned into a DAO, just call:
```javascript
  function createTradeableAsset(string _tokenURI, address[] _tokenHolders, uint[] _amount)
  external
  returns (bool) {
    require (_tokenHolders.length == _amount.length && _tokenHolders.length <= uint8(100));
    address assetAddress = minter.cloneToken(_tokenURI, address(0));
    for (uint8 i = 0; i < _tokenHolders.length; i++) {
      minter.mintAssetTokens(assetAddress, _tokenHolders[i], _amount[i]);
    }
    database.setAddress(keccak256(abi.encodePacked("asset.manager", assetAddress)), msg.sender);
    events.asset('Asset created', _tokenURI, assetAddress, msg.sender);
    return true;
  }
```

### Watching for crowdsale events
To watch for crowdsale events you must instantiate the `Events` contract and watch for the `LogAsset` event and `LogTransaction` event. Events related to the creation of an asset will be under the `LogAsset` event and events related to purchasing shares in an asset or when crowdsales payout to the asset manager will be under `LogTransaction`.

Here is how you will watch for asset creation events:
```javascript
  eventsContract.events.LogAsset(
    {
      filter: {
        messageID: web3.utils.sha3('Asset funding started'),
        assetID: web3.utils.sha3('Asset URI'),
        origin: '0x0000...'
      },
      fromBlock: 0
    }, (error, event) => {
      if(error) console.log(error);
      if(event) {
        //Do something...
        console.log(event);
      }
    });
```
All filter values are optional. The message ID is just a bytes32 hash of the event message. The asset ID is a bytes32 hash of the asset name (or a bytes32 hash of an IPFS hash depending on the event). The origin is the address that initiated the transaction.

The event message is used to differentiate different events that are emitted over the same function. There are two relevant events under `LogAsset`. The first is 'Asset funding started' which logs when an asset is created. The second is 'New asset ipfs' which is also emitted on asset creation but also when an asset's IPFS hash is updated.

Watching funding:
```javascript
  eventsContract.events.LogTransaction(
    {
      filter: {
        messageID: web3.utils.sha3('Asset purchased'),
        from: '0x0000...',
        to: '0x0000...'
      },
      fromBlock: 0
    }, (error, event) => {
      if(error) console.log(error);
      if(event) {
        //Do something...
        console.log(event);
      }
    });
```
Just like `LogAsset`, we can filter using the `messageID` parameter. In this case 'Asset purchased' is used to track when an investor has contributed towards a crowdsale. If you'd like to watch for when a crowdsale pays out, you can use the message 'Asset payout'. Additionally, you can filter for who sends the funds by using the `from` parameter. Or who receives the funds using the `to` parameter. In the case of funding the crowdsale, the `to` parameter would be the crowdsale contract. While on asset payout, the `from` parameter would be the contract.

## Governance
Our goal is to enable this platform to be managed completely autonomously via a DAO. We have developed several Aragon apps to achieve this goal.

### MyBit Go: Platform
Any changes to the platform settings can be changed by the MyBit DAO using this app. This includes changing platform wallets, fees, collateral requirements, and updating contracts.

### [MyBit Go: Operators](https://github.com/MyBitFoundation/MyBit-DAO.tech/tree/master/apps/MyBit-Operators)
Potential operators must submit an application to the MyBit DAO. After a successful vote, they will be registered on the platform.

### [MyAsset](https://github.com/MyBitFoundation/MyBit-DAO.tech/tree/master/apps/MyAsset)
After a crowdsale has been funded, anyone can spin up a DAO to manage the asset. This will allow investors to vote to change the asset manager, burn their stake, requests more funding for the asset, and contribute additional funds.


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
