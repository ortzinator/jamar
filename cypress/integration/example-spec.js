it('works', () => {
    cy.visit('/');
    expect(2 + 2).to.equal(4);
});
