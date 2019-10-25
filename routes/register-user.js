const express = require('express');
const router  = express.Router();

const bcrypt = require("bcrypt");

// handle the request to register a new user(POST to register)
module.exports = (db) => {
  router.post("/", (req, res) => {
    registerUser(req, res, db);
  });
    router.get("/", (req, res) => {
    res.render("register");
  });
    return router;
  };


function registerUser(req, res, db) {

  //Extract registration information from form
  // let firstName = req.body.first_name.trim();
  // let lastName = req.body.last_name.trim();
  let email = req.body.email_address;
  let password = req.body.password;

  // Check that email and password are provided
  if (email === "" || password === "") {
    res.status(400).send('Please make sure your email and password are provided');
  } else {

    // check wheather user already exists
    db.query('SELECT * FROM users WHERE email = $1', [email])
    .then((_) => {
        //hash password for security
        const hashedPassword = bcrypt.hashSync(password,10);
        //Insert user into database
        return db.query('INSERT INTO users(email, password) VALUES ($1,$2)', [email, hashedPassword]);
    })
    .then((_) => {
      //user inserted correctly, redirect to home page
      res.redirect('/home');
      return true;
    })
    .catch((error) => {
        res.status(400).send(error.message);
    });
  }
}
