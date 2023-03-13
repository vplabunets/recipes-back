require("dotenv").config();

const { app } = require("./app");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// const xxx= process.env.HOST_URI.toString();
const xxx = "mongodb+srv://admin:H8r7RG7jUWF6gfiO@recipes.gpibk5y.mongodb.net/recipesDB?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3000;

  try {
    await console.log("HOST_URI in main in try", HOST_URI);
    await mongoose.connect(xxx);
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
