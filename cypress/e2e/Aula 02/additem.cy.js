
import telaInicial from '../../support/pageObjects/tela-inicial.page'


describe('Adcionar itens da minha lista de ToDO', () => {
   /**
    * DADO - BEFORE - ANTES DO PRIMEIRO TESTE
    * BEFORE EACH - ANTES DE CADA TESTE
    */

    beforeEach(() => {
       cy.visit('/')
    });

    // forma nao tao performatica porem que tambem da certo//
    it.skip('Adcionar um item na lista', () => {
        telaInicial.inputText('Dado1')
        telaInicial.inputText('Dado2')
        telaInicial.inputText('Dado3')
        
    });

    it('Adcionar mais de um item a lista', () => {
        var todoItens = ['Maça', 'Banana', 'Cenoura']
        todoItens.forEach(function(item,indice,array){
            telaInicial.inputText(item)
        })
    });
   
});