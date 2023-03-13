require("dotenv").config({ path: "./config.env" });

const { app } = require("./app");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// const { HOST_URI } = process.env;
// const PORT = process.env.PORT || 3000;

const DB = process.env.HOST_URI;
// const Port = process.env.PORT;

// const xxx =
//   "mongodb+srv://admin:H8r7RG7jUWF6gfiO@recipes.gpibk5y.mongodb.net/recipesDB?retryWrites=true&w=majority";
async function main() {
  await console.log("HOST_URI in main before try", HOST_URI);
  try {
    await console.log("HOST_URI in main in try", HOST_URI);

    await mongoose.connect(DB);
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
