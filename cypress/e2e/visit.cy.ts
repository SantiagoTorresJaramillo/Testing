const email = Cypress.env('EMAIL')
const password = Cypress.env('PASSWORD')

describe('User Onboarding', () => {
  it('can navigate to the site', () => {
    cy.log(email)
    console.log(email)
    cy.visit('https://app.dailybot.com/')
      .contains('Log in')
      .should('be.visible')
      
    cy.log(email)
    cy.log(password)
  })
})