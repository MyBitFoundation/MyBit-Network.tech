# Roles

## Contracts

### AssetManagerFunds
THe AssetManagerFunds are where the dividends belonging to the AssetManager are held. The AssetManager is restricted from transferring his fee, which is represented as a dividend token.

### AssetManagerEscrow
The AssetManagerEscrow contract accepts MYB tokens to be held in escrow in order to align the assetManager's incentives with investors. If an asset is not distributing returns, investors can vote to burn the assetManager's MYB placed in escrow. If the asset does give ROI, the assetManager's escrow funds are returned relative to the ROI earned. If the asset is governed, the owners of the asset-tokens can vote to change the AssetManager here.

### Operators
This contract is used the platform owner to onboard new operators. An operator ID is needed for any new asset crowdsales to be created. Operators can choose if they wish to receive Ether and/or ERC20 tokens of their choosing. 
