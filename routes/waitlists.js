const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // POST /:id => /waitlists/:id
  // Adds the user into the restaurant's waitlist.
  router.post("/:id", (req, res) => {
    req.session.waitlistId = req.params.id;
    const insertString =
      `INSERT INTO waitlist_entries (waitlist_id, booked_at, party_size, party_name) VALUES
       ($1, $2, $3, $4)
       RETURNING id
      `;
    const insertParameters = [req.params.id, Date.now(), req.body.party_size, 'John'];
    const updateString =
      `UPDATE users
       SET booking_id = $1
       WHERE id = $2;
      `;
    const updateParameters = "";
    db.query(insertString, insertParameters)
    .then((resultSet) => {
      // this is the id returned in the
      console.log(resultSet.rows[0].id);
      res.send(`New waitlist entry with id ${id} added!`);
      // res.redirect("/restaurants");
    })
    .catch(err => console.error(err));
  });

  router.delete("/:id", (req, res) => {
    const deleteString =
      `DELETE FROM waitlist_entries WHERE user_id = $1`;
    const deleteParameters = [req.session.user_id];
    db.query(deleteString, deleteParameters)
    .then(() => {
      req.session.waitlistId = null;
      res.redirect('/restaurants')
    })
    .catch(err => console.error(err));
  });

  return router;
};
