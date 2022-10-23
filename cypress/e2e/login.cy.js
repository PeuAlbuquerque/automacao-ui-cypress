/// <reference types="cypress" />

context('Funcionalidade Login', ()=>{

    it('Deve fazer login com sucesso', ()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')       
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').should('contain', 'Detalhes da conta')
    })

    it  ('Deve exibir uma mensagem de erro ao inserir um usuário  inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')        
        cy.get('#username').type('ano_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')       
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    });
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('seste.com')       
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    });
})