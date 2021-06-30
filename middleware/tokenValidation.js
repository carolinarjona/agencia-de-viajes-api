const { validateToken } = require("../services/jwtService");
const { SECURITY_ENABLE } = require("../utils/constants");

const tokenValidation = (req, res, next) => {
  if (SECURITY_ENABLE) {
    if (req.headers.authorization) {
      const token = req.headers.authorization.slice(7);
      const { id, email, rol, nombre } = validateToken(token);
      req.user = { id, email, rol, nombre };
      req.tokenValid = true;
    }
  }
  next();
};

module.exports = tokenValidation;
