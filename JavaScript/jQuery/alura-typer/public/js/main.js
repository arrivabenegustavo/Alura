
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
                campo.attr("disabled", true); // Desabilita o campo
                clearInterval(cronometroID); // Para a contagem 
            }
        },1000); // Segundo parâmetro da função "setInterval" em mili-segundos, que neste caso representa 1 segundo  
    });
}



function reiniciaJogo(){
    campo.attr("disabled", false); // desabilita o campo para digitação
    campo.val(""); // limpa o conteúdo do campo
    $('#contador-palavras').text('0'); 
    $('#contador-caracteres').text('0');
    $('#tempo-digitacao').text(tempoInicial); // recebe o conteúdo do campo, que neste caso é 5
    iniciaCronometro();
}
