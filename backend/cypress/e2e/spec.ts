import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user navigates to the homepage", () => {
  cy.visit("http://localhost:5000");
});

Then("the navbar should be visible", () => {
  cy.get("nav").should("be.visible");
});

Then("at least one note should be created", () => {
  cy.request("GET", "http://localhost:5000/api/notes").then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
    expect(response.body.length).to.be.greaterThan(0);
  });
});
