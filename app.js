const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener
// alias for ADDLISTENER is ON
// emitter.addListener
emitter.on('messageLogged', function(){
    console.log('Listener is called');
});


// raise an event
emitter.emit('messageLogged');



