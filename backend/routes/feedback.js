const express = require("express");
const router = express.Router();

const db = require("../db");

// POST API - Save feedback
router.post("/", (req, res) => {

    const { name, email, course, feedback } = req.body;

    const sql = 
    "INSERT INTO feedback (name, email, course, feedback) VALUES (?, ?, ?, ?)";

    db.query(
        sql,
        [name, email, course, feedback],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).send("Database error");
            }

            res.send({
                message: "Feedback submitted successfully"
            });

        }
    );

});

// GET API - Get all feedback

router.get("/", (req, res) => {

    const sql = "SELECT * FROM feedback";

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send("Database error");
        }

        res.send(result);

    });

});
module.exports = router;