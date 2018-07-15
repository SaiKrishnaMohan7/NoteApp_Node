/*jshint esversion: 6*/

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

var titleOptions = {
    describe: 'Title of Note',
    demand: true, // required value
    alias: 't'
};
var bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};

// Configuring yargs to give info about running script
const yargv = yargs
.command('add', 'Add a new Note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'List all Notes')
.command('remove', 'Remove a Note', {
    title: titleOptions
})
.command('read', 'Read a Note', {
    title: titleOptions
})
.help() // --help flag picks details from the options obj supplied to .command
.argv;
const notes = require('./notes.js');

var command = yargv._[0];


if (command === 'add'){
    var note = notes.addNote(yargv.title, yargv.body);
    if(note){
        notes.logNote(note);
    } else {
        console.log('Note with this title already exists');
    }
} else if(command === 'list'){
    var allNotes = notes.getAll();

    allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read'){
    var note = notes.getNote(yargv.title);
    if(note){
        notes.logNote(note);
    } else {
        console.log('No Note with title');
    }
} else if(command === 'remove'){
    notes.deleteNote(yargv.title);
} else {
    console.log('Not a valid command');
}