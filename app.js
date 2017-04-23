console.log("Starting Password Manager");

var storage = require('node-persist');
storage.initSync();

// storage.setItemSync('name','Germ');
// storage.setItemSync('accounts', [{
//   username: 'Germ',
//   balance: 0
// }])
//
// var name = storage.getItemSync('name')
// var person = storage.getItemSync('accounts')
//
// console.log('Saved name is: ' + name);
// console.log(person)



// Account with have three attr.
// account.name Facebook
// account.username User2!
// account.password Password123

function createAccount(profile){
  var accounts = storage.getItemSync('accounts');

  if(typeof accounts === 'undefined'){
    accounts = [];
  }

  accounts.push(profile)
  storage.setItemSync('userAccount', accounts)

  // return profile;
}

function getAccount(accountName){
  var accounts = storage.getItemSync('userAccount');
  var matchedAccounts;
  accounts.forEach(function (account){
    if (account.name === accountName){
      matchedAccount = account;
    }
  });

  return matchedAccount;
}

// createAccount({
//   name: 'Facebook',
//   username: 'gmail@gmail.com',
//   password: 'FooBar1'
// })

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);
