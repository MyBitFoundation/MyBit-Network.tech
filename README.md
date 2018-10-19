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

```
HD Wallet
==================
Mnemonic:      fetch detect turtle medal cabin desk dish quality swap call shaft curtain
Base HD Path:  m/44'/60'/0'/0/{account_index}

Gas Price
==================
20000000000

Gas Limit
==================
6721975

Listening on 127.0.0.1:8545
```


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
The contracts in the SDK abstract storage into a non-upgradeable Database. All users of the platform must agree to the current state, and signal whether they wish to accept future upgrades by default. To run key functionality on the platform users must burn MYB tokens, using the [erc20 burner](contracts/access/ERC20Burner.sol)

### [Database](contracts/database)
Contracts in the SDK store all long-term data in a non-upgradeable database contract. This allows for contracts to be upgraded without losing valuable data. The Database stores all data in a simple key:value manner. The key is always of bytes32 type, as they are the keccak256 hash of the variableName, ID, address etc:

Storing an unsigned integer looks like this:
```javascript
  database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), 20000000);
```

The database then stores this with the function. `key = sha3("fundingDeadline", assetID)`, `value = tokenAddress`
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

### [Access](contracts/access)


## [Roles](contracts/roles)
The MYB SDK's have 4 fundamental roles:

* Investor
* AssetManager
* Operator
* Platform Owner(s)

Investors can contribute ETH or Erc20 tokens to invest in new asset crowdsales. The assets are managed by the AssetManager, who receives a fee for his work and escrows tokens as collateral to investors. The Operator receives funds from the crowdsale and produces and install the asset. Platform owners can choose how assets are governed, and whether or not a contract upgrade should happen. The platform owner can be a single account or a contract governed by many accounts.



✏️ All contracts are written in [Solidity](https://solidity.readthedocs.io/en/v0.4.24/) version 0.4.24.





## Documentation

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


# Live example test-net contracts
* [InitialVariables](https://ropsten.etherscan.io/address/0x9e6606dedcf9d4960f8652abe2d624a048231841#code)
* [UserAccess](https://ropsten.etherscan.io/address/0xb14c50bb7530c71e14f28498bad1f65d10b5b3a9#code)
* [API](https://ropsten.etherscan.io/address/0x139ebd700b089f51a9dd90c0403e5326b1426f3b#code)
* [AssetCreation](https://ropsten.etherscan.io/address/0x011d426358f1982e327648506d3fdae01d054297#code)
* [FundingHub](https://ropsten.etherscan.io/address/0xb94bd7c5ca000beeff27db7cebb9c03749901f19#code)
* [MyBitToken](https://ropsten.etherscan.io/address/0xbb07c8c6e7cd15e2e6f944a5c2cac056c5476151#code)
* [TokenFaucet](https://ropsten.etherscan.io/address/0x564a7464b6ea98259aae1ad4aa8a11ca9b502cf8#code)

### ⚠️ Warning
This application is unstable and has not undergone any rigorous security audits. Use at your own risk.


<p align="center">
MyBit Platform™ CHE-177.186.963<br/>
</p>
