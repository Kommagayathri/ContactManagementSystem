// app.js

require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const auth = require("./middlewares/auth");

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// Routes
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/contact"));  // Contact routes should be handled here

// Generic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Server configurations
const PORT = process.env.PORT || 8000;

// Connect to DB before starting the server
connectDB();

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
