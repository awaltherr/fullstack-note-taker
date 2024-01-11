import { Note as NoteModel } from "../models/notes";
import "../styles/NoteCard.css";

interface NoteCardProps {
  note: NoteModel;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  return (
    <div className="note-card">
      <h3 className="note-title">{note.noteTitle}</h3>
      <p className="note-text">{note.noteText}</p>
    </div>
  );
};

export default NoteCard;
