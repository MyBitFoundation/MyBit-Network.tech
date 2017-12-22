import binascii
from sha3 import keccak_256


def mine(chain, numBlocks):
    chain.web3.testing.mine(numBlocks)
    return

def getTimestamp(chain):
    return chain.web3.blockNumber

def getReceiptMined(chain, txHash):
    return chain.wait.for_receipt(txHash)

def isChecksum(chain, addr):
    return chain.web3.isChecksumAddress(addr)

def convertEtherToWei(chain, _amountEther):
    return chain.web3.toWei(_amountEther, 'ether')

def convertWeiToEther(chain, _amountWei):
    return chain.web3.fromWei(_amountWei, 'ether')


def sha3(chain, data):
    return chain.web3.sha3(data)


def test_successfulFunding(chain):
    accounts = chain.web3.eth.accounts
    print(accounts[0])
    print(isChecksum(chain, accounts[0]))
    myBitFoundation = accounts[4]
    assetEscrow = accounts[5]
    approval, _ = chain.provider.get_or_deploy_contract('Approval')
    myBitHub, _ = chain.provider.get_or_deploy_contract('MyBitHub', deploy_args=[myBitFoundation, assetEscrow, approval.address])
    Asset = chain.provider.get_contract_factory('Asset')

    owner = myBitHub.call().owner()
    # assert sha3(chain, owner) == sha3(chain, accounts[0])   # complains about different letters being capitalized


    # ---------------Test Ownership & Asset Type------------------------
    assert  owner.upper() == accounts[0].upper()  # complains about different letters being capitalized
    testFundingTime = 300
    solarAssetType = keccak_256("solar".encode('utf-8')).hexdigest()
    solarAssetType = bytes.fromhex(solarAssetType)


    # # ------------Create Asset------------------------
    ipfsHash = bytes.fromhex(keccak_256("someStorageHash".encode('utf-8')).hexdigest())
    firstProjectGoal = convertEtherToWei(chain, 20)
    assetInstaller = bytes.fromhex(keccak_256("SolarCity".encode('utf-8')).hexdigest())
    firstAssetCreator = accounts[9]
    txHash = approval.transact({"from": owner}).approveUser(firstAssetCreator)
    assert approval.call().userApproved(firstAssetCreator) == True
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
    txHash = solarAsset.transact({"from": firstFunder, "value":fundingAmount}).fund()
    assert solarAsset.call().amountRaised() == fundingAmount
    assert solarAsset.call().stage() == 0
    secondFunder = accounts[2]
    secondFundingAmount = convertEtherToWei(chain, 5)
    txHash = solarAsset.transact({"from": secondFunder, "value":secondFundingAmount}).fund()
    txHash = solarAsset.transact({"from": firstFunder, "value":fundingAmount}).fund()
    thirdFunder = accounts[3]
    thirdFundAmount = secondFundingAmount
    txHash = solarAsset.transact({"from": thirdFunder, "value":fundingAmount}).fund()
    assert solarAsset.call().amountRaised() == solarAsset.call().amountToBeRaised()
    assert solarAsset.call().stage() == 1
    assert myBitHub.call().beingFunded(firstAsset) == False
    assert myBitHub.call().assets(0) == firstAsset
    assert myBitHub.call().assetCounter() == 1
    assert fundingAmount * 2 == solarAsset.call().shares(firstFunder)
    assert secondFundingAmount == solarAsset.call().shares(secondFunder)
    assert thirdFundAmount == solarAsset.call().shares(thirdFunder)



    # ---------------Check Payout Mechanism-----------------------
    txHash = solarAsset.transact().payout()
    receipt = getReceiptMined(chain, txHash)
    assert solarAsset.call().stage() == 3
    firstROIPayment = convertEtherToWei(chain, 10)
    # ----------------Check Receiving ROI---------------------
    solarAsset.transact({"value": firstROIPayment}).receiveIncome("First ROI payment")
    assert solarAsset.call().totalIncomeEarned() == firstROIPayment
    solarAsset.transact({"from": firstFunder}).withdrawal()
    assert solarAsset.call().paidToFunder(firstFunder) == (firstROIPayment * .5)
    assert solarAsset.call().totalPaidToFunders() == solarAsset.call().paidToFunder(firstFunder)
    solarAsset.transact({"from": secondFunder}).withdrawal()
    solarAsset.transact({"from": thirdFunder}).withdrawal()
    firstFunderPaid = solarAsset.call().paidToFunder(firstFunder)
    secondFunderPaid = solarAsset.call().paidToFunder(secondFunder)
    thirdFunderPaid = solarAsset.call().paidToFunder(thirdFunder)
    assert secondFunderPaid < firstFunderPaid
    assert secondFunderPaid == thirdFunderPaid
    assert solarAsset.call().totalPaidToFunders() == firstFunderPaid + secondFunderPaid + thirdFunderPaid
    # -------------------Test second createAsset()--------------------------
    atmAssetType = keccak_256("atm".encode('utf-8')).hexdigest()
    atmAssetType = bytes.fromhex(atmAssetType)
    secondProjectGoal = convertEtherToWei(chain, 200)
    atmAssetInstaller = bytes.fromhex(keccak_256("arabco".encode('utf-8')).hexdigest())
    secondAsset = myBitHub.call({"from": firstAssetCreator}).createAsset(ipfsHash, secondProjectGoal, atmAssetInstaller, atmAssetType)
    txHash = myBitHub.transact({"from": firstAssetCreator}).createAsset(ipfsHash, secondProjectGoal, atmAssetInstaller, atmAssetType)
    txHash = approval.transact().removeUser(firstAssetCreator)
    assert approval.call().userApproved(firstAssetCreator) == False
    atmAsset = Asset(secondAsset)
    firstFunder = accounts[1]
    txHash = atmAsset.transact({"from": firstFunder, "value":secondProjectGoal}).fund()
    # ------------Test removing assets------------------
    assert myBitHub.call().assetCounter() == 2 
    txHash = myBitHub.transact().removeAsset(1)
    assert myBitHub.call().assetCounter() == 1
    txHash = myBitHub.transact().removeAsset(0)
    assert myBitHub.call().assetCounter() == 0 

    # removed user cannot create more assets
    # secondAsset = myBitHub.call({"from": firstAssetCreator}).createAsset(ipfsHash, secondProjectGoal, atmAssetInstaller, atmAssetType)


