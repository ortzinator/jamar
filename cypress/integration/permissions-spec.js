describe('permissions', () => {
    before(() => {
        cy.refreshDatabase().seed();
    });

    context('user is an admin', () => {
        beforeEach(() => {
            cy.login({ email: 'ortzinator@gmail.com' });
        });
        it('can access the dashboard', () => {
            cy.visit('');
            cy.url().should('equal', `${Cypress.config().baseUrl}/dashboard`);
        });
        it('can access policies', () => {
            cy.visit('/policies').contains('h1', 'Policies');
        });
        it('can access contacts', () => {
            cy.visit('/contacts').contains('h1', 'Contacts');
        });
    });

    context('user has no permissions', () => {
        it('gets an error', () => {
            cy.login({ email: 'pat@startrek.com' });
            cy.visit('/dashboard').contains('You have not been assigned any roles yet.');
        });
    });
});
