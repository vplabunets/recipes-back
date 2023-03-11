require("dotenv").config();
const mongoose = require("mongoose");

const { string } = require("joi");

const { app } = require("./app");
mongoose.set("strictQuery", false);

const { HOST_URI } = process.env;
const PORT = process.env.PORT || 3000;
// console.log(process.env);
async function main() {
  try {
    await mongoose.connect(HOST_URI);
    console.log("Connected to mongodb");
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}`);
    });
    app.get("/", (req, res) => {
      res.send("Hey this is my API running 🥳");
    });

    app.get("/about", (req, res) => {
      res.send("This is my about route..... ");
    });
  } catch (error) {
    console.error("Main failed", error.message);
    process.exit(1);
  }
}

main();
