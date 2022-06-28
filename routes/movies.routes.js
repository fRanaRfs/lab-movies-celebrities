const Movie = require("../models/Movie.model");

const router = require("express").Router();


router.get('/movies', (req, res, next) => {
    Movie.find()
      .then((response) => {
      res.render('movies/movies.hbs', {response});
      })
      .catch((error) => {
        next(error);
      })
  });

  router.get('/movies/create', (req, res, next) => {
    Movie.create()  
      .then(() => {
        res.render('movies/new-movie.hbs');
      })
      .catch((error) => {
        next(error);
      })
  });

  router.post('/movies/create', (req, res, next) => {
    Movie.create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      cast: req.body.cast
    })
      .then(() => {
        res.redirect('/movies')
      })
      .catch(() => {
        res.render('/movies/new-movie.hbs')
      })
  });
// all your routes here

module.exports = router;