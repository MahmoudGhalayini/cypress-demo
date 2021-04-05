/// <reference types="Cypress" />

context('Validation messages Tests', () => {
	beforeEach(() => {
		cy.visit('localhost:8080/#/');
	});

	it('Submit Simple form', () => {
		cy.get('#username').type('testing name');
		cy.get('.invalid-feedback').should(
			'contain',
			'The Username field may contain alpha-numeric characters as well as dashes and underscores'
		);

		cy.get('#username')
			.clear()
			.type('username');
		cy.get('#full-name').type('fullName');

		cy.get('#submit').click();

		cy.on('window:alert', (txt) => {
			expect(txt).to.contains('Done');
		});
	});
});
