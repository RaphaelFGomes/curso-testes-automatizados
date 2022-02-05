describe("App Developers Skills", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should load skills list as the button is clicked", () => {
    //Custom command (Example customized commands) to load a New added Skill
    cy.loadSkills();
  });

  it("should load one skill after input and click search button", () => {
    cy.get("input").type("front-end");
    cy.get("#search-button").click();
    cy.get("li").should("be.visible");
    cy.contains("Skill Name: front-end");
  });

  it("Should acess the Add Skills form and assert all components", () => {
    cy.get("#add-skill-button").click();
    cy.get("h5").then(($option) => {
      expect($option.eq(0)).to.have.text(" Skill Name ");
      $option.eq(0);
      expect($option.eq(1)).to.have.text(" Developers ");
      $option.eq(1);
      expect($option.eq(2)).to.have.text(" Thecnologies ");
      $option.eq(2);
      expect($option.eq(3)).to.have.text(" Roles ");
      $option.eq(3);
      cy.get("#skillName").should("be.visible");
      cy.get("#developers").should("be.visible");
      cy.get("select#developers")
        .should("contain", "Dev_1")
        .should("contain", "Dev_2")
        .should("contain", "Dev_3");
      cy.get("#technologies").should("be.visible");
      cy.get("#technologies")
        .should("contain", "Java")
        .should("contain", "React")
        .should("contain", "Phyton");
      cy.get("#roles").should("be.visible");
      cy.get("#roles")
        .should("contain", "Developer")
        .should("contain", "Quality Assurance")
        .should("contain", "UI/UX Designer");
      cy.get('button[type="submit"]').should("be.visible");
    });
  });

  it("Should add a new skill", () => {
    //Custom command (Example inside of the own script) to add a New Skill
    cy.addOneNewSkill();
  });

  it("Should Load a new Added Skill", () => {
    //Custom command (Example inside of commands file) to load a New added Skill
    cy.loadNewAddedSkill();
    cy.contains("Skill Name: Full Stack");
    cy.contains("Developers:Dev_2");
    cy.contains("Technologies:React");
    cy.contains("Roles:Quality Assurance");
  });

  Cypress.Commands.add("addOneNewSkill", () => {
    cy.get("#add-skill-button").click();
    cy.get("#skillName").type("Quality Assurance");
    cy.get('select[name="developers"]').select("Dev_1");
    cy.get("select#technologies").select("Phyton");
    cy.get("#roles").select("Quality Assurance");
    cy.get('button[type="submit"').click();
  });

});