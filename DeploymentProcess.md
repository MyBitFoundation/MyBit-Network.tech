#The process for deploying contracts to Ethereum networks (mainnet, ropsten, etc...)

## 1) Migration scripts

In the migration folder are scripts for deploying contracts to a network. The first script, 1_initial_migration.js, is reserved for deploying the Migrations.sol contract. This is a contract the keeps track of all migrations that have occured. As new contracts are created or updated, a script can be added to the 'migration' folder to deploy just those contracts. The Migrations.sol contract will keep track of what migration scripts have been called and only run the new scripts.

To migrate the contracts to the default network (in our case 'development'), you must run the following command:

```bash
truffle migrate
```

However, to deploy to another network you must add the '--network' option:

```bash
truffle migrate --network ropsten
```

If you wish to reset the Migrations contract and run all migration scripts starting fresh, add the '--reset' option along with any other options:

```bash
truffle migrate --reset --network ropsten
```

## 2) Understanding 2_deploy_protocol.js

In the migrations folder is the script '2_deploy_protocol.js' which is out main deployment script. It deploys all the core contracts for the MyBit Go platform. Additionally, on non-mainnet networks it deploys an ERC-20 token to represent MyBit tokens, and distributes them to all user accounts stored in the wallet used to deploy the contracts. The deployment script has the following basic structure:

- Deploy SafeMath and link all contracts that use SafeMath to the deployed contract.
- Deploy a MyBit token.
- Deploy Database.sol, Events.sol, and ContractManager.sol (these contracts are used by most other contracts)
- Deploy all other contracts, passing database.address and events.address, as needed. Each contract that interacts with the database must be added to ContractManager via its addContract() function.
- Add the platform wallet and platform token (MyB token) to the PlatformFunds contract.
- Give burning approval from all accounts in the wallet.
- Set the burn fees for all functions that requiring burning of MyB tokens to operate.
- Save json files listing the addresses for all contracts deployed and accounts in the wallets.
- Save json files for the ABIs of each deployed contract.

## 3) Understanding contract upgrades

An example of a contract upgrade script can be found in the root directory labelled '3_custom_upgrade.js'. The idea is that we deploy a new contract but also update the records of currently deployed contracts to integrate the new contract into the platform. The upgrade script has the following structure:

- Link the new contract to the SafeMath library (if its needed).
- Instantiate the ContractManager contract from the address listed in the json file created in '2_deploy_protocol.js'.
- Deploy the new contract (passing the database and events addresses from the json file, as needed).
- Upgrade the listing in ContractManager using the updateContract() function.
- Update the json file with the new contract address.
- Replace the ABI json file for that contract.

Since Migrations.sol keeps track of changes, you can simply add new upgrade scripts each time a new contract needs to be deployed and truffle migrate will only run those scripts which have not been run before.

## 4) Automatic deployment in Travis CI

Currently, all network contracts are deployed automatically to the ropsten network by Travis CI when we do a pull request to the 'deploy-ropsten' git repo. This deployment is handled by the .travis.yml script. It first tests the contract, then deploys the contracts using truffle migrate, then copies the contracts.json file to the MyBit-Network.contracts repository. The API key for Infura, API key for GitHub, and the mnemonic that generates our wallet, are stored as environment variables in Travis CI.
