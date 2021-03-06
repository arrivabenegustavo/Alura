var titulo = document.querySelector(".titulo");
titulo.textContent = "9fit Nutrição"; //Recebe o nome


// Estrutura de repetição para poder acessar a lista de pacientes através da classe
// e assim por acessar os dados e inserir o imc de cada paciente

// Primeiro, declaramos uma variável para receber a Array(lista) através do "querySelectAll" que traz todo conteúdo da classe
var pacientes = document.querySelectorAll(".paciente");

// Repetição iniciando com ZERO, até o tamanho da Array(lista), somando 1
for(var i = 0; i < pacientes.length; i++){

    // Para facilitar o acesso a cada item sem precisar mencionar a posição em cada momento que aparece "paciente"
    // basta declarar uma variável para receber a posição em casa iteração
    var paciente = pacientes[i];
     
    var tdNome = paciente.querySelector(".info-nome");
    var tdPeso = paciente.querySelector(".info-peso"); //traz a linha
    var tdAltura = paciente.querySelector(".info-altura"); //traz a linha
    var tdImc = paciente.querySelector(".info-imc"); // traz a linha

    var peso = tdPeso.textContent; // Traz o conteúdo/valor
    var altura = tdAltura.textContent; // Traz o conteúdo/valor

    //Para validar o calculo do IMC, caso atenda as condições abaixo
    var alturaValida = true;
    var pesoValido = true;

    if(peso <= 0 || peso >= 1000){
        pesoValido = false;
        tdPeso.textContent = "Peso inválido";
        //paciente.style.color = "red"; não é uma boa pratica manipular o estilo direto na linha
        // E sim o que foi feito abaixo, buscando a classe no CSS
        paciente.classList.add("paciente-invalido") 
    }
    if(altura <= 0 || altura >= 3){
        alturaValida = false;
        tdAltura.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido"); //Busca a classe no CSS - altera a cor da fonte na linha inteira
        //classList faz a leitura/busca da classe e "add" adiciona ao HTML estilizando o objeto PACIENTE
    }

    if(alturaValida && pesoValido){
        var imc =  peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);// duas casa decimais
    }else{
        tdImc.textContent = "Erro ao calcular";
    }
}

var botaoAdiciona = document.querySelector("#adicionar-paciente");
console.log(botaoAdiciona);
botaoAdiciona.addEventListener("click", function(event){
    event.preventDefault(); // Muda o evento padrão do addEventListener
    // que neste caso é o fato de sempre que o botão é clicado 
    // a página recarrega automaticamente dando um clear, ou seja, limpando a tela e apagando o item adicionado





})


