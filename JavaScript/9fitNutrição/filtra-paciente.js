var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    //console.log(this.value)// ou campoFiltro.value
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function(paciente){
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        console.log(nome)



    });





});