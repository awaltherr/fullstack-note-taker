import CreateNoteModal from "../../src/components/CreateNoteModal";

describe("CreateNoteModal", () => {
  beforeEach(() => {
    cy.mount(
      <CreateNoteModal
        isOpen={true}
        onClose={() => {}}
        noteCreation={() => {}}
      />
    );
  });

  it("renders correctly", () => {
    cy.get(".modal-content").should("be.visible");
  });

  it("displays 'Title' label and input field", () => {
    cy.get(".input-container label[for='addNoteTitle']").should(
      "have.text",
      "Title:"
    );
    cy.get(".input-container input[type='text']").should("be.visible");
  });

  it("displays 'Description' label and input field", () => {
    cy.get(".input-container label[for='addNoteText']").should(
      "have.text",
      "Description:"
    );
    cy.get(".input-container textarea").should("be.visible");
  });

  it("creats a note on 'Create' button click", () => {
    const title = "Test Title";
    const description = "Test Description";

    cy.get(".input-container input[type='text']").type(title);
    cy.get(".input-container textarea").type(description);
    cy.get("button").contains("Create").click();
  });

  it("does not create a new note if title or description input fields are empty", () => {
    cy.get("button").contains("Create").click();
  });
});
