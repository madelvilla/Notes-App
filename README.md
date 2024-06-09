This is a simple command-line notes application built with Node.js. It allows users to add, remove, list, and read notes. 
Chalk and Yargs are imported packages included.

## Features - 
**Add a Note**: Add a new note with a title and a body. 
**Remove a Note**: Remove an existing note by specifying its title. 
**List Notes**: List all existing notes. 
**Read a Note**: Read the body of a note by providing its title. 

Commands that can be used (yargs)
Add a new note. Example: node app.js add --title="Note Title" --body="Note Body" 
Remove an existing note. Example: node app.js remove --title="Note Title"
List all existing notes. Example: node app.js list 
Read the body of a note. Example: node app.js read --title="Note Title"
