const express = require("express");
const router = express.Router();

// GET /new
// CREATE route

module.exports = (db) => {

  // GET /new
  router.get("/new", (req, res) => {
    res.send("Hit waitlist create route!");
  });

  // POST /:id => /waitlists/:id
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
        console.log(`Successfully added user for waitlist ${req.params.id}!`)
        res.redirect('/restaurants');
      })
      .catch(err => console.error(err));
  })

  return router;
};
