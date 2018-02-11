# import binascii
# from sha3 import keccak_256


# def mine(chain, numBlocks):
#     chain.web3.testing.mine(numBlocks)
#     return

# def getBlockNumber(chain):
#     return chain.web3.eth.blockNumber

# def getBlockAttribute(chain, blockNumber):
#     return chain.web3.eth.getBlock(blockNumber) 
# #     AttributeDict({
# #     'difficulty': 49824742724615,
# #     'extraData': '0xe4b883e5bda9e7a59ee4bb99e9b1bc',
# #     'gasLimit': 4712388,
# #     'gasUsed': 21000,
# #     'hash': '0xc0f4906fea23cf6f3cce98cb44e8e1449e455b28d684dfa9ff65426495584de6',
# #     'logsBloom': '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
# #     'miner': '0x61c808d82a3ac53231750dadc13c777b59310bd9',
# #     'nonce': '0x3b05c6d5524209f1',
# #     'number': 2000000,
# #     'parentHash': '0x57ebf07eb9ed1137d41447020a25e51d30a0c272b5896571499c82c33ecb7288',
# #     'receiptRoot': '0x84aea4a7aad5c5899bd5cfc7f309cc379009d30179316a2a7baa4a2ea4a438ac',
# #     'sha3Uncles': '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
# #     'size': 650,
# #     'stateRoot': '0x96dbad955b166f5119793815c36f11ffa909859bbfeb64b735cca37cbf10bef1',
# #     'timestamp': 1470173578,
# #     'totalDifficulty': 44010101827705409388,
# #     'transactions': ['0xc55e2b90168af6972193c1f86fa4d7d7b31a29c156665d15b9cd48618b5177ef'],
# #     'transactionsRoot': '0xb31f174d27b99cdae8e746bd138a01ce60d8dd7b224f7c60845914def05ecc58',
# #     'uncles': [],
# # })

# def getTimestamp(chain, blockNumber):
#     blockAttribute = getBlockAttribute(chain, blockNumber)
#     return blockAttribute['timestamp']

# def getReceiptMined(chain, txHash):
#     return chain.wait.for_receipt(txHash)

# def isChecksum(chain, addr):
#     return chain.web3.isChecksumAddress(addr)

# def convertEtherToWei(chain, _amountEther):
#     return chain.web3.toWei(_amountEther, 'ether')

# def convertWeiToEther(chain, _amountWei):
#     return chain.web3.fromWei(_amountWei, 'ether')

# def getGasUsed(receipt):
#     return receipt['logs'][0]['cumulativeGasUsed']



# def spreadMyBitTokens(chain, myBitContract, accounts):
#     amountToGive = 100000
#     for i in range(1, len(accounts)):
#         myBitContract.transact().transfer(accounts[i], amountToGive)
#         assert myBitContract.call().balanceOf(accounts[i]) == amountToGive
#     return True


# def burnForAccess(tokenContract, burnContract, thisAddress, accesslevel):
#     accessCost = {}
#     accessCost[2] = 10;
#     accessCost[3] = 100;
#     accessCost[4] = 1000;
#     userBalance = tokenContract.call().balanceOf(thisAddress)
#     assert userBalance > accessCost[accesslevel]
#     tokenContract.transact({"from": thisAddress}).approve(burnContract.address, accessCost[accesslevel])
#     assert tokenContract.call().allowance(thisAddress, burnContract.address) == accessCost[accesslevel]
#     burnContract.transact({"from": thisAddress}).burnTokens(accesslevel)
#     assert burnContract.call().numTokensBurnt() >= accessCost[accesslevel]
#     return tokenContract.call().balanceOf(thisAddress) == (userBalance - accessCost[accesslevel])


# def kycApprove(userAccess, hashFunctions, database, accounts):
#     for i in range(len(accounts)):
#         userAccess.transact().approveUser(accounts[i], 1)
#         assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", accounts[i])) == 1
#     return True

