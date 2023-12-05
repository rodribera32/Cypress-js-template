class LoginPage {
    get emailInput () {
      return cy.get("#Email");
    }
  
    get passwordInput () {
      return cy.get("#Password");
    }
  
    get loginButton () {
      return cy.get(".login-button");
    }
  
    get invalidUserErrorMessage () {
      return cy.get(".message-error");
    }
  
    get wrongEmailErrorMessage () {
      return cy.get("#Email-error");
    }
  
    login(email, password) {
      this.emailInput.clear().type(email);
      this.passwordInput.clear().type(password);
      this.loginButton.click();
    }
  }
  
  export default new LoginPage();