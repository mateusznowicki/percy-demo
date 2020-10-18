context("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show welcome message with logo on homepage", () => {
    cy.get("p").should("contain", "Edit src/App.js and save to reload.");
  });

  it("should gen snapshot", () => {
    // Generate image snapshot using Percy
    cy.percySnapshot('name test', { widths: [768, 992, 1200] });
  });
});
