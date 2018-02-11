var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash);
        onceSaltGenerated(hash);
    });
});

// Should return true
function onceSaltGenerated(hash) {
  bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    console.log('Result; ' + res);
  });

  // Should return false
  bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
    console.log('Result; ' + res);
  });
}
