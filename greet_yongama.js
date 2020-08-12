const chalk = require('chalk');

const greet = require('./greet');

var figlet = require('figlet');
 
figlet(greet('Yongama'), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    // console.log(data)

    const styledMessage = chalk.bgGreen.black(data);
    console.log(styledMessage);
    
});

