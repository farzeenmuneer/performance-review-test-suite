describe('Login Flow', () => {
  it('fills in the login form and submits', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('testuser@example.com')
      .should('have.value', 'testuser@example.com')

    cy.get('.action-focus')
      .focus()
      .should('have.class', 'focus')
  })
})