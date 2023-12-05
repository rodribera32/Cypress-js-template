import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";
import NavBarPage from "../../support/pageObjects/navBar.page"

describe("Login TestSuite", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Success Login", () => {
    LoginPage.login(loginData.validEmail, loginData.validPassword);
    NavBarPage.navBarIcon.should("be.visible")
    cy.url().should("eq", "https://admin-demo.nopcommerce.com/admin/");
  });

  it("Success Login using commands", () => {
    cy.login(loginData.validEmail, loginData.validPassword);
    NavBarPage.navBarIcon.should("be.visible")
    cy.url().should("eq", "https://admin-demo.nopcommerce.com/admin/");
  });
 
  it("Invalid Login", () => {
    LoginPage.login(loginData.invalidEmail, loginData.validPassword);
    LoginPage.invalidUserErrorMessage.should('contain.text', "Login was unsuccessful. Please correct the errors and try again.");
  });

  it("Login with uppercase letters", () => {
    LoginPage.login(loginData.validEmail.toUpperCase(), loginData.validPassword.toUpperCase());
    LoginPage.invalidUserErrorMessage.should('contain.text', "Login was unsuccessful. Please correct the errors and try again.");
  });

  it("Wrong Email", () => {
    LoginPage.login(loginData.wrongEmailFormat, loginData.validPassword);
    LoginPage.wrongEmailErrorMessage.should('have.text', "Wrong email");
  });

});