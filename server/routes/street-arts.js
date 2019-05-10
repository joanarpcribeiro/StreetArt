// server/routes/street-arts.js
const express = require('express');
const router = express.Router();
const StreetArt= require('../models/StreetArt')
const upload = require('../configs/cloudinary')
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

// upload.single('picture') is taking the field "picture" sent by the user, save it to cloudinary, save the info in req.file and go to the next middleware
router.post('/', upload.single('picture'), (req, res, next) => {
  let { lat, lng } = req.body
  let pictureUrl = req.file.url
  
  StreetArt.create({
    location: {coordinates:[lat, lng]},
    pictureUrl: pictureUrl
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })

});

module.exports = router;