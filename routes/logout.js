const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');

module.exports = (db) => {
  router.get("/users", (req, res) => {
    res.render("logout-user");
  });

  router.get("/merchants", (req, res) => {
    res.render("logout-merchant");
  });
  return router;
};


// // Route to process logout route
// app.post("/logout", (req, res) => {
//   req.session.theirUserId = undefined;
//   res.redirect("/");
// });
