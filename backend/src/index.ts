import express from "express";

const app = express();
const port = 5000;

app.get("/", (request, response) => {
  response.send("Hello from backend!");
});

app.listen(port, () => {
  console.log(`Server are running on port ${port}`);
});
