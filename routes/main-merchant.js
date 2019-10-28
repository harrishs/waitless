const express = require('express');
const router  = express.Router();

module.exports = (db) => {
    router.get("/", (req, res) => {
        let rest_id = req.session.user_id;
        console.log(rest_id);
        async function getList(rest_id){
            console.log("inside fn");
            //get waitlist id
            let query = `SELECT id FROM waitlists WHERE restaurant_id = $1`;
            let waitObj = await db.query(query, [rest_id]);
            let wait_id = waitObj.rows[0].id;

            //get waitlist entries
            let query2 = `SELECT * FROM waitlist_entries WHERE  waitlist_id = $1`;
            let entriesObj = await db.query(query2, [wait_id]);
            let entriesArr = entriesObj.rows;
            return entriesArr;
        }
        getList(rest_id)
        .then(vals => 
            {
                res.render("main-merchant", {entries: vals})
            })
        .catch(err => console.log(err));
        
    })
    return router;
}