const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  console.log('Your notes...')
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.find((note) => note.title === title)

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    })

    saveNotes(notes)
    console.log('New note added')
  } else {
    console.log('Note title already taken')
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const filteredNotes = notes.filter((note) => note.title !== title)

  if (notes.length === filteredNotes.length) {
    console.log(chalk.red.inverse('No note with that title'))
  } else {
    console.log(chalk.green.inverse('Note removed'))
    saveNotes(filteredNotes)
  }
}

const listNotes = () => {
  console.log(chalk.inverse('Your notes:'))
  const notes = loadNotes()
  notes.forEach((note) => {
    console.log(chalk.blue(note.title))
  })
}

const readNote = (title) => {
  const notes = loadNotes()
  const noteToRead = notes.find((note) => note.title === title)

  if (noteToRead) {
    console.log(chalk.blue(noteToRead.title), ': ', noteToRead.body)
  } else {
    console.log(chalk.red('No note found with that title'))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
}
