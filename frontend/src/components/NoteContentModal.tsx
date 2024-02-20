// Uppdatera NoteContentModal.tsx:

import React from "react";
import "../styles/NoteContentModal.css";
import { deleteNote } from "../api/note_api";

interface NoteContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  noteId: string;
}

const NoteContentModal: React.FC<NoteContentModalProps> = ({
  isOpen,
  onClose,
  title,
  text,
  noteId,
}) => {
  const handleEditNote = () => {
    console.log("Note edited!");
  };

  const handleDeleteNote = async () => {
    try {
      await deleteNote(noteId);
      onClose();
      window.location.reload();
    } catch {
      console.log("Note deleted!");
    }
  };
  return (
    <>
      {isOpen && (
        <div className="note-modal-overlay" onClick={onClose}>
          <div
            className="note-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="note-modal-header">
              <h3 className="note-modal-title">{title}</h3>
              <div className="note-modal-actions">
                <p onClick={handleEditNote} className="note-modal-edit">
                  Edit
                </p>
                <p onClick={handleDeleteNote} className="note-modal-delete">
                  Delete
                </p>
              </div>
            </div>
            <p className="note-modal-text">{text}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteContentModal;
