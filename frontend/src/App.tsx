import { useEffect, useState } from "react";
import { Note as NoteModel } from "./models/notes";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import NoteCard from "./components/NoteCard";
import { fetchNotes } from "./api/note_api";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    async function getNotes() {
      try {
        const loadNotes = await fetchNotes();
        setNotes(loadNotes);
      } catch (error) {
        console.error(error);
      }
    }
    getNotes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="note-card-container">
          {notes.map((note) => (
            <NoteCard note={note} key={note._id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
