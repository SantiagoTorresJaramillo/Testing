const email = Cypress.env('EMAIL')

describe('User Onboarding', () => {
  it('can navigate to the site', () => {
    cy.log(email)
    console.log(email)
    cy.visit('https://app.dailybot.com/')
      .contains('Log in')
      .should('be.visible')
    cy.get('#input-email').type(email)
  })
})
