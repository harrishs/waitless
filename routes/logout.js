const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    req.session = null;
    res.redirect('/');
    // req.session.destroy(() => {
    //   res.redirect('/');
    // });
  });

  return router;
};



