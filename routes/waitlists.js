const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // POST /:id => /waitlists/:id
  // Adds the user into the restaurant's waitlist.
  router.post("/:id", (req, res) => {
    // gonna have to be tracking the session at some point here to insert
    // the user into the database but doing very basic insert for now
    // if (req.session.waitlistId) {
    //   console.log("Already booked!");
    //   res.redirect('/');
    // } else {
    //   console.log("Thank you for booking!");
    // }
    req.session.waitlistId = req.params.id;
    const insertString =
      `INSERT INTO waitlist_entries (waitlist_id, user_id, booked_at, party_size) VALUES
       ($1, 1, $2, $3)
      `;
    const insertParameters = [req.params.id, Date.now(), req.body.party_size];
    db.query(insertString, insertParameters)
      .then(() => {
        // insert, redirect
        // console.log(`Successfully added user for waitlist ${req.params.id}! Party size of ${req.body.party_size}!`)
        res.redirect("/restaurants");
      })
      .catch(err => console.error(err));
  })

  router.delete("/:id", (req, res) => {
    res.send("Hit delete route!");
  });

  return router;
};
