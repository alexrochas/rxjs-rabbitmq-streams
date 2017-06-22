const streams = require('../streams');

console.log('Up and running.');

streams.systemSubject.subscribe({
  next: (e) => console.log(`Receive event in stream with content: ${e}`)
});
