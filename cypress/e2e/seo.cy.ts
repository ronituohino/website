describe("robots.txt", () => {
  it("is in the root", () => {
    cy.request("/robots.txt")
      .its("body")
      .its("length")
      .should("be.greaterThan", 0);
  });

  it("has user agent specified", () => {
    cy.request("/robots.txt").its("body").should("contain", "User-agent:");
  });

  it("has sitemap specified", () => {
    cy.request("/robots.txt").its("body").should("contain", "Sitemap:");
  });
});

describe("sitemap.xml", () => {
  it("is in the root", () => {
    cy.request("/sitemap.xml")
      .its("body")
      .its("length")
      .should("be.greaterThan", 0);
  });

  it("has root loc", () => {
    cy.request("/sitemap.xml")
      .its("body")
      .should("contain", "<loc>https://ronituohino.fi</loc>");
  });
});

export {};
