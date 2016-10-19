/**
 * Created by jeremiah on 2016-10-19.
 */

var express = require('express');
var router = express.Router();


var movies = require('../models/movies');



router.get('/', function(req, res, next) {
    movies.find(function(e, movies) {
    if (e){
        console.log(e);
        res.redirect('error');
    }
    else {
        res.render('movies', {
            title: 'movies'
        })
    }
    });
});

module.exports = router;