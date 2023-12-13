import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import NoteSchemaModel from "./models/noteSchema";

const app = express();

app.get("/", async (request, response, nextCallback) => {
  try {
    const notes = await NoteSchemaModel.find().exec();
    response.status(200).json(notes);
  } catch (error) {
    nextCallback(error);
  }
});

app.use(
  (
    error: unknown,
    request: Request,
    response: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nextCallback: NextFunction
  ) => {
    console.error(error);
    let errorMessage = "Unkown error occurred";
    if (error instanceof Error) errorMessage = error.message;
    response.status(500).json({ error: errorMessage });
  }
);

export default app;
