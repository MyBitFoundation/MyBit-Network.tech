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


def test_upgradeable(chain):
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
    assert amountRaised - fundedAmount == database.call().uintStorage(hashFunctions.call().stringBytesAddress("shares", firstAssetID, firstAssetManager))
    assert (fundedAmount / amountRaised) * 100 == 100 - managerPercentage


# ------------------------------------Upgrade ContractManagerAddress-----------------------------------------
    # Deploy ContractManager & tell database about it 
    ContractManager = chain.provider.get_contract_factory("ContractManager")
    txHash = ContractManager.deploy({"gas": 3000000}, args=[database.address])
    receipt = getReceiptMined(chain, txHash)
    contractManagerAddress = receipt['contractAddress']
    assert contractManager.address != contractManagerAddress
    # Authorize owner to update ContractManager contract
    keyParam = hashFunctions.call().addressHash(contractManagerAddress)
    txHash = owned.transact({"from": ownerOne}).setFunctionAuthorized(contractManager.address, "updateContract", keyParam)
    assert database.call().boolStorage(hashFunctions.call().getAuthorizeHash(contractManager.address, ownerOne, "updateContract", keyParam))
    txHash = contractManager.transact({"from": ownerTwo}).updateContract("ContractManager", contractManagerAddress, ownerOne)
    # Check successful update
    assert database.call().addressStorage(hashFunctions.call().contractHash("ContractManager")).upper() == contractManagerAddress.upper()
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", contractManager.address)) == False 
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", contractManagerAddress))
    # Test that new contract manager is able to make calls to database
    newContractManager = ContractManager(contractManagerAddress)
    txHash = newContractManager.transact().setDeployFinished()  
    # Check that old contract can't still make calls (fails as it should) 
    # txHash = contractManager.transact().setDeployFinished()

    # ---------------------- Remove TokenStaking Address -------------------------------
    # Try removing a contract 
    keyParam = hashFunctions.call().sha3("TokenStaking")
    txHash = owned.transact().setFunctionAuthorized(contractManagerAddress, "removeContract", keyParam)
    assert database.call().boolStorage(hashFunctions.call().getAuthorizeHash(contractManagerAddress, ownerOne, "removeContract", keyParam))
    # Remove TokenStaking
    txHash = newContractManager.transact({"from": ownerTwo}).removeContract("TokenStaking", ownerOne)
    receipt = getReceiptMined(chain, txHash)
    # Check contract was properly removed
    assert database.call().boolStorage(hashFunctions.call().stringAddress("contract", tokenStaking.address)) == False
    assert database.call().addressStorage(hashFunctions.call().contractHash("TokenStaking")) == hashFunctions.call().nullAddress()
    # Deploy new TokenStakingContract 
    TokenStaking = chain.provider.get_contract_factory("TokenStaking")
    txHash = TokenStaking.deploy({"gas": 4000000}, args=[database.address, myBitToken.address])
    receipt = getReceiptMined(chain, txHash)
    newTokenStakingAddress = receipt['contractAddress']
    # Authorize owner to update ContractManager contract 
    keyParam = hashFunctions.call().addressHash(newTokenStakingAddress)
    txHash = owned.transact().setFunctionAuthorized(contractManagerAddress, "addContract", keyParam)
    assert database.call().boolStorage(hashFunctions.call().getAuthorizeHash(contractManagerAddress, ownerOne, "addContract", keyParam))
    # Add TokenStaking 
    txHash = newContractManager.transact({"from": ownerTwo}).addContract("TokenStaking", newTokenStakingAddress, ownerOne)
    # Check if new tokenStaking contract is working 
    newTokenStaking = TokenStaking(newTokenStakingAddress)
    assert newTokenStaking.call().database().upper() == database.address.upper()
    # Gain access level by burning tokens
    assert burnForAccess(myBitToken, tokenBurn, ownerThree, 3)
    numberOfTokensBurnt =  database.call().uintStorage(hashFunctions.call().sha3("numberOfTokensBurnt")) 
    assert numberOfTokensBurnt > accessCost[3]
    assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", ownerThree)) == 3
