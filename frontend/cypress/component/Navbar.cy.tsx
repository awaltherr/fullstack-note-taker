import Navbar from "../../src/components/Navbar";

describe("Navbar.cy.tsx", () => {
  beforeEach(() => {
    cy.mount(<Navbar />);
  });

  it("exists", () => {
    cy.get("nav").should("exist");
    cy.get(".navbar-container").should("exist");
    cy.get(".right-navbar-container").should("exist");
    cy.get(".left-navbar-container").should("exist");
  });

  it("dropdown menu appears when burger menu are clicked", () => {
    cy.viewport(800, 600);

    cy.get(".action-icon").click();
    cy.get(".responsive-navbar-container").should("be.visible");

    cy.get(".action-icon").click();
    cy.get(".responsive-navbar-container").should("not.be.visible");
  });
});
