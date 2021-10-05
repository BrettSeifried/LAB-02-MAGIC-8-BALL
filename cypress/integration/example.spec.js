
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains the data table', ()=>{
            cy.get('#data').should('be.visible');
        });
    });
});