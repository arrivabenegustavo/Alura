var frase = $('.frase').text(); // Recebe o texto, ou seja, o que conteúdo dentro do campo com a classe respectiva 
var numPalavras = frase.split(" ").length; // Split quebra o texto nos espaços, tornando a String em uma Array / e Length verifica o tamanho 
var tamanhoFrase = $('#tamanho-frase');
tamanhoFrase.text(numPalavras); // o text coloca o valor da variável no campo
