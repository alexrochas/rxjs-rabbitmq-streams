var express = require('express');
var router = express.Router();
var streams = require('../lib/rx/streams');
require('../lib/rx/subscribers');

router.post('/', function(req, res, next) {
  console.log(`Sending message: ${req.body.message}`);
  streams.systemSubject.next(req.body.message);
  res.send('Done.');
});

module.exports = router;
