describe('Performance Review Lifecycle', () => {
  it('creates a new review and shows it as Draft', () => {
    cy.createReview('Q1 Self Review', 'I delivered all my goals.')
    cy.get('.review-item').should('have.length', 1)
    cy.get('.review-title').should('contain', 'Q1 Self Review')
    cy.get('.review-status').should('contain', 'Draft')
  })

  it('submits a review and changes status to Submitted', () => {
    cy.createReview('Q1 Self Review')
    cy.get('.submit-review').click()
    cy.get('.review-status').should('contain', 'Submitted')
    cy.get('.submit-review').should('not.exist')
  })

  it('can create multiple reviews', () => {
    cy.createReview('Review A')
    cy.get('#review-title').type('Review B')
    cy.get('#create-btn').click()
    cy.get('.review-item').should('have.length', 2)
  })
})