# import binascii
# from sha3 import keccak_256


# def mine(chain, numBlocks):
#     chain.web3.testing.mine(numBlocks)
#     return

# def getBlockNumber(chain):
#     return chain.web3.eth.blockNumber

# def getTimestamp(chain, blockNumber):
#     blockAttribute = getBlockAttribute(chain, blockNumber)
#     return blockAttribute['timestamp']

# def getReceiptMined(chain, txHash):
#     return chain.wait.for_receipt(txHash)

# def convertEtherToWei(chain, _amountEther):
#     return chain.web3.toWei(_amountEther, 'ether')

# def convertWeiToEther(chain, _amountWei):
#     return chain.web3.fromWei(_amountWei, 'ether')

# def spreadMyBitTokens(myBitContract, accounts):
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


# def getHashOf(_hashFunctions, someString):
#     return _hashFunctions.call().sha3(someString)

# def getShares(database, hashFunctions, assetID, userAddress):
#   return database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", assetID, userAddress))

# def getAccessLevel(database, hashFunctions, userAddress):
#   return database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", userAddress))

# def getFundingStage(database, hashFunctions, assetID):
#   return database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", assetID))

# def test_marketplace(chain):

#     # ------------------------------Deploy All Contracts-------------------------------

#     # Deploy Test contract + Hashing helper 
#     test, _ = chain.provider.get_or_deploy_contract("Test")
#     hashFunctions, _ = chain.provider.get_or_deploy_contract('HashFunctions')   # This is just used as a helper for built in hash functions

#     # Constants 
#     accounts = chain.web3.eth.accounts
#     myBitFoundation = accounts[4]
#     assetEscrow = test.address
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
    # assert database.call().addressStorage(hashFunctions.call().contractHash("TokenStake")).upper() == tokenStake.address.upper()

    # # Deploy Marketplace
    # marketPlace, _ = chain.provider.get_or_deploy_contract('MarketPlace', deploy_args=[database.address])
    # contractManager.transact().addContract("MarketPlace", marketPlace.address)
    # assert database.call().addressStorage(hashFunctions.call().contractHash("MarketPlace")).upper() == marketPlace.address.upper()

    # # Deploy BugBounty escrow
    # bugEscrow, _ = chain.provider.get_or_deploy_contract('BugEscrow', deploy_args=[database.address])
    # contractManager.transact().addContract("BugEscrow", bugEscrow.address)
    # assert database.call().addressStorage(hashFunctions.call().contractHash("BugEscrow")).upper() == bugEscrow.address.upper()

    # # Set AssetEscrow reference
    # txHash = contractManager.transact().addContract("AssetEscrow", assetEscrow)
    # assert database.call().addressStorage(hashFunctions.call().contractHash("AssetEscrow")).upper() == assetEscrow.upper()

#     # Set MyBitFoundation reference 
#     txHash = contractManager.transact().addContract("MyBitFoundation", myBitFoundation)
#     assert database.call().addressStorage(hashFunctions.call().contractHash("MyBitFoundation")).upper() == myBitFoundation.upper()

#     # Init Asset Creation 
#     txHash = assetCreation.transact().init()
#     assert database.call().uintStorage(hashFunctions.call().sha3("fundingTime")) == 3000

#     # --------------Spread MyBit Tokens----------------------
#     spreadMyBitTokens(myBitToken, accounts)


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
#     funderOne = accounts[1]
#     firstFundingAmount = convertEtherToWei(chain, 10)
#     assert burnForAccess(myBitToken, tokenBurn, funderOne, 2)
#     assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", funderOne)) == 2
#     txHash = fundingHub.transact({"from": funderOne, "value":firstFundingAmount}).fund(firstAssetID)
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID)) == firstFundingAmount


#     # Second Funder 
#     funderTwo = accounts[2]
#     assert burnForAccess(myBitToken, tokenBurn, funderTwo, 2)
#     assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", funderTwo)) == 2
#     secondFundingAmount = convertEtherToWei(chain, 5)
#     txHash = fundingHub.transact({"from": funderTwo, "value":secondFundingAmount}).fund(firstAssetID)

