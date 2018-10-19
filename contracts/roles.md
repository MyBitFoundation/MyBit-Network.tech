# Roles

## Contracts

### AssetManagerFunds

THe AssetManagerFunds are where the dividends belonging to the AssetManager are held. The AssetManager is restricted from transferring his fee, which is represented as a dividend token.

### AssetManagerEscrow

The AssetManagerEscrow contract accepts MYB tokens to be held in escrow in order to align the assetManager's incentives with investors. If an asset is not distributing returns, investors can vote to burn the assetManager's MYB placed in escrow. If the asset does give ROI, the assetManager's escrow funds are returned relative to the ROI earned. If the asset is governed, the owners of the asset-tokens can vote to change the AssetManager here.

### Operators
This contract is used the platform owner to onboard new operators. An operator ID is needed for any new asset crowdsales to be created. Operators can choose if they wish to receive Ether and/or ERC20 tokens of their choosing.


## General roles

#### Platform Owner(s)
The owners of the platform are in charge of deciding high level upgrades and authorization changes made in the platform. Ownership can be decided by one owner, a multi-sig, or token holders themselves.

#### Investor
The investor is any user that holds asset tokens through participating in an asset crowdsale or by means of purchasing them on an exchange.

#### AssetManager
The AssetManager is a user that initiates a crowdfunding period for an asset. After the funding period, the AssetManager is in charge of handling real world operations between the asset operator and the investors. The role of the AssetManager varies depending on the type of asset, but they are responsible for the asset operating properly if the conditions allow it. The AssetManager can put down tokens in escrow, which is at stake to get burned if the owners of the asset find negligence.

#### Operator
The operator is the producer of the asset, physical or digital. They are in charge of receiving the crowdfunding funds and producing, delivering and installing the asset. AssetManagers will deal with Operators to ensure continued functioning of the asset.
