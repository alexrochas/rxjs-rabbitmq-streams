var express = require('express');
var streams = require('../lib/rx/streams');
var amqp = require('../lib/amqp/amqpInterface');
var router = express.Router();

router.post('/', function(req, res, next) {
  amqp.publish(req.body);
  streams.rabbitMQSubject.next(req.body);
  res.send('Done.');
});

module.exports = router;