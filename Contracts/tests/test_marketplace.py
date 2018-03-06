# import binascii
# from sha3 import keccak_256
# from deploy import deployContracts

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
#     # Constants 
#     accounts = chain.web3.eth.accounts

#     test, hashFunctions, database, contractManager, owned, userAccess, myBitToken, assetCreation, fundingHub, asset, stakingBank, bugBank, bugBounty, tokenStaking, marketPlace, tokenBurn = deployContracts(chain, accounts)

#     ownerOne = accounts[0]
#     ownerTwo = accounts[1]
#     ownerThree = accounts[2]
#     myBitFoundation = accounts[4]
#     assetEscrow = test.address

#       # --------------Spread MyBit Tokens----------------------
#     spreadMyBitTokens(myBitToken, accounts)

#     # -------------Approve Users KYC-------------------
#     assert kycApprove(userAccess, hashFunctions, database, accounts)

#     #---------------Burn Tokens to Gain Authorization to Create Asset---------------
#     firstAssetManager = accounts[9]
#     assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstAssetManager)) == 1 
#     assert burnForAccess(myBitToken, tokenBurn, firstAssetManager, 2)
#     assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstAssetManager)) == 2

#     # ------------Create Asset Info------------------------
#     firstAssetID = hashFunctions.call().sha3("afakestoragehash")
#     firstProjectGoal = convertEtherToWei(chain, 20)
#     assetInstaller = hashFunctions.call().sha3("SolarCity")
#     solarAssetType = hashFunctions.call().sha3("SolarFarm")
#     managerPercentage = 6

#     # ---------------Create First Asset---------------------------
#     assert assetCreation.call({"from": firstAssetManager}).newAsset(firstAssetID, firstProjectGoal, managerPercentage, assetInstaller, solarAssetType)
#     txHash = assetCreation.transact({"from": firstAssetManager}).newAsset(firstAssetID, firstProjectGoal, managerPercentage, assetInstaller, solarAssetType)
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
#     assert  amountRaised == (fundingAmount * 2) + secondFundingAmount + thirdFundAmount
#     assert amountRaised == firstProjectGoal

#     # Check share amounts were set properly
#     assert fundingAmount * 2 == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, firstFunder))
#     assert secondFundingAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, secondFunder))
#     assert thirdFundAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, thirdFunder))


#     # ---------------Check Payout Mechanism-----------------------
#     txHash = fundingHub.transact().payout(firstAssetID)
#     assert getFundingStage(database, hashFunctions, firstAssetID) == 4
    

#     # Check that asset paid out recipients properly
#     assert test.call().getBalance() == amountRaised * .97   
#     assert stakingBank.call().getBalance() == amountRaised * .02

#     amountRaised = database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID))
#     assert ( ((fundingAmount * 2) + (secondFundingAmount * 2)) / amountRaised) * 100 == (100 - managerPercentage)

#     # ---------------------------------------MarketPlace Testing--------------------------------------- 
#     # TODO:  Test overwriting buy and sell orders. 


#     # -------Burn tokens to access marketplace -------------------
#     for i in range(1, 5):
#         assert burnForAccess(myBitToken, tokenBurn, accounts[i], 4)
#         assert getAccessLevel(database, hashFunctions, accounts[i]) == 4


#     # ------Create Simple Buy Order from Funder One and sell Funder Two's shares--------
#     # Calculate amount of shares and price of shares
#     firstFunderSharesToBuy = convertEtherToWei(chain, 2)    
#     firstFunderPrice = 10
#     firstFunderBuyValue = firstFunderSharesToBuy * firstFunderPrice

#     # get the buy order hash 
#     buyOrderHashOne = hashFunctions.call().getOrderID(firstFunder, firstAssetID)
#     txHash = marketPlace.transact({"from": firstFunder, "value": firstFunderBuyValue}).createBuyOrder(firstFunderSharesToBuy, firstFunderPrice, firstAssetID)

#     # Check that buy order variables were set properly 
#     assert marketPlace.call().weiDeposited(firstFunder) == firstFunderBuyValue
#     initiator, assetID, amount, price = marketPlace.call().buyOrders(buyOrderHashOne)
#     assert initiator.upper() == firstFunder.upper()
#     assert assetID == firstAssetID
#     assert amount == firstFunderSharesToBuy
#     assert price == firstFunderPrice
#     firstFunderBuyAmount = price * amount 


