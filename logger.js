const EventEmitter = require('events');

var url = 'http://yahoo.com';


class Logger extends EventEmitter {
    // function inside a class is called a method
    // method
    log(message){
        // send HTTP request
        console.log(message);
    
        // raise an event
        this.emit('messageLogged', { id: 1, url: 'http..' });
    }

}


module.exports = Logger;
