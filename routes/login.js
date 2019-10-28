const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {

  // Route to show the login page for users
  router.get("/users", (req, res) => {
    let data = {
      user: '',
      error: {
        registerError: false,
        loginError: false,
        details: ''
      },
      email: ''
    };
    res.render("login-user", data);
  });


  // Route to login registered users
  router.post("/users", (req,res) => {
    let data = {
      user: '',
      error: {
        registerError: false,
        loginError: false,
        details: ''
      },
      email: ''
    };

    let email = req.body.email.trim().toLowerCase();
    let password = req.body.password.trim();

    let emptyField = email.length === 0 || password.length === 0 ? true : false;
      if (emptyField) {
        res.status(400).send('Please specify email and password');
      } else {
        const userQuery = `SELECT * FROM users
                           WHERE users.email = $1
                           LIMIT 1 `;

        db
          .query(userQuery, [email])
          .then(userInfo => {
          let response = userInfo.rows[0];
            if (response !== undefined && bcrypt.compareSync(password, response.password)) {
              req.session.user_id = response.id;
              req.session.email = response.email;
              req.session.name = response.name;
              req.session.phone_number = response.phone_number;
              data.user = response.name;
              data.email = response.email;
              data.error.loginError = false;
              res.render('viewrestaurant-user');
            } else {
              data.error.loginError = true;
              res.status(400).send("Username and password don't match");
            }
          })
          .catch(err => {
            data.error.loginError = true;
            res.status(400).send(err.message);
          });
      }
  })

  // Route to show login page for merchants
  router.get("/merchants", (req, res) => {
    let data = {
      user: '',
      error: {
        registerError: false,
        loginError: false,
        details: ''
      },
      email: ''
    };
    res.render("login-merchant", data);
  });

  // Route to login merchanges
  router.post("/merchants", (req,res) => {
    let data = {
      user: '',
      error: {
        registerError: false,
        loginError: false,
        details : ''
      },
      email: ''
    };

    let email = req.body.email.trim().toLowerCase();
    let password = req.body.password.trim();

    let emptyField = email.length === 0 || password.length === 0 ? true : false;
    if (emptyField) {
      res.status(400).send('Please make sure all fields are filled out');
    } else {
      const userQuery = `SELECT * FROM users
                         WHERE users.email = $1
                         LIMIT 1 `;

      db
        .query(userQuery, [email])
        .then(userInfo => {
          let response = userInfo.rows[0];
          if (response !== undefined && bcrypt.compareSync(password, response.password)) {

            if (!response.isMerchant) {
              data.error.loginError = true;
              data.error.details = 'User is not a merchant';
              res.render('login', data);
            } else {
              req.session.user_id = response.id;
              req.session.email = response.email;
              req.session.name = response.name;
              data.user = response.name;
              data.email = response.email;
              data.error.loginError = false;
              res.render('activatewaittime-merchant');
            }
          } else {
            data.error.loginError = true;
            res.status(400).send("Username and password don't match");
            // res.render('login-merchant', data);
          }
        })
        .catch(err => {
          data.error.loginError = true;
          res.status(400).send(err.message);
          // res.render('login-merchant', data);
        });
    }
  });

  // Return the router with all our registered login routes
  return router;
};
