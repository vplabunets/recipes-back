const createError = require("http-errors");
const express = require("express");

const { Recipe } = require("../models/recipe");

async function getRecipes(req, res, next) {
  const { limit = 0, page = 1 } = req.query;
  const skip = (page - 1) * limit;
  const recipes = await Recipe.find({}).skip(skip).limit(limit);
  return res.status(200).json(recipes);
}

async function getRecipe(req, res, next) {
  const { id } = req.params;
  const recipe = await Recipe.findById(id);
  if (!recipe) {
    return res.status(400).json({ message: "Recipe not found" });
  }
  return res.status(200).json(recipe);
}

async function addRecipe(req, res, next) {
  const { name } = req.body;
  await Recipe.create({ name });
  return res.status(201).json(req.body);
}

async function deleteRecipe(req, res, next) {
  const { id } = req.params;
  console.log("req.params", req.params);
  const recipe = await Recipe.findById(id);
  console.log("recipe", recipe);
  if (!recipe) {
    return next(createError(404, "No recipe"));
  }
  await Recipe.findByIdAndRemove(id);
  return res.status(200).json(recipe);
}

// recipesRouter.put("/:",
async function updatedRecipe(req, res, next) {
  const { id } = req.params;
  const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updatedRecipe);
}

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
  deleteRecipe,
  updatedRecipe,
};
