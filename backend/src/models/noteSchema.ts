import { InferSchemaType, Schema, model } from "mongoose";

const noteTakerSchema = new Schema({
  noteTitle: { type: String, required: true },
  noteText: { type: String },
});

type Note = InferSchemaType<typeof noteTakerSchema>;

export default model<Note>("Note", noteTakerSchema);
