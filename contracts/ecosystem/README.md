#Ecosystem

## Contracts

### AssetExchange
Buy and sell assets that have been funded using the crowdsale contracts.

### BrokerEscrow
The BrokerEscrow contract accepts MyB tokens to be held in escrow in order to align the broker's incentives with investors. If an asset is not distributing returns, investors can vote to burn the broker's MyB placed in escrow. If the asset does give ROI, the broker's escrow funds are returned.

### ERC20Burner
To use certain functions of the platform, one must burn the platform tokens (such as MyB in the case of MyBit Go). The user only needs to approve this contract to burn their tokens. Other contracts can then call this contract if they need to burn tokens to access functionality.

### Operators
This contract is used the platform owner to onboard new operators. An operator ID is needed for any new asset crowdsales to be created.

### PlatformFunds
PlatformFunds lets the platform owners set the platform token and platform wallet where the owner(s) receives their share of the crowdsale income.

### Staking
Staking allows a broker to borrow MyB to be put up as escrow. This functionality hasn't been implemented yet.
