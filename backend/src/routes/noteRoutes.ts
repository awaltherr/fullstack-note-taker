import {
  fetchNotes,
  fetchNote,
  addNote,
  editNote,
  deleteNote,
} from "../controllers/noteControllers";
import express from "express";

const expressRouter = express.Router();

expressRouter.get("/", fetchNotes);

expressRouter.get("/:id", fetchNote);

expressRouter.post("/", addNote);

expressRouter.patch("/:id", editNote);

expressRouter.delete("/:id", deleteNote);

export default expressRouter;
