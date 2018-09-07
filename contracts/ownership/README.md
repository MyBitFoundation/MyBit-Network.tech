
# Ownership
Contracts that control the ownership of all the contracts on the platform. This restricts access to the upgrading of contracts and which contracts have access to the database.

## Contract Categories

### MultiOwned.sol
A multi-sig contract that gives access to core functions with a majority approval of owners.

### Owned.sol
Contract the gets the current owner from the database.

### Pausible.sol
Lets the owner pause any contract in the ecosystem.

### SinglOwned.sol
Lets the owner transfer ownership to another address.

### SingleOwnedClaimable.sol
Allows the owner to transfer ownership to another address, and lets that address claim ownership.
