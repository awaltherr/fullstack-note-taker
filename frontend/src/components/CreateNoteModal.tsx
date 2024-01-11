import { useState } from "react";
import "../styles/CreateNoteModal.css";

interface CreateNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  noteCreation: () => void;
}

const CreateNoteModal: React.FC<CreateNoteModalProps> = ({
  isOpen,
  onClose,
  noteCreation,
}) => {
  const [addNoteTitle, setAddNoteTitle] = useState("");
  const [addNoteText, setAddNoteText] = useState("");

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3>Create Note</h3>
            <span className="close-icon" onClick={onClose}>
              X
            </span>
          </div>
          <div className="input-container">
            <label htmlFor="addNoteTitle">Title:</label>
            <input
              type="text"
              value={addNoteTitle}
              onChange={(e) => setAddNoteTitle(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="addNoteText">Description:</label>
            <textarea
              value={addNoteText}
              onChange={(e) => setAddNoteText(e.target.value)}
            />
          </div>
          <button onClick={noteCreation}>Create</button>
        </div>
      </div>
    )
  );
};

export default CreateNoteModal;
