const jwt = require("jsonwebtoken");

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const verifyToken = (req, resp, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return resp.status(401).json({
      error: "Access denied",
    });
  }

  try {
    const verified = jwt.verify(token, TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    resp.status(400).json({
      error: "Invalid token",
    });
  }
};

module.exports = {
  TOKEN_SECRET,
  verifyToken,
};