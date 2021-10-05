
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains the header', ()=>{
            cy.get('#my-header').should('be.visible');
        });
    });
});