#     # secondFunder fills the buy order (first time)
#     txHash = marketPlace.transact({"from": secondFunder}).sellAsset(buyOrderHashOne)
#     assert marketPlace.call().weiOwed(secondFunder) == firstFunderBuyAmount 
#     assert marketPlace.call().weiDeposited(firstFunder) == 0 

#     # secondFunder withdraws Ether 
#     txHash = marketPlace.transact({"from": secondFunder}).withdraw() 
#     assert marketPlace.call().weiOwed(secondFunder) == 0


#     # Check asset shares are accurate 
#     sharesfirstFunder = int(getShares(database, hashFunctions, firstAssetID, firstFunder))
#     sharessecondFunder = int(getShares(database, hashFunctions, firstAssetID, secondFunder))
#     assert sharesfirstFunder == (fundingAmount * 2) + firstFunderSharesToBuy
#     assert sharessecondFunder == secondFundingAmount - firstFunderSharesToBuy

#     #-----------------Reverse above trade to ensure parity--------------------------   

#     # Calculate amount of shares and price of shares
#     firstFunderSharesToSell = convertEtherToWei(chain, 2)   
#     firstFunderPrice = 10
#     firstFunderSellValue = firstFunderSharesToSell * firstFunderPrice
#     assert getShares(database, hashFunctions, firstAssetID, firstFunder) > firstFunderSharesToSell

#     # get the sell order hash & create sell order
#     sellOrderHashOne = hashFunctions.call().getOrderID(firstFunder, firstAssetID)
#     txHash = marketPlace.transact({"from": firstFunder}).createSellOrder(firstFunderSharesToSell, firstFunderPrice, firstAssetID)

#     # Check that variables were set properly after sell order
#     assert marketPlace.call().weiDeposited(firstFunder) == 0
#     initiator, assetID, amount, price = marketPlace.call().sellOrders(sellOrderHashOne)
#     assert initiator.upper() == firstFunder.upper()
#     assert assetID == firstAssetID
#     assert amount == firstFunderSharesToSell
#     assert price == firstFunderPrice

#     # Calculate amounts for funder two 
#     secondFunderBuyValue = price * amount 

#     # secondFunder fills the sell order
#     txHash = marketPlace.transact({"from": secondFunder, "value": secondFunderBuyValue}).buyAsset(sellOrderHashOne)
#     assert marketPlace.call().weiOwed(firstFunder) == secondFunderBuyValue 
#     assert marketPlace.call().weiDeposited(secondFunder) == 0 

#     # secondFunder withdraws Ether 
#     txHash = marketPlace.transact({"from": firstFunder}).withdraw() 
#     assert marketPlace.call().weiOwed(firstFunder) == 0

#     # Check asset shares are accurate 
#     assert getShares(database, hashFunctions, firstAssetID, firstFunder) == fundingAmount * 2
#     assert getShares(database, hashFunctions, firstAssetID, secondFunder) == secondFundingAmount

#     # -----------------Fund Asset and Trade shares after users have withdrawn funds-----------------------
#     # Send Asset income 
#     incomeReceived = convertEtherToWei(chain, 2)
#     txHash = asset.transact({"value": incomeReceived}).receiveIncome(firstAssetID, "January funding from Trusted ATM")

#     # Calculate amount owed  -> will be equal to paidToFunder
#     assetManagerReturns = (incomeReceived * getShares(database, hashFunctions, firstAssetID, firstAssetManager)) / amountRaised
#     firstFunderAssetReturns = (incomeReceived * getShares(database, hashFunctions, firstAssetID, firstFunder)) / amountRaised
#     secondFunderAssetReturns = (incomeReceived * getShares(database, hashFunctions, firstAssetID, secondFunder)) / amountRaised
#     thirdFunderAssetReturns = (incomeReceived * getShares(database, hashFunctions, firstAssetID, thirdFunder)) / amountRaised

#     # withdraw firstFunder 
#     txHash = asset.transact({"from": firstFunder}).withdraw(firstAssetID, False)
#     assert database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, firstFunder)) - firstFunderAssetReturns == 0

#     # withdraw secondFunder 
#     txHash = asset.transact({"from": secondFunder}).withdraw(firstAssetID, False) 
#     assert database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, secondFunder)) - secondFunderAssetReturns == 0


#     # ----------------Trade Shares after ROI has been withdrawn------------------
#     #         (will transfer relative amount paid to funder as well)

#     # Calculate amount of shares and price of shares
#     firstFunderSharesToBuy = convertEtherToWei(chain, 1)   
#     firstFunderPrice = 1
#     firstFunderBuyValue = firstFunderSharesToBuy * firstFunderPrice

