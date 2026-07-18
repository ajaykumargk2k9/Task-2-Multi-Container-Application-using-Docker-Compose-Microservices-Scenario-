const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Student Management Backend is Running!");
});

app.get("/students", (req, res) => {

    db.query("SELECT * FROM students", (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});