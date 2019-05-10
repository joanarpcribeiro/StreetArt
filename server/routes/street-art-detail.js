const express = require('express');
const router = express.Router();
const StreetArt= require('../models/StreetArt')
const upload = require('../configs/cloudinary')

router.get('/:streetArtId', (req, res, next) => {
  StreetArt.findById(req.params.streetArtId)
    .then( art => {
      res.json(art)
    })
    .catch(err => next(err))
});

module.exports = router;