describe("Index page", () => {
  it("loads", () => {
    cy.visit("/");
    cy.location().title().should("equal", "Roni Tuohino");
  });
});

export {};
