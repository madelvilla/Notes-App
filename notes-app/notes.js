//its own module with its own scope with variables
// REQUIRED modules
const fs = require('fs')
const chalk = require('chalk') //adds color to you console depending on your choice

// returns a string representing your notes
const getNotes = () => {
    return 'My notes...'
}

//-----------------adding a note---------------
const addNote = (title, body) => {
    const notes = loadNotes() //loads existing notes

    //checking to see if there are any duplicates in the notes
    const duplicateNote = notes.find((note) => note.title === title)


    //if there is no match then it will push and save the new note, if there is it will return the error
    if (!duplicateNote) {
        //pushing the notes to array
        notes.push({
            title: title,
            body: body
        })
        //saving the notes
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else { //error message, if it is a duplicate
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

//------------remove note--------------------

const removeNote = (title) => {
    const notes = loadNotes()

    // filters out the note you want removed by title
    const notesToKeep = notes.filter((note) => note.title !== title)

    //if the note was found it will remove it and save the new update
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!')) //if the title was found it will be removed and this message will be displayed in green/inverse
        saveNotes(notesToKeep)
    } else { 
        //if the title you want to remove is not found it will show this error message in red/inversed!!
        console.log(chalk.red.inverse('No note found!'))
    }
    
}

//---------------List notes--------------
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue.inverse('Your Notes')) //will show in blue inverse

    //will display each note in the file
    notes.forEach((note) => {
        console.log(note.title)
    })
}

//-------------------Read notes------------
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title) //finds the note with the same title entered

    //if the note is found, by title, it will show the title in gray inverse and the body
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else { //if the note is not found error message will show in red inverse
        console.log(chalk.red.inverse('Note Not Found'))
    }
}


//saving the notes to json file----- whatever is entered will become part of the array of objects in notes.json
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes) 
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    //if the file (notes.json) does not exist we will return an empty []
    try {
        const dataBuffer = fs.readFileSync('notes.json') //reads data from notes.json
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) //parses data/notes into an array of objects
    } catch (e) {
        return [] //if it does not exist it will return an empty array
    }
}

//-------allows these functions to be used in other modules---app.js
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}