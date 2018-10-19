# README

Contract related to the storing of data on the blockchain. All essential data for the ecosystem is stored here, thus allowing other contracts to be upgraded without losing data.

## Contracts

### ContractManager.sol

Contract Manager controls which contracts have access to the database. This prevents contracts and users without permission from overwriting or deleting data from the database.

### Database.sol

Contract stores data variables as uniques hashes in 7 mappings for each data type: uint, string, address, bytes, bytes32, bool, and int

### Events.sol

Events in other contracts are passed here and sent out from this contract so the event log for the history of the platform is centralized in one place.

### HashEncode.sol

A helper library that is used to avoid typing keccak256\(abi.encodePacked\(\)\) for all the database entries

