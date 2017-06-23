var amqp = require('amqp');
var streams = require('../rx/streams');

var connection = amqp.createConnection({ host: 'localhost', login: 'admin', password: 'admin' });

// add this for better debuging
connection.on('error', function(e) {
  console.log("Error from amqp: ", e);
});

// Wait for connection to become established.
connection.on('ready', function () {
  // Use the default 'amq.topic' exchange
  connection.queue('my-queue', function (q) {
      // Catch all messages
      q.bind('#');

      // Receive messages
      q.subscribe(function (message) {
        // Print messages to stdout
        if(message.status == undefined) {
          console.log(`Receive message in amqp: ${JSON.stringify(message)}`);
          streams.rabbitMQSubject.next({status: 'in', data: message});
        }
      });
  });
});

const publish = (message) => {
  console.log(`Sending message in amqpInterface: ${message}`);
  connection.publish('my-queue', {message});
};

module.exports = {
  publish
};