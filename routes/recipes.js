const express = require("express");
const recipesRouter = express.Router();
const {
  getRecipes,
  getRecipe,
  addRecipe,
  deleteRecipe,
  updatedRecipe,
} = require("../controllers/recipes.controller");

const { tryCatchWrapper } = require("../helpers/index");
const { validateBody } = require("../middlewares/index");
const { addRecipeSchema } = require("../schemas/recipes");

recipesRouter.get("/", tryCatchWrapper(getRecipes));
recipesRouter.get("/:id", tryCatchWrapper(getRecipe));
recipesRouter.post(
  "/",
  validateBody(addRecipeSchema),
  tryCatchWrapper(addRecipe)
);
recipesRouter.delete("/:id", tryCatchWrapper(deleteRecipe));
recipesRouter.patch("/:id", tryCatchWrapper(updatedRecipe));

module.exports = { recipesRouter };