# def getShares(database, hashFunctions, assetID, userAddress):
#   return database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", assetID, userAddress))

# def getAccessLevel(database, hashFunctions, userAddress):
#   return database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", userAddress))

# def getFundingStage(database, hashFunctions, assetID):
#   return database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", assetID))

# def test_successfulFunding(chain):

#     # ------------------------------Deploy All Contracts-------------------------------

#     # Deploy Test contract + Hashing helper 
#     test, _ = chain.provider.get_or_deploy_contract("Test")
#     hashFunctions, _ = chain.provider.get_or_deploy_contract('HashFunctions')   # This is just used as a helper for built in hash functions

#     # Constants 
#     accounts = chain.web3.eth.accounts
#     myBitFoundation = accounts[4]
#     assetEscrow = accounts[5]
#     totalSupply = 281207344012426

#     # Deploy Database + test ownership
#     database, _ = chain.provider.get_or_deploy_contract('Database', deploy_args=[accounts[0], accounts[1], accounts[2]])
#     assert database.call().boolStorage(hashFunctions.call().stringAddress("owner", accounts[0]))
#     assert database.call().boolStorage(hashFunctions.call().stringAddress("owner", accounts[1]))
#     assert database.call().boolStorage(hashFunctions.call().stringAddress("owner", accounts[2]))


#     # Deploy ContractManager & tell database about it 
#     contractManager, _ = chain.provider.get_or_deploy_contract('ContractManager', deploy_args=[database.address])
#     txHash = database.transact().setContractManager(contractManager.address)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("ContractManager")).upper() == contractManager.address.upper()
#     assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", contractManager.address))

#     # Deploy Owned
#     owned, _ = chain.provider.get_or_deploy_contract('Owned', deploy_args=[database.address])
#     txHash = contractManager.transact().addContract("Owned", owned.address)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("Owned")).upper() == owned.address.upper()

#     # Deploy UserAccess
#     userAccess, _ = chain.provider.get_or_deploy_contract('UserAccess', deploy_args=[database.address])
#     txHash = contractManager.transact().addContract("UserAccess", userAccess.address)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("UserAccess")).upper() == userAccess.address.upper()

#     # Set MyBitToken
#     myBitToken, _ = chain.provider.get_or_deploy_contract('MyBitToken', deploy_args=[totalSupply, "MyBit Token", 8, "MyB"])
#     contractManager.transact().addContract("MyBitToken", myBitToken.address)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("MyBitToken")).upper() == myBitToken.address.upper()

#     # Deploy assetCreation 
#     assetCreation, _ = chain.provider.get_or_deploy_contract('AssetCreation', deploy_args=[database.address])
#     contractManager.transact().addContract("AssetCreation", assetCreation.address)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("AssetCreation")).upper() == assetCreation.address.upper()

#     # Deploy FundingHub
#     fundingHub, _ = chain.provider.get_or_deploy_contract('FundingHub', deploy_args=[database.address])
#     contractManager.transact().addContract("FundingHub", fundingHub.address)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("FundingHub")).upper() == fundingHub.address.upper()

#     # Deploy Asset
#     asset, _ = chain.provider.get_or_deploy_contract('Asset', deploy_args=[database.address])
#     contractManager.transact().addContract("Asset", asset.address)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("Asset")).upper() == asset.address.upper()

#     # Deploy TokenBurn    
#     tokenBurn, _ = chain.provider.get_or_deploy_contract('TokenBurn', deploy_args=[myBitToken.address, database.address])
#     contractManager.transact().addContract("TokenBurn", tokenBurn.address)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("TokenBurn")).upper() == tokenBurn.address.upper()

#     # Deploy TokenStake
#     tokenStake, _ = chain.provider.get_or_deploy_contract('TokenStake', deploy_args=[myBitToken.address, database.address])
#     contractManager.transact().addContract("TokenStake", tokenStake.address)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("TokenStake")).upper() == tokenStake.address.upper()

