describe('An example test', () => {
    it('should visit', () => {
        cy.visit('https://demo.guru99.com/test/newtours/');
        cy.wait(10000);
        cy.get("input[name='userName']").click();
        cy.get("input[name='userName']").type('tutorial');
        cy.get("input[name='password']").click();
        cy.get("input[name='password']").type('tutorial');
        cy.get("input[name='submit']").click();
        cy.wait(10000);
        cy.get("h3").should('be.visible')
            .and('have.text', 'Login Successfully');
        
    })
})