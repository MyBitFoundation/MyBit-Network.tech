# Deploying 
> Set 3 owners when deploying Database. Any one of these owners will be authorized to deploy the rest of the contracts. All contracts that are deployed must be added to the database through ContractManager.

> Test.sol is used to verify that WEI has been sent to the proper address 
> HashFunctions.sol is used as a helper for hash functions
## Order of deployment:

* MyBitToken(For Testing...if deployed need the address)

* Database: args=(ownerOne.address, ownerTwo.address, ownerThree.address)

* ContractManager: args=(database.address)

* InitialVariables: args=(database.address)

* Owned: args=(database.address)

* UserAccess: args=(database.address)

* AssetCreation: args=(database.address)

* FundingHub: args=(database.address)

* Asset: args=(database.address)

* StakingBank: args=(database.address)

* BugBank: args=(database.address)

* BugBounty: args=(database.address)

* TokenStaking: args=(MyBitToken.address, database.address)

* MarketPlace: args=(database.address)

* Add AssetEscrow address to ContractManager

* Add MyBitFoundation address to ContractManager 

* TokenBurn: args=(MyBitToken.address, database.address)

* Send sha3("DeployFinished") to ContractManager to secure further contract additions






