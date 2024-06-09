const chalk = require('chalk') //imports chalk package
const yargs = require('yargs') //imports yargs
const notes = require('./notes.js') //importing a separate file---notes.js

// Customize yargs version
yargs.version('1.1.0')

//---------------add command---------------
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //must add --title to command line
            type: 'string' //must be a "string"-- can be empty
        },
        body: {
            describe: 'Note body',
            demandOption: true, //REQUIRED
            type: 'string' //REQUIRED
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//----------remove command---------------
yargs.command({
    command: 'remove',
    describe: 'Remove a note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//-------------List command--------------
yargs.command({
    command: 'list',
    describe: 'List your note',
    handler() {
        notes.listNotes()
    }
})


//---------------Read command--------------
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse() //parses our options and puts them in the object so they're easy access
