import binascii
import math
from sha3 import keccak_256


def mine(chain, numBlocks):
    chain.web3.testing.mine(numBlocks)
    return

def getBlockNumber(chain):
    return chain.web3.eth.blockNumber

def getTimestamp(chain, blockNumber):
    blockAttribute = getBlockAttribute(chain, blockNumber)
    return blockAttribute['timestamp']

def getReceiptMined(chain, txHash):
    return chain.wait.for_receipt(txHash)

def convertEtherToWei(chain, _amountEther):
    return chain.web3.toWei(_amountEther, 'ether')

def convertWeiToEther(chain, _amountWei):
    return chain.web3.fromWei(_amountWei, 'ether')

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
    tokenContract.transact({"from": thisAddress}).approve(burnContract.address, accessCost[accesslevel])
    assert tokenContract.call().allowance(thisAddress, burnContract.address) == accessCost[accesslevel]
    burnContract.transact({"from": thisAddress}).burnTokens(accesslevel)
    assert burnContract.call().numTokensBurnt() >= accessCost[accesslevel]
    return tokenContract.call().balanceOf(thisAddress) == (userBalance - accessCost[accesslevel])



def kycApprove(userAccess, hashFunctions, database, accounts):
    for i in range(len(accounts)):
        userAccess.transact().approveUser(accounts[i], 1)
        assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", accounts[i])) == 1
    return True


def getHashOf(_hashFunctions, someString):
    return _hashFunctions.call().sha3(someString)

def getShares(database, hashFunctions, assetID, userAddress):
  return database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", assetID, userAddress))

def getAccessLevel(database, hashFunctions, userAddress):
  return database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", userAddress))

def getFundingStage(database, hashFunctions, assetID):
  return database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", assetID))


# ------------------------All the pause mechanisms were checked, but commented out as it causes transactions to fail----------------
# Search "pause1, pause2, pause3....." to find the pause points 

def test_pause(chain):
    # ------------------------------Deploy All Contracts-------------------------------

    # Deploy Test contract + Hashing helper 
    test, _ = chain.provider.get_or_deploy_contract("Test")
    hashFunctions, _ = chain.provider.get_or_deploy_contract('HashFunctions')   # This is just used as a helper for built in hash functions

    # Constants 
    accounts = chain.web3.eth.accounts
    myBitFoundation = accounts[4]
    assetEscrow = test.address
    totalSupply = 281207344012426

    ownerOne = accounts[0]
    ownerTwo = accounts[1]
    ownerThree = accounts[2]

    # Deploy Database + test ownership
    database, _ = chain.provider.get_or_deploy_contract('Database', deploy_args=[ownerOne, ownerTwo, ownerThree])
    assert database.call().boolStorage(hashFunctions.call().stringAddress("owner", ownerOne))
    assert database.call().boolStorage(hashFunctions.call().stringAddress("owner", ownerTwo))
    assert database.call().boolStorage(hashFunctions.call().stringAddress("owner", ownerThree))


    # Deploy ContractManager & tell database about it 
    contractManager, _ = chain.provider.get_or_deploy_contract('ContractManager', deploy_args=[database.address])
    txHash = database.transact().setContractManager(contractManager.address)
    assert database.call().addressStorage(hashFunctions.call().contractHash("ContractManager")).upper() == contractManager.address.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", contractManager.address))

    # Deploy Owned
    owned, _ = chain.provider.get_or_deploy_contract('Owned', deploy_args=[database.address])
    txHash = contractManager.transact().addContract("Owned", owned.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("Owned")).upper() == owned.address.upper()

    # Deploy UserAccess
    userAccess, _ = chain.provider.get_or_deploy_contract('UserAccess', deploy_args=[database.address])
    txHash = contractManager.transact().addContract("UserAccess", userAccess.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("UserAccess")).upper() == userAccess.address.upper()

    # Set MyBitToken
    myBitToken, _ = chain.provider.get_or_deploy_contract('MyBitToken', deploy_args=[totalSupply, "MyBit Token", 8, "MyB"])
    contractManager.transact().addContract("MyBitToken", myBitToken.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("MyBitToken")).upper() == myBitToken.address.upper()

    # Deploy assetCreation 
    assetCreation, _ = chain.provider.get_or_deploy_contract('AssetCreation', deploy_args=[database.address])
    contractManager.transact().addContract("AssetCreation", assetCreation.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("AssetCreation")).upper() == assetCreation.address.upper()
    
    # Init Asset Creation 
    txHash = assetCreation.transact().init()
    assert database.call().uintStorage(hashFunctions.call().sha3("fundingTime")) == 3000

    # Deploy FundingHub
    fundingHub, _ = chain.provider.get_or_deploy_contract('FundingHub', deploy_args=[database.address])
    contractManager.transact().addContract("FundingHub", fundingHub.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("FundingHub")).upper() == fundingHub.address.upper()

    # Deploy Asset
    asset, _ = chain.provider.get_or_deploy_contract('Asset', deploy_args=[database.address])
    contractManager.transact().addContract("Asset", asset.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("Asset")).upper() == asset.address.upper()

    # Deploy TokenStake
    tokenStake, _ = chain.provider.get_or_deploy_contract('TokenStake', deploy_args=[myBitToken.address, database.address])
    contractManager.transact().addContract("TokenStake", tokenStake.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("TokenStake")).upper() == tokenStake.address.upper()

    # Deploy Marketplace
    marketPlace, _ = chain.provider.get_or_deploy_contract('MarketPlace', deploy_args=[database.address])
    contractManager.transact().addContract("MarketPlace", marketPlace.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("MarketPlace")).upper() == marketPlace.address.upper()

    # Deploy BugBounty escrow
    bugEscrow, _ = chain.provider.get_or_deploy_contract('BugEscrow', deploy_args=[database.address])
    contractManager.transact().addContract("BugEscrow", bugEscrow.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("BugEscrow")).upper() == bugEscrow.address.upper()

    # Set AssetEscrow reference
    txHash = contractManager.transact().addContract("AssetEscrow", assetEscrow, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("AssetEscrow")).upper() == assetEscrow.upper()

    # Set MyBitFoundation reference 
    txHash = contractManager.transact().addContract("MyBitFoundation", myBitFoundation, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("MyBitFoundation")).upper() == myBitFoundation.upper()

    # Deploy TokenBurn    
    tokenBurn, _ = chain.provider.get_or_deploy_contract('TokenBurn', deploy_args=[myBitToken.address, database.address])
    contractManager.transact().addContract("TokenBurn", tokenBurn.address, ownerTwo)
    assert database.call().addressStorage(hashFunctions.call().contractHash("TokenBurn")).upper() == tokenBurn.address.upper()

    # Set deploy finished in contract manager 
    txHash = contractManager.transact().setDeployFinished()
    assert database.call().boolStorage(hashFunctions.call().sha3("deployFinished"))

    # --------------Spread MyBit Tokens----------------------
    spreadMyBitTokens(myBitToken, accounts)

    # -------------Approve Users KYC-------------------
    assert kycApprove(userAccess, hashFunctions, database, accounts)

