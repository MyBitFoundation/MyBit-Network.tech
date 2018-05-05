const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bcrypt = require('bcrypt');
const authy = require('authy')(config.authyKey);
const twilioClient = require('twilio')(config.accountSid, config.authToken);
const config = require('../config');


const url = "mongodb://localhost:27017/MyBit";
const saltRounds = 10;

var dbase;
var database;


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    dbase = db.db('MyBit');
    database = dbase;
    dbase.createCollection('Users');
    dbase.createCollection('Assets');
    dbase.createCollection('Stake');

    //createUser('0x0','Connor','Howe', 'Admin','Test@protonmail.ch', '05/11/94', '616 Hell Rd');
    /*var _hash;
    grabUsersPasswordHash('Test@protonmail.ch', function(response){
      console.log('Response ' + response);
      _hash = response;
    });
    console.log('Hash ; ' + _hash);
    getUserEthAddressFromEmail('Test@protonmail.ch',function(response){
      console.log('Callback _id' + response);
    });*/

    sendAuthyToken('Test@protonmail.ch');
});

/*
----------------------User Creation----------------------
TODO; Email format validation, and legit email
TODO; Address format validation, and lookup to check associated name
TODO; D.O.B format validation
TODO; Unique email ensureIndex
*/

function createUser(_ethAddress, _firstName, _lastName, _password,
                    _email, _dateOfBirth, _homeAddress){

    var hashedPassword = generatePasswordSalt(_password);

    dbase.collection('Users').update(
        {email:{$eq:_email}}, // if email already exists do not create entry
        {_id: _ethAddress,
          firstName: _firstName,
          lastName: _lastName,
          password: hashedPassword,
          email: _email,
          authyId: String,
          dateOfBirth: _dateOfBirth,
          homeAddress: _homeAddress,
          idVerified: Boolean,
          accessLevel: Number,
          assetsFunded: [String],
          stakes: [String]
        },
        {upsert:true}
      );

}


/*----------------------Password Salt Creation----------------------*/
function generatePasswordSalt(_password){

  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(_password, salt);
  if(validatePasswordHash(hash,_password)){
    console.log('Hash correct');
    return hash;
  };
}




/*----------------------Stake Creation----------------------*/
function createStake(_ethAddress, _period, _unlockTime,
                    _creationTime, _maxMultiplier){

    dbase.collection('Stake').update(
        {_id:{$eq:_ethAddress}, period:{$eq:_period}}, // if ethAddress && period already exists do not create entry
        {_id: _ethAddress,
         period: _period,
         unlockTime: _unlockTime,
         creationTime: _creationTime,
         maxMultiplier: _maxMultiplier,
         userStakes :[]
       },
        {upsert:true}
      );
}

/*----------------------User Stake----------------------*/
function addUserStakeToStake(_ethAddress, _period){

  /*TODO; check if user already has a lock*/
  dbase.collection('Stake').update(
    {_id:{$eq:_ethAddress}, period:{$eq:_period}},
    {$push:
      {stakes:{_id:_userAddr}}
    }
  );
}


/*----------------------Asset Creation----------------------*/
function createAsset(_ethAddress, _creatorAddress, _geoLocation,
                    _description, image, _fundingRequired,
                    _fundingTotal, _fundingDeadline, _live){

  dbase.collection('Assets').update(
    {_id:{$eq:_ethAddress}},   //if already exists do not create
    {_id:_ethAddress,
    creatorAddress: _creatorAddress,
    geoLocation: _geoLocation,
    description: _description,
    image: [_image],
    fundingRequired: _fundingRequired,
    fundingRecieved: _fundingRecieved,
    fundingDeadline: _fundingDeadline,
    fundingCompleted: false,
    funders: [String],
    funderOwnership: [Number],
    live: _live});
  }


function sendAuthyToken(_email){
   var obj = dbase.collection('Assets').findOne({email:_email});
   console.log(obj);
}


/*---------------------Asset Modification--------------*/
function updateAssetFundingRecieved(_ethAddress, _fundingAmount){
  dbase.collection('Assets').updateOne(
    {_id:ethAddress, fundingRecieved: {$ne: fundingRequired} },
    {$inc:{fundingRecieved: + _fundingAmount}}
  );
}

function updateAssetEthAddress(_ethAddress, _newEthAddress){
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress},
    {$set:{_id:_newEthAddress}});
}

function updateAssetCreatorAddress(_ethAddress, _creatorAddress, _newCreatorAddress){
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress, creatorAddress: _creatorAddress},
    {$set:{creatorAddress:_creatorAddress}}
  );
}

function updateAssetGeoLocation(_ethAddress, _geoLocation, _newGeoLocation){
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress, geoLocation: _geoLocation},
    {$set:{geoLocation:_newGeoLocation}}
  );
}

function updateAssetDescription(_ethAddress, _newDescription){
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress},
    {$set:{description:_newDescription}}
  );
}

function addAssetImage(_ethAddress, _newImageDirectory){
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress},
    {$push:{image:_newImageDirectory}}
  );
}

