//insere o placar na linha
function inserePlacar(){
    var corpoTabela = $('.placar').find('tbody');// find() acha a "tbody" dentro da ".placar"
    var usuario = "Gustavo";
    var numPalavras = $('#contador-palavras').text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find('.botao-remover').on('click', removeLinha); //Acha a classe para atrelar um evento 

    corpoTabela.prepend(linha); // Adiciona sempre na primeira linha


};

//Cria a linha para tabela placar 
// Dessa forma os elementos são criado com todas propriedades html
function novaLinha(usuario, numPalavras){
    var linha = $('<tr>');
    var colunaUsuario = $('<td>').text(usuario);
    var colunaPalavras = $('<td>').text(numPalavras);
    var colunaRemover = $('<td>');

    var link = $('<a>').addClass('botao-remover').attr('href','#'); // attr("atributo", "valor") -> adiciona atributo
    var icone = $('<i>').addClass('small').addClass('material-icons').text('delete');

    link.append(icone); // adiciona o ícone dentro de link (<a> <i></i> </a>)
    colunaRemover.append(link); // adiciona link dentro da coluna (<td> <a> <i></i> </a> </td>)

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha; 
};

// Referente a linha do placar
function removeLinha(){
    event.preventDefault(); // previne o evento padrão da tag <a>, 
    //pois toda vez que clicamos no botão, a pagina é redirecionada para o topo por padrão
    // com o uso "event.preventDefault" evita o padrão e não altera o comportamento da página
    $(this).parent().parent().remove(); 
    // This -> referência exatamente o elemento clicado
    // parent -> sobe para o pai, ou seja, a cada parent sobe o nível
};