import binascii
from sha3 import keccak_256
from deploy import deployContracts


def mine(chain, numBlocks):
    chain.web3.testing.mine(numBlocks)
    return

def getBlockNumber(chain):
    return chain.web3.eth.blockNumber

def getBlockAttribute(chain, blockNumber):
    return chain.web3.eth.getBlock(blockNumber) 

def getTimestamp(chain, blockNumber):
    blockAttribute = getBlockAttribute(chain, blockNumber)
    return blockAttribute['timestamp']

def getReceiptMined(chain, txHash):
    return chain.wait.for_receipt(txHash)

def isChecksum(chain, addr):
    return chain.web3.isChecksumAddress(addr)

def convertEtherToWei(chain, _amountEther):
    return chain.web3.toWei(_amountEther, 'ether')

def convertWeiToEther(chain, _amountWei):
    return chain.web3.fromWei(_amountWei, 'ether')

def getGasUsed(receipt):
    return receipt['logs'][0]['cumulativeGasUsed']

def getHashOf(_hashFunctions, someString):
    return _hashFunctions.call().sha3(someString)

def getShares(database, hashFunctions, assetID, userAddress):
  return database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", assetID, userAddress))

def getAccessLevel(database, hashFunctions, userAddress):
  return database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", userAddress))

def getFundingStage(database, hashFunctions, assetID):
  return database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", assetID))



def spreadMyBitTokens(myBitContract, accounts):
    amountToGive = 100000
    for i in range(1, len(accounts)):
        myBitContract.transact().transfer(accounts[i], amountToGive)
        assert myBitContract.call().balanceOf(accounts[i]) == amountToGive
    return True


def burnForAccess(tokenContract, burnContract, thisAddress, accesslevel):
    accessCost = {}
    accessCost[2] = 10;
    accessCost[3] = 100;
    accessCost[4] = 1000;
    userBalance = tokenContract.call().balanceOf(thisAddress)
    assert userBalance > accessCost[accesslevel]
    tokenContract.transact({"from": thisAddress}).approve(burnContract.address, accessCost[accesslevel])
    assert tokenContract.call().allowance(thisAddress, burnContract.address) == accessCost[accesslevel]
    txHash = burnContract.transact({"from": thisAddress}).burnTokens(accesslevel)
    return tokenContract.call().balanceOf(thisAddress) == (userBalance - accessCost[accesslevel])


def kycApprove(userAccess, hashFunctions, database, accounts):
    for i in range(len(accounts)):
        userAccess.transact().approveUser(accounts[i], 1)
        assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", accounts[i])) == 1
    return True

def getShares(database, hashFunctions, assetID, userAddress):
  return database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", assetID, userAddress))

def getAccessLevel(database, hashFunctions, userAddress):
  return database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", userAddress))

def getFundingStage(database, hashFunctions, assetID):
  return database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", assetID))


def test_pause(chain):
    # Constants 
    accounts = chain.web3.eth.accounts
    accessCost = {}
    accessCost[2] = 10;
    accessCost[3] = 100;
    accessCost[4] = 1000;

    test, hashFunctions, database, contractManager, owned, userAccess, myBitToken, assetCreation, fundingHub, asset, stakingBank, bugBank, bugBounty, tokenStaking, marketPlace, tokenBurn = deployContracts(chain, accounts)

    ownerOne = accounts[0]
    ownerTwo = accounts[1]
    ownerThree = accounts[2]
    myBitFoundation = accounts[4]
    assetEscrow = test.address

    # --------------Spread MyBit Tokens----------------------
    spreadMyBitTokens(myBitToken, accounts)

    # -------------Approve Users KYC-------------------
    assert kycApprove(userAccess, hashFunctions, database, accounts)

