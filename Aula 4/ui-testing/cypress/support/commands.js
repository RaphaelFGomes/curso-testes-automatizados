Cypress.Commands.add('loadNewAddedSkill', () => {
  cy.get("#add-skill-button").click();
  cy.get("#skillName").type("Full Stack");
  cy.get('select[name="developers"]').select("Dev_2");
  cy.get("select#technologies").select("React");
  cy.get("#roles").select("Quality Assurance");
  cy.get('button[type="submit"').click();
});