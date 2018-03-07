import math
from deploy import deployContracts

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

def spreadMyBitTokens(myBitTokenContract, accounts):
    amountToGive = 1000
    for i in range(1, len(accounts)):
        myBitTokenContract.transact().transfer(accounts[i], amountToGive)
        assert myBitTokenContract.call().balanceOf(accounts[i]) == amountToGive
    return True

def getGasUsed(receipt):
    return receipt['logs'][0]['cumulativeGasUsed']




# def watchEvent():
    # web3.utils.filters.LogFilter(web3, filter_id, log_entry_formatter=None, data_filter_set=None)
    # web3.eth.filter
    # event_filter = contract.eventFilter('Transfer',{'fromBlock':0,'toBlock':'latest'})
    # logs = event_filter.get_new_entries()

# event_signature_transfer = web3.Web3.sha3(text='Transfer(address,address,uint256)')
# event_filter = w3.eth.filter({'topics': [event_signature_transfer]})
# transfer_events = w3.eth.getFilterChanges(event_filter.filter_id)

# ... do something ...

# new_transfer_events = w3.eth.getFilterChanges(event_filter.filter_id)
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


def approveStaking(chain, stakingContract, tokenContract, thisUser, amount):
    txHash = tokenContract.transact({"from": thisUser}).approve(stakingContract.address, amount)
    return tokenContract.call().allowance(thisUser, stakingContract.address) >= amount

def getAmountStaked(database, hashFunctions, stakeID):
  return database.call().uintStorage(hashFunctions.call().stringBytes("amountStaked", stakeID))

def getHeadStaker(database, hashFunctions):
  return database.call().bytes32Storage(hashFunctions.call().sha3("headStaker"))

def getStakingRewardReceived(database, hashFunctions):
  return database.call().uintStorage(hashFunctions.call().sha3("stakingRewardReceived"))

def getBugBountyRewardReceived(database, hashFunctions):
  return database.call().uintStorage(hashFunctions.call().sha3("bugBountyRewardReceived"))



# # Note: Period Nonces don't update until contract is poked with a transaction
# def test_TokenStaking(chain):

#     # Constants 
#     accounts = chain.web3.eth.accounts
#     accessCost = {}
#     accessCost[2] = 10;
#     accessCost[3] = 100;
#     accessCost[4] = 1000;

#     # ------------------------------Deploy All Contracts-------------------------------
#     test, hashFunctions, database, contractManager, owned, userAccess, myBitToken, assetCreation, fundingHub, asset, stakingBank, bugBank, bugBounty, tokenStaking, marketPlace, tokenBurn = deployContracts(chain, accounts)

#     # --------------Spread MyBit Tokens----------------------
#     spreadMyBitTokens(myBitToken, accounts)


#     # -------------Approve Users KYC-------------------
#     assert kycApprove(userAccess, hashFunctions, database, accounts)

#     # Make sure not paused 
#     assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", tokenStaking.address)) == False

#     first = 1
#     last = 5
#     # -------------------Lock User Tokens-----------------------------------
#     for i in range(first, last + 1):
#         # Burn tokens to be able to lock tokens
#         assert burnForAccess(myBitToken, tokenBurn, accounts[i], 3)
#         assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", accounts[i])) == 3
#         assert getAccessLevel(database, hashFunctions, accounts[i]) == 3

#     # --------------------Stake 5 users---------------------------------------------------
#     # creates a linked list (accountOne <--- accountTwo <--- accountThree <--- accountFour <--- accountFive (head))

