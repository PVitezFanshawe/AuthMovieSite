var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/:movie', (req, res) => {
  connect.query(`SELECT * FROM tbl_movies WHERE movies_id="${req.params.movie}"`, (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

      res.render('onemovie', {
        mainpage : false,
        movieData : result,
        regstyle: false,
        regstyleup: true
      });
    }
  });
});

module.exports = router;
