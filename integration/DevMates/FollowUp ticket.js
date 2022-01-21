// FollowUp ticket.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('FollowUp Ticket', function () {
    it('Create FollowUp ticket', function () {
        cy.viewport(1500, 1000)
        cy.visit('https://devmates-frontend-rlj79.ondigitalocean.app/dashboard')
        cy.get('svg[class="styles_arrow_tbody__AB5HA iconify iconify--ep"]').eq(0).click()
        cy.get('button[class="styles_button_add_ticket__2EDBJ btn btn-primary"]').click()
        cy.get('select[name="type"]').select('Bug')
        cy.get('input[type="text"]').type('test123')
        cy.get('input[role="progressbar"]').click('center',{ force: true})
        cy.get('button[type="submit"]').click()
        cy.get('div[class="styles_editor__2kAYR rdw-editor-main"]').eq(0).type('Test1234567')
        cy.get('textarea[class="styles_textarea__2GKTY form-control"]').type('Qwertytest')
        cy.get('div[class="styles_editor__2kAYR rdw-editor-main"]').eq(1).type('Test09876543212')
        cy.get('button[class="styles_button_primary___qdW0 btn btn-primary"]').click()
        cy.get('div[class="styles_editor__2kAYR rdw-editor-main"]').type('TestSteps')
        cy.get('textarea[class="styles_textarea__1MugM form-control"]').type('1.2.3.1')
        cy.get('input[placeholder="Please provide link to the source file if any."]').type('testlink.com')
        cy.get('button[class="styles_button_primary___qdW0 btn btn-primary"]').click()
        cy.get('button[class="styles_button_primary__1iw-l btn btn-primary"]').click()
        cy.contains("Dashboard")
    })
})