def test_pause(chain):
    accounts = chain.web3.eth.accounts
    myBitFoundation = accounts[4]
    assetEscrow = accounts[5]
    approval, _ = chain.provider.get_or_deploy_contract('Approval')
    myBitHub, _ = chain.provider.get_or_deploy_contract('MyBitHub', deploy_args=[myBitFoundation, assetEscrow, approval.address])
    Asset = chain.provider.get_contract_factory('Asset')

    # -----------Check Owner------------
    owner = myBitHub.call().owner()
    assert owner.upper() == accounts[0].upper()     # Calls will be called by owner by default

    # ------Approve Funder------------
    approvedFunder = accounts[1]
    txHash = approval.transact().approveUser(approvedFunder)
    assert approval.call().userApproved(approvedFunder) == True
    someHash = bytes.fromhex(keccak_256("someStorageHash".encode('utf-8')).hexdigest())
    fakeType = bytes.fromhex(keccak_256("fakeType".encode('utf-8')).hexdigest())
    firstProjectGoal = convertEtherToWei(chain, 20)
    assetInstaller = bytes.fromhex(keccak_256("InstallationCompany".encode('utf-8')).hexdigest())
    txHash = myBitHub.transact({"from": approvedFunder}).createAsset(someHash, firstProjectGoal, assetInstaller, fakeType)
    receipt = getReceiptMined(chain, txHash)
    firstAssetCheck = receipt['logs'][0]['address']    # assert myBitHub.call().beingFunded()
    assert myBitHub.call().beingFunded(firstAssetCheck) == True
    txHash = myBitHub.transact().pause()
    assert myBitHub.call().paused() == True
    # txHash = myBitHub.transact({"from": approvedFunder}).createAsset(someHash, firstProjectGoal, assetInstaller, fakeType)      #This fails
    txHash = myBitHub.transact().unpause()
    txHash = myBitHub.transact({"from": approvedFunder}).createAsset(someHash, firstProjectGoal, assetInstaller, fakeType)      #This fails
    receipt = getReceiptMined(chain, txHash)
    secondAssetCheck = receipt['logs'][0]['address']    # assert myBitHub.call().beingFunded()
    assert myBitHub.call().beingFunded(secondAssetCheck) == True

