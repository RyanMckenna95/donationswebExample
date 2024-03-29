const chalk         = require('chalk');
const readlineSync  = require('readline-sync');

function displayMenu() {

    let choice;

    let donations = [
        {id: 1000000, paymenttype: 'PayPal', amount: 1600, upvotes: 1},
        {id: 1000001, paymenttype: 'Direct', amount: 1100, upvotes: 4},
        {id: 1000002, paymenttype: 'Visa', amount: 100, upvotes: 2}
    ];

    function continueYN() {
        if (readlineSync.keyInYN('Do you want to Continue?'))
        displayMenu();
        //Display Menu
        else
        process.exit(0);
        //Exit
    }

    let options = ['Make A Donation', 'Display All Donations', 'Find A Donation', 'Delete A Donation'];

    console.log('\x1Bc'); // Clear the Screen
    console.log(chalk.bold('----- DONATION -----'));
    console.log('');
    choice = readlineSync.keyInSelect(options, chalk.green.bold('Choose an Option?'));

    if(choice+1 == 1)
        console.log(chalk.red.bold('Make a dontation...'))
        ;
    else if(choice+1 == 2)
        console.log(donations)
        ;
    else if(choice+1 == 3)
        console.log(chalk.red.bold('search for donations'))
        ;
    else if(choice+1 == 4)
        console.log(chalk.red.bold('Delete a donation'))
        ;
    else
        return process.exit(0);
    continueYN()


}

displayMenu();
