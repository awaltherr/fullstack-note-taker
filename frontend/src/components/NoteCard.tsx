import React, { useState } from "react";
import NoteContentModal from "./NoteContentModal";
import { Note as NoteModel } from "../models/notes";
import "../styles/NoteCard.css";

interface NoteCardProps {
  note: NoteModel;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="note-card" onClick={openModal}>
        <h3 className="note-title">{note.noteTitle}</h3>
        <p className="note-text">{note.noteText}</p>
      </div>

      <NoteContentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={note.noteTitle}
        text={note.noteText}
        noteId={note._id}
      />
    </>
  );
};

export default NoteCard;
