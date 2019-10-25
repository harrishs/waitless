const express = require('express');
const router  = express.Router();
const bodyParser = require("body-parser")

module.exports = (db) => {
    router.get("/", (req, res)=> {
        res.render("activatewaittime-merchant");
    });


    router.post("/", (req, res)=> {
        time = req.body.times;
        queryStr =  `INSERT INTO waitlists (restaurant_id, wait_time)
        VALUES ($1, $2)`;
        queryVals = [1, parseInt(time)];
        db.query(queryStr, queryVals)
        .then(console.log("Success"))
        .catch(err => console.log(err))
    });

    return router;

}