from deploy import deployContracts


def mine(chain, numBlocks):
    chain.web3.testing.mine(numBlocks)
    return

def getBlockNumber(chain):
    return chain.web3.eth.blockNumber

def getBlockAttribute(chain, blockNumber):
    return chain.web3.eth.getBlock(blockNumber) 
#     AttributeDict({
#     'difficulty': 49824742724615,
#     'extraData': '0xe4b883e5bda9e7a59ee4bb99e9b1bc',
#     'gasLimit': 4712388,
#     'gasUsed': 21000,
#     'hash': '0xc0f4906fea23cf6f3cce98cb44e8e1449e455b28d684dfa9ff65426495584de6',
#     'logsBloom': '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
#     'miner': '0x61c808d82a3ac53231750dadc13c777b59310bd9',
#     'nonce': '0x3b05c6d5524209f1',
#     'number': 2000000,
#     'parentHash': '0x57ebf07eb9ed1137d41447020a25e51d30a0c272b5896571499c82c33ecb7288',
#     'receiptRoot': '0x84aea4a7aad5c5899bd5cfc7f309cc379009d30179316a2a7baa4a2ea4a438ac',
#     'sha3Uncles': '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
#     'size': 650,
#     'stateRoot': '0x96dbad955b166f5119793815c36f11ffa909859bbfeb64b735cca37cbf10bef1',
#     'timestamp': 1470173578,
#     'totalDifficulty': 44010101827705409388,
#     'transactions': ['0xc55e2b90168af6972193c1f86fa4d7d7b31a29c156665d15b9cd48618b5177ef'],
#     'transactionsRoot': '0xb31f174d27b99cdae8e746bd138a01ce60d8dd7b224f7c60845914def05ecc58',
#     'uncles': [],
# })

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