#     # Deploy Marketplace
#     marketPlace, _ = chain.provider.get_or_deploy_contract('MarketPlace', deploy_args=[database.address])
#     contractManager.transact().addContract("MarketPlace", marketPlace.address)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("MarketPlace")).upper() == marketPlace.address.upper()

    # # Deploy BugBounty escrow
    # bugEscrow, _ = chain.provider.get_or_deploy_contract('BugEscrow', deploy_args=[database.address])
    # contractManager.transact().addContract("BugEscrow", bugEscrow.address)
    # assert database.call().addressStorage(hashFunctions.call().contractHash("BugEscrow")).upper() == bugEscrow.address.upper()

#     # Set AssetEscrow reference
#     txHash = contractManager.transact().addContract("AssetEscrow", assetEscrow)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("AssetEscrow")).upper() == assetEscrow.upper()

#     # Set MyBitFoundation reference 
#     txHash = contractManager.transact().addContract("MyBitFoundation", myBitFoundation)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("MyBitFoundation")).upper() == myBitFoundation.upper()

#     # Init Asset Creation 
#     txHash = assetCreation.transact().init()
#     assert database.call().uintStorage(hashFunctions.call().sha3("fundingTime")) == 3000

#     # --------------Spread MyBit Tokens----------------------
#     spreadMyBitTokens(chain, myBitToken, accounts)


#     testFundingTime = 3000
#     solarAssetType = hashFunctions.call().sha3("SolarPanel")

#     # -------------Approve Users KYC-------------------
#     assert kycApprove(userAccess, hashFunctions, database, accounts)

#     #---------------Burn Tokens to Gain Authorization to Create Asset---------------
#     firstAssetCreator = accounts[9]
#     assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstAssetCreator)) == 1 
#     assert burnForAccess(myBitToken, tokenBurn, firstAssetCreator, 2)
#     assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstAssetCreator)) == 2

#     # # ------------Create Asset Info------------------------
#     firstAssetID = hashFunctions.call().sha3("afakestoragehash")
#     firstProjectGoal = convertEtherToWei(chain, 20)
#     assetInstaller = hashFunctions.call().sha3("SolarCity")

#     # ---------------Create First Asset---------------------------
#     assert assetCreation.call({"from": firstAssetCreator}).newAsset(firstAssetID, firstProjectGoal, assetInstaller, solarAssetType)
#     txHash = assetCreation.transact({"from": firstAssetCreator}).newAsset(firstAssetID, firstProjectGoal, assetInstaller, solarAssetType)
#     receipt = getReceiptMined(chain, txHash)
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 1
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("amountToBeRaised", firstAssetID)) == firstProjectGoal


#     # ---------------Testing Asset funding-----------------------
#     # First funder 
#     firstFunder = accounts[1]
#     fundingAmount = convertEtherToWei(chain, 5)
#     assert burnForAccess(myBitToken, tokenBurn, firstFunder, 2)
#     assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstFunder)) == 2
#     txHash = fundingHub.transact({"from": firstFunder, "value":fundingAmount}).fund(firstAssetID)
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID)) == fundingAmount
#         # Another funding from first funder
#     txHash = fundingHub.transact({"from": firstFunder, "value":fundingAmount}).fund(firstAssetID)
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID)) == fundingAmount * 2

#     # Second Funder 
#     secondFunder = accounts[2]
#     assert burnForAccess(myBitToken, tokenBurn, secondFunder, 2)
#     assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", secondFunder)) == 2
#     secondFundingAmount = convertEtherToWei(chain, 5)
#     txHash = fundingHub.transact({"from": secondFunder, "value":secondFundingAmount}).fund(firstAssetID)

#     # Third funder 
#     thirdFunder = accounts[3]
#     assert burnForAccess(myBitToken, tokenBurn, thirdFunder, 2)
#     assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", thirdFunder)) == 2
#     thirdFundAmount = secondFundingAmount
#     txHash = fundingHub.transact({"from": thirdFunder, "value":fundingAmount}).fund(firstAssetID)

