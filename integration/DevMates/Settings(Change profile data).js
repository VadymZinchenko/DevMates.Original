// Settings(Change profile data).js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Change Profile data', function () {
    it('Change', function () {
        cy.viewport(1500, 1000)
        cy.visit('https://devmates-frontend-rlj79.ondigitalocean.app/settings')
        cy.get('input[name="first_name"]').type('{selectall}{backspace}')
        cy.get('input[name="first_name"]').type('TestData')
        cy.get('input[name="last_name"]').type('{selectall}{backspace}')
        cy.get('input[name=last_name]').type('Testenko')
        cy.get('input[name="email"]').type('{selectall}{backspace}')
        cy.get('input[name="email"]').type('zinchenko.qawork@gmail.com')
        cy.get('input[name="currentPassword"]').type('pass1234')
        cy.get('input[name="newPassword"]').type('Pass.1234')
        cy.get('input[name="confirmPassword"]').type('Pass.1234')
        cy.get('button[type="submit"]').click()
        cy.contains('The settings have been saved.')
    })
})