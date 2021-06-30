const { ROL, SECURITY_ENABLE } = require("../utils/constants");

exports.roleValidation = (rol) => {
  let roles = "";
  if (rol) {
    roles = Array.isArray(rol) ? rol : [rol];
  }
  return (req, res, next) => {
    if (![...roles, ROL.ADMIN].includes(req.user?.rol)) throw new Error();
    next();
  };
};

exports.IsTokenValid = () => {
  if (SECURITY_ENABLE) {
    return (req, res, next) => {
      if (!req.tokenValid) {
        res.status(401);
        throw new Error(401);
      }
      next();
    };
  }

  return (req, res, next) => {
    next();
  };
};
