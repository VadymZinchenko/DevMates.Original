
// firsttest.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Login', function () {
    it('Sign in (Remember me)', function () {
        cy.viewport(1440,900)
        cy.visit('https://devmates-frontend-rlj79.ondigitalocean.app/')
     cy.contains("Login here").click()
        cy.get('input[type="text"]').type('zinchenko.qawork@gmail.com')
        cy.get('input[type="password"]').type('pass1234')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
cy.contains("Dashboard")
    })
})