#     stakers = [{}]
#     for i in range(first, last + 1):
#       thisStaker = {}
#       headStaker = database.call().bytes32Storage(hashFunctions.call().sha3("headStaker"))
#       totalMyBitStaked = database.call().uintStorage(hashFunctions.call().sha3("totalMyBitStaked"))
#       amountToStake = 1000
#       assert approveStaking(chain, tokenStaking, myBitToken, accounts[i], amountToStake)
#       txHash = tokenStaking.transact({"from": accounts[i]}).stakeTokens(amountToStake)
#       receipt = getReceiptMined(chain, txHash)
#       blockNumber =  receipt['logs'][0]['blockNumber']
#       stakeID = hashFunctions.call().addressUintUint(accounts[i], blockNumber, amountToStake)
#       thisStaker['address'] = accounts[i]
#       thisStaker['id'] = stakeID
#       assert database.call().uintStorage(hashFunctions.call().stringBytes("amountStaked", stakeID)) == amountToStake
#       thisStaker['amountStaked'] = amountToStake
#       thisStaker['blockAtWithdraw'] = database.call().uintStorage(hashFunctions.call().stringBytes("blockAtWithdraw", stakeID))
#       thisStaker['nextStaker'] = database.call().bytes32Storage(hashFunctions.call().stringBytes("nextStaker", stakeID))
#       assert headStaker == thisStaker['nextStaker']
#       assert database.call().bytes32Storage(hashFunctions.call().sha3("headStaker")) == stakeID
#       assert getAmountStaked(database, hashFunctions, stakeID) == amountToStake
#       assert database.call().uintStorage(hashFunctions.call().sha3("totalMyBitStaked")) == totalMyBitStaked + thisStaker['amountStaked']
#       stakers.append(thisStaker)

#     assert stakers[last]['id'] == database.call().bytes32Storage(hashFunctions.call().sha3("headStaker"))
#     assert stakers[first + 1]['blockAtWithdraw'] < stakers[last]['blockAtWithdraw']

#     # Exhaust staking period   
#     currentBlock = getBlockNumber(chain)
#     while (currentBlock <= stakers[last]['blockAtWithdraw']):
#       mine(chain, 4)
#       currentBlock = getBlockNumber(chain)
#     assert stakers[1]['blockAtWithdraw'] < getBlockNumber(chain)


#     # ---------------------------Request Withdraw for all users-------------------------------
#     for i in range(first, last + 1):
#       totalMyBitStaked = database.call().uintStorage(hashFunctions.call().sha3("totalMyBitStaked"))
#       txHash = stakingBank.transact({"from": accounts[i]}).requestWithdraw(stakers[i]['id'])
#       assert database.call().boolStorage(hashFunctions.call().stringBytes("pendingWithdraw", stakers[i]['id']))
#       assert database.call().uintStorage(hashFunctions.call().sha3("totalMyBitStaked")) == totalMyBitStaked - stakers[i]['amountStaked']

#     # Exhaust withdraw waiting period
#     minimumWithdrawTime = database.call().uintStorage(hashFunctions.call().sha3("minimumWithdrawTime"))
#     while (getBlockNumber(chain) <= (stakers[last]['blockAtWithdraw'] + minimumWithdrawTime)):
#       mine(chain, 2)
#     assert stakers[last]['blockAtWithdraw'] + minimumWithdrawTime < getBlockNumber(chain)

#     # --------------------------------Unlock stakers---------------------------------

#     # -----------Remove head staker------------
#     stakeID = stakers[last]['id']
#     currentHead = getHeadStaker(database, hashFunctions)
#     assert currentHead == stakeID
#     previousStaker = hashFunctions.call().nullBytes()
#     nextStaker = stakers[last]['nextStaker']
#     assert stakers[first]['nextStaker'] == previousStaker   # previous stakers should be bytes32(0)
#     txHash = tokenStaking.transact({"from": accounts[last]}).removeStake(stakeID, previousStaker)
#     # Check that stakers was deleted + new head staker was created
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("amountStaked", stakeID)) == 0 
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("blockAtWithdraw", stakeID)) == 0
#     assert database.call().addressStorage(hashFunctions.call().stringBytes("staker", stakeID)) == hashFunctions.call().nullAddress()
#     assert database.call().boolStorage(hashFunctions.call().stringBytes("pendingWithdraw", stakeID)) == False
#     assert getHeadStaker(database, hashFunctions) == nextStaker