#     # Third funder 
#     funderThree = accounts[3]
#     assert burnForAccess(myBitToken, tokenBurn, funderThree, 2)
#     assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", funderThree)) == 2
#     thirdFundingAmount = secondFundingAmount
#     txHash = fundingHub.transact({"from": funderThree, "value":thirdFundingAmount}).fund(firstAssetID)

#     # Should have succeeded funding stage
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 3
#     amountRaised = database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID))
#     assert amountRaised == convertEtherToWei(chain, 20)
#     assert amountRaised == (firstFundingAmount + secondFundingAmount + thirdFundingAmount)

#     # Check share amounts were set properly
#     assert firstFundingAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, funderOne))
#     assert secondFundingAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, funderTwo))
#     assert thirdFundingAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, funderThree))



#     # ---------------Check Payout Mechanism-----------------------
#     txHash = fundingHub.transact().payout(firstAssetID)
#     assert getFundingStage(database, hashFunctions, firstAssetID) == 4
    
#     # Check that asset paid out recipients properly
#     assert test.call().getBalance() == amountRaised * .97   
#     assert tokenStake.call().getBalance() == amountRaised * .02


#     # ---------------------------------------MarketPlace Testing--------------------------------------- 
#     # TODO:  Test overwriting buy and sell orders. 


#     # -------Burn tokens to access marketplace -------------------
#     for i in range(1, 5):
#         assert burnForAccess(myBitToken, tokenBurn, accounts[i], 4)
#         assert getAccessLevel(database, hashFunctions, accounts[i]) == 4


#     # ------Create Simple Buy Order from Funder One and sell Funder Two's shares--------
#     # Calculate amount of shares and price of shares
#     funderOneSharesToBuy = convertEtherToWei(chain, 2)    
#     funderOnePrice = 10
#     funderOneBuyValue = funderOneSharesToBuy * funderOnePrice

#     # get the buy order hash 
#     buyOrderHashOne = hashFunctions.call().getOrderID(funderOne, firstAssetID)
#     txHash = marketPlace.transact({"from": funderOne, "value": funderOneBuyValue}).createBuyOrder(funderOneSharesToBuy, funderOnePrice, firstAssetID)

#     # Check that buy order variables were set properly 
#     assert marketPlace.call().weiDeposited(funderOne) == funderOneBuyValue
#     initiator, assetID, amount, price = marketPlace.call().buyOrders(buyOrderHashOne)
#     assert initiator.upper() == funderOne.upper()
#     assert assetID == firstAssetID
#     assert amount == funderOneSharesToBuy
#     assert price == funderOnePrice
#     funderOneBuyAmount = price * amount 


#     # FunderTwo fills the buy order (first time)
#     txHash = marketPlace.transact({"from": funderTwo}).sellAsset(buyOrderHashOne)
#     assert marketPlace.call().weiOwed(funderTwo) == funderOneBuyAmount 
#     assert marketPlace.call().weiDeposited(funderOne) == 0 

#     # FunderTwo withdraws Ether 
#     txHash = marketPlace.transact({"from": funderTwo}).withdraw() 
#     assert marketPlace.call().weiOwed(funderTwo) == 0


#     # Check asset shares are accurate 
#     sharesFunderOne = int(getShares(database, hashFunctions, firstAssetID, funderOne))
#     sharesFunderTwo = int(getShares(database, hashFunctions, firstAssetID, funderTwo))
#     assert sharesFunderOne == firstFundingAmount + funderOneSharesToBuy
#     assert sharesFunderTwo == secondFundingAmount - funderOneSharesToBuy

#     #-----------------Reverse above trade to ensure parity--------------------------   

#     # Calculate amount of shares and price of shares
#     funderOneSharesToSell = convertEtherToWei(chain, 2)   
#     funderOnePrice = 10
#     funderOneSellValue = funderOneSharesToSell * funderOnePrice
#     assert getShares(database, hashFunctions, firstAssetID, funderOne) > funderOneSharesToSell

#     # get the sell order hash & create sell order
#     sellOrderHashOne = hashFunctions.call().getOrderID(funderOne, firstAssetID)
#     txHash = marketPlace.transact({"from": funderOne}).createSellOrder(funderOneSharesToSell, funderOnePrice, firstAssetID)

