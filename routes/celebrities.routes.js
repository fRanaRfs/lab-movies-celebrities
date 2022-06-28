const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model.js")

router.get('/celebrities/create', (req, res, next) => {
   
    Celebrity.create()
    .then(() => {
      res.render('celebrities/new-celebritie.hbs')
    })
    .catch((err) => {
      next(err);
    });
   
  });

  router.post('/celebrities/create', (req, res, next) => {
    // Add a new celebrity
    Celebrity.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(() => {
      res.redirect('celebrities/new-celebrities')
    })
  });

  router.get('/celebrities', (req, res, next) => {
    
  Celebrity.find()
  .then((response) => {
    res.render('celebrities/celebrities.hbs', {response})
  })
  .catch((err) => {
    next(err);
  });
    
  });

module.exports = router;