def test_successfulFunding(chain):
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

    #---------------Burn Tokens to Gain Authorization to Create Asset---------------
    firstAssetManager = accounts[9]
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstAssetManager)) == 1 
    assert burnForAccess(myBitToken, tokenBurn, firstAssetManager, 2)
    numberOfTokensBurnt =  database.call().uintStorage(hashFunctions.call().sha3("numberOfTokensBurnt")) 
    assert numberOfTokensBurnt == accessCost[2]
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstAssetManager)) == 2

    #------------Change funding percentages------------------
    myBPercentage = 3
    stakePercentage = 1
    installerPercentage = 96
    paramHash = hashFunctions.call().uintUintUint(myBPercentage, stakePercentage, installerPercentage)
    txHash = owned.transact().setFunctionAuthorized(assetCreation.address, "changeFundingPercentages", paramHash)
    txHash = assetCreation.transact({"from": ownerTwo}).changeFundingPercentages(myBPercentage, stakePercentage, installerPercentage, ownerOne)
    assert database.call().uintStorage(hashFunctions.call().sha3("myBitFoundationPercentage")) == myBPercentage
    assert database.call().uintStorage(hashFunctions.call().sha3("stakedTokenPercentage")) == stakePercentage
    assert database.call().uintStorage(hashFunctions.call().sha3("installerPercentage")) == installerPercentage

    # ------------Create Asset Info------------------------
    firstAssetID = hashFunctions.call().sha3("afakestoragehash")
    firstProjectGoal = convertEtherToWei(chain, 20)
    assetInstaller = hashFunctions.call().sha3("SolarCity")
    solarAssetType = hashFunctions.call().sha3("SolarFarm")
    managerPercentage = 98

    # ---------------Create First Asset---------------------------
    assert assetCreation.call({"from": firstAssetManager}).newAsset(firstAssetID, firstProjectGoal, managerPercentage, assetInstaller, solarAssetType)
    txHash = assetCreation.transact({"from": firstAssetManager}).newAsset(firstAssetID, firstProjectGoal, managerPercentage, assetInstaller, solarAssetType)
    receipt = getReceiptMined(chain, txHash)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 1
    assert database.call().uintStorage(hashFunctions.call().stringBytes("amountToBeRaised", firstAssetID)) == firstProjectGoal


    # ---------------Testing Asset funding-----------------------
    # First funder 
    firstFunder = accounts[1]
    fundingAmount = convertEtherToWei(chain, 5)
    assert burnForAccess(myBitToken, tokenBurn, firstFunder, 2)
    numberOfTokensBurnt += accessCost[2]
    assert numberOfTokensBurnt == accessCost[2] * 2
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstFunder)) == 2
    txHash = fundingHub.transact({"from": firstFunder, "value":fundingAmount}).fund(firstAssetID)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID)) == fundingAmount
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
    assert  amountRaised == (fundingAmount * 2) + secondFundingAmount + thirdFundAmount
    assert amountRaised == firstProjectGoal

    # Check share amounts were set properly
    assert fundingAmount * 2 == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, firstFunder))
    assert secondFundingAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, secondFunder))
    assert thirdFundAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, thirdFunder))

    # ---------------Check Payout Mechanism-----------------------
    txHash = fundingHub.transact().payout(firstAssetID)

    # Check stages and amountraise were set properly 
    fundedAmount = (fundingAmount * 2) + secondFundingAmount + thirdFundAmount
    assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 4
    amountRaised = database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID))
    assert 0 == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, firstAssetManager))
    assert fundedAmount == amountRaised

    # -----------------------------Asset start receiving payments-----------------------------------
    firstROIPayment = convertEtherToWei(chain, 10)

    # -------------------Get Percentage of Shares For All Funders----------------------------------
    firstFunderPercentageOfShares = getShares(database, hashFunctions, firstAssetID, firstFunder) / amountRaised
    secondFunderPercentageOfShares = getShares(database, hashFunctions, firstAssetID, secondFunder) / amountRaised
    thirdFunderPercentageOfShares = getShares(database, hashFunctions, firstAssetID, thirdFunder) / amountRaised
    assert  firstFunderPercentageOfShares + secondFunderPercentageOfShares + thirdFunderPercentageOfShares == 1

    # ---------------------------Check Receiving ROI---------------------------------------
    assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 4
    pretendNote = hashFunctions.call().sha3("First ROI Payment")
    asset.transact({"value": firstROIPayment}).receiveIncome(firstAssetID, pretendNote)
    firstROIPayment = firstROIPayment - (firstROIPayment * (managerPercentage / 100))
    assert database.call().uintStorage(hashFunctions.call().stringBytes("totalReceived", firstAssetID)) == firstROIPayment 

    # ----------------Check First Funder Withdraw-----------
    txHash = asset.transact({"from": firstFunder}).withdraw(firstAssetID, False)
    firstFunderROI = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, firstFunder))
    assert database.call().uintStorage(hashFunctions.call().stringBytes("totalPaidToFunders", firstAssetID)) == firstFunderROI
    # Get percentage of shares first funder 
    assert firstFunderROI - (firstROIPayment * firstFunderPercentageOfShares) == 0

    # ----------Check Second Funder Withdraw---------------
    txHash = asset.transact({"from": secondFunder}).withdraw(firstAssetID, False)
    secondFunderROI = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, secondFunder))
    # Get percentage of shares second funder 
    assert secondFunderROI == (firstROIPayment * secondFunderPercentageOfShares)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("totalPaidToFunders", firstAssetID)) == (firstFunderROI + secondFunderROI)

    # -----------Check Third Funder Withdraw--------
    txHash = asset.transact({"from": thirdFunder}).withdraw(firstAssetID, False)
    thirdFunderROI = database.call().uintStorage(hashFunctions.call().stringBytesAddress("totalPaidToFunder", firstAssetID, thirdFunder))
    # Get percentage of shares third funder
    assert thirdFunderROI == (firstROIPayment * thirdFunderPercentageOfShares)
    totalPaidToFunders = database.call().uintStorage(hashFunctions.call().stringBytes("totalPaidToFunders", firstAssetID))
    assert totalPaidToFunders == firstFunderROI + secondFunderROI + thirdFunderROI 
    assert totalPaidToFunders == firstROIPayment


# -------------------------------_Create Second Asset-----------------------------------
    #----------Burn Tokens to Create Asset---------------
    secondAssetCreator = accounts[8]
    assert burnForAccess(myBitToken, tokenBurn, secondAssetCreator, 2)
    assert getAccessLevel(database, hashFunctions, secondAssetCreator) == 2

    # -------------------Test second newAsset()--------------------------
    secondAssetID = hashFunctions.call().sha3("atm storage on ipfs")
    atmAssetType = hashFunctions.call().sha3("BTCATM")
    secondProjectGoal = convertEtherToWei(chain, 200)
    atmAssetInstaller = hashFunctions.call().sha3("ATMInstaller")
    assetManagerPercentage = 15 
    assert assetCreation.call({"from": secondAssetCreator}).newAsset(secondAssetID, secondProjectGoal, assetManagerPercentage, atmAssetInstaller, atmAssetType)
    txHash = assetCreation.transact({"from": secondAssetCreator}).newAsset(secondAssetID, secondProjectGoal, assetManagerPercentage, atmAssetInstaller, atmAssetType)
    # Remove user. Asset will continue to be funded
    txHash = userAccess.transact().removeUser(secondAssetCreator)
    assert getAccessLevel(database, hashFunctions, secondAssetCreator) == 0
    # Create First funder 
    firstFunder = accounts[1]
    assert getAccessLevel(database, hashFunctions, firstFunder) == 2
    # Check stage 
    assert getFundingStage(database, hashFunctions, secondAssetID) == 1
    txHash = fundingHub.transact({"from": firstFunder, "value":secondProjectGoal}).fund(secondAssetID)
    assert getFundingStage(database, hashFunctions, secondAssetID) == 3
    txHash = fundingHub.transact().payout(secondAssetID)


    # ------------Destroy AssetContract----------------------
    testBalance = test.call().getBalance()
    assetIncome = convertEtherToWei(chain, 3)
    txHash = asset.transact({"value": assetIncome}).receiveIncome(secondAssetID, pretendNote)  
    assetIncome = assetIncome - (assetIncome * (assetManagerPercentage / 100))
    beneficiaryHash = hashFunctions.call().addressHash(test.address)
    txHash = owned.transact().setFunctionAuthorized(asset.address, "destroy", beneficiaryHash)
    authorizedHash = hashFunctions.call().getAuthorizeHash(asset.address, accounts[0], "destroy", beneficiaryHash)
    assert database.call().boolStorage(authorizedHash)
    txHash = asset.transact({"from": accounts[1]}).destroy(accounts[0], test.address)
    # assert asset.call().database() == database.address      # throws do to contract being destroyed
    assert test.call().getBalance() == testBalance + assetIncome