#     # Check that variables were set properly after sell order
#     assert marketPlace.call().weiDeposited(funderOne) == 0
#     initiator, assetID, amount, price = marketPlace.call().sellOrders(sellOrderHashOne)
#     assert initiator.upper() == funderOne.upper()
#     assert assetID == firstAssetID
#     assert amount == funderOneSharesToSell
#     assert price == funderOnePrice

#     # Calculate amounts for funder two 
#     funderTwoBuyValue = price * amount 

#     # FunderTwo fills the sell order
#     txHash = marketPlace.transact({"from": funderTwo, "value": funderTwoBuyValue}).buyAsset(sellOrderHashOne)
#     assert marketPlace.call().weiOwed(funderOne) == funderTwoBuyValue 
#     assert marketPlace.call().weiDeposited(funderTwo) == 0 

#     # FunderTwo withdraws Ether 
#     txHash = marketPlace.transact({"from": funderOne}).withdraw() 
#     assert marketPlace.call().weiOwed(funderOne) == 0

#     # Check asset shares are accurate 
#     assert getShares(database, hashFunctions, firstAssetID, funderOne) == firstFundingAmount
#     assert getShares(database, hashFunctions, firstAssetID, funderTwo) == secondFundingAmount

#     # -----------------Fund Asset and Trade shares after users have withdrawn funds-----------------------
#     # Send Asset income 
#     incomeReceived = convertEtherToWei(chain, 2)
#     txHash = asset.transact({"value": incomeReceived}).receiveIncome(firstAssetID, "January funding from Trusted ATM")

#     # Calculate amount owed  -> will be equal to paidToFunder
#     funderOneAssetReturns = (incomeReceived * getShares(database, hashFunctions, firstAssetID, funderOne)) / amountRaised
#     funderTwoAssetReturns = (incomeReceived * getShares(database, hashFunctions, firstAssetID, funderTwo)) / amountRaised
#     funderThreeAssetReturns = (incomeReceived * getShares(database, hashFunctions, firstAssetID, funderThree)) / amountRaised

#     # withdraw FunderOne 
#     txHash = asset.transact({"from": funderOne}).withdraw(firstAssetID)
#     assert database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, funderOne)) - funderOneAssetReturns == 0

#     # withdraw FunderTwo 
#     txHash = asset.transact({"from": funderTwo}).withdraw(firstAssetID) 
#     assert database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, funderTwo)) - funderTwoAssetReturns == 0


#     # ----------------Trade Shares after ROI has been withdrawn------------------
#     #         (will transfer relative amount paid to funder as well)

#     # Calculate amount of shares and price of shares
#     funderOneSharesToBuy = convertEtherToWei(chain, 1)   
#     funderOnePrice = 1
#     funderOneBuyValue = funderOneSharesToBuy * funderOnePrice

#     # Get pre-trade amount of shares 
#     sharesFunderOne = getShares(database, hashFunctions, firstAssetID, funderOne)
#     sharesFunderTwo = getShares(database, hashFunctions, firstAssetID, funderTwo)
#     assert sharesFunderTwo > funderOneSharesToBuy
 

#     # Check balanced paidToFunderValues 
#     paidToFunderOne = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, funderOne))
#     paidToFunderTwo = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, funderTwo))
#     oneAndTwoPaidToFunder = paidToFunderOne + paidToFunderTwo

#     # get the buy order hash 
#     buyOrderHashOne = hashFunctions.call().getOrderID(funderOne, firstAssetID)
#     txHash = marketPlace.transact({"from": funderOne, "value": funderOneBuyValue}).createBuyOrder(funderOneSharesToBuy, funderOnePrice, firstAssetID)

#     # FunderTwo fills the buy order 
#     txHash = marketPlace.transact({"from": funderTwo}).sellAsset(buyOrderHashOne)


#     # Check asset shares are accurate 
#     assert getShares(database, hashFunctions, firstAssetID, funderOne) == (sharesFunderOne + funderOneSharesToBuy)
#     assert getShares(database, hashFunctions, firstAssetID, funderTwo) == (sharesFunderTwo - funderOneSharesToBuy)



