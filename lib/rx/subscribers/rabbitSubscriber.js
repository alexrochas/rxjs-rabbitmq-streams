const streams = require('../streams');
const amqpInterface = require('../../amqp/amqpInterface');

streams.rabbitMQSubject.subscribe({
  next: (e) => {
    if(e.status == 'in') {
      console.log(`Receive from amqp: ${JSON.stringify(e)}`);
      streams.systemSubject.next(e.data);
    } else {
      console.log(`Sending to amqp: ${JSON.stringify(e)}`);
      amqpInterface.publish({status:'out', data: e.data});
    }
  }
});