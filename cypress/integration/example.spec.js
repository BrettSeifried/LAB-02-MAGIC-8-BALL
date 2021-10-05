
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

describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains button', ()=>{
            cy.get('#submit').click();
        });
    });
});


describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains button', ()=>{
            cy.get('#submit1').click();
        });
    });
});

describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains button', ()=>{
            cy.get('#submit2').click();
        });
    });
});

describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains button', ()=>{
            cy.get('#submit3').click();
        });
    });
});