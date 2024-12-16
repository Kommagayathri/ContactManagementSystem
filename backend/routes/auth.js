const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: "Please enter all the required fields." });

  try {
    // Check if email already exists
    const [existingUser] = await global.db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length) {
      return res.status(400).json({ error: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await global.db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error." });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please enter all the required fields!" });
  }

  try {
    const [user] = await global.db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (!user.length) {
      return res.status(400).json({ error: "Invalid email or password!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid email or password!" });
    }

    const payload = { _id: user[0].id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token, user: { ...user[0], password: undefined } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;
