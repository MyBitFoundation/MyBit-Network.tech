# README

Contracts involved with funding new assets and generating new ERC tokens to represent shares of the asset resulting from a crowdsale.

## Contracts

### CrowdsaleERC20

This contract allows the funding of an asset using ERC-20 tokens such as MyB or Dai. Funding the asset mints DividendTokens that represent ownership in the asset.

### CrowdsaleETH

This contract allows the funding of an asset using Ether. Funding the asset mints DividendTokens that represent ownership in the asset.

### CrowdsaleGeneratorERC20

Create a new asset and start a crowdsale to fund it using ERC-20 tokens. Generating a new crowdsale also deploys a DividendToken contract to represent the asset.

### CrowdsaleGeneratorETH

Create a new asset and start a crowdsale to fund it using Ether. Generating a new crowdsale also deploys a DividendToken contract to represent the asset.

