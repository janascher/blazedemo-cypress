describe('Select Product', () => {
  beforeEach('Accessing the registration page', () => {
    cy.visit('/index.php');
    cy.get('body > div.jumbotron > div > h1').should(
      'have.text',
      'Welcome to the Simple Travel Agency!'
    );
  });

  it('Select a Passage', () => {
    // Página inicial
    cy.get('body > div.container > form > select:nth-child(1)')
      .select('Boston')
      .invoke('val')
      .should('deep.equal', 'Boston');
    cy.get('body > div.container > form > select:nth-child(4)')
      .select('London')
      .invoke('val')
      .should('deep.equal', 'London');
    cy.get('input.btn.btn-primary').should('be.visible').click();

    // Página dos voos
    cy.get('body > div.container > h3').should('have.text', 'Flights from Boston to London: ');

    cy.get('table thead tr').within(() => {
      cy.contains('th', 'Departs: Boston').should('exist');
      cy.contains('th', 'Arrives: London').should('exist');
    });

    cy.contains('td', '12')
      .parent('tr')
      .within(() => {
        cy.get('td').eq(2).contains('Virgin America');
        cy.get('td').eq(3).contains('11:23 AM');
        cy.get('td').eq(4).contains('1:45 PM');
        cy.get('td').eq(5).contains('$765.32');

        cy.get('input.btn.btn-small[value="Choose This Flight"]').click();
      });

    // Página de compra
    cy.get('body > div.container > h2').should(
      'have.text',
      'Your flight from TLV to SFO has been reserved.'
    );
    cy.get('#inputName').type('Test Cypress');
    cy.get('#address').type('Avenida Testando, 00');
    cy.get('#city').type('Cidade de Teste');
    cy.get('#state').type('Estado de Teste');
    cy.get('#zipCode').type('12345');
    cy.get('#cardType').select('American Express').invoke('val').should('deep.equal', 'amex');
    cy.get('#creditCardNumber').type('1111222233334444');
    cy.get('#creditCardMonth').type('12');
    cy.get('#creditCardYear').type('2025');
    cy.get('#nameOnCard').type('Teste Cypress');
    cy.get('input[value="Purchase Flight"]').should('be.visible').click();

    // Página que verifica se a compra foi bem-sucedida
    cy.get('body > div.container > div > h1').should(
      'have.text',
      'Thank you for your purchase today!'
    );
  });
});
