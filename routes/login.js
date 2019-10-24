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
