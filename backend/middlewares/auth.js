const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
      if (err) {
        return res.status(401).json({ error: "Unauthorized!" });
      }

      try {
        const [user] = await global.db.execute(
          "SELECT id, name, email FROM users WHERE id = ?",
          [payload._id]
        );

        if (!user.length) {
          return res.status(401).json({ error: "User not found." });
        }

        req.user = user[0];
        next();
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
      }
    });
  } else {
    return res.status(403).json({ error: "Forbidden 🛑🛑" });
  }
};
