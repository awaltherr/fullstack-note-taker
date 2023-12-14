import { fetchNotes, fetchNote, addNote } from "../controllers/noteControllers";
import express from "express";

const expressRouter = express.Router();

expressRouter.get("/", fetchNotes);

expressRouter.get("/:id", fetchNote);

expressRouter.post("/", addNote);

export default expressRouter;