def test_refund(chain):
    accounts = chain.web3.eth.accounts
    myBitFoundation = accounts[4]
    assetEscrow = accounts[5]
    approval, _ = chain.provider.get_or_deploy_contract('Approval')
    myBitHub, _ = chain.provider.get_or_deploy_contract('MyBitHub', deploy_args=[myBitFoundation, assetEscrow, approval.address])
    myBitHub, _ = chain.provider.get_or_deploy_contract('MyBitHub')
    Asset = chain.provider.get_contract_factory('Asset')
    funderOne = accounts[1]
    fundAmountOne = convertEtherToWei(chain, 10)
    funderTwo = accounts[2]
    fundAmountTwo = convertEtherToWei(chain, 20)
    funderThree = accounts[3]    
    fundAmountThree = convertEtherToWei(chain, 30)
    txHash = approval.transact().approveUser(accounts[0])
    assert approval.call().userApproved(accounts[0]) == True
    # txHash = approval.transact().approveUser(funderTwo)
    # assert approval.call().userApproved(funderTwo) == True   
    # txHash = approval.transact().approveUser(funderThree)
    # assert approval.call().userApproved(funderThree) == True        
    solarAssetType = bytes.fromhex(keccak_256("solar".encode('utf-8')).hexdigest())
    storageHash = bytes.fromhex(keccak_256("thishashwillbeareferencetoadecentralizedstoragebox".encode('utf-8')).hexdigest())
    amountToRaise = convertEtherToWei(chain, 100)
    assetInstaller = bytes.fromhex(keccak_256("InstallationCompany".encode('utf-8')).hexdigest())
    solarAssetAddress = myBitHub.call().createAsset(storageHash, amountToRaise, assetInstaller, solarAssetType)
    txHash = myBitHub.transact().createAsset(storageHash, amountToRaise, assetInstaller, solarAssetType)
    solarAsset = Asset(solarAssetAddress)
    assert myBitHub.call().beingFunded(solarAssetAddress)

    txHash = solarAsset.transact({"from": funderOne, "value": fundAmountOne}).fund()
    assert solarAsset.call().shares(funderOne) == fundAmountOne
    assert solarAsset.call().amountRaised() == fundAmountOne
    txHash = solarAsset.transact({"from": funderTwo, "value": fundAmountTwo}).fund()
    assert solarAsset.call().shares(funderTwo) == fundAmountTwo
    txHash = solarAsset.transact({"from": funderThree, "value": fundAmountThree}).fund()
    assert solarAsset.call().amountRaised() == (fundAmountThree + fundAmountTwo + fundAmountOne)
    mine(chain, 20)
    # assert solarAsset.call().fundingDeadline() == 0



#     # ------------------Create First Asset----------------------------------------
#     txHash = solarAssetHub.transact({"from": solarHouseOwner}).createAsset(newAssetStorageHash, amountToRaise, solarInstaller)
#     numberOfAssets = solarAssetHub.call().numAssets()
#     assert numberOfAssets == 1
#     solarAssetAddress = solarAssetHub.call().assets(0)
#     solarAsset = Asset(solarAssetAddress)
#     solarAssetHubAddressCheck = solarAsset.call().assetHub()
#     assert solarAssetHubAddressCheck == solarAssetHubAddress
#     projectCreatorCheck = solarAsset.call().projectCreator()
#     assert projectCreatorCheck.upper() == solarHouseOwner.upper()
#     assetInstallerCheck = solarAsset.call().assetInstaller()
#     assert assetInstallerCheck.upper() == solarInstaller.upper()
#     # myBitHub.transact().addAssetType(assetType, 30000000)
#     # assert assetLimit == 10000
#     firstFunder = accounts[3]
#     fundingAmount = convertEtherToWei(chain, 50)
#     txHash = solarAsset.transact({"from": firstFunder, "value":fundingAmount}).fund()
#     assert solarAsset.call().amountRaised() == fundingAmount
#     secondFunder = accounts[4]
#     mine(chain, 20)
#     txHash = solarAsset.transact({"from": firstFunder}).refund()
#     virtualBank = accounts[5]
#     assert solarAsset.call().amountRaised() == 0
#     roiAmount = convertEtherToWei(chain, 10)
#     txHash = solarAsset.transact({"from": virtualBank, "value": 10}).receiveIncome()
