
# Database
Contract related to the storing of data on the blockchain. All essential data for the ecosystem is stored here, thus allowing other contracts to be upgraded without losing data.

## Contract Categories

### Database.sol
Contract stores data variables as uniques hashes in 7 mappings for each data type: uint, string, address, bytes, bytes32, bool, and int

### Events.sol
Events in other contracts are passed here and sent out from this contract so the event log for the history of the platform is centralized in one place.
