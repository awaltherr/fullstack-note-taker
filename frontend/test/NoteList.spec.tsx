import assert from "assert";
import { render } from "react-dom";
import { createElement } from "react";
import NoteList from "../src/components/NoteList";

describe("NoteList component", () => {
  it("renders a list of notes", () => {
    const notes = [
      {
        _id: "1",
        noteTitle: "Title1",
        noteText: "Description1",
      },
      {
        _id: "2",
        noteTitle: "Title2",
        noteText: "Description2",
      },
      {
        _id: "3",
        noteTitle: "Title3",
        noteText: "Description3",
      },
    ];

    const container = document.createElement("div");
    render(createElement(NoteList, { notes }), container);

    const noteElements = container.querySelectorAll(".note-card");
    assert.strictEqual(noteElements.length, 2);
  });
});
