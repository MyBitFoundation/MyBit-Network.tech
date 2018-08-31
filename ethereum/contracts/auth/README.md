# Auth
Authorization is where owner privileges and user access levels contracts are stored. Add these to your Dapp to restrict access based on roles. Users can choose to have multi-sig permissions for particular functions or contracts.

## Contract Categories

### AccessHierarchy.sol
Contract to allow the contract owner to manually adjust the access levels of users on the platform.

### Expirable.sol
Extends UserAccess.sol by letting user's access to the system expire after certain number of blocks. The number of blocks until expiration can be passed in the contstructor.

### KYC.sol
Contract to approve or revoke KYC approval for a user on the platform.

### Manufacturers.sol
