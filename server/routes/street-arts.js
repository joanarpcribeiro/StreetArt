// server/routes/street-arts.js
const express = require('express');
const router = express.Router();
const StreetArt= require('../models/StreetArt')
//import axios from 'axios';

router.get('/', (req, res, next) => {
  StreetArt.find()
    .then( streetArt => {
      res.json(streetArt);
    })
    .catch(err => next(err))
});

router.get('/:streetArtId', (req, res, next) => {
  StreetArt.findById(req.params.streetArtId)
    .then( art => {
      res.json(art)
    })
    .catch(err => next(err))
});

module.exports = router;