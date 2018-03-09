
# Usage 
> Any user must have the appropriate access level for different contracts/functions. 

> First go to the MyBit Faucet and get at least 10,000 MYB tokens

> To interact with the dapp at all you must have an access level greater or equal to 1. To achieve this you must have KYC approved (any owner can authorize this by calling approveUser() in the Owned.sol contract)

> Once approved you can achieve a higher access level you must burn MyBit tokens in TokenBurn.sol. (2 = Creating & FundingAssets, 3 = Ability to stake, 4 = Trade asset shares on marketplace )

> Before burning tokens you must approve TokenBurn.sol to transfer the required amount of tokens from your account (see TokenBurn.sol for rates)

> Once the tokens are burnt you have access to the platform. 

# Deploying 
> Set 3 owners when deploying Database. Any one of these owners will be authorized to deploy the rest of the contracts. All contracts that are deployed must be added to the database through ContractManager.

> Test.sol is used to verify that WEI has been sent to the proper address 

> HashFunctions.sol is used as a helper for hash functions

## Order of deployment:

* MyBitToken(For Testing...if deployed need the address)

* Database: args=(ownerOne.address, ownerTwo.address, ownerThree.address)

* ContractManager: args=(database.address)

* InitialVariables: args=(database.address) 

* Call StartDapp() to initialize crucial variables for later contracts

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






