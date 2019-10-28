const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {

  const data = {
    user: '',
    error: {
      registerError: false,
      loginError: false,
      details : ''
    },
    email: ''
  };
  // route to display the registration page
  router.get("/", (req, res) => {
    res.render("register");
  });


  // route to handle the registration request
  router.post("/", (req, res) => {
    console.log('Handling registration request');
    let email = req.body.email.trim().toLowerCase();
    let password = req.body.password.trim();
    let name = req.body.name.trim();
    let phone_number = req.body.phone_number.trim();

    if (email === "" || password === "" || name === "" || phone_number === "") {
      res.status(400).send('Please make sure all fields are filled out');
    } else {

      // See whether user with this email already exists in database
      const userQuery = `
        SELECT * FROM users
        WHERE users.email = $1
        LIMIT 1
      `;

      db.query(userQuery, [email])
      .then(userInfo => {
        if (userInfo.rows.length > 0) {
          res.status(400).send('Email already exists');
        } else {
          // hash password for security
          const hashedPassword = bcrypt.hashSync(password,10);

          // Build the insert query
          const insertQuery = `
            INSERT INTO users (email, password, name, phone_number)
            VALUES ($1, $2, $3, $4)
            RETURNING id, email, password, name, phone_number
          `;

          // Insert the new user into the database
          db.query(insertQuery, [req.body.email, hashedPassword, req.body.name, req.body.phone_number])
          .then(resultSet => {
            let response = resultSet.rows[0];
            if (response !== undefined && bcrypt.compareSync(password, hashedPassword)) {
              req.session.user_id = response.id;
              req.session.email = response.email;
              req.session.name = response.name;
              req.session.phone_number = response.phone_number;
              data.user = response.name;
              data.email = response.email;
              data.error.loginError = false;
              res.redirect('/restaurants');
            } else {
              data.error.loginError = true;
              res.status(400).send("New user not inserted into database");
            }
          })
          .catch(err => {
            data.error.loginError = true;
            res.status(400).send(err.message);
          });
        }
      });
    }
  });

  return router;
}
