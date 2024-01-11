import { Note } from "../models/notes";

async function fetchApi(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);

  if (!response.ok) {
    const errorBody = await response.json();
    throw Error(errorBody.error);
  }

  return response;
}

export async function fetchNotes(): Promise<Note[]> {
  const response = await fetchApi("/api/notes", {
    method: "GET",
  });
  return response.json();
}

export interface NoteInput {
  noteTitle: string;
  noteTextext?: string;
}

export async function createNote(note: NoteInput): Promise<Note> {
  const response = await fetchApi("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
  return response.json();
}
