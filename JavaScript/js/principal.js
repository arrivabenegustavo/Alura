var titulo = document.querySelector(".titulo");
titulo.textContent = "9fit Nutrição"; //Altera o nome


// Estrutura de repetição para poder acessar a lista de pacientes através da classe
// e assim por acessar os dados e inserir o imc de cada paciente

// Primeiro, declaramos uma variável para receber a Array(lista) através do "querySelectAll" que traz todo conteúdo da classe
var pacientes = document.querySelectorAll(".paciente");

// Repetição iniciando com ZERO, até o tamanho da Array(lista), somando 1
for(var i = 0; pacientes.length; i++){

    // Para facilitar o acesso a cada item sem precisar mencionar a posição em cada momento que aparece "paciente"
    // basta declarar uma variável para receber a posição em casa iteração
    var paciente = pacientes[i];
                    
    var tdpeso = paciente.querySelector(".info-peso"); //traz a linha
    var peso = tdpeso.textContent; // Traz o conteúdo/valor

    var tdaltura = paciente.querySelector(".info-altura"); //traz a linha
    var altura = tdaltura.textContent; // Traz o conteúdo/valor

    var imc =  peso / (altura * altura);

    var tdimc = paciente.querySelector(".info-imc"); // traz a linha
    tdimc.textContent = imc // Adicionando o imc no HTML, ou seja, o conteúdo recebe um novo valor


    // Para validar o calculo do IMC, caso atenda as condições abaixo
    var alturaValida = true;
    var pesoValido = true;

    if(peso <= 0 || peso >= 1000){
        pesoValido = false;
        tdpeso.textContent = "Peso inválido";
        //paciente.style.color = "red"; não é uma boa pratica manipular o estilo direto na linha
        // E sim o que foi feito abaixo, buscando a classe no CSS
        paciente.classList.add("paciente-invalido") 
    }
    if(altura <= 0 || altura >= 3){
        alturaValida = false;
        tdaltura.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido"); //Busca a classe no CSS - altera a cor da fonte
    }

    if(alturaValida && pesoValido){
        var imc =  peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);// duas casa decimais
    }else{
        tdimc.textContent = "Erro ao calcular";
    }
}
//  Evento com mouse
// Necessário buscar o botão no html através do "document", para depois acrescentar a função 
var botaoAdicionar = document.querySelector("#adicionar-paciente");

