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

router.post('/visits', isLoggedIn, (req,res,next) => {
  Visit.create({
    _user: req.user._id,
    _streetArt: req.body._streetArt
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })
})

router.delete('/visits/:visitId', isLoggedIn,(req,res,next) =>{
  Visit.findById(req.params.visitId)
    .then(visit=>{ 
      if(visit._user.equals(req.user._id)){
        Visit.findByIdAndRemove(req.params.visitId)
          .then(() => {
            res.json({ message: `Project with ${req.params.visitId} is removed successfully.` });
          })
          .catch( err => {
            res.json(err);
          })
      }
      else{
        res.json({message: "You're Not authorized"})
      }
    })
    .catch( err => {
      res.json(err);
    })
})

module.exports = router;