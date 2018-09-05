
# Distribution
This is where asset tokens can be traded and distributed. New assets not requiring a crowdsale can be created using these contracts.

## Contract Categories

### EqualDistribution.sol
This contract allows one to distribute funds evenly to multiple addresses. It's built to interact with the withdraw() and withdrawManagerIncome() functions of other contracts. ERC-20 compatibility has not been implemented yet.

### Escrow.sol
Escrow allows two accounts to engage in a transaction in a trustless way. Funds are sent from the buyer's account to escrow. Once the seller sees that the funds are locked in escrow, they can safely provide their goods or services knowing they will be paid. Upon receipt of goods or services, the buyer releases the funds to the seller.
