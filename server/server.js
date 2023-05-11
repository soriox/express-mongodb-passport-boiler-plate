// Enable Environment Variables
require('dotenv').config()

// End proccess and log error if fatal errors are caught
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
  process.exit(1);
});

// Express
const express = require("express");
const app = express();

// JSON Body Parser
const bodyParser = require('body-parser');

// Plugins/Services/Renderers
const passport = require('./config/passport');
const session = require('express-session');
const initMongoose = require("./config/mongo");


// API Routes
const apiBaseRoute = require("./v1");
const authRoutes = require("./v1/auth");

// MongoDB
initMongoose();

// JSON Body Parser
app.use(bodyParser.json())

// Express Session
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Api Routes
app.use("/"+process.env.API_VERSION, apiBaseRoute);
app.use("/"+process.env.API_VERSION+"/auth", authRoutes);

// Start server
app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${process.env.PORT}`);
});