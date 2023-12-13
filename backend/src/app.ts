import "dotenv/config";
import express from "express";
import NoteSchemaModel from "./models/note";

const app = express();

app.get("/", async (request, response) => {
  const notes = await NoteSchemaModel.find().exec();
  response.status(200).json(notes);
});

export default app;
