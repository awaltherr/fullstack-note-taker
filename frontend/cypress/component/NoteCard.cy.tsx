import NoteCard from "../../src/components/NoteCard";

describe("NoteCard", () => {
  const testNote = {
    _id: "1",
    noteTitle: "Test Title",
    noteText: "Test Description",
  };
  beforeEach(() => {
    cy.mount(<NoteCard note={testNote} />);
  });

  it("opens a modal when clicking on a existing note card", () => {
    cy.get(".note-card").click();
  });

  it("displays a title and a description", () => {
    cy.get(".note-card").click();
    cy.get(".note-title").should("contain", testNote.noteTitle);
    cy.get(".note-text").should("contain", testNote.noteText);
  });

  it("does not render the modal initially", () => {
    cy.get(".modal-overlay").should("not.exist");
  });
});
