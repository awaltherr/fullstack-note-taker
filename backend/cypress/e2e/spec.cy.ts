describe("HTTP-Requests", () => {
  let currentNotesId: string;

  beforeEach(() => {
    cy.visit("http://localhost:5000");

    cy.request("GET", "http://localhost:5000/api/notes").then((response) => {
      const currentNotes = response.body;
      if (currentNotes.length > 0) {
        const randomNote = Cypress._.sample(currentNotes);
        currentNotesId = randomNote._id;
      }
    });
  });

  it("adds a new note", () => {
    const newNote = {
      noteTitle: "New title added by Cypress",
      noteText: "New text added by Cypress",
    };

    cy.request("POST", "http://localhost:5000/api/notes", newNote).then(
      (response) => {
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property("noteTitle", newNote.noteTitle);
        expect(response.body).to.have.property("noteText", newNote.noteText);
      }
    );
  });

  it("reads existing notes", () => {
    cy.request("GET", "http://localhost:5000/api/notes").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array");
    });
  });

  it("deletes a note", () => {
    expect(currentNotesId).to.not.be.undefined;

    cy.request(
      "DELETE",
      `http://localhost:5000/api/notes/${currentNotesId}`
    ).then((response) => {
      console.log("Svar från servern (DELETE random note):", response);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("message", "Deleted note");
    });
  });

  it("updates a note", () => {
    expect(currentNotesId).to.not.be.undefined;

    const updatedNote = {
      noteTitle: "Updated title by Cypress",
      noteText: "Updated text by Cypress",
    };

    cy.request(
      "PATCH",
      `http://localhost:5000/api/notes/${currentNotesId}`,
      updatedNote
    ).then((response) => {
      console.log("Response from PATCH-Request:", response);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("_id", currentNotesId);
      expect(response.body).to.have.property(
        "noteTitle",
        updatedNote.noteTitle
      );
      expect(response.body).to.have.property("noteText", updatedNote.noteText);
    });
  });
});