#     assert database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, funderOne)) > 0

#     # Check if traded shares also traded paidToFunderVariable
#     percentageOfSharesTraded = funderOneSharesToBuy / sharesFunderTwo
#     assert percentageOfSharesTraded + (getShares(database, hashFunctions, firstAssetID, funderTwo) / sharesFunderTwo) == 1 
#     funderTwoAdjustedAssetReturns = funderTwoAssetReturns - (funderTwoAssetReturns * percentageOfSharesTraded)

#     # New paidToFunderValues 
#     paidToFunderOne = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, funderOne))
#     paidToFunderTwo = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, funderTwo))
#     oneAndTwoPaidToFunder = paidToFunderOne + paidToFunderTwo

#     # Check paidToFunderValues balance out 
#     assert paidToFunderTwo - funderTwoAdjustedAssetReturns == 0
#     assert paidToFunderOne + paidToFunderTwo == oneAndTwoPaidToFunder
#     assert oneAndTwoPaidToFunder - paidToFunderTwo == paidToFunderOne

#     # FunderOne will be entitled to a greater percentage of future income 
#     funderOneAssetReturns = incomeReceived * getShares(database, hashFunctions, firstAssetID, funderOne)
#     funderTwoAssetReturns = incomeReceived * getShares(database, hashFunctions, firstAssetID, funderTwo)
#     assert funderTwoAssetReturns < funderOneAssetReturns

#     # ------------------Delete a buy order-------------------------
#     # Calculate amount of shares and price of shares
#     funderThreeSharesToBuy = convertEtherToWei(chain, 2)   
#     funderThreePrice = 2
#     funderThreeValueToBuy = funderThreeSharesToBuy * funderThreePrice

#     # get the buy order hash & create order
#     buyOrderHash = hashFunctions.call().getOrderID(funderThree, firstAssetID)
#     txHash = marketPlace.transact({"from": funderThree, "value": funderThreeValueToBuy}).createBuyOrder(funderThreeSharesToBuy, funderThreePrice, firstAssetID)

#     # check values 
#     assert marketPlace.call().weiDeposited(funderThree) == funderThreeValueToBuy
#     initiator, assetID, amount, price = marketPlace.call().buyOrders(buyOrderHash)
#     assert initiator.upper() == funderThree.upper()
#     assert assetID == firstAssetID
#     assert amount == funderThreeSharesToBuy
#     assert price == funderThreePrice

#     # delete order 
#     txHash = marketPlace.transact({"from": funderThree}).deleteBuyOrder(buyOrderHash)
#     assert marketPlace.call().weiDeposited(funderThree) == 0
#     initiator, assetID, amount, price = marketPlace.call().buyOrders(buyOrderHash)
#     assert amount == 0
#     assert price == 0

#     # ------------------Delete a sell order-------------------------
#     # Calculate amount of shares and price of shares
#     funderThreeSharesToSell = convertEtherToWei(chain, 2)   
#     funderThreePrice = 3
#     funderThreeValueToSell = funderThreeSharesToSell * funderThreePrice
#     assert getShares(database, hashFunctions, firstAssetID, funderThree) > funderThreeSharesToSell

#     # get the buy order hash & create order
#     sellOrderHash = hashFunctions.call().getOrderID(funderThree, firstAssetID)
#     txHash = marketPlace.transact({"from": funderThree}).createSellOrder(funderThreeSharesToSell, funderThreePrice, firstAssetID)

#     # # check values 
#     assert marketPlace.call().weiDeposited(funderThree) == 0
#     initiator, assetID, amount, price = marketPlace.call().sellOrders(sellOrderHash)
#     assert initiator.upper() == funderThree.upper()
#     assert assetID == firstAssetID
#     assert amount == funderThreeSharesToSell
#     assert price == funderThreePrice

#     # delete order 
#     txHash = marketPlace.transact({"from": funderThree}).deleteSellOrder(sellOrderHash)
#     assert marketPlace.call().weiDeposited(funderThree) == 0
#     initiator, assetID, amount, price = marketPlace.call().buyOrders(sellOrderHash)
#     assert amount == 0
#     assert price == 0

#     # TODO: test can't trade before withdrawing funds 

    
