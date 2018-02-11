# import binascii
# import math
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

# def spreadMyBitTokens(myBitTokenContract, accounts):
#     amountToGive = 1000
#     for i in range(1, len(accounts)):
#         myBitTokenContract.transact().transfer(accounts[i], amountToGive)
#         assert myBitTokenContract.call().balanceOf(accounts[i]) == amountToGive
#     return True

# def getGasUsed(receipt):
#     return receipt['logs'][0]['cumulativeGasUsed']




# # def watchEvent():
#     # web3.utils.filters.LogFilter(web3, filter_id, log_entry_formatter=None, data_filter_set=None)
#     # web3.eth.filter
#     # event_filter = contract.eventFilter('Transfer',{'fromBlock':0,'toBlock':'latest'})
#     # logs = event_filter.get_new_entries()

# # event_signature_transfer = web3.Web3.sha3(text='Transfer(address,address,uint256)')
# # event_filter = w3.eth.filter({'topics': [event_signature_transfer]})
# # transfer_events = w3.eth.getFilterChanges(event_filter.filter_id)

# # ... do something ...

# # new_transfer_events = w3.eth.getFilterChanges(event_filter.filter_id)
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


# def stakeTokens(chain, stakingContract, tokenContract, thisUser, period, amount):
#     txHash = tokenContract.transact({"from": thisUser}).approve(stakingContract.address, amount)
#     assert tokenContract.call().allowance(thisUser, stakingContract.address) == amount
#     txHash = stakingContract.transact({"from": thisUser}).lockTokens(period, amount)
#     return txHash

# # Note: Period Nonces don't update until contract is poked with a transaction
# def test_TokenStaking(chain):
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
#     spreadMyBitTokens(myBitToken, accounts)


#     testFundingTime = 3000
#     solarAssetType = hashFunctions.call().sha3("SolarPanel")

#     # -------------Approve Users KYC-------------------
#     assert kycApprove(userAccess, hashFunctions, database, accounts)


#         # -------------------Lock User Tokens-----------------------------------
#     for i in range(1, 5):
#         # Burn tokens to be able to lock tokens
#         assert burnForAccess(myBitToken, tokenBurn, accounts[i], 3)
#         assert approval.call().userAccess(accounts[i]) == 3


#     # -------------------Lock User Tokens-----------------------------------
#     for i in range(1, 5):
#         nextPeriod = tokenStake.call().nextPeriod()
#         blockNumber = getBlockNumber(chain)
#         periodNonce = tokenStake.call().periodNonce()

#         # Token balances 
#         stakeTokenBalance = myBitToken.call().balanceOf(tokenStake.address)
#         userBalance = myBitToken.call().balanceOf(accounts[i])
#         # Stake tokens 
#         txHash = stakeTokens(chain, tokenStake, myBitToken, accounts[i], periods[i], amount)
#         nonceAtLock = tokenStake.call().periodNonce()
#         assert myBitToken.call().balanceOf(tokenStake.address) == stakeTokenBalance + amount
#         assert myBitToken.call().balanceOf(accounts[i]) == userBalance - amount

#         # Chwck if period nonce is updated 
#         if (tokenStake.call().nextPeriod() > nextPeriod):
#             assert periodNonce < tokenStake.call().periodNonce()

#         receipt = getReceiptMined(chain, txHash)
#         # Get ID of stake
#         blockNumber = receipt['logs'][0]['blockNumber']
#         ID = hashFunctions.call().getStakingID(accounts[i], blockNumber, amount)
#         stakedID[accounts[i]] = ID
#         stakedToken[accounts[i]] = [tokenStake.call().getStakeInfo(ID)]
#         # Check period index set
#         assert stakedToken[accounts[i]][0][0] == periods[i]
#         # Check stake amount 
#         assert stakedToken[accounts[i]][0][1] == amount 
#         # Check fractional amount for periods
#         assert stakedToken[accounts[i]][0][2] <= math.floor(amount * multipliers[periods[i]])
#         # Check multiplied amount 
#         assert stakedToken[accounts[i]][0][3] == math.floor(amount * multipliers[periods[i]])
#         # Check nonce at time of locking
#         assert stakedToken[accounts[i]][0][4] == nonceAtLock
#         # Check nonce at time of unlock 
#         assert stakedToken[accounts[i]][0][5] == nonceAtLock + math.floor(tokenStake.call().stakeTimes(periods[i]) / tokenStake.call().periodLength())

#         assert  stakedToken[accounts[i]][0][6] == blockNumber

#         unlockAtBlock[accounts[i]] = blockNumber + tokenStake.call().stakeTimes(periods[i])
#         # Send 10 ether to lock contract 
#         stakingFees = convertEtherToWei(chain, 10)
#         txHash = tokenStake.transact({"value": stakingFees}).receiveReward()

    

#     # --------------------------Unlock User Tokens--------------------------------
#     for i in range(1, 5):
#         while (getBlockNumber(chain) < unlockAtBlock[accounts[i]]):
#             mine(chain, 5)

#         currentNonce = tokenStake.call().periodNonce()

#         # See if current nonce is updated (must send transaction to update it )
#         # while (currentNonce <= stakedToken[accounts[i]][0][5]):
#         #     mine(chain, 1)
#         #     txHash = tokenStake.transact({"value": 1000}).receiveReward()
#         #     currentNonce = tokenStake.call().periodNonce()

#         stakeTokenBalance = myBitToken.call().balanceOf(tokenStake.address) 
#         assert stakeTokenBalance >= stakedToken[accounts[i]][0][1]
#         assert stakedToken[accounts[i]][0][1] == amount

#         txHash = tokenStake.transact({"from": accounts[i]}).unlockTokens(stakedID[accounts[i]])

#         # assert stakeTokenBalance == myBitToken.call().balanceOf(tokenStake.address) + amount
      


