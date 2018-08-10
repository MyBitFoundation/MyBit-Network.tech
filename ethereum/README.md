# MyBit-SDK 
The contracts in the MyBit-SDK are built to be used to create and distribution income from virtual assets represented by ERC tokens. Using contract inheritance the contracts can be combined in different ways to modify the crowdfunding and re-distribution details. 

## Contract Categories

### Authorization 
Authorization is where owner privileges and user access levels contracts are stored. Add these to your Dapp to restrict access based on roles. Users can choose to have multi-sig permissions for particular functions or contracts. 

### Crowdsale 
In the crowdsale folder you can find all the contracts involved with funding new assets and generating new ERC tokens to represent shares of the asset resulting from a crowdsale. 

### Distribution 
The distribution folder is where asset tokens can be traded and distributed. New assets not requiring a crowdsale can be created using these contracts. 

### Ecosystem 
Ecosystem contracts involve adding ID's, functions and other standards that help contracts communicate to other contracts in the ecosystem to allow particular functionality or avoid funds from being sent to the wrong addresses. 

### Math 
Math contracts are helper libraries for performing arithmetic without worrying about overflows and underflows. 

### Tokens 
Token contracts are used to represent assets. Tokens representing assets can be burnable, mintable, fixed-supply, and can distribute income to holders. 

### Upgradeable 
Upgradeable contracts allow users to have upgradeable contracts. The owners can decide to update contracts without losing the valuable data storage. 

### Example  
Example contracts put together the above componenets into working contract systems that can create and distribute income from virtual assets. 

