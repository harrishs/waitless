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
  router.get("/", async (req, res) => {
    try {
      if (req.session.errorMessage && (req.session.errorSeen === false)) {
        data.errorMessage = req.session.errorMessage;
        req.session.errorSeen = true;
      } else {
        // error has been seen!
        data.errorMessage = "";
      }

      if (req.session.user_id === undefined) {
        // data.error.details = "Cannot browse when not logged in!";
        // data.error.seen = false;
        req.session.loginError = "LOGIN_TO_BROWSE";
        res.redirect("/login/users");
      } else {
        let queryString = `
          SELECT restaurants.id, restaurants.name, restaurants.address, restaurants.type, restaurants.image_url, waitlists.id AS waitlist_id, waitlists.wait_time
          FROM restaurants
          LEFT JOIN waitlists
          ON restaurants.id=waitlists.restaurant_id
        `;
        let resultSet = await db.query(queryString);
        data.restaurants = resultSet.rows;

        queryString = `SELECT waitlists.id AS waitlist_id FROM waitlists
        JOIN waitlist_entries ON waitlists.id=waitlist_entries.waitlist_id
        JOIN users ON waitlist_entries.id=users.booking_id
        WHERE users.id = $1`;

        let queryParameters = [req.session.user_id];
        resultSet = await db.query(queryString, queryParameters);
        if (resultSet.rows.length === 0) {
          data.bookedWith = null;
        } else {
          data.bookedWith = resultSet.rows[0].waitlist_id;
        }
        res.render('browse', data);
      }
    } catch(err) {
      console.log(error);
    }
  })

  // GET /:id => /restaurants/:id
  // Gets a specific restaurant from the database where the id matches the route.
  router.get("/:id", async (req, res) => {
    try {
      const queryString =
        `SELECT * FROM restaurants
         WHERE restaurants.id = $1`;
      const queryParameters = [req.params.id];
      const resultSet = await db.query(queryString, queryParameters)
      data.restaurants = resultSet.rows;
      res.render('browse', data);
    } catch(err) {
      console.log(err);
    }
  });

  router.post("/", async (req, res) => {
    try {
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

        let resultSet = await db.query(queryString, queryParameters);
        data.restaurants = resultSet.rows;
        res.render('browse', data);
      } else if (searchType === 'waitlist') {
        let queryString = `
          SELECT restaurants.*, waitlists.id AS waitlist_id, waitlists.wait_time
          FROM restaurants
          LEFT JOIN waitlists
          ON restaurants.id=waitlists.restaurant_id
          WHERE waitlists.wait_time <= $1
        `;
        let searchValue = parseInt(req.body.search_value);
        let queryParameters = [searchValue];

        let resultSet = await db.query(queryString, queryParameters);
        data.restaurants = resultSet.rows;
        res.render('browse', data);
      } else if (req.body.search === 'name') {
        const queryString = `
          SELECT restaurants.*, waitlists.id AS waitlist_id, waitlists.wait_time
          FROM restaurants
          LEFT JOIN waitlists
          ON restaurants.id=waitlists.restaurant_id
          WHERE restaurants.name = $1
        `;
        const queryParameters = [req.body.search_value];
        const resultSet = await db.query(queryString, queryParameters);
        data.restaurants = resultSet.rows;
        res.render('browse', data);
      }
    } catch(err) {
      console.error(err);
    }
  })
  return router;
};


