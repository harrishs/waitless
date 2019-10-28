const express = require('express');
const router  = express.Router();
const bodyParser = require("body-parser");
module.exports = (db) => {
    router.get("/", (req, res)=> {
        res.render("peoplewaiting-merchant");
    });

    router.post("/", (req,res)=> {
        async function waitInsert() {
            //Find waitlist id and wait time provided by restaurant
            let queryStr = `SELECT wait_time FROM waitlists WHERE restaurant_id = $1`;
            let queryListId = `SELECT id FROM waitlists WHERE restaurant_id = $1`;
            let queryVals = [1];
            let timeObj = await db.query(queryStr, queryVals);
            let waitObj = await db.query(queryListId, queryVals);
            let waitId = waitObj.rows[0].id;
            let time = timeObj.rows[0].wait_time;

            //insert into waitlist entries
            let query2 = `INSERT INTO waitlist_entries (waitlist_id, booked_at, party_size) VALUES ($1, $2, $3)`;
            let queryVal2 = [waitId, Date.now(), req.body.party];
            db.query(query2, queryVal2)
            .then(console.log("Success"))
            .catch(err => console.log(err));

            //Get number of entries in waitlist
            let queryList = `SELECT count(*) FROM waitlist_entries WHERE waitlist_id = $1`;
            let numPpl = await db.query(queryList, [waitId]);
            let count = numPpl.rows[0].count;
            if (count > 1){
                //increment timer

            }
            
            }
            waitInsert();

            
    })
    return router;
}
