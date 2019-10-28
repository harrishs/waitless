const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // POST /:id => /waitlists/:id
  // Adds the user into the restaurant's waitlist.
  // A new waitlist entry is created, then the user's booking_id is subsequently updated.
  router.post("/:id", (req, res) => {
    req.session.waitlistId = req.params.id;
    const insertString =
      `INSERT INTO waitlist_entries (waitlist_id, booked_at, party_size, party_name) VALUES
       ($1, $2, $3, $4)
       RETURNING id
      `;
    const insertParameters = [req.params.id, Date.now(), req.body.party_size, 'John'];
    db.query(insertString, insertParameters)
    .then((resultSet) => {
      const updateString =
      `UPDATE users
      SET booking_id = $1
      WHERE id = $2;
      `;
      // this is the id returned in from the insert of the waitlist entry,
      // which will now be used in the update of the appropriate user record.
      const booking_id = resultSet.rows[0].id;
      const updateParameters = [booking_id, req.session.user_id];
      db.query(updateString, updateParameters)
      .then(() => {
        res.send("Success updating user!");
      })
      .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
  });

  // DELETE /:id => /waitlists/delete
  // Removes a user from a given waitlist. The waitlist entry is deleted and the user's booking_id
  // is set back to null.
  router.delete("/:id", (req, res) => {
    const deleteString =
      `DELETE FROM waitlist_entries WHERE user_id = $1`;
    const deleteParameters = [req.session.user_id];
    db.query(deleteString, deleteParameters)
    .then(() => {
      const updateString = `
        UPDATE users
        SET booking_id = $1
        WHERE id = $2;
      `
      const updateParameters = [null, req.session.user_id];
      db.query(updateString, updateParameters)
      .then()

      req.session.waitlistId = null;
      res.redirect('/restaurants')
    })
    .catch(err => console.error(err));
  });

  return router;
};
