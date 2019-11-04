// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT                    = process.env.PORT || 8080;
const ENV                     = process.env.ENV || "development";
const express                 = require("express");
const expressSession          = require("express-session");
const methodOverride          = require("method-override");
const bodyParser              = require("body-parser");
const sass                    = require("node-sass-middleware");
const app                     = express();
const morgan                  = require('morgan');


app.use(expressSession({
  secret: 'fluffy bunny feet',
  cookie: {
    maxAge: (24 * 60 * 60 * 1000)
  },
  resave: false,
  saveUninitialized: true
}));

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log("connected")
  socket.on('reload', function (data) {
    console.log("reload", data);
    socket.broadcast.emit("reload", {...data});
  });
  socket.on('load', function (data) {
    console.log("reload", data);
    socket.broadcast.emit("load", {...data});
  });
});

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
const waitlistEntries = require("./routes/entries");
const merchantActivateWait = require("./routes/activatewaittime-merchant");
const merchantWaitList = require("./routes/peoplewaiting-merchant")
const mainMerchant = require("./routes/main-merchant");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/login", login(db));
app.use("/logout", logout());
app.use("/register", register(db));
app.use("/restaurants", restaurants(db));
app.use("/entries", waitlistEntries(db));
app.use("/create-waitlist", merchantActivateWait(db));
app.use("/update-waitlist", merchantWaitList(db));
app.use("/waitlist", mainMerchant(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  console.log(req.session.user_id);
  res.render("index");
});

server.listen(PORT, () => {
  console.log(`Waitless Server listening on port ${PORT}`);
});
