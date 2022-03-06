describe('Swag Labs Login Functionality', () => {
    beforeEach(() => {
        const url = "https://www.saucedemo.com/";
        cy.visit(url)
    })

    it('Login As a Standard User should allow you in', () => {

        cy.get('#user-name')
        .type('standard_user')

        cy.get('#password')
        .type('secret_sauce')

        cy.get('#login-button')
        .click()

        cy.get('#header_container > div.header_secondary_container > span')
        .should('contain.text', 'Products')
    })

    it('Blocked Login User cannot access sign', () => {
        cy.get('#user-name')
        .type('locked_out_user')

        cy.get('#password')
        .type('secret_sauce')

        cy.get('#login-button')
        .click()

        cy.get('#login_button_container > div > form > div.error-message-container.error > h3')
        .should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('', () => {
        
    });
})

describe('', () => {
    it('', () => {
        cy.get('')
        .type();

        cy.get('')
        .click();;
    });
});