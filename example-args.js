var argv = require('yargs')
    .command('platanos', 'Greets the user', function(yargs){
      yargs.options({
        name: {
            demand: true,
            alias: 'g',
            description: 'Gets first name',
            type: string
          },
        lastName: {
          demand: true,
          alias: 'l',
          description: 'Gets last name'
        }
      }).help('help')
    })
    .command('get', 'some description', function(yargs){

    })
    .help('help')
    .argv;
var command = argv._[0];
// var lastName = argv.lastName;
console.log(argv);

// if(argv._[0] == 'platanos'){
//   console.log('Platanos RUle!');
// }

// if(command == 'platanos' && typeof argv.name !== 'undefined'){
//   console.log('YOOO ' + argv.name);
// } else if(command == 'platanos'){
//   console.log('YOOO MTV RAPS!')
// }

if(command == 'platanos' && typeof lastName !== 'undefined'){
  console.log('Want some platanos ' + argv.name + ' ' + lastName );
} else if (command == 'platanos'){
  console.log('Want some platanos ' + argv.name);
}