def test_refund(chain):
    # ------------------------------Deploy All Contracts-------------------------------

    # Constants 
    accounts = chain.web3.eth.accounts

    test, hashFunctions, database, contractManager, owned, userAccess, myBitToken, assetCreation, fundingHub, asset, stakingBank, bugBank, bugBounty, tokenStaking, marketPlace, tokenBurn = deployContracts(chain, accounts)

    # Set constant address variables
    myBitFoundation = accounts[4]
    assetEscrow = test.address
    ownerOne = accounts[0]  
    ownerTwo = accounts[1]
    ownerThree = accounts[2]


    # --------------Spread MyBit Tokens----------------------
    spreadMyBitTokens(myBitToken, accounts)

    # -------------Approve Users KYC-------------------
    assert kycApprove(userAccess, hashFunctions, database, accounts)

    #--------------Change Funding Time-------------------
    # Make it 100 seconds
    newFundingTime = 1000
    assetCreation.transact().changeFundingTime(newFundingTime)
    assert assetCreation.call().fundingTime() == newFundingTime

    #------------Change funding percentages------------------
    myBPercentage = 3
    stakePercentage = 1
    installerPercentage = 96
    paramHash = hashFunctions.call().uintUintUint(myBPercentage, stakePercentage, installerPercentage)
    txHash = owned.transact().setFunctionAuthorized(assetCreation.address, "changeFundingPercentages", paramHash)
    txHash = assetCreation.transact({"from": ownerTwo}).changeFundingPercentages(myBPercentage, stakePercentage, installerPercentage, ownerOne)
    assert database.call().uintStorage(hashFunctions.call().sha3("myBitFoundationPercentage")) == myBPercentage
    assert database.call().uintStorage(hashFunctions.call().sha3("stakedTokenPercentage")) == stakePercentage
    assert database.call().uintStorage(hashFunctions.call().sha3("installerPercentage")) == installerPercentage

    #---------------Burn Tokens to Gain Authorization to Create Asset---------------
    firstAssetManager = accounts[9]
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstAssetManager)) == 1 
    assert burnForAccess(myBitToken, tokenBurn, firstAssetManager, 2)
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", firstAssetManager)) == 2

    # # ------------Create Asset Info------------------------
    firstAssetID = hashFunctions.call().sha3("afakestoragehash")
    firstProjectGoal = convertEtherToWei(chain, 200000)
    assetInstaller = hashFunctions.call().sha3("SolarCity")
    solarAssetType = hashFunctions.call().sha3("SolarFarm")
    managerPercentage = 7

    # ---------------Create First Asset---------------------------
    assert assetCreation.call({"from": firstAssetManager}).newAsset(firstAssetID, firstProjectGoal, managerPercentage, assetInstaller, solarAssetType)
    txHash = assetCreation.transact({"from": firstAssetManager}).newAsset(firstAssetID, firstProjectGoal, managerPercentage, assetInstaller, solarAssetType)
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

    # Exhaust the funding period
    while (getTimestamp(chain, getBlockNumber(chain)) < database.call().uintStorage(hashFunctions.call().stringBytes("fundingDeadline", firstAssetID))):
        mine(chain, 10)


    # Shouldn't have succeeded funding stage
    assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 1
    amountRaised = database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID))
    assert  amountRaised == (fundingAmount + secondFundingAmount + thirdFundAmount)

    # Check share amounts were set properly
    assert fundingAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, firstFunder))
    assert secondFundingAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, secondFunder))
    assert thirdFundAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, thirdFunder))

    # Initiate Refund 
    txHash = fundingHub.transact().initiateRefund(firstAssetID)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 2

    # Refund funderOne
    txHash = fundingHub.transact({"from": firstFunder}).refund(firstAssetID)
    assert getShares(database, hashFunctions, firstAssetID, firstFunder) == 0
    assert database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID)) == secondFundingAmount + thirdFundAmount

    # Refund funderTwo 
    txHash = fundingHub.transact({"from": secondFunder}).refund(firstAssetID)
    assert getShares(database, hashFunctions, firstAssetID, secondFunder) == 0
    assert database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID)) == thirdFundAmount

    # Refund funderThree
    txHash = fundingHub.transact({"from": thirdFunder}).refund(firstAssetID)
    assert getShares(database, hashFunctions, firstAssetID, thirdFunder) == 0
    assert database.call().uintStorage(hashFunctions.call().stringBytes("amountRaised", firstAssetID)) == 0


    # Test Removing Assets
    txHash = owned.transact().setFunctionAuthorized(assetCreation.address, "removeAsset", firstAssetID)
    txHash = assetCreation.transact({"from": ownerTwo}).removeAsset(firstAssetID, ownerOne)
    assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", firstAssetID)) == 5



