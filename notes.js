console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
    // A fetch on old data
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    // deduplication, title unique, arrow fucntion syntax
    var dupNotes = notes.filter((note) => note.title === title);

    if(dupNotes.length === 0){
    // updating with new notes
    notes.push(note);
    saveNotes(notes);
    return note;
    }
};

var getAll = () => {
    console.log('All');
};

var getNote = (title) => {
    console.log('getting note');
};

var deleteNote = (title) => {
    
};
module.exports = {
    // addNote: addNote same as below
    addNote,
    getAll,
    getNote,
    deleteNote
};