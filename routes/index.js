var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MEAN App For Learning' });
});

/**
 * This example is to send some dummy user data to front end based on user id
 */

module.exports = router;
