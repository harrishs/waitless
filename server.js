// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const methodOverride = require("method-override");
const session    = require("express-session");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.set("view engine", "ejs");
// For express-session, to set the secret token required:
// This can be any string, but should be a randomly generated one.
app.use(session({
  secret: 'fluffy bunny feet',
  resave: false,
  saveUninitialized: true,
  maxAge: 60000
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
// to handle DELETE requests on waitlist route
app.use(methodOverride('_method'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const login = require("./routes/login");
const logout = require("./routes/logout")
const register = require("./routes/register");
const restaurants = require("./routes/restaurants");
const waitlists = require("./routes/waitlists");
const merchantActivateWait = require("./routes/activatewaittime-merchant");
const merchantWaitList = require("./routes/peoplewaiting-merchant")

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/login", login(db));
app.use("/logout", logout());
app.use("/register", register(db));
app.use("/restaurants", restaurants(db));
app.use("/waitlists", waitlists(db));
app.use("/create-waitlist", merchantActivateWait(db));
app.use("/waitlist", merchantWaitList(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
