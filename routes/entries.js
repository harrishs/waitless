const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // SHOW
  // GET / => /entries
  // Shows the status of the user's booking.
  router.get("/", (req, res) => {
    const queryString = `SELECT booking_id
                         FROM users
                         WHERE users.id = $1`
    const queryParameters = [req.session.user_id];
    db.query(queryString, queryParameters)
    .then((resultSet) => {
      console.log(resultSet.rows.length);
      console.log(resultSet.rows);
      if (resultSet.rows.length === 0) {
        res.session.errorMessage = "Cannot check a cancelled status.";
        res.redirect('/restaurants');
      }
      console.log(`req.session.bookingId: ${req.session.bookingId}`);
      const queryString = `
        SELECT waitlists.wait_time,
             restaurants.name,
             restaurants.phone_number,
             restaurants.address,
             restaurants.image_url,
             waitlist_entries.party_name,
             waitlist_entries.party_size,
             waitlist_entries.booked_at
        FROM restaurants
        JOIN waitlists ON restaurants.id=waitlists.restaurant_id
        JOIN waitlist_entries ON waitlist_entries.waitlist_id = waitlists.id
        JOIN users ON users.booking_id=waitlist_entries.id
        WHERE users.booking_id = $1
      `;

      const queryParameters = [resultSet.rows[0].booking_id];
      db.query(queryString, queryParameters)
      .then((resultSet) => {
        data = resultSet.rows[0];
        const phoneNumber = data.phone_number.toString();
        const left = phoneNumber.substring(0,3);
        const middle = phoneNumber.substring(3,6);
        const right = phoneNumber.substring(6);
        data.phone_number = `(${left}) ${middle}-${right}`;
        const timeDifference = Date.now() - resultSet.rows[0].booked_at;
        const initialTime = data.wait_time * 60000;
        const currentWait = initialTime - timeDifference;
        console.log(`Current time: ${currentWait} ms`);
        data.minutes = Math.floor(currentWait / 60000);
        data.seconds = Math.floor((currentWait % 60000) / 1000);
        res.render("status", data);
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  })
  // POST /:id => /entries/:id
  // Adds the user into the restaurant's waitlist.
  // A new waitlist entry is created, then the user's booking_id is subsequently updated.
  router.post("/:id", (req, res) => {
    console.log(req.session.user_id);
    if (req.session.user_id === undefined) {
      req.session.errorMessage = "You cannot book with a waitlist if you're not logged in."
      req.session.errorSeen = false;
      res.redirect("/restaurants");
    }
    console.log(req.body);
    if (parseInt(req.body.party_size) === 0) {
      req.session.errorMessage = "Must provide a party size!";
      req.session.errorSeen = false;
      res.redirect("/restaurants");
    } else {
      const queryString = `SELECT name FROM users WHERE id = $1`;
      const queryParameters = [req.session.user_id];
      db.query(queryString, queryParameters)
      .then((resultSet) => {
        console.log('after select query');
        req.session.waitlistId = req.params.id;
        const insertString = `
          INSERT INTO waitlist_entries (waitlist_id, booked_at, party_size, party_name)
          VALUES ($1, $2, $3, $4)
          RETURNING id, booked_at
        `;
        const insertParameters = [req.session.waitlistId, Date.now(), req.body.party_size, resultSet.rows[0].name];
        db.query(insertString, insertParameters)
        .then((resultSet) => {
          // for a more readable booking time:
          const bookingTime = new Date(resultSet.rows[0].booked_at);
          console.log('after insert query');
          console.log(`---------------------`)
          console.log(`---------------------`)
          console.log(`---------------------`)
          console.log(`---------------------`)
          console.log(`---------------------`)
          console.log(`booked at: ${bookingTime.toString()}`);
          req.session.bookedAt = resultSet.rows[0].booked_at;
          const updateString = `
            UPDATE users
            SET booking_id = $1
            WHERE id = $2;
          `;
          // this is the id returned in from the insert of the waitlist entry,
          // which will now be used in the update of the appropriate user record.
          const bookingId = resultSet.rows[0].id;
          req.session.bookingId = bookingId;
          const updateParameters = [bookingId, req.session.user_id];
          db.query(updateString, updateParameters)
          .then(() => {
            console.log('after update query');
            // Query wait list time and alter the age of the cookie. This will then get us the wait time for the user.
            const queryString = `
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
            const queryParameters = [req.session.bookingId];
            db.query(queryString, queryParameters)
            .then((resultSet) => {
              console.log('before setting time remaining');
              data = resultSet.rows[0];
              req.session.waitlistId = data.waitlist_id;
              const phoneNumber = data.phone_number.toString();
              const left = phoneNumber.substring(0,3);
              const middle = phoneNumber.substring(3,6);
              const right = phoneNumber.substring(6);
              data.phone_number = `(${left}) ${middle}-${right}`;
              data.minutes = data.wait_time;
              data.seconds = Math.floor((req.session.cookie.maxAge % 60000) / 1000);

              const queryString = `
                SELECT booked_at
                FROM waitlist_entries
                WHERE waitlist_id = $1
              `;
              const queryParameters = [data.waitlist_id];
              db.query(queryString, queryParameters)
              .then((resultSet) => {
                let timeBetween;
                const rowCount = resultSet.rowCount;
                if (rowCount <= 1) {
                  timeBetween = 0;
                } else {
                  console.log(`Row count: ${rowCount}`);
                  const firstInLine = resultSet.rows[rowCount - 2].booked_at;
                  const lastInLine = resultSet.rows[rowCount - 1].booked_at;
                  timeBetween = lastInLine - firstInLine;
                  console.log(`Time between entries: ${timeBetween}`);
                }
                // Update by 5 minutes in milliseconds:
                const increment = 300000;
                const currentWaitTime = data.wait_time;
                const waitTimeInMilliseconds = currentWaitTime * 60000;
                const newWaitTime = Math.floor((waitTimeInMilliseconds - timeBetween + increment) / 60000);
                data.wait_time = newWaitTime;
                console.log(`New wait time: ${newWaitTime} minutes`);
                // update wait time with new wait time:
                const updateQuery = `
                  UPDATE waitlists
                  SET wait_time = $1
                  WHERE restaurant_id = $2
                `
                const updateParameters = [newWaitTime, data.restaurant_id];
                db.query(updateQuery, updateParameters)
                .then(() => {
                  console.log("Successful update of waitlist with new wait time!");
                  res.render("status", data);
                })
                .catch(err => console.error(err));
              })
              .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
          })
          .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
    }
  });

  // DELETE => /entries
  // Removes a user from a given waitlist through the user side of the app.
  // The waitlist entry is deleted and the user's booking_id is set back to null.
  router.delete("/", (req, res) => {
    // check for a user id before deleting:
    if (req.session.user_id === undefined) {
      req.session.errorMessage = "Cannot delete waitlist reservation if not logged in!";
      req.session.errorSeen = false;
      res.redirect('/restaurants');
    } else {
      // check for a booking id before deleting:
      const queryString = `SELECT booking_id FROM users WHERE id = $1`;
      const queryParameters = [req.session.user_id];
      db.query(queryString, queryParameters)
      .then((resultSet) => {
        if (resultSet.rows.length === 0) {
          res.session.errorMessage = "Cannot delete waitlist reservation if not booked with restaurant!"
          req.session.errorSeen = false;
          res.redirect('/restaurants');
        }
        const updateString = `
          UPDATE users
          SET booking_id = $1
          WHERE id = $2
        `;
        const updateParameters = [null, req.session.user_id];
        db.query(updateString, updateParameters)
        .then(() => {
          const deleteString = `
            DELETE FROM waitlist_entries
            WHERE id = $1
          `;
          const deleteParameters = [req.session.bookingId];
          db.query(deleteString, deleteParameters)
          .then(() => {
            req.session.bookingId = null;
            req.session.waitlistId = null;
            res.redirect('/restaurants');
          })
          .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
    // find the user corresponding with the booking id
    }
  })

  return router;
};
