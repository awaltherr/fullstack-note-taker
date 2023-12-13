import app from "./app";
import env from "./utilities/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

mongoose
  .connect(env.MONGO_CONNECTION)
  .then(() => {
    console.log("Connected to Mongoose");
    app.listen(port, () => {
      console.log(`Server are running on http://localhost:${port}`);
    });
  })
  .catch(console.error);