# ---------------Burn Tokens to Gain Authorization to Create Asset---------------
    assetManager = accounts[9]
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", assetManager)) == 1 
    assert burnForAccess(myBitToken, tokenBurn, assetManager, 2)
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", assetManager)) == 2

    # # ------------Create Asset Info------------------------
    firstAssetID = hashFunctions.call().sha3("afakestoragehash")
    firstProjectGoal = convertEtherToWei(chain, 20)
    assetInstaller = hashFunctions.call().sha3("SolarCity")
    solarAssetType = hashFunctions.call().sha3("SolarRoof")
    firstManagerPercentage = 10


    # #----------------------- Pause1 Asset Creation------------------------------------ 
    txHash = owned.transact().pause(assetCreation.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", assetCreation.address)) 
    # Fails as it should
    # assert assetCreation.call({"from": assetManager}).newAsset(firstAssetID, firstProjectGoal, firstManagerPercentage, assetInstaller, solarAssetType) == False
    txHash = owned.transact().unpause(assetCreation.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", assetCreation.address)) == False



    # ---------------Create First Asset---------------------------
    assert assetCreation.call({"from": assetManager}).newAsset(firstAssetID, firstProjectGoal, firstManagerPercentage, assetInstaller, solarAssetType)
    txHash = assetCreation.transact({"from": assetManager}).newAsset(firstAssetID, firstProjectGoal, firstManagerPercentage, assetInstaller, solarAssetType)
    receipt = getReceiptMined(chain, txHash)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 1
    assert database.call().uintStorage(hashFunctions.call().stringBytes("amountToBeRaised", firstAssetID)) == firstProjectGoal


    # ---------------Testing Asset funding-----------------------
    # First funder 
    firstFunder = accounts[1]
    fundingAmount = int(firstProjectGoal / 2)
    assert burnForAccess(myBitToken, tokenBurn, firstFunder, 2)
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstFunder)) == 2
    txHash = fundingHub.transact({"from": firstFunder, "value":fundingAmount}).fund(firstAssetID)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID)) == fundingAmount

    # -------------------Pause2 Asset Funding---------------------
    txHash = owned.transact().pause(fundingHub.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", fundingHub.address)) 
    # Fails as it should 
    # txHash = fundingHub.transact({"from": firstFunder, "value":fundingAmount}).fund(firstAssetID)
    txHash = owned.transact().unpause(fundingHub.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", fundingHub.address)) == False

    # second funder funds asset
    secondFunder = accounts[4]
    secondFundingAmount = int(firstProjectGoal / 2)
    assert burnForAccess(myBitToken, tokenBurn, secondFunder, 2)
    txHash = fundingHub.transact({"from": secondFunder, "value":fundingAmount}).fund(firstAssetID)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID)) == fundingAmount * 2


    # Should have succeeded funding stage
    assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 3
    amountRaised = database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID))
    assert  amountRaised == convertEtherToWei(chain, 20)




    # ---------------Check Payout Mechanism-----------------------

    #-----------Pause3 payout mechanism-----------------
    txHash = owned.transact().pause(fundingHub.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", fundingHub.address)) 
    txHash = owned.transact().unpause(fundingHub.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", fundingHub.address)) == False

    # Payout
    txHash = fundingHub.transact().payout(firstAssetID)

    # ---------------------------Check Receiving ROI---------------------------------------
    firstROIPayment = convertEtherToWei(chain, 3)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 4
    asset.transact({"value": firstROIPayment}).receiveIncome(firstAssetID, "First ROI payment")
    assert database.call().uintStorage(hashFunctions.call().stringBytes("totalReceived", firstAssetID)) == firstROIPayment - (firstROIPayment * (firstManagerPercentage / 100))

    # ------------------- pause4 funder withdraw mechanism-----------------------
    txHash = owned.transact().pause(asset.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", asset.address)) 
    # Withdraw fails as it should
    # asset.transact({"from": firstFunder}).withdraw(firstAssetID, False)
    txHash = owned.transact().unpause(asset.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", asset.address)) == False

    # ----------------Check First Funder Withdraw-----------
    asset.transact({"from": firstFunder}).withdraw(firstAssetID, False)
    firstFunderROI = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, firstFunder))
    assert database.call().uintStorage(hashFunctions.call().stringBytes("totalPaidToFunders", firstAssetID)) == firstFunderROI


    # -------------------Check second funder withdraw-------------------------
    asset.transact({"from": secondFunder}).withdraw(firstAssetID, False)
    secondFunderROI = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, secondFunder))
    assert database.call().uintStorage(hashFunctions.call().stringBytes("totalPaidToFunders", firstAssetID)) == firstFunderROI + secondFunderROI
    assert database.call().uintStorage(hashFunctions.call().stringBytes("totalPaidToFunders", firstAssetID)) == database.call().uintStorage(hashFunctions.call().stringBytes("totalReceived", firstAssetID))


    # -------------pause5 burning tokens--------------------
    txHash = owned.transact().pause(tokenBurn.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", tokenBurn.address)) 
      # Burning tokens fails as it should
    # for i in range(1, 5):
    #     assert burnForAccess(myBitToken, tokenBurn, accounts[i], 4)
    #     assert getAccessLevel(database, hashFunctions, accounts[i]) == 4
    txHash = owned.transact().unpause(tokenBurn.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", tokenBurn.address)) == False


    # -------Burn tokens to access marketplace -------------------
    for i in range(1, 5):
        assert burnForAccess(myBitToken, tokenBurn, accounts[i], 4)
        assert getAccessLevel(database, hashFunctions, accounts[i]) == 4


    # ------Create Simple Buy Order from Funder One and sell Funder Two's shares--------
    # Calculate amount of shares and price of shares
    firstFunderSharesToBuy = convertEtherToWei(chain, 2)    
    firstFunderPrice = 10
    firstFunderBuyValue = firstFunderSharesToBuy * firstFunderPrice

    # get the buy order hash 
    buyOrderHashOne = hashFunctions.call().getOrderID(firstAssetID, firstFunder, firstFunderSharesToBuy, firstFunderPrice, True)
    txHash = marketPlace.transact({"from": firstFunder, "value": firstFunderBuyValue}).createBuyOrder(firstAssetID, firstFunderSharesToBuy, firstFunderPrice)

    # Check that buy order variables were set properly 
    assert marketPlace.call().weiDeposited(firstFunder) == firstFunderBuyValue
    assert marketPlace.call().orders(firstFunder, buyOrderHashOne)


    # ------------------- pause6 trade assets mechanism-----------------------
    txHash = owned.transact().pause(asset.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", asset.address)) 
    # Selling asset fails as it should
    # txHash = marketPlace.transact({"from": secondFunder}).sellAsset(firstAssetID, firstFunder, firstFunderSharesToBuy, firstFunderPrice)
    txHash = owned.transact().unpause(asset.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", asset.address)) == False


    # FunderTwo fills the buy order (first time)
    txHash = marketPlace.transact({"from": secondFunder}).sellAsset(firstAssetID, firstFunder, firstFunderSharesToBuy, firstFunderPrice)
    assert marketPlace.call().weiOwed(secondFunder) == firstFunderBuyValue 
    assert marketPlace.call().weiDeposited(firstFunder) == 0 

    # --------------------pause7 withdraw mechanism---------------------
    txHash = owned.transact().pause(asset.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", asset.address)) 
    txHash = marketPlace.transact({"from": secondFunder}).withdraw() 
    txHash = owned.transact().unpause(asset.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", asset.address)) == False

    # secondFunder withdraws Ether 
    txHash = marketPlace.transact({"from": secondFunder}).withdraw() 
    assert marketPlace.call().weiOwed(secondFunder) == 0
