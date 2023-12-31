import "dotenv/config";
import express, { Request, Response } from "express";
import notesRoutes from "./routes/noteRoutes";
import morgan from "morgan";
import path from "path";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/notes", notesRoutes);

app.use(express.static(path.join(path.resolve(), "public")));

app.use((error: unknown, request: Request, response: Response) => {
  console.error(error);
  let errorMessage = "Unkown error occurred";
  if (error instanceof Error) errorMessage = error.message;
  response.status(500).json({ error: errorMessage });
});

export default app;
