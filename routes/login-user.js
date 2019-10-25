const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    loginUser(req, res, db);
  });
    return router;
  };

function loginUser(req, res, db) {

    //Extract registration information from form
    let email = req.body.email;
    let password = req.body.password;

    // Check that email and password are provided
    if (email === "" || password === "") {
      res.status(400).send('Please make sure your email and password are provided');
    } else {

      /// needs to finish
    }
}
