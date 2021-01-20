const notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs/yargs')(process.argv.slice(2))

yargs.command({
  command: 'add',
  desc: 'Adding a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    console.log('Title: ' + argv.title)
    console.log('Body: ' + argv.body)
  },
})

yargs.command({
  command: 'remove',
  desc: 'Remove a note',
  handler: function () {
    console.log('Removing a note...')
  },
})

yargs.command({
  command: 'list',
  desc: 'List the notes',
  handler: function () {
    console.log('Listing the notes...')
  },
})

yargs.command({
  command: 'read',
  desc: 'Read a note',
  handler: function () {
    console.log('Reading a note...')
  },
})

yargs.parse()
