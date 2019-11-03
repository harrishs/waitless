const express = require("express");
const router = express.Router();
const helpers = require('../public/scripts/helpers');

module.exports = (db) => {
  // SHOW
  // GET / => /entries
  // Shows the status of the user's booking.
  router.get("/", async (req, res) => {
    try {
      let queryString = `SELECT booking_id
                           FROM users
                           WHERE users.id = $1`
      let queryParameters = [req.session.user_id];
      let resultSet = await db.query(queryString, queryParameters)
      console.log(resultSet.rows.length);
      console.log(resultSet.rows);
      if (resultSet.rows.length === 0) {
        req.session.errorMessage = "Cannot check a cancelled status.";
        req.session.errorSeen = false;
        res.redirect('/restaurants');
      }
      queryString = `
        SELECT waitlists.wait_time,
             restaurants.name,
             restaurants.phone_number,
             restaurants.address,
             restaurants.image_url,
             waitlist_entries.party_name,
             waitlist_entries.party_size,
             waitlist_entries.booked_at,
             waitlist_entries.table_ready_at
        FROM restaurants
        JOIN waitlists ON restaurants.id=waitlists.restaurant_id
        JOIN waitlist_entries ON waitlist_entries.waitlist_id = waitlists.id
        JOIN users ON users.booking_id=waitlist_entries.id
        WHERE users.booking_id = $1
      `;
      queryParameters = [resultSet.rows[0].booking_id];
      resultSet = await db.query(queryString, queryParameters);
      data = resultSet.rows[0];
      // Format the phone number
      data.phone_number = helpers.formatPhoneNumber(data.phone_number.toString());
      const timeLeft = resultSet.rows[0].table_ready_at - Date.now();
      data.minutes = Math.floor(timeLeft / 60000);
      data.seconds = Math.floor((timeLeft % 60000) / 1000);
      console.log(`Current wait time: ${timeLeft} ms, or ${data.minutes} minutes and ${data.seconds} seconds.`);
      res.render("status", data);
    } catch(err) {
      console.log(err);
    }
  })
  // POST /:id => /entries/:id
  // Adds the user into the restaurant's waitlist.
  // A new waitlist entry is created, then the user's booking_id is subsequently updated.
  router.post("/:id", async (req, res) => {
    try {
      // Error checking for whether user is logged in
      // and party size.
      console.log(req.session.user_id);
      if (req.session.user_id === undefined) {
        req.session.errorMessage = "You cannot book with a waitlist if you're not logged in."
        req.session.errorSeen = false;
        res.redirect("/restaurants");
      } else if (parseInt(req.body.party_size) === 0) {
        req.session.errorMessage = "Must provide a party size!";
        req.session.errorSeen = false;
        res.redirect("/restaurants");
      } else {
        // get name to be inserted into waitlist entry based on the user that's logged in
        let queryString = `SELECT name FROM users WHERE id = $1`;
        let queryParameters = [req.session.user_id];
        let resultSet = await db.query(queryString, queryParameters);
        const partyName = resultSet.rows[0].name;
        console.log('after select query');
        // calculate the time the table will be ready at, this requires getting information
        // about the current wait time of the waitlist
        queryString = `SELECT wait_time FROM waitlists WHERE id = $1`;
        queryParameters = [req.params.id];
        resultSet = await db.query(queryString, queryParameters);
        const bookedAt = Date.now();
        const tableReadyTime = parseInt(bookedAt) + parseInt(resultSet.rows[0].wait_time * 60000);


        req.session.waitlistId = req.params.id;
        let insertString = `
          INSERT INTO waitlist_entries (waitlist_id, booked_at, party_size, party_name, table_ready_at)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING id, booked_at
        `;
        let insertParameters = [req.params.id, bookedAt, req.body.party_size, partyName, tableReadyTime];
        resultSet = await db.query(insertString, insertParameters)
        let updateString = `
          UPDATE users
          SET booking_id = $1
          WHERE id = $2;
        `;
        // this is the id returned in from the insert of the waitlist entry,
        // which will now be used in the update of the appropriate user record.
        const bookingId = resultSet.rows[0].id;
        req.session.bookingId = bookingId;
        let updateParameters = [bookingId, req.session.user_id];
        await db.query(updateString, updateParameters);
        console.log('after update query');
        queryString = `
          SELECT waitlists.wait_time,
              waitlists.id AS waitlist_id,
              restaurants.id AS restaurant_id,
              restaurants.name,
              restaurants.phone_number,
              restaurants.address,
              restaurants.image_url,
              waitlist_entries.party_name,
              waitlist_entries.party_size
          FROM restaurants
          JOIN waitlists ON restaurants.id=waitlists.restaurant_id
          JOIN waitlist_entries ON waitlist_entries.waitlist_id = waitlists.id
          JOIN users ON users.booking_id=waitlist_entries.id
          WHERE users.booking_id = $1
        `;
        queryParameters = [req.session.bookingId];
        resultSet = await db.query(queryString, queryParameters);
        console.log('before setting time remaining');
        data = resultSet.rows[0];
        req.session.waitlistId = data.waitlist_id;
        // Format the phone number
        data.phone_number = helpers.formatPhoneNumber(data.phone_number.toString());
        data.minutes = data.wait_time;

        queryString = `
          SELECT booked_at
          FROM waitlist_entries
          WHERE waitlist_id = $1
        `;

        queryParameters = [data.waitlist_id];
        resultSet = await db.query(queryString, queryParameters);
        let timeBetween;
        let increment;
        const rowCount = resultSet.rowCount;
        if (rowCount <= 1) {
          timeBetween = 0;
          increment = 0;
        } else {
          increment = 300000;
          console.log(`Row count: ${rowCount}`);
          const firstInLine = resultSet.rows[rowCount - 2].booked_at;
          const lastInLine = resultSet.rows[rowCount - 1].booked_at;
          timeBetween = lastInLine - firstInLine;
          console.log(`Time between entries: ${timeBetween}`);
        }
        // Update by 5 minutes in milliseconds:
        const currentWaitTime = data.wait_time;
        const waitTimeInMilliseconds = currentWaitTime * 60000;
        const newWaitTime = Math.floor((waitTimeInMilliseconds - timeBetween + increment) / 60000);
        data.wait_time = newWaitTime;
        console.log(`New wait time: ${newWaitTime} minutes`);
        // update wait time with new wait time:
        updateString = `
          UPDATE waitlists
          SET wait_time = $1
          WHERE restaurant_id = $2
        `
        updateParameters = [newWaitTime, data.restaurant_id];
        await db.query(updateString, updateParameters)
        console.log("Successful update of waitlist with new wait time!");
        res.render("status", data);
      }
    } catch(err) {
      console.log(err);
    }
  });

  // DELETE => /entries
  // Removes a user from a given waitlist through the user side of the app.
  // The waitlist entry is deleted and the user's booking_id is set back to null.
  router.delete("/", async (req, res) => {
    console.log("HIT DELETE ROUTE!");
    try {
      // check for a user id before deleting:
      if (req.session.user_id === undefined) {
        req.session.errorMessage = "Cannot delete waitlist reservation if not logged in!";
        req.session.errorSeen = false;
        res.redirect('/restaurants');
      } else {
        let queryString = `SELECT booking_id FROM users WHERE id = $1`;
        let queryParameters = [req.session.user_id];
        resultSet = await db.query(queryString, queryParameters);
        // check for a booking id before deleting:
        if (resultSet.rowCount === 0) {
          res.session.errorMessage = "Cannot delete waitlist reservation if not booked with restaurant!"
          req.session.errorSeen = false;
          res.redirect('/restaurants');
        } else {
          let updateString = `
            UPDATE users
            SET booking_id = $1
            WHERE id = $2
          `;
          let updateParameters = [null, req.session.user_id];
          await db.query(updateString, updateParameters);
          console.log("AFTER UPDATE QUERY");
          let deleteString = `
            DELETE FROM waitlist_entries
            WHERE id = $1
          `;
          let deleteParameters = [req.session.bookingId];
          console.log(`Delete for booking id: ${req.session.bookingId}`)
          await db.query(deleteString, deleteParameters);
          console.log("AFTER DELETE QUERY");
          req.session.bookingId = null;
          req.session.waitlistId = null;
          res.redirect('/restaurants');
        }
      }
    } catch(err) {
      console.log(err);
    }
  })

  return router;
};
