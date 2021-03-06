var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhvalido = validaPeso(peso);
    var alturaEhvalida = validaAltura(altura);

    if(pesoEhvalido && alturaEhvalida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc
    }   
}

// refatorando o código para funções 
function calculaImc(peso, altura){
    var imc = 0;
    var imc = peso / (altura * altura);
    return imc.toFixed(2)
}

function validaPeso(peso){
    if(peso > 0 && peso < 400){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }else{
        return false
    }
}
