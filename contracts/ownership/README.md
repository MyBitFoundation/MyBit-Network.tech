
# Ownership
Contracts that control the ownership of all the contracts on the platform. This restricts access to the upgrading of contracts and which contracts have access to the database.

## Contract Categories

### CollectiveOwned
A multi-sig contract that gives access to core functions with a majority approval of owners.

### Pausible
Lets the owner pause any contract in the ecosystem.

### SinglOwned
Lets the owner transfer ownership to another address.

### TokenOwned
Ownership mediated by a token.

### TripleOwned
Ownership is controlled by 3 addresses, where 2 are needed to call restricted functions.
