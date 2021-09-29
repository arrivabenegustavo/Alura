var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //Muda o evento padrão de "addEventListener"
    // que neste caso é o fato de sempre que o botão é clicado 
    // a página recarrega automaticamente dando um clear, ou seja, limpando a tela e apagando o item adicionado
    console.log("Fui clicado!");

    // Busca o formulário através da classe
    var form = document.querySelector("#form-adiciona");
    var paciente = extraiDadosDoFormulario(form)
    
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    //Se a lista estiver fazia, não houve erro, caso contrário mostrará a mensagem de erro
    if(erros.length > 0){
        var erro = document.querySelector(".mensagem-erro");
        erro.textContent = erros
        return;
    }
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset(); // Limpa o formulário após paciente inserido, para adicionar outro  

});


// funções


// Quando trata-se de característica de uma propriedade, assim podemos transformar em um objeto
// Neste caso é um paciente(propriedade) com as características de nome, peso e etc
function extraiDadosDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Cria "td" célula da tabela
    var tdNome = montaTd(paciente.nome, "info-nome");
    var tdPeso = montaTd(paciente.peso, "info-peso");
    var tdAltura = montaTd(paciente.altura, "info-altura");
    var tdImc = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(tdNome);
    pacienteTr.appendChild(tdPeso);
    pacienteTr.appendChild(tdAltura);
    pacienteTr.appendChild(tdImc)

    return pacienteTr;
}

//chamada dentro da função "montaTr"
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    
    var erros = []

    if(!validaPeso(paciente.peso)){
       erros.push("Peso inválido!");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida")
    }
    return erros
}