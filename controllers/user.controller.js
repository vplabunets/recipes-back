const { User } = require("../models/user");

async function createRecipe(req, res, next) {
  const { user } = req;
  const { id: recipeId } = req.body;
  user.recipes.push(recipeId);
  const updatedUser = await User.findByIdAndUpdate(user._id, user, {
    new: true,
    fields: { recipes: 1 },
  });
  return res.status(201).json({ data: { recipes: updatedUser.recipes } });
}

async function getRecipes(req, res, next) {
  const { user } = req;
  // console.log("user", user);
  const { recipes } = user;
  const userWithRecipes = await User.findById(user._id).populate("recipes", {
    name: 1,
    cookingTime: 1,
    year: 1,
    _id: 1,
  });
  // console.log("recipes", recipes);
  return res.status(200).json({ data: { recipes: userWithRecipes.recipes } });
}
async function getMyData(req, res, next) {
  const { user } = req;
  const { name, email, _id } = user;
  return res.status(201).json({ user: { name, email, id: _id } });
}

module.exports = { createRecipe, getRecipes, getMyData };
