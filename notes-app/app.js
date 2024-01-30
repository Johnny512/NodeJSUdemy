const fs = require("node:fs");
const msg = require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const message = msg();
console.log(message);
/* fs.writeFileSync("notes.txt", "This file was created by Node.js!\n");
fs.appendFileSync("notes.txt", "I appended this text with fs.appendFileSync.\n");
fs.appendFileSync("notes.txt", message); */
console.log(chalk.white.bgRed("Failure! " + message));
console.log(validator.isEmail('johnny@example.com'));
console.log(validator.isURL('www.example.com'));

yargs.version('1.1.0')
console.log(yargs.argv)
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    }
    
})