#     # Should have succeeded funding stage
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 3
#     amountRaised = database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID))
#     assert  amountRaised == convertEtherToWei(chain, 20)

#     # Check share amounts were set properly
#     assert fundingAmount * 2 == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, firstFunder))
#     assert secondFundingAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, secondFunder))
#     assert thirdFundAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, thirdFunder))



#     # ---------------Check Payout Mechanism-----------------------
#     txHash = fundingHub.transact().payout(firstAssetID)
    
#     # TODO: sort this out 
#     # assert tokenStake.call().getBalance() > 0   


#     # ----------------------Asset start receiving payments--------------------------------

#     firstROIPayment = convertEtherToWei(chain, 10)

#     # ---------------------------Check Receiving ROI---------------------------------------
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 4
#     asset.transact({"value": firstROIPayment}).receiveIncome(firstAssetID, "First ROI payment")
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("totalReceived", firstAssetID)) == firstROIPayment

#     # ----------------Check First Funder Withdraw-----------
#     asset.transact({"from": firstFunder}).withdraw(firstAssetID)
#     firstFunderROI = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, firstFunder))
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("totalPaidToFunders", firstAssetID)) == firstFunderROI
#     # Get percentage of shares first funder 
#     firstFunderPercentageOfShares = getShares(database, hashFunctions, firstAssetID, firstFunder) / amountRaised
#     assert firstFunderROI == (firstROIPayment * firstFunderPercentageOfShares)


#     # ----------Check Second Funder Withdraw---------------
#     asset.transact({"from": secondFunder}).withdraw(firstAssetID)
#     secondFunderROI = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, secondFunder))
#     # Get percentage of shares second funder 
#     secondFunderPercentageOfShares = getShares(database, hashFunctions, firstAssetID, secondFunder) / amountRaised
#     assert secondFunderROI == (firstROIPayment * secondFunderPercentageOfShares)
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("totalPaidToFunders", firstAssetID)) == (firstFunderROI + secondFunderROI)

#     # -----------Check Third Funder Withdraw--------
#     asset.transact({"from": thirdFunder}).withdraw(firstAssetID)
#     thirdFunderROI = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, thirdFunder))
#     # Get percentage of shares third funder
#     thirdFunderPercentageOfShares = getShares(database, hashFunctions, firstAssetID, thirdFunder) / amountRaised
#     assert thirdFunderROI == (firstROIPayment * thirdFunderPercentageOfShares)
#     totalPaidToFunders = database.call().uintStorage(hashFunctions.call().stringBytes("totalPaidToFunders", firstAssetID))
#     assert totalPaidToFunders == firstFunderROI + secondFunderROI + thirdFunderROI
#     assert totalPaidToFunders == firstROIPayment

# # -------------------------------_Create Second Asset-----------------------------------
#     #----------Burn Tokens to Create Asset---------------
#     secondAssetCreator = accounts[8]
#     assert burnForAccess(myBitToken, tokenBurn, secondAssetCreator, 2)
#     assert getAccessLevel(database, hashFunctions, secondAssetCreator) == 2

#     # -------------------Test second newAsset()--------------------------
#     secondAssetID = hashFunctions.call().sha3("atm storage on ipfs")
#     atmAssetType = hashFunctions.call().sha3("BTCATM")
#     secondProjectGoal = convertEtherToWei(chain, 200)
#     atmAssetInstaller = hashFunctions.call().sha3("ATMInstaller")
#     assert assetCreation.call({"from": secondAssetCreator}).newAsset(secondAssetID, secondProjectGoal, atmAssetInstaller, atmAssetType)
#     txHash = assetCreation.transact({"from": secondAssetCreator}).newAsset(secondAssetID, secondProjectGoal, atmAssetInstaller, atmAssetType)
#     # Remove user. Asset will continue to be funded
#     txHash = userAccess.transact().removeUser(secondAssetCreator)
#     assert getAccessLevel(database, hashFunctions, secondAssetCreator) == 0
#     # Create First funder 
#     firstFunder = accounts[1]
#     assert getAccessLevel(database, hashFunctions, firstFunder) == 2
#     # Check stage 
#     assert getFundingStage(database, hashFunctions, secondAssetID) == 1
#     txHash = fundingHub.transact({"from": firstFunder, "value":secondProjectGoal}).fund(secondAssetID)
#     assert getFundingStage(database, hashFunctions, secondAssetID) == 3
#     txHash = fundingHub.transact().payout(secondAssetID)