#     # ----------Remove middle staker (4 left) -------------------
#     stakeID = stakers[first + 1]['id']
#     currentHead = getHeadStaker(database, hashFunctions)
#     previousStaker = stakers[first + 2]['id']
#     txHash = tokenStaking.transact({"from": stakers[first + 1]['address']}).removeStake(stakeID, previousStaker)
#     # Check variables 
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("amountStaked", stakeID)) == 0 
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("blockAtWithdraw", stakeID)) == 0
#     assert database.call().addressStorage(hashFunctions.call().stringBytes("staker", stakeID)) == hashFunctions.call().nullAddress()
#     assert database.call().boolStorage(hashFunctions.call().stringBytes("pendingWithdraw", stakeID)) == False
#     assert getHeadStaker(database, hashFunctions) == currentHead
#     # Check that the previousStaker is now pointing to the next staker in front of the deleted staker
#     assert database.call().bytes32Storage(hashFunctions.call().stringBytes("nextStaker", previousStaker)) == stakers[first + 1]['nextStaker']


#     # ----------Remove first staker (3 left) -------------
#     stakeID = stakers[first]['id']
#     currentHead = getHeadStaker(database, hashFunctions)
#     previousStaker = stakers[first + 2]['id']
#     assert database.call().bytes32Storage(hashFunctions.call().stringBytes("nextStaker", stakeID)) == hashFunctions.call().nullBytes()
#     txHash = tokenStaking.transact({"from": stakers[first]['address']}).removeStake(stakeID, previousStaker) 
#     # Check Variables 
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("amountStaked", stakeID)) == 0 
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("blockAtWithdraw", stakeID)) == 0
#     assert database.call().addressStorage(hashFunctions.call().stringBytes("staker", stakeID)) == hashFunctions.call().nullAddress()
#     assert database.call().boolStorage(hashFunctions.call().stringBytes("pendingWithdraw", stakeID)) == False
#     assert getHeadStaker(database, hashFunctions) == currentHead
#     # Check that the previousStaker is now pointing to the next staker in front of the deleted staker
#     assert database.call().bytes32Storage(hashFunctions.call().stringBytes("nextStaker", previousStaker)) == hashFunctions.call().nullBytes()

#     # ---------------Remove first staker (2)----------------
#     stakerID = stakers[first + 2]['id']
#     assert database.call().bytes32Storage(hashFunctions.call().stringBytes("nextStaker", stakerID)) == hashFunctions.call().nullBytes()
#     txHash = tokenStaking.transact({"from": stakers[first + 2]['address']}).removeStake(stakerID, stakers[first + 3]['id'])
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("amountStaked", stakeID)) == 0 
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("blockAtWithdraw", stakeID)) == 0
#     assert database.call().addressStorage(hashFunctions.call().stringBytes("staker", stakeID)) == hashFunctions.call().nullAddress()
#     assert database.call().boolStorage(hashFunctions.call().stringBytes("pendingWithdraw", stakeID)) == False


#     # ------------Remove final staker-----------------------
#     finalStaker = stakers[last -1]['id']
#     assert getHeadStaker(database, hashFunctions) == finalStaker
#     assert database.call().bytes32Storage(hashFunctions.call().stringBytes("nextStaker", finalStaker)) == hashFunctions.call().nullBytes()
#     txHash = tokenStaking.transact({"from": stakers[last -1]['address']}).removeStake(finalStaker, hashFunctions.call().nullBytes())
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("amountStaked", finalStaker)) == 0 
#     assert database.call().uintStorage(hashFunctions.call().stringBytes("blockAtWithdraw", finalStaker)) == 0
#     assert database.call().addressStorage(hashFunctions.call().stringBytes("staker", finalStaker)) == hashFunctions.call().nullAddress() 
#     assert database.call().boolStorage(hashFunctions.call().stringBytes("pendingWithdraw", finalStaker)) == False

#     # Check nobody is staking 
#     assert database.call().uintStorage(hashFunctions.call().sha3("totalMyBitStaked")) == 0
#     assert getHeadStaker(database, hashFunctions) == hashFunctions.call().nullBytes()



