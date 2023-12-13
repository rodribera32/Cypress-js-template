// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

// -- This is a parent command --
Cypress.Commands.add('getVerificationTokenByRequest', () => {
  cy.request('/login?ReturnUrl=%2Fadmin%2F').then((loginResponse) => {
    // Extract the verification token from the response body or headers
    const verificationToken = loginResponse.body.match(/<input name="__RequestVerificationToken" type="hidden" value="([^"]+)" \/>/)[1];
    return cy.wrap(verificationToken)
 })
})

Cypress.Commands.add('loginByRequest', (username, password, verificationToken) => {
  cy.request({
    method: 'POST',
    url: '/login',
    form: true,
    body: {
      Email: username,
      Password: password,
      __RequestVerificationToken: verificationToken,
      RememberMe: false,
    },
  })
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })