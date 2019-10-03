var express = require('express');
var router = express.Router();


let results = {comments_list: []};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add_comment', function(req, res) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  results.comments_list[ results.comments_list.length ] = req;
  
  res.json(results.comments_list);
});

router.get('/see_comment', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  
  res.json(results.comments_list);
});


module.exports = router;
