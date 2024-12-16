// models/User.js
const db = require("../config/db"); // MySQL connection pool

// Create User
const createUser = async (userData) => {
  const { name, email, password } = userData;
  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  const [result] = await db.execute(query, [name, email, password]);
  return result;
};

// Find User by email
const findUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = ?`;
  const [rows] = await db.execute(query, [email]);
  return rows[0]; // Return the first matched user
};

// Get User by ID
const getUserById = async (id) => {
  const query = `SELECT * FROM users WHERE id = ?`;
  const [rows] = await db.execute(query, [id]);
  return rows[0]; // Return the user if found
};

module.exports = {
  createUser,
  findUserByEmail,
  getUserById,
};
