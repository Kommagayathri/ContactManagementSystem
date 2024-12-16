const mysql = require("mysql2/promise");

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log("Connected to MySQL database...");
    global.db = connection; // Make the connection globally available
  } catch (err) {
    console.error("Error connecting to MySQL database:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
