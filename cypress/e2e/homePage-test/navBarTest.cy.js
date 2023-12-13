import loginData from "../../test-data/login";
import NavBarPage from "../../support/pageObjects/navBar.page"

describe("NavBar TestSuite", () => {

  beforeEach(() => {
    cy.getVerificationTokenByRequest().then((token) => {
      cy.loginByRequest(loginData.validEmail, loginData.validPassword, token)
      cy.visit('/');
    })
  });

  it("Verify that the search box is visible", () => {
    NavBarPage.searchField.should("be.visible")
  });

});