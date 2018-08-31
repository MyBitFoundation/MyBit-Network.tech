
# Distribution
This is where asset tokens can be traded and distributed. New assets not requiring a crowdsale can be created using these contracts.

## Contract Categories

### AssetExchange.sol
Core contract for MyDAX. Enables the trading of asset tokens on the MyBit platform.

### DividendToken.sol
Contract for tokens that represent ownership in an asset. Ether (and ERC-20 tokens?) sent to token address is distributed as dividends to all token holders.

### EqualDistribution.sol
This contract allows one to distribute funds evenly to multiple addresses. It's built to interact with the withdraw() and withdrawManagerIncome() functions of other contracts. ERC-20 compatibility has not been implemented yet.
