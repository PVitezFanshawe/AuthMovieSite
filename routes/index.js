var express = require('express');
var router = express.Router();
var config = require('../config');
var connect = require('../utils/sqlConnect');

// do some checking here => check the default user profile
// ternary statement => MDN ternary
var toRender = (config.kidsmode) ? 'main_kids' : 'home';
router.get('/', (req, res, next) => {
  connect.query('SELECT * FROM tbl_movies', (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

      res.render(toRender, {
        title: 'NN: Not Netflix!',
        message : "Welcome to NotNetflix!",
        movieData: result,
        mainpage : true,
        kidsmode : config.kidsmode
      });
    }
  });
});
/* GET home page. */


module.exports = router;
