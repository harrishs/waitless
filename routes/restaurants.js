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
    // using left join here since we don't need null results in the render
    const queryString = `
      SELECT restaurants.id, restaurants.name, restaurants.type, waitlists.wait_time
      FROM restaurants
      LEFT JOIN waitlists
      ON waitlists.id=restaurants.id
    `;
    db.query(queryString)
      .then((resultSet) => {
        // pass the resultSet to the data object and render
        data.restaurants = resultSet.rows;
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

  // POST /:id => /restaurants/:id
  // Adds the user into the restaurant's waitlist.
  router.post("/:id", (req, res) => {
    // gonna have to be tracking the session at some point here to insert
    // the user into the database but doing very basic insert for now
    const insertString =
      `INSERT INTO waitlist_entries (waitlist_id, user_id, booked_at, party_size) VALUES
       ($1, 1, $2, 2)
      `;
    const insertParameters = [req.params.id, Date.now()];
    db.query(insertString, insertParameters)
      .then(() => {
        // insert, redirect
        res.redirect('/restaurants')
      })
      .catch(err => console.error(err));
  })

  return router;
};