#     # Get pre-trade amount of shares 
#     sharesfirstFunder = getShares(database, hashFunctions, firstAssetID, firstFunder)
#     sharessecondFunder = getShares(database, hashFunctions, firstAssetID, secondFunder)
#     assert sharessecondFunder == sharesfirstFunder / 2
  

#     # Check balanced paidToFunderValues 
#     paidTofirstFunder = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, firstFunder))
#     paidTosecondFunder = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, secondFunder))
#     oneAndTwoPaidToFunder = paidTofirstFunder + paidTosecondFunder

#     # get the buy order hash 
#     buyOrderHashOne = hashFunctions.call().getOrderID(firstFunder, firstAssetID)
#     assert sharesfirstFunder > firstFunderSharesToBuy
#     txHash = marketPlace.transact({"from": firstFunder, "value": firstFunderBuyValue}).createBuyOrder(firstFunderSharesToBuy, firstFunderPrice, firstAssetID)

#     # secondFunder fills the buy order 
#     txHash = marketPlace.transact({"from": secondFunder}).sellAsset(buyOrderHashOne)


#     # Check asset shares are accurate 
#     assert getShares(database, hashFunctions, firstAssetID, firstFunder) == (sharesfirstFunder + firstFunderSharesToBuy)
#     assert getShares(database, hashFunctions, firstAssetID, secondFunder) == (sharessecondFunder - firstFunderSharesToBuy)



#     assert database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, firstFunder)) > 0

#     # Check if traded shares also traded paidToFunderVariable
#     percentageOfSharesTraded = firstFunderSharesToBuy / sharessecondFunder
#     assert percentageOfSharesTraded + (getShares(database, hashFunctions, firstAssetID, secondFunder) / sharessecondFunder) == 1 
#     secondFunderAdjustedAssetReturns = secondFunderAssetReturns - (secondFunderAssetReturns * percentageOfSharesTraded)

#     # New paidToFunderValues 
#     paidTofirstFunder = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, firstFunder))
#     paidTosecondFunder = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, secondFunder))
#     oneAndTwoPaidToFunder = paidTofirstFunder + paidTosecondFunder

#     # Check paidToFunderValues balance out 
#     assert paidTosecondFunder - secondFunderAdjustedAssetReturns == 0
#     assert paidTofirstFunder + paidTosecondFunder == oneAndTwoPaidToFunder
#     assert oneAndTwoPaidToFunder - paidTosecondFunder == paidTofirstFunder

#     # firstFunder will be entitled to a greater percentage of future income 
#     firstFunderAssetReturns = incomeReceived * getShares(database, hashFunctions, firstAssetID, firstFunder)
#     secondFunderAssetReturns = incomeReceived * getShares(database, hashFunctions, firstAssetID, secondFunder)
#     assert secondFunderAssetReturns < firstFunderAssetReturns

#     # ------------------Delete a buy order-------------------------
#     # Calculate amount of shares and price of shares
#     thirdFunderSharesToBuy = convertEtherToWei(chain, 2)   
#     thirdFunderPrice = 2
#     thirdFunderValueToBuy = thirdFunderSharesToBuy * thirdFunderPrice

#     # get the buy order hash & create order
#     buyOrderHash = hashFunctions.call().getOrderID(thirdFunder, firstAssetID)
#     txHash = marketPlace.transact({"from": thirdFunder, "value": thirdFunderValueToBuy}).createBuyOrder(thirdFunderSharesToBuy, thirdFunderPrice, firstAssetID)

#     # check values 
#     assert marketPlace.call().weiDeposited(thirdFunder) == thirdFunderValueToBuy
#     initiator, assetID, amount, price = marketPlace.call().buyOrders(buyOrderHash)
#     assert initiator.upper() == thirdFunder.upper()
#     assert assetID == firstAssetID
#     assert amount == thirdFunderSharesToBuy
#     assert price == thirdFunderPrice

#     # delete order 
#     txHash = marketPlace.transact({"from": thirdFunder}).deleteBuyOrder(buyOrderHash)
#     assert marketPlace.call().weiDeposited(thirdFunder) == 0
#     initiator, assetID, amount, price = marketPlace.call().buyOrders(buyOrderHash)
#     assert amount == 0
#     assert price == 0

#     # ------------------Delete a sell order-------------------------
#     # Calculate amount of shares and price of shares
#     thirdFunderSharesToSell = convertEtherToWei(chain, 2)   
#     thirdFunderPrice = 3
#     thirdFunderValueToSell = thirdFunderSharesToSell * thirdFunderPrice
#     assert getShares(database, hashFunctions, firstAssetID, thirdFunder) > thirdFunderSharesToSell

