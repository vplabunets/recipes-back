const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { JWT_SECRET } = process.env;

async function signUp(req, res, next) {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const savedUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      user: { name, email, id: savedUser._id },
    });
  } catch (err) {
    if (err.message.includes("E11000 duplicate key error")) {
      return next(createError(409, "User with this email already exists"));
    }
    throw err;
  }
}

async function signIn(req, res, next) {
  const { email, password } = req.body;

  try {
    const storedUser = await User.findOne({ email });

    if (!storedUser) {
      return next(createError(401, "email or password not valid"));
    }
    const isPasswordValid = await bcrypt.compare(password, storedUser.password);

    if (!isPasswordValid) {
      return next(createError(401, "password is not valid"));
    }
    const accessToken = await jwt.sign({ id: storedUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.status(202).json({ data: { accessToken } });
  } catch (err) {
    console.error(err);
  }
}

module.exports = { signUp, signIn };
