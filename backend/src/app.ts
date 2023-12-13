import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Hello from backend!");
});

export default app;
