// Uppdatera NoteContentModal.tsx:

import React from "react";
import "../styles/NoteContentModal.css";

interface NoteContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
}

const NoteContentModal: React.FC<NoteContentModalProps> = ({
  isOpen,
  onClose,
  title,
  text,
}) => {
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
                <p className="note-modal-edit">Edit</p>
                <p className="note-modal-delete">Delete</p>
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
