var express = require('express');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');
var router = express.Router();

// middleware goes here... it's in the middle of the process -> after the request, before the response
//
// parse the request, make sure we can convert incoming data into something Express can use
router.use(bodyParser.urlencoded({ extended : false }));
router.use(bodyParser.json());


/* GET home page. */
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  console.log('hit an api route with params');

  connect.query(`SELECT * FROM tbl_movies WHERE movie_id="${req.params.id}"`, (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

      res.json({MovieData: result});
    }
  });
});



module.exports = router;
