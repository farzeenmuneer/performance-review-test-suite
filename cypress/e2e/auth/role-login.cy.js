describe('Role-Based Login with Session Caching', () => {
  it('logs in as Employee and sees employee dashboard', () => {
    cy.login('employee', 'emp123')
    cy.visit('cypress/fixtures/login-page.html')
    cy.get('#welcome').should('be.visible').and('contain', 'Employee')
  })

  it('logs in as Manager and sees manager dashboard', () => {
    cy.login('manager', 'mgr123')
    cy.visit('cypress/fixtures/login-page.html')
    cy.get('#welcome').should('be.visible').and('contain', 'Manager')
  })

  it('reuses Employee session without logging in again', () => {
    cy.login('employee', 'emp123')
    cy.visit('cypress/fixtures/login-page.html')
    cy.get('#welcome').should('be.visible').and('contain', 'Employee')
  })
})