# ---------------Burn Tokens to Gain Authorization to Create Asset---------------
    firstAssetCreator = accounts[9]
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstAssetCreator)) == 1 
    assert burnForAccess(myBitToken, tokenBurn, firstAssetCreator, 2)
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstAssetCreator)) == 2

    # # ------------Create Asset Info------------------------
    firstAssetID = hashFunctions.call().sha3("afakestoragehash")
    firstProjectGoal = convertEtherToWei(chain, 20)
    assetInstaller = hashFunctions.call().sha3("SolarCity")
    solarAssetType = hashFunctions.call().sha3("SolarRoof")


    # #----------------------- Pause1 Asset Creation------------------------------------ 
    txHash = owned.transact().pause(assetCreation.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", assetCreation.address)) 
    txHash = owned.transact().unpause(assetCreation.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", assetCreation.address)) == False



    # ---------------Create First Asset---------------------------
    assert assetCreation.call({"from": firstAssetCreator}).newAsset(firstAssetID, firstProjectGoal, assetInstaller, solarAssetType)
    txHash = assetCreation.transact({"from": firstAssetCreator}).newAsset(firstAssetID, firstProjectGoal, assetInstaller, solarAssetType)
    receipt = getReceiptMined(chain, txHash)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 1
    assert database.call().uintStorage(hashFunctions.call().stringBytes("amountToBeRaised", firstAssetID)) == firstProjectGoal


    # ---------------Testing Asset funding-----------------------
    # First funder 
    firstFunder = accounts[1]
    fundingAmount = convertEtherToWei(chain, 5)
    assert burnForAccess(myBitToken, tokenBurn, firstFunder, 2)
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstFunder)) == 2
    txHash = fundingHub.transact({"from": firstFunder, "value":fundingAmount}).fund(firstAssetID)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID)) == fundingAmount

    # -------------------Pause2 Asset Funding---------------------
    txHash = owned.transact().pause(fundingHub.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", fundingHub.address)) 
    txHash = owned.transact().unpause(fundingHub.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", fundingHub.address)) == False

    # Another funding from first funder
    txHash = fundingHub.transact({"from": firstFunder, "value":fundingAmount}).fund(firstAssetID)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID)) == fundingAmount * 2


    # Second Funder 
    secondFunder = accounts[2]
    assert burnForAccess(myBitToken, tokenBurn, secondFunder, 2)
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", secondFunder)) == 2
    secondFundingAmount = convertEtherToWei(chain, 5)
    txHash = fundingHub.transact({"from": secondFunder, "value":secondFundingAmount}).fund(firstAssetID)

    # Third funder 
    thirdFunder = accounts[3]
    assert burnForAccess(myBitToken, tokenBurn, thirdFunder, 2)
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", thirdFunder)) == 2
    thirdFundAmount = secondFundingAmount
    txHash = fundingHub.transact({"from": thirdFunder, "value":fundingAmount}).fund(firstAssetID)

    # Should have succeeded funding stage
    assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 3
    amountRaised = database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID))
    assert  amountRaised == convertEtherToWei(chain, 20)

    # Check share amounts were set properly
    assert fundingAmount * 2 == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, firstFunder))
    assert secondFundingAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, secondFunder))
    assert thirdFundAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, thirdFunder))



    # ---------------Check Payout Mechanism-----------------------

    #-----------Pause3 payout mechanism-----------------
    txHash = owned.transact().pause(fundingHub.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", fundingHub.address)) 
    txHash = owned.transact().unpause(fundingHub.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", fundingHub.address)) == False

    # Payout
    txHash = fundingHub.transact().payout(firstAssetID)


    # ---------------------------Check Receiving ROI---------------------------------------
    firstROIPayment = convertEtherToWei(chain, 10)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 4
    asset.transact({"value": firstROIPayment}).receiveIncome(firstAssetID, "First ROI payment")
    assert database.call().uintStorage(hashFunctions.call().stringBytes("totalReceived", firstAssetID)) == firstROIPayment

    # ----------------Check First Funder Withdraw-----------
    asset.transact({"from": firstFunder}).withdraw(firstAssetID)
    firstFunderROI = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, firstFunder))
    assert database.call().uintStorage(hashFunctions.call().stringBytes("totalPaidToFunders", firstAssetID)) == firstFunderROI
    # Get percentage of shares first funder 
    firstFunderPercentageOfShares = getShares(database, hashFunctions, firstAssetID, firstFunder) / amountRaised
    assert firstFunderROI == (firstROIPayment * firstFunderPercentageOfShares)

    # ------------------- pause4 funder withdraw mechanism-----------------------
    txHash = owned.transact().pause(asset.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", asset.address)) 
    txHash = owned.transact().unpause(asset.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", asset.address)) == False

    # ----------Check Second Funder Withdraw---------------
    asset.transact({"from": secondFunder}).withdraw(firstAssetID)
    secondFunderROI = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, secondFunder))
    # Get percentage of shares second funder 
    secondFunderPercentageOfShares = getShares(database, hashFunctions, firstAssetID, secondFunder) / amountRaised
    assert secondFunderROI == (firstROIPayment * secondFunderPercentageOfShares)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("totalPaidToFunders", firstAssetID)) == (firstFunderROI + secondFunderROI)

    # -----------Check Third Funder Withdraw--------
    asset.transact({"from": thirdFunder}).withdraw(firstAssetID)
    thirdFunderROI = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, thirdFunder))
    # Get percentage of shares third funder
    thirdFunderPercentageOfShares = getShares(database, hashFunctions, firstAssetID, thirdFunder) / amountRaised
    assert thirdFunderROI == (firstROIPayment * thirdFunderPercentageOfShares)
    totalPaidToFunders = database.call().uintStorage(hashFunctions.call().stringBytes("totalPaidToFunders", firstAssetID))
    assert totalPaidToFunders == firstFunderROI + secondFunderROI + thirdFunderROI
    assert totalPaidToFunders == firstROIPayment


    # -------------pause5 burning tokens--------------------
    txHash = owned.transact().pause(tokenBurn.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", tokenBurn.address)) 
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
    buyOrderHashOne = hashFunctions.call().getOrderID(firstFunder, firstAssetID)
    txHash = marketPlace.transact({"from": firstFunder, "value": firstFunderBuyValue}).createBuyOrder(firstFunderSharesToBuy, firstFunderPrice, firstAssetID)

    # Check that buy order variables were set properly 
    assert marketPlace.call().weiDeposited(firstFunder) == firstFunderBuyValue
    initiator, assetID, amount, price = marketPlace.call().buyOrders(buyOrderHashOne)
    assert initiator.upper() == firstFunder.upper()
    assert assetID == firstAssetID
    assert amount == firstFunderSharesToBuy
    assert price == firstFunderPrice
    firstFunderBuyAmount = price * amount 


    # ------------------- pause6 trade assets mechanism-----------------------
    txHash = owned.transact().pause(asset.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", asset.address)) 
    txHash = owned.transact().unpause(asset.address)
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", asset.address)) == False


    # FunderTwo fills the buy order (first time)
    txHash = marketPlace.transact({"from": secondFunder}).sellAsset(buyOrderHashOne)
    assert marketPlace.call().weiOwed(secondFunder) == firstFunderBuyAmount 
    assert marketPlace.call().weiDeposited(firstFunder) == 0 

    # secondFunder withdraws Ether 
    txHash = marketPlace.transact({"from": secondFunder}).withdraw() 
    assert marketPlace.call().weiOwed(secondFunder) == 0


