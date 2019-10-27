const express = require('express');
const router  = express.Router();
const bodyParser = require("body-parser");
module.exports = (db) => {
    router.get("/", (req, res)=> {
        res.render("peoplewaiting-merchant");
    });

    router.post("/", (req,res)=> {
        let queryStr = `SELECT wait_time FROM waitlists WHERE restaurant_id = $1`;
        let queryVals = [1];
        let time = db.query(queryStr, queryVals);
        let query2 = `INSERT INTO waitlist_entries (waitlist_id, booked_at, party_size`;
        let queryVal2 = [1,Date.now(),req.body.party];

    })
    return router;
}
