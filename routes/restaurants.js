const express = require('express');
const router  = express.Router();

// /restaurants routes
module.exports = (db) => {
  // needed here for renders, will expand this object out soon
  let data = {
    bookedWith: null
  };

  // GET - /restaurants
  // SHOW route
  // Queries all restaurants and renders them with information appropriate to the page
  router.get("/", (req, res) => {
    // testing some session code
    const queryString = `
      SELECT restaurants.id, restaurants.name, restaurants.type, waitlists.id AS waitlist_id, waitlists.wait_time
      FROM restaurants
      LEFT JOIN waitlists
      ON restaurants.id=waitlists.restaurant_id
    `;
    db.query(queryString)
    .then((resultSet) => {
      // pass the resultSet to the data object and render
      data.restaurants = resultSet.rows;
      data.bookedWith = req.session.waitlistId || null;
      res.render('browse', data);
    })
    .catch(err => console.log(err));
  });

  // GET /:id => /restaurants/:id
  // Gets a specific restaurant from the database where the id matches the route.
  router.get("/:id", (req, res) => {
    const queryString =
      `SELECT * FROM restaurants
       WHERE restaurants.id = $1`;
    const queryParameters = [req.params.id];
    db.query(queryString, queryParameters)
    .then((resultSet) => {
      data.restaurants = resultSet.rows;
      res.render('browse', data);
    })
    .catch(err => console.log(err));
  });

  router.post("/",  (req, res) => {
    // Search by type:
    const searchType = req.body.search;
    if (searchType === 'type') {
      console.log(searchType);
      const queryString = `
        SELECT * FROM restaurants
        WHERE restaurants.type = $1
      `;
      const searchValue = req.body.search_value;
      const queryParameters = [searchValue];
      db.query(queryString, queryParameters)
      .then((resultSet) => {
        data.restaurants = resultSet.rows;
        res.render('browse', data);
      })
      .catch(err => console.log(err));
    } else if (req.body.search === 'waitlist') {
      res.send("Search by waitlist time hit!");
    } else if (req.body.search === 'name') {
      res.send("Search by name hit!");
    } else {
      res.send("Please select one of the search options!");
    }
  })

  return router;
};
