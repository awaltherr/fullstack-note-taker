import NoteContentModal from "../../src/components/NoteContentModal";

describe("NoteContentModal", () => {
  const testNote = {
    _id: "1",
    noteTitle: "Test Title",
    noteText: "Test Description",
  };
  beforeEach(() => {
    cy.mount(
      <NoteContentModal
        isOpen={true}
        onClose={() => {}}
        noteId={testNote._id}
        title={testNote.noteTitle}
        text={testNote.noteText}
      />
    );
  });

  it("renders the modal when it is open", () => {
    cy.get(".note-modal-overlay").should("be.visible");
  });

  it("displays the correct title and description in the modal", () => {
    cy.get(".note-modal-title").should("contain", testNote.noteTitle);
    cy.get(".note-modal-text").should("contain", testNote.noteText);
  });

  it("switches to edit mode when clicking the edit text", () => {
    cy.get(".note-modal-edit").click();
    cy.get("input[type='text']").should("be.visible");
    cy.get("textarea").should("be.visible");
  });

  it("switches to the text 'Save' after pressing the text 'Edit'", () => {
    cy.get(".note-modal-edit").click();
    cy.get(".note-modal-edit").should("not.exist");
    cy.get(".note-modal-save").should("exist");
  });

  it("deletes the note when the 'Delete' text are pressed", () => {
    cy.get(".note-modal-delete").click();
  });
});
