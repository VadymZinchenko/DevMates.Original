// Add user.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Add New User', function () {
    it('Admin role', function () {
        cy.viewport(1500, 1000)
        cy.visit('https://devmates-frontend-rlj79.ondigitalocean.app/users_list')
        cy.get('button[class="styles_button_add_user__3Gg9i btn btn-primary"]').click()
        cy.get('select[name="role"]').select('Admin')
        cy.get('input[name="email"]').type('zinchenko.qawork@gmail.com')
        cy.get('input[name="firstName"]').type('Test')
        cy.get('input[name="lastName"]').type('Testenko')
        cy.get('button[type="submit"]').click()
        cy.contains('Users List')
    })
})
describe('Add New User', function () {
    it('Approver role', function () {
        cy.viewport(1500, 1000)
        cy.visit('https://devmates-frontend-rlj79.ondigitalocean.app/users_list')
        cy.get('button[class="styles_button_add_user__3Gg9i btn btn-primary"]').click()
        cy.get('select[name="role"]').select('Approver')
        cy.get('input[name="email"]').type('zinchenko.qawork@gmail.com')
        cy.get('input[name="firstName"]').type('Test')
        cy.get('input[name="lastName"]').type('Testenko')
        cy.get('button[type="submit"]').click()
        cy.contains('Users List')
    })
})
describe('Add New User', function () {
    it('Client role', function () {
        cy.viewport(1500, 1000)
        cy.visit('https://devmates-frontend-rlj79.ondigitalocean.app/users_list')
        cy.get('button[class="styles_button_add_user__3Gg9i btn btn-primary"]').click()
        cy.get('select[name="role"]').select('Client')
        cy.get('input[name="email"]').type('zinchenko.qawork@gmail.com')
        cy.get('input[name="firstName"]').type('Test')
        cy.get('input[name="lastName"]').type('Testenko')
        cy.get('button[type="submit"]').click()
        cy.contains('Users List')
    })
})
describe('Add New User', function () {
    it('Global Admin role', function () {
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
describe('Add New User', function () {
    it('Moderator role', function () {
        cy.viewport(1500, 1000)
        cy.visit('https://devmates-frontend-rlj79.ondigitalocean.app/users_list')
        cy.get('button[class="styles_button_add_user__3Gg9i btn btn-primary"]').click()
        cy.get('select[name="role"]').select('Moderator')
        cy.get('input[name="email"]').type('zinchenko.qawork@gmail.com')
        cy.get('input[name="firstName"]').type('Test')
        cy.get('input[name="lastName"]').type('Testenko')
        cy.get('button[type="submit"]').click()
        cy.contains('Users List')
    })
})
describe('Edit User', function () {
    it('Edit user role', function () {
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