#     # get the buy order hash & create order
#     sellOrderHash = hashFunctions.call().getOrderID(thirdFunder, firstAssetID)
#     txHash = marketPlace.transact({"from": thirdFunder}).createSellOrder(thirdFunderSharesToSell, thirdFunderPrice, firstAssetID)

#     # # check values 
#     assert marketPlace.call().weiDeposited(thirdFunder) == 0
#     initiator, assetID, amount, price = marketPlace.call().sellOrders(sellOrderHash)
#     assert initiator.upper() == thirdFunder.upper()
#     assert assetID == firstAssetID
#     assert amount == thirdFunderSharesToSell
#     assert price == thirdFunderPrice

#     # delete order 
#     txHash = marketPlace.transact({"from": thirdFunder}).deleteSellOrder(sellOrderHash)
#     assert marketPlace.call().weiDeposited(thirdFunder) == 0
#     initiator, assetID, amount, price = marketPlace.call().buyOrders(sellOrderHash)
#     assert amount == 0
#     assert price == 0

#     # TODO: test can't trade before withdrawing funds 

    

#     # ------------------Test Overwriting BuyOrder---------------------------

#     # Calculate amount of shares and price of shares
#     firstFunderSharesToBuy = convertEtherToWei(chain, 1)   
#     firstFunderPrice = 2
#     firstFunderBuyValue = firstFunderSharesToBuy * firstFunderPrice



#     # get the buy order hash 
#     buyOrderHashOne = hashFunctions.call().getOrderID(firstFunder, firstAssetID)
#     assert sharesfirstFunder > firstFunderSharesToBuy
#     txHash = marketPlace.transact({"from": firstFunder, "value": firstFunderBuyValue}).createBuyOrder(firstFunderSharesToBuy, firstFunderPrice, firstAssetID)

#     # check values 
#     assert marketPlace.call().weiDeposited(firstFunder) == firstFunderBuyValue
#     initiator, assetID, amount, price = marketPlace.call().buyOrders(buyOrderHashOne)
#     assert initiator.upper() == firstFunder.upper()
#     assert assetID == firstAssetID
#     assert amount == firstFunderSharesToBuy
#     assert price == firstFunderPrice

#     # Overwrite Buy Order 
#     firstFunderSharesToBuy = convertEtherToWei(chain, .5)   
#     firstFunderPrice = 3
#     firstFunderBuyValue = firstFunderSharesToBuy * firstFunderPrice

#     # This fails as it should. User must delete previous buyOrder to reclaim Ether
#     # txHash = marketPlace.transact({"from": firstFunder, "value": firstFunderBuyValue}).createBuyOrder(firstFunderSharesToBuy, firstFunderPrice, firstAssetID)


#     # ------------------Test Overwriting SellOrder---------------------------


#     # Calculate amount of shares and price of shares
#     firstFunderSharesToSell = convertEtherToWei(chain, 2)   
#     firstFunderPrice = 10
#     firstFunderSellValue = firstFunderSharesToSell * firstFunderPrice

#     # get the sell order hash & create sell order
#     sellOrderHashOne = hashFunctions.call().getOrderID(firstFunder, firstAssetID)
#     txHash = marketPlace.transact({"from": firstFunder}).createSellOrder(firstFunderSharesToSell, firstFunderPrice, firstAssetID)

#     # Check that variables were set properly after sell order
#     initiator, assetID, amount, price = marketPlace.call().sellOrders(sellOrderHashOne)
#     assert initiator.upper() == firstFunder.upper()
#     assert assetID == firstAssetID
#     assert amount == firstFunderSharesToSell
#     assert price == firstFunderPrice


#     # Calculate amount of shares and price of shares
#     firstFunderSharesToSell = convertEtherToWei(chain, 1)   
#     firstFunderPrice = 13
#     firstFunderSellValue = firstFunderSharesToSell * firstFunderPrice

#     txHash = marketPlace.transact({"from": firstFunder}).createSellOrder(firstFunderSharesToSell, firstFunderPrice, firstAssetID)
#     initiator, assetID, amount, price = marketPlace.call().sellOrders(sellOrderHashOne)
#     assert initiator.upper() == firstFunder.upper()
#     assert assetID == firstAssetID
#     assert amount == firstFunderSharesToSell
#     assert price == firstFunderPrice
