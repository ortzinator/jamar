describe('login', () => {
    before(() => {
        cy.refreshDatabase().seed();
    });

    context('with invalid credentials', () => {
        it('requires a valid email address', () => {
            cy.visit('/login');

            cy.contains('button', 'Log in').click();

            cy.get('input[type="email"]').then(($input) => {
                expect($input[0].validationMessage).to.eq('Please fill out this field.'); // <input type="email" />
            });
        });
        it('requires a password', () => {
            cy.visit('/login');

            cy.contains('button', 'Log in').click();

            cy.get('[type="email"]').type('ortzinator@gmail.com');
            cy.get('[type="password"]').then(($input) => {
                expect($input[0].validationMessage).to.eq('Please fill out this field.');
            });
        });
    });

    context('with valid credentials', () => {
        it('works', () => {
            cy.visit('/login');
            cy.get('[type="email"]').type('ortzinator@gmail.com');
            cy.get('[type="password"]').type('password');
            cy.contains('button', 'Log in').click();
            cy.contains('Dashboard');
        });

        it('logs out', () => {
            cy.login({ email: 'ortzinator@gmail.com' });
            cy.visit('/').contains('button', 'Brian Ortiz').click();
            cy.contains('button', 'Log Out').click();
            cy.location('pathname').should('equal', '/login');
        });
    });
});
