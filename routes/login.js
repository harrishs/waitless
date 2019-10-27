const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const router = express.Router();
const bcrypt = require('bcrypt');

router.use(bodyParser.urlencoded({ extended: true }));
​
router.use(cookieSession({
  name: 'user_id',
  keys: ['id']
}));

module.exports = (db) => {
  router.get("/users", (req, res) => {
    let data = {
      user: '',
      error: {
        registerError: false,
        loginError: false
      },
      email: ''
    };
    res.render("login-user", data);
  });

  router.post("/users", (req,res) => {
    let data = {
      user: '',
      error: {
        registerError: false,
        loginError: false
      },
      email: ''
    };

    let emptyField = req.body.email.length === 0 || req.body.password.length === 0 ? true : false;
      if (emptyField) {
        res.status(400).send('Please make sure all fields are filled out');
      } else {
        const getUser = `SELECT * FROM users
                         WHERE users.email = $1
                        LIMIT 1 `;
        const getUserValues = [req.body.email];
            ​
      db
        .query(getUser, getUserValues)
        .then(userInfo => {
        let response = userInfo.rows[0];
          if (response !== undefined && bcrypt.compareSync(req.body.password, response.password)) {
            req.session.user_id = response.id;
            req.session.email = response.email;
            data.user = response.name;
            data.email = response.email;
            data.error.loginError = false;
          } else {
            data.error.loginError = true;
            res.render('login', data);
          }
        })
        .catch(err => {
          data.error.loginError = true;
          res.render('login', data);
        });
      }
  })

  router.get("/merchants", (req, res) => {
    let data = {
      user: '',
      error: {
        registerError: false,
        loginError: false
      },
      email: ''
    };
    res.render("login-merchant", data);
  });

  router.post("/merchants", (req,res) => {
    let data = {
      user: '',
      error: {
        registerError: false,
        loginError: false
      },
      email: ''
    };

    let emptyField = req.body.email.length === 0 || req.body.password.length === 0 ? true : false;
      if (emptyField) {
        res.status(400).send('Please make sure all fields are filled out');
      } else {
        const getUser = `SELECT * FROM users
                        WHERE users.email = $1
                        LIMIT 1 `;
        const getUserValues = [req.body.email];
            ​
      db
        .query(getUser, getUserValues)
        .then(userInfo => {
        let response = userInfo.rows[0];
          if (response !== undefined && bcrypt.compareSync(req.body.password, response.password)) {
            req.session.user_id = response.id;
            req.session.email = response.email;
            data.user = response.name;
            data.email = response.email;
            data.error.loginError = false;
          } else {
            data.error.loginError = true;
            res.render('login', data);
          }
        })
        .catch(err => {
          data.error.loginError = true;
          res.render('login', data);
        });
      }
  })
  return router;
};


/* authenticate (login, password, merchant (boolean true or false))
select query
gets the information
selects data
compare provided versus db entry
bcrypt hash
if equal return true
else false
*/

