const { mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      match: [/[a-z0-9]+@[a-z0-9]+/, "user email is not valid"],
    },
    password: {
      type: String,
      minLength: [6, "password should be at least 6 characters long"],
      // maxLength: [10, "password should be not more than 10 characters long"],
    },
    recipes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "recipe",
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = { User };
