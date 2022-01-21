// 14.01.22 Create new ticket(tusk).js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Ticket', function () {
    it('Create sroty', function () {
        cy.viewport(1500, 1000)
        cy.visit('https://devmates-frontend-rlj79.ondigitalocean.app/dashboard')
        cy.get('button[class="styles_button_create_ticket__1MvrV btn btn-primary"]').click()
        cy.get('select[name="type"]').select('Task')
        cy.get('input[name="title"]').type('Testtask')
        cy.get('label[class="form-label styles_label__3vmqo form-label"]').click()
        cy.get('input[type="range"]').as('range').invoke('val', 3).trigger('change', 'center')
        cy.get('button[type="submit"]').click()
        cy.get('div[class="styles_editor__2kAYR rdw-editor-main"]').eq(0).type('Test1234567')
        cy.get('div[class="styles_editor__2kAYR rdw-editor-main"]').eq(1).type('qwertyTest')
        cy.get('button[class="styles_button_primary___qdW0 btn btn-primary"]').click()
        cy.get('div[class="styles_editor__2kAYR rdw-editor-main"]').type('Test1234567')
        cy.get('input[type="text"]').type('testlink.com')
        cy.get('button[class="styles_button_primary___qdW0 btn btn-primary"]').click()
        cy.get('button[class="styles_button_primary__1iw-l btn btn-primary"]').click()
        cy.contains("Dashboard")
    })
})