describe('User Onboarding', () => {
  it('can navigate to the site', () => {
    const email = Cypress.env('EMAIL')
    const password = Cypress.env('PASSWORD')
    
    cy.visit('https://app.dailybot.com/')
      .contains('Log in')
      .should('be.visible')
      
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
  })
})