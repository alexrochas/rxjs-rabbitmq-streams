var express = require('express');
var router = express.Router();
var amqpInterface = require('../lib/amqp/amqpInterface');

router.post('/', function(req, res, next) {
  amqpInterface.publish(req.body.message);
  res.send('Done.');
});

module.exports = router;