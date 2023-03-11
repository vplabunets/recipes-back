const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { User } = require("../models/user");

function validateBody(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(createError(404, error.message));
    }
    return next();
  };
}

async function auth(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const [type, token] = authHeader.split(" ");
  if (type !== "Bearer") {
    return next(createError(401, "token type is not valid"));
  }
  if (!token) {
    return next(createError(401, "no token provided"));
  }
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);
    req.user = user;
  } catch (err) {
    if (err.name === "TokenExpiredError" || err.name === "JsonWebTokenError") {
      return next(createError(401, "jwt token is not valid"));
    }
    throw err;
  }

  // console.log("is auth");
  // console.log(authHeader);
  return next();
}

module.exports = { validateBody, auth };
