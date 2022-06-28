const Movie = require("../models/Movie.model");

const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model.js")


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
    Celebrity.find() 
      .then((allCelebrities) => {
        res.render('movies/new-movie.hbs', {allCelebrities});
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
      .then((response) => {
        res.redirect('/movies')
      })
      .catch(() => {
        res.render('/movies/new-movie.hbs')
      })
  });

  router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .populate('cast')
    .then ((response) => {
      console.log({response})
      res.render('movies/movie-details.hbs', {response})
    })
    .catch((error) => {
      next(error);
    })
  }) 


  
// all your routes here

module.exports = router;