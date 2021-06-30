const jwt = require("jsonwebtoken");

const validateToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};

const generateToken = (id, email, rol) => {
  return jwt.sign({ id, email, rol }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
};

module.exports = { generateToken, validateToken };
