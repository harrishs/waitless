const express = require('express');
const router  = express.Router();
module.exports = (db) => {
    router.get("/", (req, res)=> {
        res.render("peoplewaiting-merchant");
    });

    router.post("/", (req,res)=> {
        let queryStr = `SELECT wait_time FROM waitlists WHERE restaurant_id = $1`;
        let queryVals = [1];
        let time = db.query(queryStr, queryVals);

    })
    return router;
}