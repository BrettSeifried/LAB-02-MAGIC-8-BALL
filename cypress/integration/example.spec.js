
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains the body tag', ()=>{
            cy.get('head').should('be.visible');
        });
    });
});