// troque o link abaixo pelo link que você copiou na publicação do Google Script
const linkGoogleScript = 'https://script.google.com/macros/s/AbCdEfGhIjKlMnOpQrStUVwXyZ-0123456789/exec';

function enviarDadosParaPlanilha() {

  // use o metodo fetch para chamar o link do google script
  fetch(linkGoogleScript, {

    method: 'post', // metodo POST sempre

    // passe os parametros abaixo para que o google Script possa inserir os dados corretamente
    body: JSON.stringify({
      link: 'cole aqui o link completo da sua planilha',
      pagina: 'nome da pagina que receberá os dados',
      requisicao: 'enviar',// tipo de acesso ao google script queremos usar o metodo enviar
      informacoes: [0, 1, 2, 3]// os dados devem ser enviados em um array, cada posição será colado em uma coluna
    }),

  })
    .then((dados) => dados.json()) // acesse json do retorno
    .then((dados) => finalizar(dados)); // em caso re erro retornara a mensagem de erro, e se estiver tudo ok, retorna uma mensagem de sucesso


};


function finalizar(dados){
  console.log(dados)
  //função chamada para finalizar e saber se deu tudo certo
}






function puxarDadosDaPlanilha() {

  // use o metodo fetch para chamar o link do google script
  fetch(linkGoogleScript, {

    method: 'post', // metodo POST sempre

    // passe os parametros abaixo para que o google Script possa inserir os dados corretamente
    body: JSON.stringify({
      link: 'cole aqui o link completo da sua planilha',
      pagina: 'nome da pagina que voce quer pegar os dados',
      celulas:'A1:Z10',//de onde até onde você quer pegar os dados da pagina em questão
      requisicao: 'requisitar',// tipo de acesso ao google script queremos usar o metodo requisitar
    }),

  })
    .then((dados) => dados.json()) // acesse json do retorno
    .then((dados) => verificarDados(dados)); // chame a função que irá validar, filtrar, e verificar seus dados

};


function verificarDados(dados){
  console.log(dados)
// função para tratar os dados
}
