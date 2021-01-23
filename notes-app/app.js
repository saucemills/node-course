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
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  },
})

yargs.command({
  command: 'remove',
  desc: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title)
  },
})

yargs.command({
  command: 'list',
  desc: 'List the notes',
  handler() {
    notes.listNotes()
  },
})

yargs.command({
  command: 'read',
  desc: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title)
  },
})

yargs.parse()
