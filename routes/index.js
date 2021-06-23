var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MEAN App For Learning' });
});

/**
 * This example is to send some dummy user data to front end based on user id
 */

// Dummy users
let users = [{
  id: '10',
  name: 'Shubham'
}, {
  id: '11',
  name: 'Sachin'
}];

router.get('/getexample/:id', function (req, res) {
  const id = req.params.id;
  if (id) {
    const user = users.find(u => u.id === id);
    if (user) {
      res.render('index', { title: user.name });
    } else {
      res.render('index', { title: 'User not found'} );
    }
  } else {
    res.render('index', { title: 'User does not exist' });
  }
});

module.exports = router;
