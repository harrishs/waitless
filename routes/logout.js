const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/users", (req, res) => {
    res.render("logout-user");
  });

  router.get("/merchants", (req, res) => {
    res.render("logout-merchant");
  });
  return router;
};
