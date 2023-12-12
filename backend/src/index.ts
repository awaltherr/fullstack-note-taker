import "dotenv/config";
import env from "./utility/validateEnv";
import mongoose from "mongoose";
import express from "express";

const app = express();
const port = env.PORT;

app.get("/", (request, response) => {
  response.send("Hello from backend!");
});

mongoose
  .connect(env.MONGO_CONNECTION)
  .then(() => {
    console.log("Connected to Mongoose");
    app.listen(port, () => {
      console.log(`Server are running on http://localhost:${port}`);
    });
  })
  .catch(console.error);
