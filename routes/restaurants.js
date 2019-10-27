const express = require('express');
const router  = express.Router();

// /restaurants routes
module.exports = (db) => {
  // needed here for renders, will expand this object out soon
  let data = {};

  // GET - /restaurants
  // SHOW route
  // Queries all restaurants and renders them with information appropriate to the page
  router.get("/", (req, res) => {
    // testing some session code
    req.session.user_id = 1;
    // const queryString = "SELECT * FROM restaurants";
    const queryString = `
      SELECT restaurants.id, restaurants.name, restaurants.type, waitlists.id AS waitlist_id, waitlists.wait_time
      FROM restaurants
      LEFT JOIN waitlists
      ON waitlists.id=restaurants.id
    `;
    db.query(queryString)
      .then((resultSet) => {
        // pass the resultSet to the data object and render
        data.restaurants = resultSet.rows;
        data.bookedWith = req.session.waitlistId || null;
        res.render('user-restaurants', data);
      })
      .catch(err => console.log(err));
  });

  // GET /:id => /restaurants/:id
  // Gets a specific restaurant from the database where the id matches the route.
  router.get("/:id", (req, res) => {
    const queryString =
      `SELECT * FROM restaurants
       WHERE restaurants.id = $1`;
    db.query(queryString, [req.params.id])
      .then((resultSet) => {
        data.restaurants = resultSet.rows;
        res.render('user-restaurants', data);
      })
      .catch(err => console.log(err));
  });

  return router;
};
