var events = require('events');
var eventEmitter = new events.EventEmitter();

// Listener #1
var listener1 = function () {
   console.log('Listener1 executed.');
};

// Listener #2
var listener2 = function () {
   console.log('Listener2 executed.');
};

// Bind the connection event with the listener1 function
eventEmitter.addListener('connection', listener1);

// Bind the connection event with the listener2 function
eventEmitter.on('connection', listener2);

// Count listeners using the modern method
var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listener1 function
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

// Fire the connection event again
eventEmitter.emit('connection');

// Count listeners after removing listener1
eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " Listener(s) listening to connection event");

console.log("Program Ended.");
