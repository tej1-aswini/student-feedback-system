require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/feedback", require("./routes/feedback"));

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});

// Cloud deployment port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});