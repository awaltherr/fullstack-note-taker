import { RequestHandler } from "express";
import NoteSchemaModel from "../models/noteSchema";

export const fetchNotes: RequestHandler = async (request, response) => {
  try {
    const notes = await NoteSchemaModel.find().exec();
    response.status(200).json(notes);
  } catch (error) {
    console.log(error);
  }
};

export const fetchNote: RequestHandler = async (request, response) => {
  const id = request.params.id;
  try {
    const note = await NoteSchemaModel.findById(id).exec();
    response.status(200).json(note);
  } catch (error) {
    console.log(error);
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
  }
};
