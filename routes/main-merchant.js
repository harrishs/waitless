const express = require('express');
const router  = express.Router();

module.exports = (db) => {
    router.get("/", (req, res) => {
        let rest_id = req.session.user_id;
        async function getList(rest_id){
            console.log("inside fn");
            //get waitlist id
            let query = `SELECT id FROM waitlists WHERE restaurant_id = $1`;
            let waitObj = await db.query(query, [rest_id]);
            if (waitObj.rows[0]){
                let wait_id = waitObj.rows[0].id;
                            //get waitlist entries
            let query2 = `SELECT * FROM waitlist_entries WHERE  waitlist_id = $1`;
            let entriesObj = await db.query(query2, [wait_id]);
            let entriesArr = entriesObj.rows;
            return entriesArr;
            }
            else {
                return undefined;
            }
        }

        //check if any waitlist for restaurant
        let queryList = `SELECT * FROM waitlists WHERE restaurant_id =  $1`;
        db.query(queryList, [rest_id])
        .then(res => {
            if (!res.rows)
            {
                res.render("main-merchant", {})
            }
            else {}
        })

        getList(rest_id)
        .then(vals => 
            {
                res.render("main-merchant", {entries: vals})
            })
        .catch(err => console.log(err));
        
    })

    router.post("/", (req, res) => {
        let rest_id = req.session.user_id;
        let queryDel = `DELETE FROM waitlists WHERE restaurant_id = $1`;
        db.query(queryDel, [rest_id])
        .then(console.log("Successfully deleted"))
        .catch(err => console.log(err));
        res.redirect("/waitlist");
    })
    return router;
}