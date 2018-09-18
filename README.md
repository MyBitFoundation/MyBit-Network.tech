<p align="center">
  <a href="https://mybit.io/">
    <img alt="MyBit Logo" src="https://files.mybit.io/mybit-icon-28x28.png" width="70">
  </a>
</p>



# MyBit-Network: Contract SDK
[![CircleCI](https://circleci.com/gh/MyBitFoundation/MyBit-Network.tech.svg?style=shield)](https://circleci.com/gh/MyBitFoundation/MyBit-Network.tech) [![Coverage Status](https://coveralls.io/repos/github/MyBitFoundation/MyBit-Network.tech/badge.svg)](https://coveralls.io/github/MyBitFoundation/MyBit-Network.tech)

A software development kit for the automated machine economy.

The SDK's contain a local blockchain and smart-contracts for developers to run and deploy dapps that allow for the funding and distribution of virtual assets represented by ERC tokens on the Ethereum blockchain. The contracts can be combined in different ways to customize the crowdfunding and re-distribution details, or plug into a local MyBitChain to test already operating assets. 

## Getting Started

## Roles 
The tokenized asset management structure is made up of different actors who have specific incentives to participate in the creation and management of tokenized assets within the ecosystem. The assets are managed by the broker, who receives a fee for his work and escrows tokens as collateral to investors. The tokens remain in escrow until the asset tokens returns sufficient income. The platform owners can choose how assets are governed, whether by asset token holders or designated ownership roles.  

#### Platform Owner(s)
The owners of the platform are in charge of deciding high level upgrades and authorization changes made in the platform. Ownership can be decided by one owner, a multi-sig, or token holders themselves. 

#### Investor 
The investor is any user that holds asset tokens through participating in an asset crowdsale or by means of purchasing them on an exchange.

#### Broker 
The Broker is a user that initiates a crowdfunding period for an asset. After the funding period, the Broker is in charge of handling real world operations between the asset operator and the investors. The role of the Broker varies depending on the type of asset, but they are responsible for the asset operating properly if the conditions allow it. The Broker can put down tokens in escrow, which is at stake to get burned if the owners of the asset find negligence. 

#### Operator
The operator is the producer of the asset, physical or digital. They are in charge of receiving the crowdfunding funds and producing, delivering and installing the asset. Brokers will deal with Operators to ensure continued functioning of the asset. 

#### StakeHolders 
The Stakeholders have the opportunity to purchase a portion of the Brokers earnings in exchange for depositing escrow in the place of the Broker. The Stakeholders will agree on a contract address for Broker fees to get sent and split according to the arrangement between Brokers and Stakeholders. 

✏️ All contracts are written in [Solidity](https://solidity.readthedocs.io/en/v0.4.24/) version 0.4.24.


## Setup

Install dependencies.

`yarn`

## Testing

Bootstrap [Ganache](https://truffleframework.com/ganache)

`yarn blockchain`

Run tests

`yarn test`

✏️ All contracts are written in [Solidity](https://solidity.readthedocs.io/en/v0.4.24/) version 0.4.24.

## Compiling

`yarn compile`

## Code Coverage

Download solidity-coverage locally

`npm install --save-dev solidity-coverage`

Run solidity-coverage

`./node_modules/.bin/solidity-coverage`

Coverage reports can be accessed at 'coverage/index.html'

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
* [TokenFaucet](https://ropsten.etherscan.io/address/0x8742272c58f6fe0c2943eba9399c04cbd5342ab2#writeContract)

### ⚠️ Warning
This application is unstable and has not undergone any rigorous security audits. Use at your own risk.


<p align="center">
MyBit Platform™ CHE-177.186.963<br/>
</p>
