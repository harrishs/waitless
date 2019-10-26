const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  let data = {};
  router.get("/", (req, res) => {
    const queryString = "SELECT * FROM restaurants";
    db.query(queryString)
      .then((resultSet) => {
        data.restaurants = resultSet.rows;
        res.render('user-restaurants', data);
      })
      .catch(err => console.log(err));
  });

  return router;
};
