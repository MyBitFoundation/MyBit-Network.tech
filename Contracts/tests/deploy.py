def deployContracts(chain, accounts):
    ownerOne = accounts[0]
    ownerTwo = accounts[1]
    ownerThree = accounts[2]
    myBitFoundation = accounts[4]

    totalSupply = 281207344012426

    # Deploy Test contract + Hashing helper 
    test, _ = chain.provider.get_or_deploy_contract("Test")
    hashFunctions, _ = chain.provider.get_or_deploy_contract('HashFunctions')   # This is just used as a helper for built in hash functions

    # Deploy Database + test ownership
    database, _ = chain.provider.get_or_deploy_contract('Database', deploy_args=[ownerOne, ownerTwo, ownerThree])
    assert database.call().boolStorage(hashFunctions.call().stringAddress("owner", ownerOne))
    assert database.call().boolStorage(hashFunctions.call().stringAddress("owner", ownerTwo))
    assert database.call().boolStorage(hashFunctions.call().stringAddress("owner", ownerThree))

    # Deploy Oraclize
    # oraclize, _ = chain.provider.get_or_deploy_contract('usingOraclize')

    # Deploy ContractManager & tell database about it 
    contractManager, _ = chain.provider.get_or_deploy_contract('ContractManager', deploy_args=[database.address])
    txHash = database.transact().setContractManager(contractManager.address)
    assert database.call().addressStorage(hashFunctions.call().contractHash("ContractManager")).upper() == contractManager.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", contractManager.address))

    # Deploy InitialVariables 
    initialVariables, _ = chain.provider.get_or_deploy_contract('InitialVariables', deploy_args=[database.address])
    txHash = contractManager.transact().addContract("InitialVariables", initialVariables.address, ownerTwo)
    txHash = initialVariables.transact().startDapp()
    assert database.call().addressStorage(hashFunctions.call().contractHash("InitialVariables")).upper() == initialVariables.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", initialVariables.address))

    # Deploy Owned
    owned, _ = chain.provider.get_or_deploy_contract('Owned', deploy_args=[database.address])
    txHash = contractManager.transact().addContract("Owned", owned.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("Owned")).upper() == owned.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", owned.address))

    # Deploy UserAccess
    userAccess, _ = chain.provider.get_or_deploy_contract('UserAccess', deploy_args=[database.address])
    txHash = contractManager.transact().addContract("UserAccess", userAccess.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("UserAccess")).upper() == userAccess.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", userAccess.address))

    # Set MyBitToken
    myBitToken, _ = chain.provider.get_or_deploy_contract('MyBitToken', deploy_args=[totalSupply, "MyBit Token", 8, "MyB"])
    contractManager.transact().addContract("MyBitToken", myBitToken.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("MyBitToken")).upper() == myBitToken.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", myBitToken.address))

    # Deploy assetCreation 
    assetCreation, _ = chain.provider.get_or_deploy_contract('AssetCreation', deploy_args=[database.address])
    contractManager.transact().addContract("AssetCreation", assetCreation.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("AssetCreation")).upper() == assetCreation.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", assetCreation.address))

    # Deploy FundingHub
    fundingHub, _ = chain.provider.get_or_deploy_contract('FundingHub', deploy_args=[database.address])
    contractManager.transact().addContract("FundingHub", fundingHub.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("FundingHub")).upper() == fundingHub.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", fundingHub.address))

    # Deploy Asset
    asset, _ = chain.provider.get_or_deploy_contract('Asset', deploy_args=[database.address])
    contractManager.transact().addContract("Asset", asset.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("Asset")).upper() == asset.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", asset.address))

    # Deploy StakingBank
    stakingBank, _ = chain.provider.get_or_deploy_contract('StakingBank', deploy_args=[database.address])
    contractManager.transact().addContract("StakingBank", stakingBank.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("StakingBank")).upper() == stakingBank.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", stakingBank.address))

    # Deploy BugBank 
    bugBank, _ = chain.provider.get_or_deploy_contract('BugBank', deploy_args=[database.address])
    contractManager.transact().addContract("BugBank", bugBank.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("BugBank")).upper() == bugBank.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", bugBank.address))

    # Deploy BugBounty 
    bugBounty, _ = chain.provider.get_or_deploy_contract('BugBounty', deploy_args=[database.address])
    contractManager.transact().addContract("BugBounty", bugBounty.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("BugBounty")).upper() == bugBounty.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", bugBounty.address))

    # Deploy TokenStake
    tokenStaking, _ = chain.provider.get_or_deploy_contract('TokenStaking', deploy_args=[database.address, myBitToken.address])
    contractManager.transact().addContract("TokenStaking", tokenStaking.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("TokenStaking")).upper() == tokenStaking.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", tokenStaking.address))

    # Deploy Marketplace
    marketPlace, _ = chain.provider.get_or_deploy_contract('MarketPlace', deploy_args=[database.address])
    contractManager.transact().addContract("MarketPlace", marketPlace.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("MarketPlace")).upper() == marketPlace.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", marketPlace.address))

    # Set AssetEscrow reference
    txHash = contractManager.transact().addContract("AssetEscrow", test.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("AssetEscrow")).upper() == test.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", test.address))

    # Set MyBitFoundation reference 
    txHash = contractManager.transact().addContract("MyBitFoundation", myBitFoundation, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("MyBitFoundation")).upper() == myBitFoundation.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", myBitFoundation))

    # Deploy TokenBurn    
    tokenBurn, _ = chain.provider.get_or_deploy_contract('TokenBurn', deploy_args=[database.address, myBitToken.address])
    contractManager.transact().addContract("TokenBurn", tokenBurn.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("TokenBurn")).upper() == tokenBurn.address.upper()

    # Set deploy finished in contract manager 
    txHash = contractManager.transact().setDeployFinished()
    assert database.call().boolStorage(hashFunctions.call().sha3("deployFinished"))

    return test, hashFunctions, database, contractManager, owned, userAccess, myBitToken, assetCreation, fundingHub, asset, stakingBank, bugBank, bugBounty, tokenStaking, marketPlace, tokenBurn
