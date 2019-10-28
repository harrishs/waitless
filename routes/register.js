const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {

  const data = {};
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

      console.log("Checking whether user with email " + email + " already exists");

      // See whether user with this email already exists in database
      const userQuery = `SELECT * FROM users
                         WHERE users.email = $1
                         LIMIT 1
                        `;

      db
        .query(userQuery, [email])
        .then(userInfo => {

          console.log("Number of users found: " + userInfo.rows.length);

          if (userInfo.rows.length > 0) {
            res.status(400).send('Email already exists');
          } else {

            console.log("Inserting new user");

            // hash password for security
            const hashedPassword = bcrypt.hashSync(password,10);

            // Build the insert query
            const insertQuery = `INSERT INTO users (email, password, name, phone_number) VALUES ($1, $2, $3, $4)`;

            // Insert the new user into the database
            db
              .query(insertQuery, [req.body.email, req.body.password, req.body.name, req.body.phone_number])
              .then(newUserInfo => {
                console.log("Number of users inserted " + newUserInfo.rows.length);

                let response = newUserInfo.rows[0];
                if (response !== undefined && bcrypt.compareSync(password, response.password)) {
                  console.log("Adding new user to session");
                  req.session.user_id = response.id;
                  req.session.email = response.email;
                  req.session.name = response.name;
                  req.session.phone_number = response.phone_number;
                  data.user = response.name;
                  data.email = response.email;
                  data.error.loginError = false;
                  console.log("Rendering main view");
                  res.render('viewrestaurant-user');
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
