const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {
  let data = {
    user: '',
    error: {
      registerError: false,
      loginError: false,
      details: ''
    },
    email: ''
  };

  // Route to show the login page for users
  router.get("/users", (req, res) => {
    res.render("login-user", data);
  });

  // Route to login registered users
  router.post("/users", async (req,res) => {
    try {
      let email = req.body.email.trim().toLowerCase();
      let password =  req.body.password.trim();

      const userQuery = `
        SELECT * FROM users
        WHERE users.email = $1
        LIMIT 1
      `;

      const userInfo = await db.query(userQuery, [email]);
      const response = userInfo.rows[0];

      if (response !== undefined && bcrypt.compareSync(password, response.password)) {
        req.session.user_id = response.id;
        req.session.email = response.email;
        req.session.name = response.name;
        req.session.phone_number = response.phone_number;
        req.session.bookingId = response.booking_id;
        data.user = response.name;
        data.email = response.email;
        data.error.loginError = false;
        res.redirect('/restaurants');
      } else {
        data.error.loginError = true;
        res.status(400).send("Username or password is incorrect");
      }
    } catch(err) {
      console.log(err);
    }
  })

  // Route to show login page for merchants
  router.get("/merchants", (req, res) => {
    res.render("login-merchant", data);
  });

  // Route to login merchanges
  router.post("/merchants", async (req,res) => {
    try {
      let email = req.body.email.trim().toLowerCase();
      let password = req.body.password.trim();

      const userQuery = `
        SELECT * FROM restaurants
        WHERE restaurants.email = $1
        LIMIT 1
      `;

      const userInfo = await db.query(userQuery, [email]);
      const response = userInfo.rows[0];

      if (response !== undefined && bcrypt.compareSync(password, response.password)) {
        req.session.user_id = response.id;
        req.session.email = response.email;
        req.session.name = response.name;
        data.user = response.name;
        data.email = response.email;
        data.error.loginError = false;
        res.redirect("/waitlist")
      } else {
        data.error.loginError = true;
        res.status(400).send("Username or password is incorrect");
        // res.render('login-merchant', data);
      }

    } catch(err) {
      console.log(err);
    }
  });

  // Return the router with all our registered login routes
  return router;
};

