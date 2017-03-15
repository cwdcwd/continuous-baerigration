'use strict';

const express = require('express');

const router = express.Router();

/* GET something. */
router.get('/', (req, res) => {
  res.json({
    msg: 'I am a message!'
  });
});

/* POST something. */
router.post('/', (req, res) => {
  res.json(req.body); // CWD-- sending pack what was posted
});

module.exports = router;
