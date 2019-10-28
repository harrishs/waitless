const express = require('express');
const router  = express.Router();
const bodyParser = require("body-parser");
module.exports = (db) => {
    router.get("/", (req, res)=> {
        res.render("peoplewaiting-merchant");
    });

    router.post("/", (req,res)=> {
        restaurant_id = req.session.user_id;
        async function waitInsert(rest_id) {
            //Find waitlist id and wait time provided by restaurant
            let queryStr = `SELECT wait_time FROM waitlists WHERE restaurant_id = $1`;
            let queryListId = `SELECT id FROM waitlists WHERE restaurant_id = $1`;
            let queryVals = [rest_id];
            let timeObj = await db.query(queryStr, queryVals);
            let waitObj = await db.query(queryListId, queryVals);
            let waitId = waitObj.rows[0].id;
            //wait time in db to display
            let time = timeObj.rows[0].wait_time;

            //insert into waitlist entries
            let query2 = `INSERT INTO waitlist_entries (waitlist_id, booked_at, party_size, party_name) VALUES ($1, $2, $3)`;
            let queryVal2 = [waitId, Date.now(), req.body.party, req.body.name];
            db.query(query2, queryVal2)
            .then(console.log("Success"))
            .catch(err => console.log(err));

            //Get number of entries in waitlist
            let queryList = `SELECT count(*) FROM waitlist_entries WHERE waitlist_id = $1`;
            let numPpl = await db.query(queryList, [waitId]);
            let count = numPpl.rows[0].count;
            console.log(count);
            if (count > 1){
                //Query to obtain booking time of first and last entries
                let queryFirst = `SELECT booked_at FROM waitlist_entries WHERE waitlist_id = $1 LIMIT 1`;
                let queryLast = `SELECT booked_at FROM waitlist_entries WHERE waitlist_id = $1 ORDER BY id DESC LIMIT 1`;
                let firstObj = await db.query(queryFirst, [waitId]);
                let lastObj = await db.query(queryLast, [waitId]);
                let firstEntry = firstObj.rows[0].booked_at;
                let lastEntry = lastObj.rows[0].booked_at;
                //time between is time elapsed
                let timeBetween = lastEntry - firstEntry;
                //increment in milliseconds
                let increment = count * 300000;
                //final time
                let final = (time - timeBetween) + increment;
                //Update wait time in waitlist
                let queryWait = `UPDATE waitlists SET wait_time = $1 WHERE restaurant_id = $2`;
                db.query(queryWait, [final, rest_id[0]])
                .then(console.log("Updated wait time to: ", final))
                .catch(err => console.log(err));
            }
        }
            waitInsert(restaurant_id);

            
    })
    return router;
}
