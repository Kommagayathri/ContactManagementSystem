const router = require("express").Router();
const auth = require("../middlewares/auth");

router.post("/contact", auth, async (req, res) => {
  const { name, address, email, phone } = req.body;

  if (!name || !address || !email || !phone) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await global.db.execute(
      "INSERT INTO contacts (name, address, email, phone, posted_by) VALUES (?, ?, ?, ?, ?)",
      [name, address, email, phone, req.user.id]
    );

    res.status(201).json({ message: "Contact created successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error." });
  }
});

router.get("/mycontacts", auth, async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const [contacts] = await global.db.execute(
      "SELECT * FROM contacts WHERE posted_by = ? LIMIT ? OFFSET ?",
      [req.user.id, parseInt(limit), (page - 1) * parseInt(limit)]
    );

    res.status(200).json({ contacts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;
