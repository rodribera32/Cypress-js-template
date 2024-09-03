import loginData from "../../test-data/login";

describe("Login TestSuite", () => {

  it("Success Login", () => {
    cy.visit("/");
    cy.get("#Email").type(loginData.validEmail);
    cy.get("#Password").type(loginData.validPassword);
    cy.get(".login-button").click();
    cy.url().should("eq", "https://admin-demo.nopcommerce.com/admin/");
  });

});