function updateAssetImage(_ethAddress, _oldImageDirectory, _newImageDirectory){
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress, image:_oldImageDirectory},
    {$set:{image:_newImageDirectory}}
  );
}

function removeAssetImage(_ethAddress, _oldImageDirectory){
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress, image:_new},
    {$pull:{image:_oldImageDirectory}}
  );
}

function updateAssetFundingRequired(_ethAddress, _newFundingRequired) {
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress},
    {$set:{fundingRequired:_newFundingRequired}}
  );
}

function updateAssetFundingDeadline(_ethAddress, _newFundingDeadline){
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress},
    {$set:{fundingDeadline:_newFundingDeadline}}
  );
}

function updateAssetFundingComplete(_ethAddress, _newFundingCompleted){
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress},
    {$set:{fundingCompleted:_newFundingCompleted}}
  );
}

function updateAssetLive(_ethAddress, _newLive) {
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress},
    {$set:{live:_newLive}}
  );
}

function removeAsset(_ethAddress){
  dbase.collection('Assets').deleteOne({_id:_ethAddress});
}

function addAssetFunder(_ethAddress, _funderAddr, _funderOwnership) {
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress},
    {$push:{funders:_userAddr},
     $push:{funderOwnership:_funderOwnership}}
   );
}

function updateAssetFunderAddress(_ethAddress, _funderAddr, _newFunderAddress){
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress, funders:_funderAddr},
    {$set:{'funders.$' : _newFunderAddress}}
  );
}

function updateAssetFunderOwnership(_ethAddress, _funderAddr, _newFunderOwnership){
  var instanceFunderDoc = dbase.collection('Assets').findOne({_id:_ethAddress}).funders;
  var indexOfFunder = p.indexOf(_funderAddr);
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress},
    {$set:{'funderOwnership.p' : _newFunderOwnership}}
  );
}


function removeAssetFunderAndOwnershipStake(_ethAddress, _funderAddr, _funderOwnership) {
  var instancefunderDoc = dbase.collection('Assets').findOne({_id:_ethAddress}).funders;
  var indexFunder = p.indexOf(_funderAddr);
  dbase.collection('Assets').updateOne(
    {_id:_ethAddress},
    {$pull:{funders: _funderAddr},
     $pull:{'funderOwnership.t' : _funderOwnership }}
  );
}


/*---------------------Stake modification--------------*/
function removeStake(_ethAddress, _period){
  dbase.collection('Stake').deleteOne({_id:_ethAddress, period:_period});
}

function updateStakePeriod(_ethAddress, _oldPeriod, _newPeriod){ // TODO; Ensure that the new period type doesn't already exist
  dbase.collection('Stake').updateOne({_id:_ethAddress, period:_period},
  {$set:{period:_newPeriod}});
}

function updateUnlockTime(_ethAddress, _period, _newUnlockTime){
  dbase.collection('Stake').updateOne({_id:_ethAddress, period:_period},
  {$set:{unlockTime: _newUnlockTime}});
}

function updateCreationTime(_ethAddress, _period, _newCreationTime){
  dbase.collection('Stake').updateOne({_id:_ethAddress, period:_period},
  {$set:{creationTime:_newCreationTime}});
}

function updateMaxMultiplier(_ethAddress, _period, _newMaxMultiplier){
  dbase.collection('Stake').updateOne({_id:_ethAddress, period: _period},
  {$set:{maxMultiplier:_newMaxMultiplier}});
}

function deleteUserStake(_ethAddress, _period, _userStakeToRemove){
  dbase.collection('Stake').updateOne({_id:_ethAddress, period:_period},
    {$pull:{stakes:_userStakeToRemove}});
}



/* ----------------------User Getters---------------------- */
function getUserEthAddressFromEmail(_email,callback){
  dbase.collection('Users').findOne({email:_email}).
  then(function(res){
    return callback(res._id);
  });
}

function validatePasswordHash(hash, _password) {
  // Return true
  var result = bcrypt.compareSync(_password, hash);
  return result;
}

function grabUsersPasswordHash(_email, callback){
  dbase.collection('Users').findOne(
    {email:_email}
  ).then(function(res){
    console.log(res.password);
    return callback(res.password);
  });
}


/* ----------------------User Modification---------------------- */

function updateUserAddress(_ethAddress, _newEthAddress, _email, _password){
    getUserEthAddressFromEmail(_email, function(_userAddr){
      if(_userAddr == _ethAddress){
        grabUsersPasswordHash(_email, function(_hash){
          if(validatePasswordHash(_hash, _password)){
            dbase.collection('Users').updateOne(
              {_id: _ethAddress},
              {$set:{_id:_newEthAddress}});
            }
          }
        )
      }
    }
  );
}

function updateUserFirstName( _email, _password, _newFirstName){
  grabUsersPasswordHash(_email, function(_hash){
    if(validatePasswordHash(_hash, _password)){
      dbase.collection('Users').updateOne({_id: _ethAddress},
        {$set:{firstName:_newFirstName}});
      };
    });
  };


