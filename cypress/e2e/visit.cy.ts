describe('User Onboarding', () => {
    it('can navigate to the site', () => {
        cy.visit("https://app.dailybot.com/").contains('Log in').should("be.visible")
    })
  })
