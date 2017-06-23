const Rx = require('rxjs');

const systemSubject = new Rx.Subject();
const rabbitMQSubject = new Rx.Subject();

module.exports = {
  systemSubject,
  rabbitMQSubject
};