# // Note: this takes a long time to finish
def test_recursiveFunding(chain):

    # Constants 
    accounts = chain.web3.eth.accounts

    test, hashFunctions, database, contractManager, owned, userAccess, myBitToken, assetCreation, fundingHub, asset, stakingBank, bugBank, bugBounty, tokenStaking, marketPlace, tokenBurn = deployContracts(chain, accounts)

    # Set constant address variables
    myBitFoundation = accounts[4]
    assetEscrow = test.address
    ownerOne = accounts[0]  
    ownerTwo = accounts[1]
    ownerThree = accounts[2]


    # --------------Spread MyBit Tokens----------------------
    spreadMyBitTokens(myBitToken, accounts)

    # -------------Approve Users KYC-------------------
    assert kycApprove(userAccess, hashFunctions, database, accounts)

    # ----------------------Create many assets and fund them with many small transactions---------------------------
    for i in range(len(accounts)):
      assert burnForAccess(myBitToken, tokenBurn, accounts[i], 3)

    fundingHubBalance = 0
    thisAssetManager = accounts[3]

    for i in range(98):
        # # ------------Create Asset Info------------------------
        randomHash = hashFunctions.call().uintHash(i)
        thisAssetID = hashFunctions.call().stringBytes("newhash", randomHash)
        thisProjectGoal = convertEtherToWei(chain, 2000)
        assetInstaller = hashFunctions.call().sha3("SolarNodes")
        solarAssetType = hashFunctions.call().sha3("SolarFarm")
        managerPercentage = 1 + i


        # ---------------Create First Asset---------------------------
        txHash = assetCreation.transact({"from": thisAssetManager}).newAsset(thisAssetID, thisProjectGoal, managerPercentage, assetInstaller, solarAssetType)
        assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", thisAssetID)) == 1
        assert database.call().uintStorage(hashFunctions.call().stringBytes("amountToBeRaised", thisAssetID)) == thisProjectGoal

        for acc in range(len(accounts)):
            thisFunder = accounts[acc]

            # First funder 
            fundingAmount = convertEtherToWei(chain, 1)
            txHash = fundingHub.transact({"from": thisFunder, "value":fundingAmount}).fund(thisAssetID)
            fundingHubBalance += fundingAmount


        # Test Removing Assets
        txHash = owned.transact().setFunctionAuthorized(assetCreation.address, "removeAsset", thisAssetID)
        txHash = assetCreation.transact({"from": ownerTwo}).removeAsset(thisAssetID, ownerOne)
        assert database.call().uintStorage(hashFunctions.call().stringBytes("fundingStage", thisAssetID)) == 5



    # ------------Destroy FundingHubContract----------------------
    testBalance = test.call().getBalance()
    beneficiaryHash = hashFunctions.call().addressHash(test.address)
    txHash = owned.transact().setFunctionAuthorized(fundingHub.address, "destroy", beneficiaryHash)
    authorizedHash = hashFunctions.call().getAuthorizeHash(fundingHub.address, ownerOne, "destroy", beneficiaryHash)
    assert database.call().boolStorage(authorizedHash)
    txHash = fundingHub.transact({"from": ownerTwo}).destroy(ownerOne, test.address)
    # assert asset.call().database() == database.address      # throws due to contract being destroyed
    assert test.call().getBalance() == testBalance + fundingHubBalance



