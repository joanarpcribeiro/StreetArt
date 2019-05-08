// server/routes/street-arts.js
const express = require('express');
const router = express.Router();
const StreetArt= require('../models/StreetArt')

router.get('/', (req, res, next) => {
  StreetArt.find()
    .then( streetArt => {
      res.json(streetArt);
    })
    .catch(err => next(err))
});

module.exports = router;