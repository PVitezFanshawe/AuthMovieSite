var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  connect.query('SELECT * FROM tbl_movies', (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

      res.render('movies', {
        title: 'Not Netflix',
        message : "A Selection of Movies",
        movieData : result
      });
    }
  });
});

module.exports = router;
