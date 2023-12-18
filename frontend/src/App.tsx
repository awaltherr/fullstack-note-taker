import { useEffect, useState } from "react";
import { Note } from "./models/notes";
import "./App.css";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function getNotes() {
      try {
        const response = await fetch("http://localhost:5000/api/notes", {
          method: "GET",
        });
        const loadNotes = await response.json();
        setNotes(loadNotes);
      } catch (error) {
        console.error(error);
      }
    }
    getNotes();
  }, []);

  return <div className="App">{JSON.stringify(notes)}</div>;
}

export default App;
