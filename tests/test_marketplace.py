import binascii
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

def test_MarketPlace(chain):
    # -------------------Deploy----------------------------
    accounts = chain.web3.eth.accounts
    myBitFoundation = accounts[4]
    assetEscrow = accounts[5]
    totalSupply = 281207344012426
    myBitToken, _ = chain.provider.get_or_deploy_contract('MyBitToken', deploy_args=[totalSupply, "MyBit Token", 8, "MyB"])
    approval, _ = chain.provider.get_or_deploy_contract('Approval')
    tokenBurn, _ = chain.provider.get_or_deploy_contract('TokenBurn', deploy_args=[myBitToken.address, approval.address])
    tokenHub, _ = chain.provider.get_or_deploy_contract('TokenHub', deploy_args=[myBitToken.address])
    marketPlace, _ = chain.provider.get_or_deploy_contract('MarketPlace', deploy_args=[approval.address])
    myBitHub, _ = chain.provider.get_or_deploy_contract('MyBitHub', deploy_args=[myBitFoundation, assetEscrow, approval.address, tokenHub.address, marketPlace.address])
    Asset = chain.provider.get_contract_factory('Asset')


    # Set Address references 
    txHash = marketPlace.transact().setMyBitHub(myBitHub.address)
    assert marketPlace.call().myBitHub().upper() == myBitHub.address.upper() 
    txHash = approval.transact().setBurnAddress(tokenBurn.address)
    assert approval.call().tokenBurn().upper() == tokenBurn.address.upper()


    # Distribute tokens 
    assert spreadMyBitTokens(myBitToken, accounts)


    # Approve KYC 
    assert kycApprove(approval, accounts)

    funderOne = accounts[1]
    funderOneAmount = convertEtherToWei(chain, 1)
    funderTwo = accounts[2]
    funderTwoAmount = convertEtherToWei(chain, 2)
    funderThree = accounts[3]
    funderThreeAmount = convertEtherToWei(chain, 4)
    funderFour = accounts[4]
    funderFourAmount = convertEtherToWei(chain, 16) 
    assetCreator = accounts[5]


    # Create Asset Information 
    storageHash = getHashOf("JoeBlakesATM")
    installerID = getHashOf("TrustedATMInstallerName")
    assetType = getHashOf("CryptoATM")
    firstProjectGoal = convertEtherToWei(chain, 20)
    amountToRaise = convertEtherToWei(chain, 20)


    # Burn tokens to be able to create asset 8
    assert burnForAccess(myBitToken, tokenBurn, assetCreator, 2)
    assert approval.call().userAccess(assetCreator) == 2


    # Create Asset 
    atmAsset = myBitHub.call({"from": assetCreator}).createAsset(storageHash, amountToRaise, installerID, assetType)
    txHash = myBitHub.transact({"from": assetCreator}).createAsset(storageHash, amountToRaise, installerID, assetType)
    receipt = getReceiptMined(chain, txHash)
    atmAssetCheck = receipt['logs'][0]['address']
    assert atmAsset.upper() == atmAssetCheck.upper()
    assert myBitHub.call().beingFunded(atmAsset)
    AssetContract = Asset(atmAsset)


    # Fund Asset 
    txHash = AssetContract.transact({"from": funderOne, "value": funderOneAmount}).fund()
    assert AssetContract.call().shares(funderOne) == funderOneAmount
    txHash = AssetContract.transact({"from": funderTwo, "value": funderTwoAmount}).fund()
    txHash = AssetContract.transact({"from": funderThree, "value": funderThreeAmount}).fund()
    assert AssetContract.call().stage() == 0
    txHash = AssetContract.transact({"from": funderFour, "value": funderFourAmount}).fund()

    # Confirm funding Success
    assert AssetContract.call().stage() == 1
    assert myBitHub.call().assets(AssetContract.call().storageHash()) == atmAsset
    assert myBitHub.call().beingFunded(atmAsset) == False 

    # Finish funding Period by initiating payout 
    txHash = AssetContract.transact().payout()
    assert AssetContract.call().marketPlace().upper() == marketPlace.address.upper()


    # Burn tokens to access marketplace  ..... fails without authrization
    for i in range(1, 4):
        assert burnForAccess(myBitToken, tokenBurn, accounts[i], 4)
        assert approval.call().userAccess(accounts[i]) == 4


    # ----------------------MarketPlace Testing -------------------------


    # Create Buy Order from Funder One 
    funderOneTradeAmount = convertEtherToWei(chain, 1)   
    funderOnePrice = 1
    buyOrderHashOne = marketPlace.call().getOrderID(funderOne, atmAsset)
    txHash = marketPlace.transact({"from": funderOne, "value": funderOneTradeAmount}).createBuyOrder(funderOneTradeAmount, funderOnePrice, atmAsset)
    initiator, assetAddress, amount, price = marketPlace.call().getBuyOrder(buyOrderHashOne)
    assert initiator.upper() == funderOne.upper()
    assert assetAddress.upper() == atmAsset.upper()
    assert amount == funderOneTradeAmount
    assert price == funderOnePrice

    funderTwoBuyAmount = price * amount 
    assert funderTwoBuyAmount == amount
    # FunderTwo fills the buy order 
    txHash = marketPlace.transact({"from": funderTwo}).sellAsset(buyOrderHashOne)







