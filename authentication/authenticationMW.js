const jwt = require("jsonwebtoken");
const secret = require("./secret");

module.exports = (req, res, next) => {
  try {
    jwt.verify(req.headers.authorization, secret.string);
    next();
  } catch (err) {
    return res.status(401).json({ Unauthorized: "Invalid/No Token Provided" });
  }
};
