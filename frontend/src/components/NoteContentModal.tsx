import React, { useEffect, useState } from "react";
import "../styles/NoteContentModal.css";
import { deleteNote, editNote } from "../api/note_api";

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
  const [isNoteEdiiting, setIsNoteEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);

  useEffect(() => {
    setNewTitle(title);
    setNewText(text);
  }, [isOpen, title, text]);

  useEffect(() => {
    if (!isOpen) {
      setIsNoteEditing(false);
    }
  }, [isOpen]);

  const handleEditNote = async () => {
    if (isNoteEdiiting) {
      try {
        await editNote(noteId, { noteTitle: newTitle, noteText: newText });
        onClose();
        window.location.reload();
      } catch (error) {
        console.error("Error accoured while editing note:", error);
      }
    } else {
      setIsNoteEditing(true);
    }
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
              {isNoteEdiiting ? (
                <>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                  <p className="note-modal-save" onClick={handleEditNote}>
                    Save
                  </p>
                </>
              ) : (
                <>
                  <h3 className="note-modal-title">{title}</h3>
                  <p onClick={handleEditNote} className="note-modal-edit">
                    Edit
                  </p>
                </>
              )}
              <p onClick={handleDeleteNote} className="note-modal-delete">
                Delete
              </p>
            </div>
            {isNoteEdiiting ? (
              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            ) : (
              <p className="note-modal-text">{text}</p>
            )}
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteContentModal;
