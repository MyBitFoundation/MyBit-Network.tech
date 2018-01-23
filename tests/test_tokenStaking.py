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


def kycApprove(approvalContract, accounts):
    for i in range(len(accounts)):
        approvalContract.transact().approveUser(accounts[i], 1)
        assert approvalContract.call().userAccess(accounts[i]) == 1
    return True


def getHashOf(someString):
    return bytes.fromhex(keccak_256(someString.encode('utf-8')).hexdigest())


def stakeTokens(chain, stakingContract, tokenContract, thisUser, period, amount):
    txHash = tokenContract.transact({"from": thisUser}).approve(stakingContract.address, amount)
    assert tokenContract.call().allowance(thisUser, stakingContract.address) == amount
    txHash = stakingContract.transact({"from": thisUser}).lockTokens(period, amount)
    return txHash

# Note: Period Nonces don't update until contract is poked with a transaction
def test_TokenStaking(chain):
    # -------------------Deploy----------------------------
    accounts = chain.web3.eth.accounts
    myBitFoundation = accounts[4]
    assetEscrow = accounts[5]
    totalSupply = 281207344012426
    myBitToken, _ = chain.provider.get_or_deploy_contract('MyBitToken', deploy_args=[totalSupply, "MyBit Token", 8, "MyB"])
    approval, _ = chain.provider.get_or_deploy_contract('Approval')
    tokenBurn, _ = chain.provider.get_or_deploy_contract('TokenBurn', deploy_args=[myBitToken.address, approval.address])
    tokenStake, _ = chain.provider.get_or_deploy_contract('TokenStake', deploy_args=[myBitToken.address, approval.address])
    marketPlace, _ = chain.provider.get_or_deploy_contract('MarketPlace', deploy_args=[approval.address])
    myBitHub, _ = chain.provider.get_or_deploy_contract('MyBitHub', deploy_args=[myBitFoundation, assetEscrow, approval.address, tokenStake.address, marketPlace.address])
    Asset = chain.provider.get_contract_factory('Asset')
    hashFunctions, _ = chain.provider.get_or_deploy_contract('HashFunctions')

    # Set Address references 
    txHash = marketPlace.transact().setMyBitHub(myBitHub.address)
    assert marketPlace.call().myBitHub().upper() == myBitHub.address.upper() 
    txHash = approval.transact().setBurnAddress(tokenBurn.address)
    assert approval.call().tokenBurn().upper() == tokenBurn.address.upper()


    # Distribute tokens 
    assert spreadMyBitTokens(myBitToken, accounts)

    # Approve KYC 
    assert kycApprove(approval, accounts)

    stakedID = {}
    stakedToken = {}
    unlockAtBlock = {}

    multipliers = [1.625, 1.125, 1.25, 1.50]
    periods = [0, 1, 2, 2, 3, 3]
    amount = 100

        # -------------------Lock User Tokens-----------------------------------
    for i in range(1, 5):
        # Burn tokens to be able to lock tokens
        assert burnForAccess(myBitToken, tokenBurn, accounts[i], 3)
        assert approval.call().userAccess(accounts[i]) == 3


    # -------------------Lock User Tokens-----------------------------------
    for i in range(1, 5):
        nextPeriod = tokenStake.call().nextPeriod()
        blockNumber = getBlockNumber(chain)
        periodNonce = tokenStake.call().periodNonce()

        # Token balances 
        stakeTokenBalance = myBitToken.call().balanceOf(tokenStake.address)
        userBalance = myBitToken.call().balanceOf(accounts[i])
        # Stake tokens 
        txHash = stakeTokens(chain, tokenStake, myBitToken, accounts[i], periods[i], amount)
        nonceAtLock = tokenStake.call().periodNonce()
        assert myBitToken.call().balanceOf(tokenStake.address) == stakeTokenBalance + amount
        assert myBitToken.call().balanceOf(accounts[i]) == userBalance - amount

        # Chwck if period nonce is updated 
        if (tokenStake.call().nextPeriod() > nextPeriod):
            assert periodNonce < tokenStake.call().periodNonce()

        receipt = getReceiptMined(chain, txHash)
        # Get ID of stake
        blockNumber = receipt['logs'][0]['blockNumber']
        ID = hashFunctions.call().getStakingID(accounts[i], blockNumber, amount)
        stakedID[accounts[i]] = ID
        stakedToken[accounts[i]] = [tokenStake.call().getStakeInfo(ID)]
        # Check period index set
        assert stakedToken[accounts[i]][0][0] == periods[i]
        # Check stake amount 
        assert stakedToken[accounts[i]][0][1] == amount 
        # Check fractional amount for periods
        assert stakedToken[accounts[i]][0][2] <= math.floor(amount * multipliers[periods[i]])
        # Check multiplied amount 
        assert stakedToken[accounts[i]][0][3] == math.floor(amount * multipliers[periods[i]])
        # Check nonce at time of locking
        assert stakedToken[accounts[i]][0][4] == nonceAtLock
        # Check nonce at time of unlock 
        assert stakedToken[accounts[i]][0][5] == nonceAtLock + math.floor(tokenStake.call().stakeTimes(periods[i]) / tokenStake.call().periodLength())

        assert  stakedToken[accounts[i]][0][6] == blockNumber

        unlockAtBlock[accounts[i]] = blockNumber + tokenStake.call().stakeTimes(periods[i])
        # Send 10 ether to lock contract 
        stakingFees = convertEtherToWei(chain, 10)
        txHash = tokenStake.transact({"value": stakingFees}).receiveTransactionFee()

    

    # --------------------------Unlock User Tokens--------------------------------
    for i in range(1, 5):
        while (getBlockNumber(chain) < unlockAtBlock[accounts[i]]):
            mine(chain, 5)

        currentNonce = tokenStake.call().periodNonce()

        # See if current nonce is updated (must send transaction to update it )
        # while (currentNonce <= stakedToken[accounts[i]][0][5]):
        #     mine(chain, 1)
        #     txHash = tokenStake.transact({"value": 1000}).receiveTransactionFee()
        #     currentNonce = tokenStake.call().periodNonce()

        stakeTokenBalance = myBitToken.call().balanceOf(tokenStake.address) 
        assert stakeTokenBalance >= stakedToken[accounts[i]][0][1]
        assert stakedToken[accounts[i]][0][1] == amount

        txHash = tokenStake.transact({"from": accounts[i]}).unlockTokens(stakedID[accounts[i]])

        # assert stakeTokenBalance == myBitToken.call().balanceOf(tokenStake.address) + amount
      


