import { useEffect, useState } from "react";
import { Note } from "./models/notes";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function getNotes() {
      try {
        const response = await fetch("/api/notes", {
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

  return (
    <>
      <Navbar />
      <div className="App">{JSON.stringify(notes)}</div>
    </>
  );
}

export default App;
