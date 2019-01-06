// <refernce types="Cypress">

describe('Portfolio', () => {
	beforeEach(() => {
		cy.visit('http://www.kylestockmann.com');
	});
	it('Has title', () => {
		cy.contains("Hey, I'm Kyle Stockmann");
		cy.contains("Fullstack Developer");
	});
	it('Able to change views', () => {
		cy.get('.navbar-burger').click();
		cy.get('.projects').click();
		cy.contains("My Projects");
		cy.url().should('include', '/projects');
		cy.get('.navbar-burger').click();
		cy.get('.about').click();
		cy.contains("About me:");
		cy.url().should('include', '/about')
		cy.get('.navbar-burger').click();
		cy.get('.home').click();
	})
})