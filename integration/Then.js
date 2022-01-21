// Then.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Ticket', function () {
    it('Create sroty', function () {
        cy.viewport(1500, 1000)
        cy.visit('https://devmates-frontend-rlj79.ondigitalocean.app/dashboard')
        const buttonCNT = cy.get('button[class="styles_button_create_ticket__1MvrV btn btn-primary"]')
        buttonCNT.click()
    })
})