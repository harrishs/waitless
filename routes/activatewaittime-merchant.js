const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res)=> {
    res.render("activatewaittime-merchant");
  });

  router.post("/", (req, res)=> {
    const id = req.session.user_id;
    const time = parseInt(req.body.times);
    const insertString = `
    INSERT INTO waitlists (restaurant_id, wait_time)
    VALUES ($1, $2)
    `;
    const insertParameters = [id, time];
    const deleteString = `
      DELETE FROM waitlists WHERE restaurant_id = $1
    `;
    const deleteParameters = [id];
    const queries = [db.query(deleteString, deleteParameters), db.query(insertString, insertParameters)];
    Promise.all(queries)
    .then(() => {
      res.redirect("waitlist");
    })
    .catch(err => console.log(err))
  })

  return router;
}