#     # ------------Destroy AssetContract----------------------
#     testBalance = test.call().getBalance()
#     assetIncome = 1000000000
#     txHash = asset.transact({"value": assetIncome}).receiveIncome(secondAssetID, "something")  
#     beneficiaryHash = hashFunctions.call().addressHash(test.address)
#     txHash = owned.transact().setFunctionAuthorized(asset.address, "destroy", beneficiaryHash)
#     authorizedHash = hashFunctions.call().getAuthorizeHash(asset.address, accounts[0], "destroy", beneficiaryHash)
#     assert database.call().boolStorage(authorizedHash)
#     txHash = asset.transact({"from": accounts[1]}).destroy(accounts[0], test.address)
#     # assert asset.call().database() == database.address      # throws do to contract being destroyed
#     assert test.call().getBalance() == testBalance + assetIncome


# def test_refund(chain):
#     accounts = chain.web3.eth.accounts
#     hashFunctions, _ = chain.provider.get_or_deploy_contract('HashFunctions')   # This is just used as a helper for built in hash functions
#     test, _ = chain.provider.get_or_deploy_contract("Test")
#     myBitFoundation = accounts[4]
#     assetEscrow = accounts[5]
#     totalSupply = 281207344012426
#     myBitToken, _ = chain.provider.get_or_deploy_contract('MyBitToken', deploy_args=[totalSupply, "MyBit Token", 8, "MyB"])
#     userAccess, _ = chain.provider.get_or_deploy_contract('userAccess', deploy_args=[accounts[0], accounts[1], accounts[2]])
#     assetCreation, _ = chain.provider.get_or_deploy_contract('assetCreation', deploy_args=[userAccess.address])
#     tokenBurn, _ = chain.provider.get_or_deploy_contract('TokenBurn', deploy_args=[myBitToken.address, userAccess.address])
#     tokenStake, _ = chain.provider.get_or_deploy_contract('TokenStake', deploy_args=[myBitToken.address, userAccess.address])
#     marketPlace, _ = chain.provider.get_or_deploy_contract('MarketPlace', deploy_args=[userAccess.address, assetCreation.address])
#     Asset = chain.provider.get_contract_factory('Asset')


#     # Set contract references
#     userAccess.transact().setMyBitContract("MyBitToken", myBitToken.address)
#     userAccess.transact().setMyBitContract("TokenBurn", tokenBurn.address)
#     userAccess.transact().setMyBitContract("TokenStake", tokenStake.address)
#     userAccess.transact().setMyBitContract("MarketPlace", marketPlace.address)
#     userAccess.transact().setMyBitContract("assetCreation", assetCreation.address)


#     # Set Address references 
#     txHash = userAccess.transact().setMyBitContract("AssetEscrow", assetEscrow)
#     txHash = userAccess.transact().setMyBitContract("MyBitFoundation", myBitFoundation)
#     assert userAccess.call().myBitContracts(hashFunctions.call().sha3("AssetEscrow")).upper() == assetEscrow.upper()
#     assert userAccess.call().myBitContracts(hashFunctions.call().sha3("MyBitFoundation")).upper() == myBitFoundation.upper()

#         # Distribute MyBitTOkens 
#     assert myBitToken.call().totalSupply() == totalSupply
#     assert myBitToken.call().balanceOf(accounts[0]) == totalSupply
#     assert spreadMyBitTokens(chain, myBitToken, accounts)

