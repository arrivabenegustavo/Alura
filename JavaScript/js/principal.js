var titulo = document.querySelector(".titulo");

titulo.textContent = "9fit Nutrição";

// calculando imc

var paciente = document.querySelector("#primeiro-paciente");

var tdpeso = paciente.querySelector(".info-peso"); //traz a linha
var peso = tdpeso.textContent; // Traz o conteúdo/valor

var tdaltura = paciente.querySelector(".info-altura"); //traz a linha
var altura = tdaltura.textContent; // Traz o conteúdo/valor

var imc =  peso / (altura * altura);

var tdimc = paciente.querySelector(".info-imc"); // traz a linha
tdimc.textContent = imc // Adicionando o imc no HTML, ou seja, o conteúdo recebe um novo valor

var alturaValida = true;
var pesoValido = true;

if(peso <= 0 || peso >= 1000){
    pesoValido = false;
    tdpeso.textContent = "Peso inválido"
}
if(altura <= 0 || altura >= 3){
    alturaValida = false;
    tdaltura.textContent = "Altura inválida"
}

if(alturaValida && pesoValido){
    var imc =  peso / (altura * altura);
}else{
    tdimc.textContent = "Erro ao calcular"
}