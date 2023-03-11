const express = require("express");

const { tryCatchWrapper } = require("../helpers/index");
const { validateBody } = require("../middlewares/index");
const { signUp, signIn } = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/signup", tryCatchWrapper(signUp));
authRouter.post("/signin", tryCatchWrapper(signIn));

module.exports = { authRouter };
