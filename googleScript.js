/*

Crie um novo arquivo de script do google desvinculado de qualquer planilha.
No arquivo de script renomeie ele para o que voc?ê precisar
Apague tudo o que tiver dentro
Copie o código abaixo e cole

Clique em Implantar
em "executar como" selecione o seu email
em "quem pode acessar" selecione qualquer pessoa

clique em implantar, faça login com a sua conta e de as permissões

copie o link que aparece na parte de baixo começando com https://

*/


// colar este código no script do google script
function doPost(e) {

  ContentService.createTextOutput(JSON.stringify({ method: "POST", eventObject: e }))
    .setMimeType(ContentService.MimeType.JSON);
  const dados = JSON.parse(e.postData.contents);

  try {

    if (dados.requisicao == 'requisitar') {
      return ContentService.createTextOutput(JSON.stringify(
        SpreadsheetApp.openByUrl(dados.link).getSheetByName(dados.pagina).getRange(dados.celulas).getValues()
      ));

    } else if (dados.requisicao == 'enviar') {
      SpreadsheetApp.openByUrl(dados.link).getSheetByName(dados.pagina).appendRow(dados.informacoes)// o metodo appendRow insere uma nova linha na pagina com todos os dados enviados
      return ContentService.createTextOutput(JSON.stringify({ text: "sucesso" })).setMimeType(ContentService.MimeType.JSON);

    } else {
      return ContentService.createTextOutput(JSON.stringify({ text: "tipo de requisicao invalida" })).setMimeType(ContentService.MimeType.JSON);
    
    }

  } catch (erro) {
    return ContentService.createTextOutput(JSON.stringify({ erro: erro.message })).setMimeType(ContentService.MimeType.JSON);

  }

}

