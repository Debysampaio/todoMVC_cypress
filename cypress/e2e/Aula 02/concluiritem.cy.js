
import telaInicial from '../../support/pageObjects/tela-inicial.page'


describe('Concluir  itens na minha lista de ToDO', () => {
   /**
    * DADO - BEFORE - ANTES DO PRIMEIRO TESTE
    * BEFORE EACH - ANTES DE CADA TESTE
    */

    beforeEach(() => {
       cy.visit('/')          
        var todoItens = ['Maça', 'Banana', 'Cenoura']
        
        todoItens.forEach(function(item,indice,array){
            telaInicial.inputText(item)
        })
    });

    it('Concluir um item da lista ToDo', () => {
        telaInicial.concluirItem()
    });
   
});