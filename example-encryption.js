var crypto = require('crypto-js');

var secretMessage = 'I hid the chips under the couch.';
var secretKey = '123abc';

var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);

console.log('Encrypted Message: ' + encryptedMessage);

// Decrypt a message
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);

console.log('Decrypted Message: ' + decryptedMessage);

var secretMessage = {
  name: 'Germ',
  secretName: '007'
}

var js = JSON.stringify(secretMessage);
var blah = crypto.AES.encrypt(js, secretKey);
var newBytes = crypto.AES.decrypt(blah, secretKey);
var deecrypt = JSON.parse(newBytes.toString(crypto.enc.Utf8));
console.log(deecrypt.name);
