const Joi = require("joi");

const addRecipeSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  ingredients: Joi.object(),
  cookingTime: Joi.string(),
  year: Joi.string(),
});

module.exports = { addRecipeSchema };
//
