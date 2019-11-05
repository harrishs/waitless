const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {
  let data = {
    user: '',
    error: {
      registerError: false,
      loginError: false,
      details: '',
      seen: true
    },
    email: ''
  };

  // Route to show the login page for users
  router.get("/users", (req, res) => {
    if (req.session.loginError === "LOGIN_TO_BROWSE") {
      req.session.loginError = "";
      data.error.details = "You must log in to browse restaurants!";
      data.error.seen = false;
    }
    if (!data.error.seen) {
      data.error.seen = true;
    } else {
      data.error.details = '';
    }
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
        data.error.details = "Username or password is incorrect";
        data.error.seen = false;
        res.redirect('/login/users')
      }
    } catch(err) {
      console.log(err);
    }
  })

  // Route to show login page for merchants
  router.get("/merchants", (req, res) => {
    if (!data.error.seen) {
      data.error.seen = true;
    } else {
      data.error.details = '';
    }
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
        data.error.details = "Username or password is incorrect";
        data.error.seen = false;
        res.redirect('/login/merchants')
      }
    } catch(err) {
      console.log(err);
    }
  });

  // Return the router with all our registered login routes
  return router;
};

