import { useEffect, useState } from "react";
import { Note as NoteModel } from "./models/notes";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import { fetchNotes } from "./api/note_api";
import NoteList from "./components/NoteList";

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
        <NoteList notes={notes} />
      </div>
    </>
  );
}

export default App;
