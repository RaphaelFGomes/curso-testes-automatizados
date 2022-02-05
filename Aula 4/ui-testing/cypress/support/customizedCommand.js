Cypress.Commands.add('loadSkills', () => {
  cy.get("#load-skills-button").click();
  cy.get("li").should("be.visible");
  cy.get("ul").should("be.visible");
});