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

var argv = require('yargs')
    .command('create', 'Create a new account', function(yargs){

      yargs.options({
        name: {
          demand: true,
          alias: 'n',
          description: 'Account name (ex: Twitter, Facebook)',
          type: 'string'
        },
        username: {
          demand: true,
          alias: 'u',
          description: 'Username or email',
          type: 'string'
        },
        password: {
          demand: true,
          alias: 'p',
          description: 'Account password',
          type: 'string'
        }
      }).help('help')

    })
    .command('get', 'Gets an existing account', function(yargs){

      yargs.options({
        name: {
          demand: true,
          alias: 'n',
          description: 'Account Name (ex: Twitter, Facebook)',
          type: 'string'
        }
      }).help('help')

    })
    .help('help')
    .argv;

var command = argv._[0];

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

  return profile;
}

function getAccount(accountName){
  var accounts = storage.getItemSync('userAccount');
  // console.log(accounts);
  var matchedAccounts;
  accounts.forEach(function (account){
    if (account.name === accountName){
      matchedAccounts = account
    }
  });
  return matchedAccounts;
}

if(command === 'create'){
  var createdAccount = createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  });
  console.log('Account created');
  console.log(createdAccount);
} else if(command === 'get') {
  var fetchedAccount = getAccount(argv.name)

  if(typeof fetchedAccount === 'undefined'){
    console.log('Account not found');
  } else{
    console.log('Account found');
    console.log(fetchedAccount);
  }
}


// createAccount({
//   name: 'Facebook',
//   username: 'gmail@gmail.com',
//   password: 'FooBar1'
// })

// var facebookAccount = getAccount('Facebook');
// console.log(facebookAccount);