#     # -------------Approve Users KYC-------------------
#     assert kycApprove(userAccess, accounts)

#     funderOne = accounts[1]
#     fundAmountOne = convertEtherToWei(chain, 10)
#     funderTwo = accounts[2]
#     fundAmountTwo = convertEtherToWei(chain, 20)
#     funderThree = accounts[3]    
#     fundAmountThree = convertEtherToWei(chain, 30)

#     #---------------Burn Tokens to Create Asset---------------
#     ownerCreator = accounts[0]   
#     assert burnForAccess(myBitToken, tokenBurn, ownerCreator, 2)
#     assert userAccess.call().userAccess(ownerCreator) == 2

#     solarAssetType = hashFunctions.call().sha3("SolarFarm")
#     storageHash = hashFunctions.call().sha3("decentralizedstoragewillcreatethishash")
#     amountToRaise = convertEtherToWei(chain, 100)
#     assetInstaller = hashFunctions.call().sha3("SolarInstallationCompany")
#     solarAssetAddress = assetCreation.call().newAsset(storageHash, amountToRaise, assetInstaller, solarAssetType)
#     txHash = assetCreation.transact({"from": ownerCreator}).newAsset(storageHash, amountToRaise, assetInstaller, solarAssetType)
#     receipt = getReceiptMined(chain, txHash)
#     solarAssetCheck = receipt['logs'][0]['address']
#     assert solarAssetCheck.upper() == solarAssetAddress.upper()
#     solarAsset = Asset(solarAssetAddress)
#     assert assetCreation.call().beingFunded(solarAssetCheck)

#     txHash = solarAsset.transact({"from": funderOne, "value": fundAmountOne}).fund()
#     assert solarAsset.call().shares(funderOne) == fundAmountOne
#     assert solarAsset.call().amountRaised() == fundAmountOne
#     txHash = solarAsset.transact({"from": funderTwo, "value": fundAmountTwo}).fund()
#     assert solarAsset.call().shares(funderTwo) == fundAmountTwo
#     txHash = solarAsset.transact({"from": funderThree, "value": fundAmountThree}).fund()
#     assert solarAsset.call().amountRaised() == (fundAmountThree + fundAmountTwo + fundAmountOne)
#     currentBlock = getBlockNumber(chain)
#     timestamp = getTimestamp(chain, currentBlock)
#     while (solarAsset.call().fundingDeadline() > timestamp):
#         mine(chain, 10)
#         currentBlock = getBlockNumber(chain)
#         timestamp = getTimestamp(chain, currentBlock)
#     assert solarAsset.call().stage() == 0       # Stage = Funding Asset
#     solarAsset.transact().initiateRefund()
#     assert solarAsset.call().stage() == 2       # Stage = funding failed 
#     solarAsset.transact({"from": funderOne}).refund()
#     assert solarAsset.call().amountRaised() == (fundAmountThree + fundAmountTwo)
#     solarAsset.transact({"from": funderTwo}).refund()
#     assert solarAsset.call().amountRaised() == fundAmountThree
#     solarAsset.transact({"from": funderThree}).refund()
#     assert solarAsset.call().amountRaised() == 0



#     # ------------Destroy Asset----------------------
#     testBalance = test.call().getBalance()
#     assert userAccess.call().owner(0).upper() == accounts[0].upper() and userAccess.call().owner(1).upper() == accounts[1].upper() and userAccess.call().owner(2).upper() == accounts[2].upper()
#     txHash = userAccess.transact().setFunctionAuthorized(solarAssetAddress, "destroy", test.address)
#     authorizedHash = hashFunctions.call().getAuthorizeHash(solarAssetAddress, accounts[0], "destroy", test.address)
#     assert userAccess.call().authorizedFunction(authorizedHash)
#     txHash = solarAsset.transact({"from": accounts[1]}).destroy(accounts[0], test.address)



