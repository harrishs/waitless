const express = require('express');
const router  = express.Router();

// /restaurants routes
module.exports = (db) => {
  // needed here for renders, will expand this object out soon
  let data = {
    bookedWith: null,
    errorMessage: null
  };

  // GET - /restaurants
  // SHOW route
  // Queries all restaurants and renders them with information appropriate to the page
  router.get("/", (req, res) => {
    if (req.session.errorMessage) {
      data.errorMessage = req.session.errorMessage;
    }
    // console.log('requesting restaurants');
    // const queryString = "SELECT * FROM restaurants";
    const queryString = `
      SELECT restaurants.id, restaurants.name, restaurants.address, restaurants.type, restaurants.image_url, waitlists.id AS waitlist_id, waitlists.wait_time
      FROM restaurants
      LEFT JOIN waitlists
      ON restaurants.id=waitlists.restaurant_id
    `;
    db.query(queryString)
      .then((resultSet) => {
        // console.log('----------', resultSet, '------------');
        // pass the resultSet to the data object and render
        data.restaurants = resultSet.rows;
        data.bookedWith = req.session.waitlistId || null;
        console.log(`data.bookedWith: ${data.bookedWith}`);
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
      console.log(req.body.search);
      const queryString = `
        SELECT restaurants.*, waitlists.id AS waitlist_id, waitlists.wait_time
        FROM restaurants
        LEFT JOIN waitlists
        ON restaurants.id=waitlists.restaurant_id
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
      console.log(req.body.search);
      const queryString = `
        SELECT restaurants.*, waitlists.id AS waitlist_id, waitlists.wait_time
        FROM restaurants
        LEFT JOIN waitlists
        ON restaurants.id=waitlists.restaurant_id
        WHERE waitlists.wait_time <= $1
      `;
      const searchValue = parseInt(req.body.search_value);
      const queryParameters = [searchValue];
      db.query(queryString, queryParameters)
      .then((resultSet) => {
        data.restaurants = resultSet.rows;
        res.render('browse', data);
      })
      .catch(err => console.log(err));
    } else if (req.body.search === 'name') {
      console.log(req.body.search);
      const queryString = `
        SELECT restaurants.*, waitlists.id AS waitlist_id, waitlists.wait_time
        FROM restaurants
        LEFT JOIN waitlists
        ON restaurants.id=waitlists.restaurant_id
        WHERE restaurants.name = $1
      `;
      const queryParameters = [req.body.search_value];
      db.query(queryString, queryParameters)
      .then(resultSet => {
        data.restaurants = resultSet.rows;
        res.render('browse', data);
      })
      .catch(err => console.error(err));
    }
  })
  return router;
};
