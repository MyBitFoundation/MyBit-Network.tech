import binascii
from sha3 import keccak_256


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



def spreadMyBitTokens(chain, myBitContract, accounts):
    amountToGive = 1000
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
    burnContract.transact({"from": thisAddress}).burnTokens(accesslevel)
    assert burnContract.call().numTokensBurnt() >= accessCost[accesslevel]
    return tokenContract.call().balanceOf(thisAddress) == (userBalance - accessCost[accesslevel])


def kycApprove(approvalContract, accounts):
    for i in range(len(accounts)):
        approvalContract.transact().approveUser(accounts[i], 1)
        assert approvalContract.call().userAccess(accounts[i]) == 1
    return True

def test_successfulFunding(chain):
    accounts = chain.web3.eth.accounts
    test, _ = chain.provider.get_or_deploy_contract("Test")
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
    assert approval.call().myBitContracts(hashFunctions.call().sha3("MyBitToken")).upper() == myBitToken.address.upper()
    approval.transact().setMyBitContract("TokenBurn", tokenBurn.address)
    assert approval.call().myBitContracts(hashFunctions.call().sha3("TokenBurn")).upper() == tokenBurn.address.upper()
    approval.transact().setMyBitContract("TokenStake", tokenStake.address)
    assert approval.call().myBitContracts(hashFunctions.call().sha3("TokenStake")).upper() == tokenStake.address.upper()
    approval.transact().setMyBitContract("MarketPlace", marketPlace.address)
    assert approval.call().myBitContracts(hashFunctions.call().sha3("MarketPlace")).upper() == marketPlace.address.upper()
    approval.transact().setMyBitContract("MyBitHub", myBitHub.address)
    assert approval.call().myBitContracts(hashFunctions.call().sha3("MyBitHub")).upper() == myBitHub.address.upper()


    # Set Address references 
    txHash = approval.transact().setMyBitContract("AssetEscrow", assetEscrow)
    txHash = approval.transact().setMyBitContract("MyBitFoundation", myBitFoundation)
    assert approval.call().myBitContracts(hashFunctions.call().sha3("AssetEscrow")).upper() == assetEscrow.upper()
    assert approval.call().myBitContracts(hashFunctions.call().sha3("MyBitFoundation")).upper() == myBitFoundation.upper()


    owner = approval.call().owner(0)
    assert owner.upper() == accounts[0].upper()     # Calls will be called by owner by default

    assert approval.call().owner(1).upper() == accounts[1].upper()
    assert approval.call().owner(2).upper() == accounts[2].upper()



    # --------------Spread MyBit Tokens----------------------
    spreadMyBitTokens(chain, myBitToken, accounts)


    testFundingTime = 300
    solarAssetType = keccak_256("solar".encode('utf-8')).hexdigest()
    solarAssetType = bytes.fromhex(solarAssetType)

    # -------------Approve Users KYC-------------------
    assert kycApprove(approval, accounts)

    #---------------Burn Tokens to Create Asset---------------
    firstAssetCreator = accounts[9]
    assert approval.call().userAccess(firstAssetCreator) == 1
    assert burnForAccess(myBitToken, tokenBurn, firstAssetCreator, 2)
    assert approval.call().userAccess(firstAssetCreator) == 2

    # # ------------Create Asset------------------------
    ipfsHash = hashFunctions.call().sha3("afakestoragehash")
    firstProjectGoal = convertEtherToWei(chain, 20)
    assetInstaller = bytes.fromhex(keccak_256("SolarCity".encode('utf-8')).hexdigest())

    txHash = approval.transact({"from": owner}).approveUser(firstAssetCreator, 1)
    assert approval.call().userAccess(firstAssetCreator) == 1
    firstAsset = myBitHub.call({"from": firstAssetCreator}).createAsset(ipfsHash, firstProjectGoal, assetInstaller, solarAssetType)
    txHash = myBitHub.transact({"from": firstAssetCreator}).createAsset(ipfsHash, firstProjectGoal, assetInstaller, solarAssetType)
    receipt = getReceiptMined(chain, txHash)
    firstAssetCheck = receipt['logs'][0]['address']
    assert firstAsset.upper() == firstAssetCheck.upper()
    solarAsset = Asset(firstAsset)
    assert myBitHub.call().beingFunded(firstAsset) == True

    # ---------------Testing Asset funding-----------------------
    firstFunder = accounts[1]
    fundingAmount = convertEtherToWei(chain, 5)
    txHash = approval.transact({"from": owner}).approveUser(firstFunder, 1)
    txHash = solarAsset.transact({"from": firstFunder, "value":fundingAmount}).fund()
    assert solarAsset.call().amountRaised() == fundingAmount
    assert solarAsset.call().stage() == 0
    secondFunder = accounts[2]
    txHash = approval.transact({"from": owner}).approveUser(secondFunder, 1)
    secondFundingAmount = convertEtherToWei(chain, 5)
    txHash = solarAsset.transact({"from": secondFunder, "value":secondFundingAmount}).fund()
    txHash = solarAsset.transact({"from": firstFunder, "value":fundingAmount}).fund()
    thirdFunder = accounts[3]
    txHash = approval.transact({"from": owner}).approveUser(thirdFunder, 1)
    thirdFundAmount = secondFundingAmount
    txHash = solarAsset.transact({"from": thirdFunder, "value":fundingAmount}).fund()
    assert solarAsset.call().amountRaised() == solarAsset.call().amountToBeRaised()
    assert solarAsset.call().stage() == 1
    assert myBitHub.call().beingFunded(firstAsset) == False
    assert myBitHub.call().assets(ipfsHash) == firstAsset
    assert fundingAmount * 2 == solarAsset.call().shares(firstFunder)
    assert secondFundingAmount == solarAsset.call().shares(secondFunder)
    assert thirdFundAmount == solarAsset.call().shares(thirdFunder)



    # ---------------Check Payout Mechanism-----------------------
    testBalance = test.call().getBalance()
    txHash = solarAsset.transact().payout()
    # assert testBalance < test.call().getBalance()
    assert solarAsset.call().stage() == 3
    firstROIPayment = convertEtherToWei(chain, 10)

    # ---------------------------Check Receiving ROI---------------------------------------
    amountRaised = solarAsset.call().amountRaised()
    solarAsset.transact({"value": firstROIPayment}).receiveIncome("First ROI payment")

    # ----------------Check First Funder Withdraw-----------
    solarAsset.transact({"from": firstFunder}).withdraw()
    firstFunderROI = solarAsset.call().paidToFunder(firstFunder)
    # Get percentage of shares first funder 
    firstFunderPercentageOfShares = solarAsset.call().shares(firstFunder) / amountRaised
    assert firstFunderROI == (firstROIPayment * firstFunderPercentageOfShares)
    assert solarAsset.call().totalPaidToFunders() == firstFunderROI

    # ----------Check Second Funder Withdraw---------------
    solarAsset.transact({"from": secondFunder}).withdraw()
    secondFunderROI = solarAsset.call().paidToFunder(secondFunder)
    # Get percentage of shares second funder 
    secondFunderPercentageOfShares = solarAsset.call().shares(secondFunder) / amountRaised
    assert secondFunderROI == (firstROIPayment * secondFunderPercentageOfShares)
    assert solarAsset.call().totalPaidToFunders() == (firstFunderROI + secondFunderROI)

    # -----------Check Third Funder Withdraw--------
    solarAsset.transact({"from": thirdFunder}).withdraw()
    thirdFunderROI = solarAsset.call().paidToFunder(thirdFunder)
    # Get percentage of shares third funder
    thirdFunderPercentageOfShares = solarAsset.call().shares(thirdFunder) / amountRaised
    assert thirdFunderROI == (firstROIPayment * thirdFunderPercentageOfShares)
    assert solarAsset.call().totalPaidToFunders() == firstFunderROI + secondFunderROI + thirdFunderROI
    assert solarAsset.call().totalPaidToFunders() == firstROIPayment

    #---------------Burn Tokens to Create Asset---------------
    secondAssetCreator = accounts[8]
    assert burnForAccess(myBitToken, tokenBurn, secondAssetCreator, 2)
    assert approval.call().userAccess(secondAssetCreator) == 2

    # -------------------Test second createAsset()--------------------------
    ipfsHashAtm = bytes.fromhex(keccak_256("someStorageHashTwo".encode('utf-8')).hexdigest())
    atmAssetType = keccak_256("atm".encode('utf-8')).hexdigest()
    atmAssetType = bytes.fromhex(atmAssetType)
    secondProjectGoal = convertEtherToWei(chain, 200)
    atmAssetInstaller = bytes.fromhex(keccak_256("arabco".encode('utf-8')).hexdigest())
    secondAsset = myBitHub.call({"from": secondAssetCreator}).createAsset(ipfsHashAtm, secondProjectGoal, atmAssetInstaller, atmAssetType)
    txHash = myBitHub.transact({"from": secondAssetCreator}).createAsset(ipfsHashAtm, secondProjectGoal, atmAssetInstaller, atmAssetType)
    txHash = approval.transact().removeUser(secondAssetCreator)
    assert approval.call().userAccess(secondAssetCreator) == 0
    atmAsset = Asset(secondAsset)
    firstFunder = accounts[1]
    assert atmAsset.call().stage() == 0
    txHash = atmAsset.transact({"from": firstFunder, "value":secondProjectGoal}).fund()
    assert myBitHub.call().assets(ipfsHashAtm) == secondAsset
    assert myBitHub.call().beingFunded(secondAsset) == False
    assert atmAsset.call().stage() == 1

    # ------------Test removing assets------------------
    assert myBitHub.call().assets(ipfsHashAtm) == secondAsset
    assert myBitHub.call().assets(ipfsHash) == firstAsset
    txHash = myBitHub.transact().removeAsset(ipfsHash)
    assert myBitHub.call().assets(ipfsHash) != firstAsset
    txHash = myBitHub.transact().removeAsset(ipfsHashAtm)
    assert myBitHub.call().assets(ipfsHashAtm) != secondAsset

    # removed user cannot create more assets
    # secondAsset = myBitHub.call({"from": firstAssetCreator}).createAsset(ipfsHash, secondProjectGoal, atmAssetInstaller, atmAssetType)

    # ------------Destroy Second Asset----------------------
    # atmAsset.transact({"value":   }
    testBalance = test.call().getBalance()
    assert approval.call().owner(0).upper() == accounts[0].upper() and approval.call().owner(1).upper() == accounts[1].upper() and approval.call().owner(2).upper() == accounts[2].upper()
    txHash = approval.transact().setFunctionAuthorized(secondAsset, "destroy", test.address)
    authorizedHash = hashFunctions.call().getAuthorizeHash(secondAsset, accounts[0], "destroy", test.address)
    assert approval.call().authorizedFunction(authorizedHash)
    txHash = atmAsset.transact({"from": accounts[1]}).destroy(accounts[0], test.address)
    # assert atmAsset.call().amountRaised() == 0     throws due to contract successfully being destroyed
    assert testBalance ==  test.call().getBalance() - secondProjectGoal


