const { mongoose } = require("mongoose");

const recipeSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    ingredients: {
      type: Object,
    },
    cookingTime: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Recipe = mongoose.model("recipe", recipeSchema);

module.exports = { Recipe };
