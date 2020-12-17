// Set up tests that will...




// tests go here
describe('User onboarding app', () => {
    // here go our consts

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const tosBox = () => cy.get('input[type="checkbox"]')
    const submitButton = () => cy.get('.submit')
    const errorMessages = () => cy.get('.errors ')

    // here goes the code we want running before the tests start
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('sanity test to make sure tests work', () => {
        expect(1+2).to.equal(3);
    });
    //  Get the Name input and type a name in it.
    //  Use an assertion to check if the text inputted contains the name you provided
    //  (Hint: use the .should assertion)
    it('typing into the name input', () => {
        nameInput()
        .should('have.value', '')
        .type('Mr. Potatohead')
        .should('have.value', 'Mr. Potatohead')
    })
    //  Get the Email input and type an email address in it
    it('typing into the email input', () => {
        emailInput()
        .should('have.value', '')
        .type('bigpotato@pixar.com')
        .should('have.value', 'bigpotato@pixar.com')
    })
    //  Get the password input and type a password in it
    it('typing into the password input', () => {
        passwordInput()
        .should('have.value', '')
        .type('il0vepotatoes')
        .should('have.value', 'il0vepotatoes')
    })
    //  Set up a test that will check to see if a user can check the terms of service box
    it('checking the terms of service box', () => {
        tosBox().click()
    })
    //  Check to see if a user can submit the form data
    it('seeing if user can submit form', () => {
        nameInput()
        .should('have.value', '')
        .type('Mr. Potatohead')
        .should('have.value', 'Mr. Potatohead')
        emailInput()
        .should('have.value', '')
        .type('bigpotato@pixar.com')
        .should('have.value', 'bigpotato@pixar.com')
        passwordInput()
        .should('have.value', '')
        .type('il0vepotatoes')
        .should('have.value', 'il0vepotatoes')
        tosBox().click()
        submitButton()
        .should('not.be.disabled')
        .click()
    })
    // //  Check for form validation if an input is left empty
    // it('getting error messages if the inputs are empty', () => {
    //     (emailInput() && passwordInput() && nameInput()).should('have.value', '')
    //     emailInput().type('adkj')
    //     nameInput().type('f')
    //     errorMessages()
    //     .should('not.be.disabled')
    // })
})