const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res)=> {
    res.render("activatewaittime-merchant");
  });
    router.post("/", (req, res)=> {
        let id = req.session.user_id;
        const time = parseInt(req.body.times);
        let queryDel = `DELETE FROM waitlists WHERE restaurant_id = $1`;
        let queryIns =  `INSERT INTO waitlists (restaurant_id, wait_time)
        VALUES ($1, $2)`;
        let queryValsIns = [id, parseInt(time)];
        let queryVal = [id];
        db.query(queryDel, queryVal)
        .then(() => {console.log("Successfully deleted")
        res.redirect("/waitlist");})
        .catch(err => console.log(err));
        db.query(queryIns, queryValsIns)
        .then(console.log("Success time in ms: " + time))
        .catch(err => console.log(err));
    });
    return router;
}
