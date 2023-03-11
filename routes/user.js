const express = require("express");
const userRouter = express.Router();
const {
  createRecipe,
  getRecipes,
  getMyData,
} = require("../controllers/user.controller");

const { tryCatchWrapper } = require("../helpers/index");
const { validateBody, auth } = require("../middlewares/index");
const { addRecipeSchema } = require("../schemas/recipes");

userRouter.post("/", tryCatchWrapper(auth), tryCatchWrapper(createRecipe));
userRouter.get("/", tryCatchWrapper(auth), tryCatchWrapper(getRecipes));
userRouter.get("/mydata", tryCatchWrapper(auth), tryCatchWrapper(getMyData));

module.exports = { userRouter };
