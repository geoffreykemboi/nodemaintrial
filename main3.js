//import events module
var evenrs = require('events');

//create an eventEmitter object
var eventEmitter = new events.EventEmitter();

//create an event handler
var connectHandler =  function connected() {
    console.log('Connection successful.');
    //fire the data_received event
    eventEmitter.emit('data_received');     
}

//Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

//Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
    console.log('Data received successfully.');
}); 

//fire the connection event
eventEmitter.emit('connection');    

console.log('Program Ended.');
