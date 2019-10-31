const express = require('express');
const router  = express.Router();

module.exports = (db) => {
    router.get("/", (req, res) => {
        let rest_id = req.session.user_id;
        async function getList(rest_id){
            console.log("inside fn");
            //get waitlist id
            let query = `SELECT id, wait_time FROM waitlists WHERE restaurant_id = $1`;
            let waitObj = await db.query(query, [rest_id]);
            if (waitObj.rows[0]){
            let wait_id = waitObj.rows[0].id;
            let wait_time = waitObj.rows[0].wait_time;
            //get waitlist entries
            let query2 = `SELECT * FROM waitlist_entries WHERE  waitlist_id = $1`;
            let entriesObj = await db.query(query2, [wait_id]);
            let entriesArr = entriesObj.rows;
            return [entriesArr, wait_time];
            }
            else {
                return undefined;
            }
        }
        getList(rest_id)
                .then(vals => 
                    {
                        if (!vals){
                        res.render("main-merchant", {entries: null, time: null})
                        }
                        else{
                            res.render("main-merchant", {entries: vals[0], time: vals[1]/60000})
                        }
                        
                    })
                .catch(err => console.log(err));
        
    })

    router.post("/", (req, res) => {
        let rest_id = req.session.user_id;
        let queryDel = `DELETE FROM waitlists WHERE restaurant_id = $1`;
        db.query(queryDel, [rest_id])
        .then(() => {console.log("Successfully deleted")
        res.redirect("/waitlist");})
        .catch(err => console.log(err));
    })

    router.post("/delete", (req, res) => {
        entry_id = req.body.id;
        rest_id = req.session.user_id;
  
  async function updateTime(rest_id){
    //Find waitlist id and wait time provided by restaurant
    let queryStr = `SELECT wait_time FROM waitlists WHERE restaurant_id = $1`;
    let queryListId = `SELECT id FROM waitlists WHERE restaurant_id = $1`;
    let queryVals = [rest_id];
    let timeObj = await db.query(queryStr, queryVals);
    let waitObj = await db.query(queryListId, queryVals);
    let waitId = waitObj.rows[0].id;
    //wait time in db to display
    let time = (timeObj.rows[0].wait_time)*60000;

    //Get number of entries in waitlist
    let queryList = `SELECT count(*) FROM waitlist_entries WHERE waitlist_id = $1`;
    let numPpl = await db.query(queryList, [waitId]);
    let count = numPpl.rows[0].count;
    let timeBetween;
    console.log(count);
    if (count >= 1){
        //Query to obtain booking time of first and last entries
        let queryFirst = `SELECT booked_at FROM waitlist_entries WHERE waitlist_id = $1 LIMIT 1`;
        let queryLast = `SELECT booked_at FROM waitlist_entries WHERE waitlist_id = $1 ORDER BY id DESC LIMIT 1`;
        let firstObj = await db.query(queryFirst, [waitId]);
        let lastObj = await db.query(queryLast, [waitId]);
        if (!firstObj.rows[0]){
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
        let final = parseInt(((time - timeBetween) - increment)/60000);
        //Update wait time in waitlist
        let queryWait = `UPDATE waitlists SET wait_time = $1 WHERE restaurant_id = $2`;
        db.query(queryWait, [final, rest_id])
        .then(console.log("Updated wait time to: ", final))
        .catch(err => console.log(err));
    }
}

    // find the user corresponding with the booking id
    const queryStr = `SELECT id FROM users WHERE booking_id = $1`;
    const vals = [entry_id];
        const updateString = `
        UPDATE users
        SET booking_id = $1
        WHERE id = $2
        RETURNING id
        `;
let queryDel = `DELETE FROM waitlist_entries WHERE id = $1`;

db.query(queryStr, vals)
.then(res => {
    if (res.rows[0])
    {
        id = res.rows[0].id;
        const updateParameters = [null, id];
        db.query(updateString, updateParameters)
        .then(()=> {
        db.query(queryDel, [entry_id])
        .then(updateTime(rest_id))
        .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
    else{
        db.query(queryDel, [entry_id])
        .then(() => {
            updateTime(rest_id);
        })
        .catch(err => console.log(err));
    } 
})
.then(res.redirect("/waitlist"))
.catch(err => console.log(err));      
})
    return router;
}