/*jshint esversion: 6*/
console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const yargv = yargs.argv;
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
    notes.getAll();
} else if(command === 'read'){
    var note = notes.getNote(yargv.title);
    if(note){
        notes.logNote(note);
    } else {
        console.log('No Note with title');
    }
} else if(command === 'remove'){
    notes.deleteNote(yargv.title);
} else{
    console.log('Not a valid command');
}