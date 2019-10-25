const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/users", (req, res) => {
    res.render("login-user");
  });

  router.get("/merchants", (req, res) => {
    res.render("login-merchant");
  })
  return router;
};

// function loginUser(req, res, db) {

//   //Extract registration information from form
//   let email = req.body.email;
//   let password = req.body.password;

//   // Check that email and password are provided
//   if (email === "" || password === "") {
//     res.status(400).send('Please make sure your email and password are provided');
//   } else {

//     /// needs to finish
//   }
// }
