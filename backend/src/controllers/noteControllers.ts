import { RequestHandler } from "express";
import mongoose from "mongoose";
import NoteSchemaModel from "../models/noteSchema";

interface EditNoteBody {
  noteTitle?: string;
  noteText?: string;
}

export const fetchNotes: RequestHandler = async (request, response) => {
  try {
    const notes = await NoteSchemaModel.find().exec();
    response.status(200).json(notes);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

export const addNote: RequestHandler = async (request, response) => {
  const noteTitle = request.body.noteTitle;
  const noteText = request.body.noteText;

  try {
    const newNote = await NoteSchemaModel.create({
      noteTitle: noteTitle,
      noteText: noteText,
    });
    response.status(201).json(newNote);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchNote: RequestHandler = async (request, response) => {
  const id = request.params.id;

  try {
    const note = await NoteSchemaModel.findById(id).exec();
    if (!note) {
      response.status(404).json({ error: "Note was not found" });
    } else {
      response.status(200).json(note);
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

export const editNote: RequestHandler = async (request, response) => {
  const id = request.params.id;
  const { noteTitle, noteText }: EditNoteBody = request.body;

  try {
    if (!noteTitle) {
      response.status(400).json({ error: "Title cannot be empty" });
      return;
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      response.status(400).json({ error: "Invalid id" });
      return;
    }

    const updatedNote = await NoteSchemaModel.findByIdAndUpdate(
      id,
      {
        noteTitle,
        noteText,
      },
      {
        new: true,
      }
    ).exec();

    if (!updatedNote) {
      response.status(404).json({ error: "Note was not found" });
    } else {
      response.status(200).json(updatedNote);
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteNote: RequestHandler = async (request, response) => {
  const id = request.params.id;

  try {
    const deleteNote = await NoteSchemaModel.findByIdAndUpdate(id).exec();

    if (!deleteNote) {
      response.status(404).json({ error: "Note not found" });
    } else {
      response.status(200).json({ message: "Deleted note" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};
