
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains button', ()=>{
            cy.get('#submit').should('be.visible');
        });
    });
});