var frase = $('.frase').text()
var numPalavras = frase.split(" ").length; // Split quebra o texto nos espaços, tornando a String em uma Array / e Length verifica o tamanho 
var tamanhoFrase = $('#numeroDePalavras'); // Recebe o campo

tamanhoFrase.text(numPalavras); //Passa o conteúdo da variável "numPalavra" para o campo 

var campo = $('.campo-digitacao');
campo.on("input", function(){
    var conteudo = campo.val();
    console.log(conteudo)

    var contaCaracteres = conteudo.length;
    $('.#contador-caracteres').text(contaCaracteres);

    var contaPalavras = conteudo.split(/\S+/).length -1;
    $('#contador-palavras').text(contaPalavras);


});