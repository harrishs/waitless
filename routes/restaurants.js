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
    if (req.session.errorMessage && (req.session.errorSeen === false)) {
      data.errorMessage = req.session.errorMessage;
      req.session.errorSeen = true;
    } else {
      // error has been seen!
      data.errorMessage = "";
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
      // check if there's a booking id:
      const queryString = `SELECT waitlists.id AS waitlist_id FROM waitlists
      JOIN waitlist_entries ON waitlists.id=waitlist_entries.waitlist_id
      JOIN users ON waitlist_entries.id=users.booking_id
      WHERE users.id = $1`;

      const queryParameters = [req.session.user_id];
      db.query(queryString, queryParameters)
      .then((resultSet) => {
        if (resultSet.rows.length === 0) {
          data.bookedWith = null;
        } else {
          data.bookedWith = resultSet.rows[0].waitlist_id;
        }
        res.render('browse', data);
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  })

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


