// cypress/support/commands.js

Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('cypress/fixtures/login-page.html')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#login-btn').click()
    cy.get('#dashboard').should('be.visible')
  })
})


Cypress.Commands.add('createReview', (title, comment = '') => {
  cy.visit('cypress/fixtures/reviews-page.html')
  cy.get('#review-title').type(title)
  if (comment) {
    cy.get('#review-comment').type(comment)
  }
  cy.get('#create-btn').click()
})