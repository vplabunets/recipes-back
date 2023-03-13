require("dotenv").config();

const { app } = require("./app");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const { HOST_URI } = process.env;
const PORT = process.env.PORT || 3000;

async function main() {
  console.log("HOST_URI in main before try", HOST_URI);
  try {
    console.log("HOST_URI in main in try", HOST_URI);

    await mongoose.connect(HOST_URI);
    console.log("Connected to mongodb");
    await app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Main failed", error.message);
    process.exit(1);
  }
}

main();
