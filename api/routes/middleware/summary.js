const express = require('express');
const router = express.Router();
const summary = require('../controllers/summary');

// Return summary from controller
router.get('/', (req, res, next) => {
  summary()
    .then(obj => res.status(200).json(obj))
    .catch(err => next(err));
});

module.exports = router;
