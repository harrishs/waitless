const express = require('express');
const router  = express.Router();

// /restaurants routes
module.exports = (db) => {
  let data = {};

  // GET - /restaurants
  // Queries all restaurants and renders them.
  router.get("/", (req, res) => {
    const queryString = "SELECT * FROM restaurants";
    db.query(queryString)
      .then((resultSet) => {
        data.restaurants = resultSet.rows;
        res.render('user-restaurants', data);
      })
      .catch(err => console.log(err));
  });

  // GET /:id => /restaurants/:id
  // Gets a specific restaurant from the database where the id matches the route.
  router.get("/:id", (req, res) => {
    const queryString = `SELECT * FROM restaurants WHERE restaurants.id = $1`;
    db.query(queryString, [req.params.id])
      .then((resultSet) => {
        data.restaurants = resultSet.rows;
        res.render('user-restaurants', data);
      })
      .catch(err => console.log(err));
  });

  router.post("/:id", (req, res) => {

  })

  return router;
};
