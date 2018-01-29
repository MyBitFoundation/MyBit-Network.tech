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


def test_pause(chain):
    accounts = chain.web3.eth.accounts
    myBitFoundation = accounts[4]
    assetEscrow = accounts[5]
    totalSupply = 281207344012426
    myBitToken, _ = chain.provider.get_or_deploy_contract('MyBitToken', deploy_args=[totalSupply, "MyBit Token", 8, "MyB"])
    approval, _ = chain.provider.get_or_deploy_contract('Approval', deploy_args=[accounts[0], accounts[1], accounts[2]])
    myBitHub, _ = chain.provider.get_or_deploy_contract('MyBitHub', deploy_args=[approval.address])
    tokenBurn, _ = chain.provider.get_or_deploy_contract('TokenBurn', deploy_args=[myBitToken.address, approval.address])
    tokenStake, _ = chain.provider.get_or_deploy_contract('TokenStake', deploy_args=[myBitToken.address, approval.address])
    marketPlace, _ = chain.provider.get_or_deploy_contract('MarketPlace', deploy_args=[approval.address, myBitHub.address])
    Asset = chain.provider.get_contract_factory('Asset')
    hashFunctions, _ = chain.provider.get_or_deploy_contract('HashFunctions')   # This is just used as a helper for built in hash functions


    # Set contract references
    approval.transact().setMyBitContract("MyBitToken", myBitToken.address)
    approval.transact().setMyBitContract("TokenBurn", tokenBurn.address)
    approval.transact().setMyBitContract("TokenStake", tokenStake.address)
    approval.transact().setMyBitContract("MarketPlace", marketPlace.address)
    approval.transact().setMyBitContract("MyBitHub", myBitHub.address)


    # Set Address references 
    txHash = approval.transact().setMyBitContract("AssetEscrow", assetEscrow)
    txHash = approval.transact().setMyBitContract("MyBitFoundation", myBitFoundation)
    assert approval.call().myBitContracts(hashFunctions.call().sha3("AssetEscrow")).upper() == assetEscrow.upper()
    assert approval.call().myBitContracts(hashFunctions.call().sha3("MyBitFoundation")).upper() == myBitFoundation.upper()


    owner = approval.call().owner(0)
    assert owner.upper() == accounts[0].upper()     # Calls will be called by owner by default


    # Distribute MyBitTOkens 
    assert myBitToken.call().totalSupply() == totalSupply
    assert myBitToken.call().balanceOf(accounts[0]) == totalSupply
    assert spreadMyBitTokens(myBitToken, accounts)

        # -------------Approve Users KYC-------------------
    assert kycApprove(approval, accounts)

    #---------------Burn Tokens to Create Asset---------------
    approvedCreator = accounts[9]
    assert burnForAccess(myBitToken, tokenBurn, approvedCreator, 2)
    assert approval.call().userAccess(approvedCreator) == 2


    someHash = bytes.fromhex(keccak_256("someStorageHash".encode('utf-8')).hexdigest())
    fakeType = bytes.fromhex(keccak_256("fakeType".encode('utf-8')).hexdigest())
    firstProjectGoal = convertEtherToWei(chain, 20)
    assetInstaller = bytes.fromhex(keccak_256("InstallationCompany".encode('utf-8')).hexdigest())
    txHash = myBitHub.transact({"from": approvedCreator}).createAsset(someHash, firstProjectGoal, assetInstaller, fakeType)
    receipt = getReceiptMined(chain, txHash)
    firstAssetCheck = receipt['logs'][0]['address']    # assert myBitHub.call().beingFunded()
    assert myBitHub.call().beingFunded(firstAssetCheck) == True
    txHash = approval.transact().pause(myBitHub.address)
    assert approval.call().paused(myBitHub.address) == True
    someHashTwo = bytes.fromhex(keccak_256("someStorageHashTwo".encode('utf-8')).hexdigest())
    # txHash = myBitHub.transact({"from": approvedCreator}).createAsset(someHashTwo, firstProjectGoal, assetInstaller, fakeType)      #This fails as it should
    txHash = approval.transact().unpause(myBitHub.address)
    someHash = bytes.fromhex(keccak_256("someStorageHash".encode('utf-8')).hexdigest())
    txHash = myBitHub.transact({"from": approvedCreator}).createAsset(someHashTwo, firstProjectGoal, assetInstaller, fakeType)      #This fails
    receipt = getReceiptMined(chain, txHash)
    secondAssetCheck = receipt['logs'][0]['address']    # assert myBitHub.call().beingFunded()
    assert myBitHub.call().beingFunded(secondAssetCheck) == True
