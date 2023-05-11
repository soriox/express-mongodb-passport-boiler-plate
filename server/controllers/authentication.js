const bcrypt = require('bcrypt');
const User = require('../models/user');
const error_handler = require('../config/error_handler');

const register = async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      });
      await newUser.save();
      res.sendStatus(201);
    } catch (err) {
      error_handler(err);
      res.sendStatus(500);
    }
}

const logout = (req, res) => {
    req.logout(() => {
      res.sendStatus(200)
    });
}

const profile = (req, res) => {
    if (req.isAuthenticated()) {
      const userData = {
        email: req.user.email,
        username: req.user.username,
      }
      res.send(userData);
    } else {
      res.sendStatus(404)
    }
}

module.exports = {register, logout, profile}