const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // SHOW
  // GET / => /entries
  // Shows the status of the user's booking.
  router.get("/", (req, res) => {
    const queryString = `
      SELECT waitlists.wait_time, restaurants.name, restaurants.phone_number, restaurants.address
      FROM restaurants
      JOIN waitlists ON restaurants.id=waitlists.restaurant_id
      WHERE waitlists.id = $1
    `;
    const queryParameters = [req.session.waitlistId];
    db.query(queryString, queryParameters)
    .then((resultSet) => {
      data = resultSet.rows[0];
      const timeDifference = Date.now() - req.session.bookedAt;
      const initialTime = data.wait_time * 60000;
      const currentWait = initialTime - timeDifference;
      console.log(currentWait);
      data.minutes = Math.floor(currentWait / 60000);
      data.seconds = Math.floor((currentWait % 60000) / 1000);
      console.log(data.timeRemaining);
      res.render("status", data);
    })
    .catch(err => console.log(err));
  })
  // POST /:id => /entries/:id
  // Adds the user into the restaurant's waitlist.
  // A new waitlist entry is created, then the user's booking_id is subsequently updated.
  router.post("/:id", (req, res) => {
    console.log(req.session.user_id);
    if (req.session.user_id === undefined) {
      res.send("Cannot add if not logged in!");
    }
    console.log(req.body);
    if (parseInt(req.body.party_size) === '0') {
      res.send("Cannot create a new booking without selecting a party size!");
    }
    req.session.waitlistId = req.params.id;
    const insertString = `
        INSERT INTO waitlist_entries (waitlist_id, booked_at, party_size, party_name)
        VALUES ($1, $2, $3, $4)
        RETURNING id, booked_at
      `;
    const insertParameters = [req.params.id, Date.now(), req.body.party_size, 'John'];
    db.query(insertString, insertParameters)
    .then((resultSet) => {
      req.session.bookedAt = resultSet.rows[0].booked_at;
      const updateString = `
        UPDATE users
        SET booking_id = $1
        WHERE id = $2;
      `;
      // this is the id returned in from the insert of the waitlist entry,
      // which will now be used in the update of the appropriate user record.
      const bookingId = resultSet.rows[0].id;
      const updateParameters = [bookingId, req.session.user_id];
      db.query(updateString, updateParameters)
      .then(() => {
        // Query wait list time and alter the age of the cookie. This will then get us the wait time for the user.
        const queryString = `
          SELECT waitlists.wait_time, restaurants.name, restaurants.phone_number, restaurants.address
          FROM restaurants
          JOIN waitlists ON restaurants.id=waitlists.restaurant_id
          WHERE waitlists.id = $1`;
        const queryParameters = [req.session.waitlistId];
        db.query(queryString, queryParameters)
        .then((resultSet) => {
          data = resultSet.rows[0];
          req.session.cookie.maxAge = data.wait_time * 60000;
          data.timeRemaining = req.session.cookie.maxAge;
          data.minutes = Math.floor(req.session.cookie.maxAge / 60000);
          data.seconds = Math.floor((req.session.cookie.maxAge % 60000) / 1000);
          res.render("status", data);
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
  });

  // DELETE /:id => /entries/delete/:id
  // Removes a user from a given waitlist through the user side of the app.
  // The waitlist entry is deleted and the user's booking_id is set back to null.

  // DELETE => /entries/delete
  // Removes a user from a given waitlist through the user side of the app.
  // The waitlist entry is deleted and the user's booking_id is set back to null.
  router.delete("/", (req, res) => {
    if (req.session.user_id === undefined) {
      res.send("Cannot delete waitlist reservation if not logged in!");
    }
    // find the user corresponding with the booking id
    const updateString = `
      UPDATE users
      SET booking_id = $1
      WHERE id = $2
      RETURNING id
    `;
    const updateParameters = [null, req.session.user_id];
    db.query(updateString, updateParameters)
    .then((resultSet) => {
      const deleteString = `
        DELETE FROM waitlist_entries
        WHERE id = $1
      `;
      const deleteParameters = [resultSet.rows[0].id];
      db.query(deleteString, deleteParameters)
      .then(() => {
        req.session.waitlistId = null;
        res.redirect('/restaurants');
      })
      .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
  });

  return router;
};
