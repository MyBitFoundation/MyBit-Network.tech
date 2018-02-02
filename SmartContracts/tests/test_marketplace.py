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


def getHashOf(_hashFunctions, someString):
    return _hashFunctions.call().sha3(someString)

def test_MarketPlace(chain):
    # -------------------Deploy----------------------------
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
    storageHash = getHashOf(hashFunctions, "JoeBlakesATM")
    installerID = getHashOf(hashFunctions, "TrustedATMInstallerName")
    assetType = getHashOf(hashFunctions, "CryptoATM")
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
    assert AssetContract.call().amountRaised() == (funderOneAmount + funderTwoAmount + funderThreeAmount + funderFourAmount) 
    assert myBitHub.call().assets(AssetContract.call().storageHash()) == atmAsset
    assert myBitHub.call().beingFunded(atmAsset) == False 

    # Finish funding Period by initiating payout 
    txHash = AssetContract.transact().payout()
    assert approval.call().myBitContracts(getHashOf(hashFunctions, "MarketPlace")).upper() == marketPlace.address.upper()



    # ----------------------MarketPlace Testing ------------------------- 
    # TODO:  Test overwriting buy and sell orders. 


    # -------Burn tokens to access marketplace -------------------
    for i in range(1, 5):
        assert burnForAccess(myBitToken, tokenBurn, accounts[i], 4)
        assert approval.call().userAccess(accounts[i]) == 4


    # ------Create Simple Buy Order from Funder One and sell Funder Two's shares--------
    # Calculate amount of shares and price of shares
    funderOneSharesToBuy = convertEtherToWei(chain, 1)   
    funderOnePrice = 1
    funderOneBuyValue = funderOneSharesToBuy * funderOnePrice

    # get the buy order hash 
    buyOrderHashOne = hashFunctions.call().getOrderID(funderOne, atmAsset)
    txHash = marketPlace.transact({"from": funderOne, "value": funderOneBuyValue}).createBuyOrder(funderOneSharesToBuy, funderOnePrice, atmAsset)

    # Check that buy order variables were set properly 
    assert marketPlace.call().weiDeposited(funderOne) == funderOneBuyValue
    initiator, assetAddress, amount, price = marketPlace.call().buyOrders(buyOrderHashOne)
    assert initiator.upper() == funderOne.upper()
    assert assetAddress.upper() == atmAsset.upper()
    assert amount == funderOneSharesToBuy
    assert price == funderOnePrice
    funderOneBuyAmount = price * amount 
    assert funderOneBuyAmount == amount

    # FunderTwo fills the buy order 
    txHash = marketPlace.transact({"from": funderTwo}).sellAsset(buyOrderHashOne)
    assert marketPlace.call().weiOwed(funderTwo) == funderOneBuyAmount 
    assert marketPlace.call().weiDeposited(funderOne) == 0 

    # FunderTwo withdraws Ether 
    txHash = marketPlace.transact({"from": funderTwo}).withdraw() 
    assert marketPlace.call().weiOwed(funderTwo) == 0


    # Check asset shares are accurate 
    assert AssetContract.call().shares(funderOne) == (funderOneAmount + funderOneSharesToBuy)
    assert AssetContract.call().shares(funderTwo) == (funderTwoAmount - funderOneSharesToBuy) 

    #-----------------Reverse above trade to ensure parity--------------------------   

    # Calculate amount of shares and price of shares
    funderOneSharesToSell = convertEtherToWei(chain, 1)   
    funderOnePrice = 1
    funderOneSellValue = funderOneSharesToSell * funderOnePrice
    assert AssetContract.call().shares(funderOne) > funderOneSharesToSell

    # get the buy order hash 
    sellOrderHashOne = hashFunctions.call().getOrderID(funderOne, atmAsset)
    txHash = marketPlace.transact({"from": funderOne}).createSellOrder(funderOneSharesToSell, funderOnePrice, atmAsset)

    # Check that variables were set properly after sell order
    assert marketPlace.call().weiDeposited(funderOne) == 0
    initiator, assetAddress, amount, price = marketPlace.call().sellOrders(sellOrderHashOne)
    assert initiator.upper() == funderOne.upper()
    assert assetAddress.upper() == atmAsset.upper()
    assert amount == funderOneSharesToSell
    assert price == funderOnePrice

    # Calculate amounts for funder two 
    funderTwoBuyValue = price * amount 
    assert funderTwoBuyValue == amount

    # FunderTwo fills the sell order
    txHash = marketPlace.transact({"from": funderTwo, "value": funderTwoBuyValue}).buyAsset(sellOrderHashOne)
    assert marketPlace.call().weiOwed(funderOne) == funderTwoBuyValue 
    assert marketPlace.call().weiDeposited(funderTwo) == 0 

    # FunderTwo withdraws Ether 
    txHash = marketPlace.transact({"from": funderOne}).withdraw() 
    assert marketPlace.call().weiOwed(funderOne) == 0

        # Check asset shares are accurate 
    assert AssetContract.call().shares(funderOne) == (funderOneAmount)
    assert AssetContract.call().shares(funderTwo) == (funderTwoAmount) 

    # ------------Fund Asset and Trade shares after users have withdrawn funds 

    # Send Asset income 
    incomeReceived = convertEtherToWei(chain, 2)
    txHash = AssetContract.transact({"value": incomeReceived}).receiveIncome("January funding from Trusted ATM")

    # Calculate amount owed  -> will be equal to paidToFunder
    assetAmountRaised = AssetContract.call().amountRaised()
    funderOneAssetReturns = (incomeReceived * AssetContract.call().shares(funderOne)) / assetAmountRaised
    funderTwoAssetReturns = (incomeReceived * AssetContract.call().shares(funderTwo)) / assetAmountRaised
    funderThreeAssetReturns = (incomeReceived * AssetContract.call().shares(funderThree)) / assetAmountRaised
    funderFourAssetReturns = (incomeReceived * AssetContract.call().shares(funderFour)) / assetAmountRaised

    # withdraw FunderOne 
    txHash = AssetContract.transact({"from": funderOne}).withdraw()
    assert AssetContract.call().paidToFunder(funderOne) - funderOneAssetReturns == 0

    # withdraw FunderTwo 
    txHash = AssetContract.transact({"from": funderTwo}).withdraw() 
    assert AssetContract.call().paidToFunder(funderTwo) - funderTwoAssetReturns == 0


    # ----------------Trade Shares after ROI has been withdrawn------------------
    #         (will transfer relative amount paid to funder as well)

    # Calculate amount of shares and price of shares
    funderOneSharesToBuy = convertEtherToWei(chain, 1)   
    funderOnePrice = 1
    funderOneBuyValue = funderOneSharesToBuy * funderOnePrice

    # Get pre-trade amount of shares 
    sharesFunderOne = AssetContract.call().shares(funderOne)
    sharesFunderTwo = AssetContract.call().shares(funderTwo)

    # Check balanced paidToFunderValues 
    oneAndTwoPaidToFunder = AssetContract.call().paidToFunder(funderOne) + AssetContract.call().paidToFunder(funderTwo)

    # get the buy order hash 
    buyOrderHashOne = hashFunctions.call().getOrderID(funderOne, atmAsset)
    txHash = marketPlace.transact({"from": funderOne, "value": funderOneBuyValue}).createBuyOrder(funderOneSharesToBuy, funderOnePrice, atmAsset)

    # FunderTwo fills the buy order 
    txHash = marketPlace.transact({"from": funderTwo}).sellAsset(buyOrderHashOne)


    # Check asset shares are accurate 
    assert AssetContract.call().shares(funderOne) == (sharesFunderOne + funderOneSharesToBuy)
    assert AssetContract.call().shares(funderTwo) == (sharesFunderTwo - funderOneSharesToBuy)



    assert AssetContract.call().paidToFunder(funderOne) > 0

    # Check if traded shares also traded paidToFunderVariable
    percentageOfSharesTraded = funderOneSharesToBuy / sharesFunderTwo
    assert percentageOfSharesTraded == .5
    funderTwoAdjustedAssetReturns = funderTwoAssetReturns * percentageOfSharesTraded

    # New paidToFunderValues 
    paidToFunderOne = AssetContract.call().paidToFunder(funderOne)
    paidToFunderTwo = AssetContract.call().paidToFunder(funderTwo)

    # Check paidToFunderValues balance out 
    assert  paidToFunderTwo - funderTwoAdjustedAssetReturns == 0
    assert AssetContract.call().paidToFunder(funderOne) + AssetContract.call().paidToFunder(funderTwo) == oneAndTwoPaidToFunder
    assert oneAndTwoPaidToFunder - paidToFunderTwo == AssetContract.call().paidToFunder(funderOne)

    # FunderOne will be entitled to a greater percentage of future income 
    funderOneAssetReturns = incomeReceived * (AssetContract.call().shares(funderOne) / assetAmountRaised)
    funderTwoAssetReturns = incomeReceived * (AssetContract.call().shares(funderTwo) / assetAmountRaised)
    assert funderTwoAssetReturns < funderOneAssetReturns

    # ------------------Delete a buy order-------------------------
    # Calculate amount of shares and price of shares
    funderThreeSharesToBuy = convertEtherToWei(chain, 2)   
    funderThreePrice = 2
    funderThreeValueToBuy = funderThreeSharesToBuy * funderThreePrice

    # get the buy order hash & create order
    buyOrderHash = hashFunctions.call().getOrderID(funderThree, atmAsset)
    txHash = marketPlace.transact({"from": funderThree, "value": funderThreeValueToBuy}).createBuyOrder(funderThreeSharesToBuy, funderThreePrice, atmAsset)

    # check values 
    assert marketPlace.call().weiDeposited(funderThree) == funderThreeValueToBuy
    initiator, assetAddress, amount, price = marketPlace.call().buyOrders(buyOrderHash)
    assert initiator.upper() == funderThree.upper()
    assert assetAddress.upper() == atmAsset.upper()
    assert amount == funderThreeSharesToBuy
    assert price == funderThreePrice

    # delete order 
    txHash = marketPlace.transact({"from": funderThree}).deleteBuyOrder(buyOrderHash)
    assert marketPlace.call().weiDeposited(funderThree) == 0
    initiator, assetAddress, amount, price = marketPlace.call().buyOrders(buyOrderHash)
    assert amount == 0
    assert price == 0

    # ------------------Delete a sell order-------------------------
    # Calculate amount of shares and price of shares
    funderFourSharesToSell = convertEtherToWei(chain, 2)   
    funderFourPrice = 3
    funderFourValueToSell = funderFourSharesToSell * funderFourPrice


    # get the buy order hash & create order
    sellOrderHash = hashFunctions.call().getOrderID(funderFour, atmAsset)
    txHash = marketPlace.transact({"from": funderFour}).createSellOrder(funderFourSharesToSell, funderFourPrice, atmAsset)

    # # check values 
    assert marketPlace.call().weiDeposited(funderFour) == 0
    initiator, assetAddress, amount, price = marketPlace.call().sellOrders(sellOrderHash)
    assert initiator.upper() == funderFour.upper()
    assert assetAddress.upper() == atmAsset.upper()
    assert amount == funderFourSharesToSell
    assert price == funderFourPrice

    # delete order 
    txHash = marketPlace.transact({"from": funderFour}).deleteSellOrder(sellOrderHash)
    assert marketPlace.call().weiDeposited(funderFour) == 0
    initiator, assetAddress, amount, price = marketPlace.call().buyOrders(sellOrderHash)
    assert amount == 0
    assert price == 0

    # TODO: test can't trade before withdrawing funds 

    
