# Access

Authorization is where contracts restricting user access levels are stored. Add these to your Dapp to restrict access based on roles. Users can choose to have multi-sig permissions for particular functions or contracts.

## Contracts

### AccessHierarchy.sol

Contract to allow the contract owner to manually adjust the access levels of users on the platform.

### ERC20Burner

To use certain investment functions of the platform, one must burn the platform tokens \(such as MYB in the case of MYBit Go\). The investor only needs to approve this contract to burn their tokens. Other contracts can then call this contract if they need to burn tokens to access functionality.

### Expirable.sol

Extends AccessHierarchy.sol by letting user's access to the system expire after certain number of blocks. The number of blocks until expiration can be passed in the contstructor.

### KYC.sol

Contract to approve or revoke KYC approval for a user on the platform.

