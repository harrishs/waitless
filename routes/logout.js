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


// Route to process logout route
app.post("/logout", (req, res) => {
  req.session = null
  res.redirect("/");
});
