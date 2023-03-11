require("dotenv").config();
const mongoose = require("mongoose");

const { string } = require("joi");

const { app } = require("./app");
mongoose.set("strictQuery", false);

const { HOST_URI } = process.env;
const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await mongoose.connect(HOST_URI);
    console.log("Connected to mongodb");
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Main failed", error.message);
    process.exit(1);
  }
}

main();
