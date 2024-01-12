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
            <h3 className="note-modal-title">{title}</h3>
            <p className="note-modal-text">{text}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteContentModal;
