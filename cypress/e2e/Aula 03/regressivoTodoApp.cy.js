import telaInicial from '../../support/pageObjects/tela-inicial.page'

describe('Regressivo ToDo App', () => {
    
    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        });
        
        it('Validar a area de label de input de dados', () => {
            telaInicial.validarInput('What needs to be done?')
        });
    });

    context('Validar a adição de itens', () => {
        beforeEach(() => {
            cy.visit('/')
        });
        it('Adcionar mais de um item a lista', () => {
            var todoItens = ['Maça', 'Banana', 'Cenoura']
            todoItens.forEach(function(item,indice,array){
                telaInicial.inputText(item)
            })

            /**
             * Validar que o contador é igual a 3 
             */
            telaInicial.validarContador(3)
        });

    });

    context('Validar a conclusão de itens', () => {
        beforeEach(() => {
            cy.visit('/')          
             var todoItens = ['Maça', 'Banana', 'Cenoura']
             todoItens.forEach(function(item,indice,array){
                 telaInicial.inputText(item)
             })
         });

         it('Concluir um item da lista ToDo', () => {
            telaInicial.concluirItem()
            telaInicial.validarContador(2)
            
        });
    });

    context('Validar o filtro da aplicação', () => {
        beforeEach(() => {
            cy.visit('/')          
             var todoItens = ['Maça', 'Banana', 'Cenoura']
             todoItens.forEach(function(item,indice,array){
                 telaInicial.inputText(item)
             })
             telaInicial.concluirItem()
         });

         it('Validar a lista de itens ativos', () => {
            telaInicial.filtrarItem('Active')
            telaInicial.validarSizeToDo(2)
         });

         it('Validar lista de itens concluidos', () => {
            telaInicial.filtrarItem('Completed')            
            telaInicial.validarSizeToDo(1)
         });
    });

    context('Validar a remoção de itens', () => {
        beforeEach(() => {
            cy.visit('/')          
             var todoItens = ['Maça', 'Banana', 'Cenoura']
             todoItens.forEach(function(item,indice,array){
                 telaInicial.inputText(item)
             })
         });
         it('Delação de um item da lista', () => {
            telaInicial.deletarItem()
            telaInicial.validarSizeToDo(2)
         });
    });


});