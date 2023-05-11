const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, async (username, password, done) => {
  try {
    // Find user by username
    const user = await User.findOne({ username });

    // If user doesn't exist, return error
    if (!user) {
      return done(null, false, { message: 'Invalid username or password' });
    }

    // Compare password with stored hash
    const passwordsMatch = await bcrypt.compare(password, user.password);

    // If passwords match, return user
    if (passwordsMatch) {
      return done(null, user);
    }

    // If passwords don't match, return error
    return done(null, false, { message: 'Invalid username or password' });
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport