const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const createError = require("http-errors");
const app = express();
const { recipesRouter } = require("./routes/recipes");
const { authRouter } = require("./routes/auth");
const { userRouter } = require("./routes/user");

const { tryCatchWrapper } = require("./helpers/index");

//Middlewares
app.use(cors());
app.use(express.json()); // express works with json in body
app.use(morgan("dev"));
// app.use(express.static("public"));
//Routes
app.use("/api/recipes", recipesRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
// app.use((_, res), () => {
//   return res.send("Hello kitty");
// });

//404 error handling
app.use((req, res) => {
  res.status(404).json({
    message: "Not Found 2",
  });
});
//Error handling
app.use((err, req, res, next) => {
  //handle mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }

  if (err.message.includes("cast to ObjectId failed for value")) {
    return res.status(400).json({ message: "id is invalid" });
  }

  if (err.status) {
    return res.status(err.status).json({
      message: err.message,
    });
  }
  return res.status(500).json({ message: "Internal Server Error" });
});

module.exports = { app };
