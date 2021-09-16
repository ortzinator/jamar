describe('policy', () => {
    before(() => {
        cy.refreshDatabase().seed();
    });

    context('user is a manager', () => {
        beforeEach(() => {
            cy.login({ email: 'manager@jamar.com' });
        });

        it('can change the selected agent', () => {
            cy.create(
                'App\\Models\\Policy',
                {
                    number: 'Testing 1234ABC'
                },
                ['agent']
            ).then((policy) => {
                cy.visit(`/policies/${policy.id}/edit`);
                cy.get('#agent').select('2');
                cy.contains('button', 'Update policy').click();
                cy.contains('Policy updated');

                cy.visit(`/policies/${policy.id}/edit`);
                cy.get('#agent').should('have.value', 2);
            });
        });
    });
});
