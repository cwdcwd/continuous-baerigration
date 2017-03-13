'use strict';

const config=require('config');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: config.APP_TITLE });
});

module.exports = router;
