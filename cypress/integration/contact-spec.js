describe('contacts', () => {
    before(() => {
        cy.refreshDatabase().seed();
    });

    context('user is a manager', () => {
        beforeEach(() => {
            cy.login({ email: 'manager@jamar.com' });
        });

        it('can edit contacts', () => {
            cy.visit('/contacts/1/edit');
            cy.get('#address').invoke('val').should('not.be.empty');
        });
    });
});
