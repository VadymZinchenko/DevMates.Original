// Edit user.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Edit User', function () {
    it('Edit', function () {
        cy.viewport(1500, 1000)
        cy.visit('https://devmates-frontend-rlj79.ondigitalocean.app/users_list')
        cy.get('svg[class="styles_edit_icon__1ByYP iconify iconify--bx"]').eq(0).click()
        cy.wait(1500)
        cy.get('select[name="role"]').select('Moderator')
        cy.wait(500)
        cy.get('input[name="email"]').type('{selectall}{backspace}')
        cy.get('input[name="email"]').type('zinchenko.qawork@gmail.com')
        cy.get('input[name="firstName"]').type('Test')
        cy.get('input[name="lastName"]').type('Testenko')
        cy.get('button[type="submit"]').click()
        cy.contains('Users List')
    })
})