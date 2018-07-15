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
    var notes = fetchNotes();
    var matchingNote = notes.filter((note) => note.title === title);

    if(matchingNote){
        return matchingNote[0];
    } else{
        return false;
    }
};

var deleteNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    if(filteredNotes.length !== notes.length){
        saveNotes(filteredNotes);
        console.log('Deleted Note, ' + title);
    } else {
        console.log('No note with title ' + title);
    }
};

var logNote = (note) => {
    console.log(`Title: ${note.title}\n Body: ${title.body}`);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote,
    logNote
};