const driver = require('bigchaindb-driver')
const jsSha3 = require('js-sha3')
const conn = new driver.Connection('https://test.bigchaindb.com/api/v1/', {
    app_id: 'XX',
    app_key: 'XX'
});
const myBitKey = new driver.Ed25519Keypair()

// Construct a transaction payload

function createAssetData(_type, _location, _description, _size, _startDate, _installer,
   _initiator, _maxFunding, _termsAndConditions){
     // need to find something unique to go with type
     let _countOfIntiatesForThisType = 0; // Query check how many they've done
     let assetHash = jsSha3.keccak256(_type + ':' + _initiator + ':' + _countOfIntiatesForThisType);

     const assetData = {
       asset:{
         'assetHash' : assetHash,
         'type' : _type,
         'location' : _location,
         'description' : _description,
         'size' : _size,
         'startDate' : _startDate,
         'installer' : _installer,
         'initiator' : _initiator,
         'currentFunding' : 0,
         '_maxFunding' : _maxFunding,
         'termsAndConditions' : _termsAndConditions
        }
     };

     const metaData = {'fullyFunded': false}
     createTransaction(assetData, metaData)
};

function createTransaction(_assetData, _metaData){
  const tx = driver.Transaction.makeCreateTransaction(
    _assetData,
    _metaData,
      [ driver.Transaction.makeOutput(
              driver.Transaction.makeEd25519Condition(myBitKey.publicKey))
      ],
      myBitKey.publicKey
  )
  signAndPostTransaction(tx, myBitKey.privateKey);
}

function signAndPostTransaction(_tx, _privateKey){
  const txSigned = driver.Transaction.signTransaction(_tx, _privateKey)
  conn.postTransaction(txSigned)
      .then(() => conn.pollStatusAndFetchTransaction(txSigned.id))
      .then(retrievedTx => console.log('Transaction', retrievedTx.id, 'successfully posted.'))
}

createAssetData('solar','Potsdam, Germany', 'solarDesc', '5 megawatts on 30 acres', 'Dec 29, 2017',
'Solar Chief', '0x8ebFB143705F836Bc34BE5122F0a7F52f9273aA9', '$55,000', 'investAtOwnRisketc...');
