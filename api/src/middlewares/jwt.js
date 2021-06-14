const jwt = require("jsonwebtoken");

module.exports = function generateAccessToken(user) {
  return jwt.sign(user, process.env.TOKEN_SECRET);
};
