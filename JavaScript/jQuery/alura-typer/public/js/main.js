var frase = $('.frase').text(); // Recebe o texto, ou seja, o que conteúdo dentro do campo com a classe respectiva 
var numPalavras = frase.split(" ").length; // Split quebra o texto nos espaços, tornando a String em uma Array / e Length verifica o tamanho 
var tamanhoFrase = $('#tamanho-frase');
tamanhoFrase.text(numPalavras); // o text coloca o valor da variável no campo

var campo = $('.campo-digitacao');
campo.on('input', function(){ // isto é, quando for imputado dados no campo executa a função( que neste caso é anónima )
    
    var conteudo = campo.val(); // 

    var qtdCaracteres = conteudo.length;
    $('#contador-caracteres').text(qtdCaracteres);

    var qtdPalavras = conteudo.split(/\S+/).length - 1; // (Uma Regex que busca por espaços/ para que os espaços não sejam contabilizados).
    $('#contador-palavras').text(qtdPalavras);
    
});

var tempoRestante = $('#tempo-digitacao').text();
campo.one('focus', function(){// "focus" quando ganha FOCO, inverso de blur()
    //"one" escuta o evento apenas UMA VEZ
    var cronometroID = setInterval(function(){
        tempoRestante--;
        $('#tempo-digitacao').text(tempoRestante);
        if(tempoRestante < 1){
            campo.attr("disabled", true);
            clearInterval(cronometroID)
        }
    },1000);   
});