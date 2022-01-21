// Settings(Change notifications settings).js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Change Notifications data', function () {
    it('Change Switchers position', function () {
        cy.viewport(1500, 1000)
        cy.visit('https://devmates-frontend-rlj79.ondigitalocean.app/settings')
        cy.get('input[id="1"]').eq('0').click()
        cy.get('input[id="3"]').eq('0').click()
        cy.get('input[id="4"]').eq('0').click()
        cy.get('input[id="5"]').eq('0').click()
        cy.get('button[class="styles_button__ahwTe btn btn-primary"]').eq('0').click()
        cy.contains('The settings have been saved.')
        cy.get('input[id="1"]').eq('1').click()
        cy.get('input[id="3"]').eq('1').click()
        cy.get('input[id="4"]').eq('1').click()
        cy.get('input[id="5"]').eq('1').click()
        cy.get('button[class="styles_button__ahwTe btn btn-primary"]').eq('1').click()
        cy.contains('The settings have been saved.')
    })
})
describe('Change All Profile data', function () {
    it('Change all profile Data', function () {
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