def test_TokenStakingWithEther(chain):

    # Constants 
    accounts = chain.web3.eth.accounts
    accessCost = {}
    accessCost[2] = 10;
    accessCost[3] = 100;
    accessCost[4] = 1000;

    # ------------------------------Deploy All Contracts-------------------------------
    test, hashFunctions, database, contractManager, owned, userAccess, myBitToken, assetCreation, fundingHub, asset, stakingBank, bugBank, bugBounty, tokenStaking, marketPlace, tokenBurn = deployContracts(chain, accounts)

    # --------------Spread MyBit Tokens----------------------
    spreadMyBitTokens(myBitToken, accounts)


    # -------------Approve Users KYC-------------------
    assert kycApprove(userAccess, hashFunctions, database, accounts)

    # Make sure not paused 
    assert database.call().boolStorage(hashFunctions.call().stringAddress("pause", tokenStaking.address)) == False

    first = 1
    last = 5
    # -------------------Lock User Tokens-----------------------------------
    for i in range(first, last + 1):
        # Burn tokens to be able to lock tokens
        assert burnForAccess(myBitToken, tokenBurn, accounts[i], 3)
        assert database.call().uintStorage(hashFunctions.call().stringAddress("userAccess", accounts[i])) == 3
        assert getAccessLevel(database, hashFunctions, accounts[i]) == 3

    # --------------------Stake 5 users---------------------------------------------------
    # creates a linked list (accountOne <--- accountTwo <--- accountThree <--- accountFour <--- accountFive (head))

    stakers = [{}]
    for i in range(first, last + 1):
      thisStaker = {}
      headStaker = database.call().bytes32Storage(hashFunctions.call().sha3("headStaker"))
      totalMyBitStaked = database.call().uintStorage(hashFunctions.call().sha3("totalMyBitStaked"))
      amountToStake = 1000
      assert approveStaking(chain, tokenStaking, myBitToken, accounts[i], amountToStake)
      txHash = tokenStaking.transact({"from": accounts[i]}).stakeTokens(amountToStake)
      receipt = getReceiptMined(chain, txHash)
      blockNumber =  receipt['logs'][0]['blockNumber']
      stakeID = hashFunctions.call().addressUintUint(accounts[i], blockNumber, amountToStake)
      thisStaker['address'] = accounts[i]
      thisStaker['id'] = stakeID
      assert database.call().uintStorage(hashFunctions.call().stringBytes("amountStaked", stakeID)) == amountToStake
      thisStaker['amountStaked'] = amountToStake
      thisStaker['blockAtWithdraw'] = database.call().uintStorage(hashFunctions.call().stringBytes("blockAtWithdraw", stakeID))
      thisStaker['nextStaker'] = database.call().bytes32Storage(hashFunctions.call().stringBytes("nextStaker", stakeID))
      assert headStaker == thisStaker['nextStaker']
      assert database.call().bytes32Storage(hashFunctions.call().sha3("headStaker")) == stakeID
      assert getAmountStaked(database, hashFunctions, stakeID) == amountToStake
      assert database.call().uintStorage(hashFunctions.call().sha3("totalMyBitStaked")) == totalMyBitStaked + thisStaker['amountStaked']
      stakers.append(thisStaker)

    assert stakers[last]['id'] == database.call().bytes32Storage(hashFunctions.call().sha3("headStaker"))
    assert stakers[first + 1]['blockAtWithdraw'] < stakers[last]['blockAtWithdraw']



    # Staking contract receives 2% Fees

    transactionFeeValue = convertEtherToWei(chain, 2)

    # Send staking contract Ether (90% goes to stakers, 10% goes to bug bounty voters)
    txHash = stakingBank.transact({"value": transactionFeeValue}).receiveTransactionFee(hashFunctions.call().sha3("someAsset"))
    assert getStakingRewardReceived(database, hashFunctions) == transactionFeeValue * .9


    # -----------------First staker withdraws tokens-------------------------------
    firstStakerAddress = stakers[first]['address']
    firstStakerID = stakers[first]['id']
    txHash = stakingBank.transact({"from": firstStakerAddress}).settleLedger(firstStakerAddress, firstStakerID)
    assert database.call().uintStorage(hashFunctions.call().stringAddress("stakingRevenueOwedToUser", firstStakerAddress))

    txHash = stakingBank.transact({"from": firstStakerAddress}).withdraw(firstStakerID)

