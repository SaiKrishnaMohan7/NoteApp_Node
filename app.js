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
    note = notes.addNote(yargv.title, yargv.body);
    if(note){
        console.log(`New Note, ${note.title}, created!`);
    } else {
        console.log('Note with this title already exists');
    }
}else if(command === 'list'){
    notes.getAll();
} else if(command === 'read'){
    notes.getNote(yargv.title);
} else if(command === 'remove'){
    notes.deleteNote(yargv.title);
} else{
    console.log('Not a valid command');
}