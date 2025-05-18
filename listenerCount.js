// Import event module
var events = require('events');
const { emit } = require('process');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Define an event listener
eventEmitter.on('connection', function(){
    console.log("Hello connection");
});

// Count the number of listeners for the 'connection' event
var eventListeners = eventEmitter.listenerCount('connection');

// Corrected console log
console.log(eventListeners + " Listener(s) listening to connection event");

