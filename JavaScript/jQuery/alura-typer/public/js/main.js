
//$(document).ready(function()) é o mesmo que abaixo
$(function(){ // Assim que a pagina for carregada, executa o que estiver aqui dentro
    atualizaTamanhoFrase();
    iniciaCronometro();
    iniciaContadores();
    $('#botao-reiniciar').on("click", reiniciaJogo);
    // ou $('#botao-reiniciar').click(reiniciaJogo)
    
});

var tempoInicial = $('#tempo-digitacao').text();
var campo = $('.campo-digitacao');


function atualizaTamanhoFrase(){
    var frase = $('.frase').text(); // Recebe o texto, ou seja, o que conteúdo dentro do campo com a classe respectiva 
    var numPalavras = frase.split(" ").length; // Split quebra o texto nos espaços, tornando a String em uma Array / e Length verifica o tamanho 
    var tamanhoFrase = $('#tamanho-frase');
    tamanhoFrase.text(numPalavras); // o text coloca o valor da variável no campo
};


function iniciaContadores(){
    campo.on('input', function(){ // isto é, quando for imputado dados no campo executa a função( que neste caso é anónima )
    
        var conteudo = campo.val(); // 
        var qtdCaracteres = conteudo.length;
        $('#contador-caracteres').text(qtdCaracteres);
    
        var qtdPalavras = conteudo.split(/\S+/).length - 1; // (Uma Regex que busca por espaços/ para que os espaços não sejam contabilizados).
        $('#contador-palavras').text(qtdPalavras);
        
    });
};


function iniciaCronometro(){
    var tempoRestante = $('#tempo-digitacao').text();
    campo.one('focus', function(){// "focus" quando ganha FOCO, inverso de blur()
    //"one" escuta o evento apenas UMA VEZ
        var cronometroID = setInterval(function(){ // "setInterval" -> para que algo seja feito em um determinado tempo
            tempoRestante--;
            $('#tempo-digitacao').text(tempoRestante);
            if(tempoRestante < 1){
                clearInterval(cronometroID); // Para a contagem 
                finalizaJogo();
                
            }
        },1000); // Segundo parâmetro da função "setInterval" em mili-segundos, que neste caso representa 1 segundo  
    });
}

var frase = $('.frase').text();
campo.on('input',function(){
    var digitado = campo.val();
    var compara = frase.substr(0, digitado.length); // Pega o que está sendo digitado na primeira posição até o tamanho, ou seja, enquanto estiver digitando, compara com a frase
    // Ou var digitouCorreto = frase.startsWith(digitado) disponível a partir do ECMA Script 6
    // if(digitouCorreto){}
    if(digitado == compara){
        campo.addClass('borda-verde');
        campo.removeClass('borda-vermelha')
    }else{
        campo.addClass('borda-vermelha');
        campo.removeClass('borda-verde');
    }
});

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

function removeLinha(){
    event.preventDefault(); // previne o evento padrão da tag <a>, 
    //pois toda vez que clicamos no botão, a pagina é redirecionada para o topo por padrão
    // com o uso "event.preventDefault" evita o padrão e não altera o comportamento da página
    $(this).parent().parent().remove(); 
    // This -> referência exatamente o elemento clicado
    // parent -> sobe para o pai, ou seja, a cada parent sobe o nível
};
    


function finalizaJogo(){
    campo.attr("disabled", true); // attr('atributo', 'valor') desabilita o campo
    campo.addClass('campo-desativado'); // coloca cor no campo
    inserePlacar();
}


function reiniciaJogo(){
    campo.attr("disabled", false); //attr('atributo', 'valor') Habilita o campo para digitação
    campo.val(""); // limpa o conteúdo do campo
    $('#contador-palavras').text('0'); 
    $('#contador-caracteres').text('0');
    $('#tempo-digitacao').text(tempoInicial); // recebe o conteúdo do campo, que neste caso é 5
    iniciaCronometro();
    campo.removeClass('campo-desativado'); // tira cor do campo
    campo.removeClass('borda-vermelha');
    campo.removeClass('borda-verde');

};
