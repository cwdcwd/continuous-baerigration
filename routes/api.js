var express = require('express');
var router = express.Router();

/* GET something. */
router.get('/', function(req, res, next) {
  res.json({
    msg: 'I am a message!'
  });
});

/* POST something. */
router.post('/', function(req, res, next) {
  res.json(req.body); // CWD-- sending pack what was posted
});

module.exports = router;
