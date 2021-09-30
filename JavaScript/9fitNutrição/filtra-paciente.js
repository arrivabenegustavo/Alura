var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    console.log(this.value)// ou campoFiltro.value
    var pacientes = document.querySelectorAll(".paciente");

    //Se algo for digitado compara e deixa invisível o que for diferente
    if(this.value.length > 0){
        for( var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //RegExp busca letra por letra
            var expressao = new RegExp(this.value, "i")// "i"Case insensitive, isto é, procura letras minúsculas e maiúsculas
            if(expressao.test(nome)){ // se o caracteres na expressão for igual ao nome
                paciente.classList.remove("invisivel");  
            }else{
                paciente.classList.add("invisivel");
            }
        }
    }else{
        // Se nada for digitado, apaga a classe invisível e mostra a tabela novamente
        for( var i = 0; i < pacientes.length; i++){              
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel")
        }
    }
    

});