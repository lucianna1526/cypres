import acessaModuloCompras from '../AcessaModuloCompras'
class requisicaoValidaCamposObrigatorios {
    ReqvalidaCampos(){
        describe('Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios', ()=> {
            it('Valida campos obrigátorios', () =>{
                acessaModuloCompras.acessarCompras();
                cy.wait(5000);
                cy.get('button[nat="botaoSideMenu"]').click();
                cy.get('input[nat="buscaMenuVertical"]').type('Requisição de compras').click().type('{enter}');
                cy.wait(1000)
                cy.get('[nat="cadastroRequisicaoComprasCrudSalvar"]').click();
           });
        });
    }
}
export default new requisicaoValidaCamposObrigatorios();


