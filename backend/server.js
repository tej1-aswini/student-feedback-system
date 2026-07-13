require("dotenv").config();

console.log("DB USER:", process.env.DB_USER);
console.log("DB HOST:", process.env.DB_HOST);
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/feedback", require("./routes/feedback"));

app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});