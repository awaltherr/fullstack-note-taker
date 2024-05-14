import { Note } from "../models/notes";
import NoteCard from "./NoteCard";

interface NoteListProps {
  notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <div className="note-card-container">
      {notes.map((note) => (
        <NoteCard note={note} key={note._id} />
      ))}
    </div>
  );
};

export default NoteList;
