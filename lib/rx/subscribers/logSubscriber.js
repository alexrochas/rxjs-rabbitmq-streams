const streams = require('../streams');

streams.systemSubject.subscribe({
  next: (e) => console.log(`Receive event in stream with content: ${JSON.stringify(e)}`)
});

streams.rabbitMQSubject.subscribe({
  next: (e) => console.log(`Receive event in rabbitMQ stream with content: ${JSON.stringify(e)}`)
});