function updateUserLastName(_email, _password, _newLastName){
  grabUsersPasswordHash(_email, function(_hash){
    if(validatePasswordHash(_hash, _password)){
      dbase.collection('Users').updateOne({email: _email},
        {$set:{lastName:_newLastName}});
      }
    });
}

function updateUserEmail(_email, _password, _newEmail){
  grabUsersPasswordHash(_email, function(_hash){
    if(validatePasswordHash(_hash, _password)){
      dbase.collection('Users').updateOne({email: _email},
        {$set:{email:_newEmail}});
    }
  });
}

function updateUserDateOfBirth(_email, _password, _newDateOfBirth){
  grabUsersPasswordHash(_email, function(_hash){
    if(validatePasswordHash(_hash, _password)){
      dbase.collection('Users').updateOne({email: _email},
        {$set:{dateOfBirth:_newDateOfBirth}});
      }
    });
}

function updateUserHomeAddress(_email, _password, _newHomeAddress){
  grabUsersPasswordHash(_email, function(_hash){
    if(validatePasswordHash(_hash, _password)){
      dbase.collection('Users').updateOne({email: _email},
        {$set:{homeAddress:_newHomeAddress}});
      }
    });
}

function updateUserIdVerified(_email, _password, _newIdVerified){
  grabUsersPasswordHash(_email, function(_hash){
    if(validatePasswordHash(_hash, _password)){
      dbase.collection('Users').updateOne({email: _email},
        {$set:{idVerified:_newIdVerified}});
      }
    });
}

function updateUserAccessLevel(_email, _password, _accessLevel){
  grabUsersPasswordHash(_email, function(_hash){
    if(validatePasswordHash(_hash, _password)){
    dbase.collection('Users').updateOne({email: _email},
      {$set:{accessLevel:accessLevel}});
    }
  });
}

function addUsersAssetsFunded(_email, _password, _newAssetFunded){
  grabUsersPasswordHash(_email, function(_hash){
    if(validatePasswordHash(_hash, _password)){
      dbase.collection('Users').updateOne({email: _email}, /*TODO; validation that it doesnt already exist */
        {$push:{assetsFunded:_newAssetFunded}});
    }
  });
}

function removeUsersAssetsFunded(_email, _password, _assetFundedToRemove){
  grabUsersPasswordHash(_email, function(_hash){
    if(validatePasswordHash(_hash, _password)){
      dbase.collection('Users').updateOne({email:_email, assetsFunded:_assetFundedToRemove},
        {$pull:{assetsFunded:_assetFundedToRemove}}
      );
    }
  });
}

function deleteUser(_ethAddress, _email,_password){
  getUserEthAddressFromEmail(_email, function(_userAddr){
    if(_userAddr == _ethAddress){
      grabUsersPasswordHash(_email, function(_hash){
        if(validatePasswordHash(_hash, _password)){
          dbase.collection('Users').deleteOne({_id:_ethAddress, email: _email});
        }
      })
    }
  });
}


/*TODO; Fix this, how are we storing this? */
function updateUserStakes(_ethAddress, _newAssetFunded){
  /*dbase.collection('Users').update({ethAddress: _ethAddress},
    {$push:{accessLevel:_newAssetFunded}});*/
}
























  //dbase.collection('Stake').ensureIndex({'locks._id':1}); /*TODO; only do once at creation of first ever lock*/

  /*dbase.collection('Stake').update(
    {_id:{$eq:_ethAddress}, period:{$eq:_period}},
    {$push:
      {'locks.$._id':{
        amount: _amount,
        amountIncludingMultiplier: _amountIncludingMultiplier,
        daysLockedAt: _daysLockedAt,
        transactionFeeWhenLocked: _transactionFeeWhenLocked,
        lastWithdrawl: _lastWithdrawl,
        multiplier: _multiplier
      }}
      }
  );*/

  /*dbase.collection('Stake').update(
    {_id:{$eq:_ethAddress}, period:{$eq:_period}}
  )
}*/



/*
  firstName: String,
  lastName: String,
  email: String, // update to do validation
  firstLineOfAddress: String,
  town: String,
  zipcodePostcode: String,
  idVerified: Boolean,
  accessLevel: Number,
  assetsFunded: [Number],
  stakes: [Number]


function createUserCollection(){
  dbase.createCollection("Users", {
   validator: {
      $jsonSchema: {
         bsonType: 'object',
         required: [ "name", "year", "major", "gpa" ],
         properties: {
            ethAddress:   { type: 'string'},
            firstName:    { type: 'string'},
            lastName:     { type: 'string'},
            email:        { type: 'string'},
            dateOfBirth:  { bsonType: 'date'},
            homeAddress:  { type: 'array'},
            idVerified:   { type: 'boolean'},
            accessLevel:  { type: 'number', minimum: 0, maximum:3},
            assetsFunded: { type: 'array'},
            stakes:       { type: 'array'}
          }
        }
      }
    }
  );
}
*/
