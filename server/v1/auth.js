const express = require('express');
const router = express.Router();
const passport = require('passport');

const {register, logout, profile} = require('../controllers/authentication');

// Auth
router.post('/register', register);
router.post('/login', passport.authenticate('local'), (req, res) => { res.sendStatus(200); });
router.get('/logout', logout);
router.get('/profile', profile);

module.exports = router;