def test_refund(chain):
    accounts = chain.web3.eth.accounts
    hashFunctions, _ = chain.provider.get_or_deploy_contract('HashFunctions')   # This is just used as a helper for built in hash functions
    test, _ = chain.provider.get_or_deploy_contract("Test")
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

        # Distribute MyBitTOkens 
    assert myBitToken.call().totalSupply() == totalSupply
    assert myBitToken.call().balanceOf(accounts[0]) == totalSupply
    assert spreadMyBitTokens(chain, myBitToken, accounts)

    # -------------Approve Users KYC-------------------
    assert kycApprove(approval, accounts)

    funderOne = accounts[1]
    fundAmountOne = convertEtherToWei(chain, 10)
    funderTwo = accounts[2]
    fundAmountTwo = convertEtherToWei(chain, 20)
    funderThree = accounts[3]    
    fundAmountThree = convertEtherToWei(chain, 30)

    #---------------Burn Tokens to Create Asset---------------
    ownerCreator = accounts[0]   
    assert burnForAccess(myBitToken, tokenBurn, ownerCreator, 2)
    assert approval.call().userAccess(ownerCreator) == 2

    solarAssetType = hashFunctions.call().sha3("SolarFarm")
    storageHash = hashFunctions.call().sha3("decentralizedstoragewillcreatethishash")
    amountToRaise = convertEtherToWei(chain, 100)
    assetInstaller = hashFunctions.call().sha3("SolarInstallationCompany")
    solarAssetAddress = myBitHub.call().createAsset(storageHash, amountToRaise, assetInstaller, solarAssetType)
    txHash = myBitHub.transact({"from": ownerCreator}).createAsset(storageHash, amountToRaise, assetInstaller, solarAssetType)
    receipt = getReceiptMined(chain, txHash)
    solarAssetCheck = receipt['logs'][0]['address']
    assert solarAssetCheck.upper() == solarAssetAddress.upper()
    solarAsset = Asset(solarAssetAddress)
    assert myBitHub.call().beingFunded(solarAssetCheck)

    txHash = solarAsset.transact({"from": funderOne, "value": fundAmountOne}).fund()
    assert solarAsset.call().shares(funderOne) == fundAmountOne
    assert solarAsset.call().amountRaised() == fundAmountOne
    txHash = solarAsset.transact({"from": funderTwo, "value": fundAmountTwo}).fund()
    assert solarAsset.call().shares(funderTwo) == fundAmountTwo
    txHash = solarAsset.transact({"from": funderThree, "value": fundAmountThree}).fund()
    assert solarAsset.call().amountRaised() == (fundAmountThree + fundAmountTwo + fundAmountOne)
    currentBlock = getBlockNumber(chain)
    timestamp = getTimestamp(chain, currentBlock)
    while (solarAsset.call().fundingDeadline() > timestamp):
        mine(chain, 10)
        currentBlock = getBlockNumber(chain)
        timestamp = getTimestamp(chain, currentBlock)
    assert solarAsset.call().stage() == 0       # Stage = Funding Asset
    solarAsset.transact().initiateRefund()
    assert solarAsset.call().stage() == 2       # Stage = funding failed 
    solarAsset.transact({"from": funderOne}).refund()
    assert solarAsset.call().amountRaised() == (fundAmountThree + fundAmountTwo)
    solarAsset.transact({"from": funderTwo}).refund()
    assert solarAsset.call().amountRaised() == fundAmountThree
    solarAsset.transact({"from": funderThree}).refund()
    assert solarAsset.call().amountRaised() == 0



    # ------------Destroy Asset----------------------
    testBalance = test.call().getBalance()
    assert approval.call().owner(0).upper() == accounts[0].upper() and approval.call().owner(1).upper() == accounts[1].upper() and approval.call().owner(2).upper() == accounts[2].upper()
    txHash = approval.transact().setFunctionAuthorized(solarAssetAddress, "destroy", test.address)
    authorizedHash = hashFunctions.call().getAuthorizeHash(solarAssetAddress, accounts[0], "destroy", test.address)
    assert approval.call().authorizedFunction(authorizedHash)
    txHash = solarAsset.transact({"from": accounts[1]}).destroy(accounts[0], test.address)



