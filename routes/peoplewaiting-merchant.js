const express = require('express');
const router  = express.Router();

module.exports = (db) => {
    router.get("/", (req, res)=> {
        res.render("peoplewaiting-merchant");

    });

    //add users to wait list
    router.post("/", (req,res)=> {
        let restaurant_id = req.session.user_id;
        let party_name = req.body.name;
        let party_size = req.body.party;
        async function waitInsert(rest_id, party_name, party_size) {
            //Find waitlist id and wait time provided by restaurant
            let queryStr = `SELECT wait_time FROM waitlists WHERE restaurant_id = $1`;
            let queryListId = `SELECT id FROM waitlists WHERE restaurant_id = $1`;
            let queryVals = [rest_id];
            let timeObj = await db.query(queryStr, queryVals);
            let waitObj = await db.query(queryListId, queryVals);
            let waitId = waitObj.rows[0].id;
            //wait time in db to display
            let time = timeObj.rows[0].wait_time * 60000;

            //insert into waitlist entries
            let query2 = `INSERT INTO waitlist_entries (waitlist_id, booked_at, party_size, party_name) VALUES ($1, $2, $3, $4)`;
            let queryVal2 = [waitId, Date.now(), party_size, party_name];
            db.query(query2, queryVal2)
            .then(console.log("Success"))
            .catch(err => console.log(err));

            //Get number of entries in waitlist
            let queryList = `SELECT count(*) FROM waitlist_entries WHERE waitlist_id = $1`;
            let numPpl = await db.query(queryList, [waitId]);
            let count = numPpl.rows[0].count;
            console.log(count);
            if (count >= 0){
                //Query to obtain booking time of first and last entries
                let queryFirst = `SELECT booked_at FROM waitlist_entries WHERE waitlist_id = $1 LIMIT 1`;
                let queryLast = `SELECT booked_at FROM waitlist_entries WHERE waitlist_id = $1 ORDER BY id DESC LIMIT 1`;
                let firstObj = await db.query(queryFirst, [waitId]);
                let lastObj = await db.query(queryLast, [waitId]);
                let timeBetween;
                if (!firstObj.rows[0])
                {
                    timeBetween = 0;
                }
                else {
                    let firstEntry = firstObj.rows[0].booked_at;
                    let lastEntry = lastObj.rows[0].booked_at;
                    //time between is time elapsed
                    timeBetween = lastEntry - firstEntry;
                }
                //increment in milliseconds
                let increment = 300000;
                //final time
                let final = parseInt(((time - timeBetween) + increment)/60000);
                //Update wait time in waitlist
                let queryWait = `UPDATE waitlists SET wait_time = $1 WHERE restaurant_id = $2`;
                db.query(queryWait, [final, rest_id])
                .then(console.log("success time changed to: ", final))
                .catch(err => console.log(err));
            }
        }
        waitInsert(restaurant_id, party_name, party_size)
        res.redirect("/waitlist");
    })

    //update waitlist time
    router.post("/time", (req, res)=> {
        let id = req.session.user_id;
        const time = parseInt(req.body.times);
        let queryUpdate =  `UPDATE waitlists 
        SET wait_time = $1
        WHERE restaurant_id = $2`;
        let queryValsUpdate = [parseInt(time), id];
        db.query(queryUpdate, queryValsUpdate)
        .then(() => {console.log("Successfully deleted")
        res.redirect("/waitlist");})
        .catch(err => console.log(err));
    });
    return router;
}
