// Add user(Global Admin).js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Add User', function () {
    it('Global Admin', function () {
        cy.viewport(1500, 1000)
        cy.visit('https://devmates-frontend-rlj79.ondigitalocean.app/users_list')
        cy.get('button[class="styles_button_add_user__3Gg9i btn btn-primary"]').click()
        cy.get('select[name="role"]').select('Global admin')
        cy.get('input[name="email"]').type('zinchenko.qawork@gmail.com')
        cy.get('input[name="firstName"]').type('Test')
        cy.get('input[name="lastName"]').type('Testenko')
        cy.get('button[type="submit"]').click()
        cy.contains('Users List')
    })
})
