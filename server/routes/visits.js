const express = require('express');
const StreetArt = require('../models/StreetArt');
const Visit = require('../models/Visit');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();

// Route protected for logged in user
router.get('/my-visits', isLoggedIn, (req, res, next) => {
  // TODO: continue
  // You should use `.populate'.
  Visit.find({_user: req.user._id})
  .populate("_streetArt")
  .then(response => {
    res.status(200).json(response);
  })
  .catch(err => {
    res.json(err);
  })
});

module.exports = router;