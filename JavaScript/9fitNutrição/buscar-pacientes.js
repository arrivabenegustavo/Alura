var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener('click', function(){
    console.log("buscando pacientes...")

    var xhr = new XMLHttpRequest();
    //"open" abre a coneção (TIPO DA CONEXÃO, "URL do endereço que será conectado")
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load",function(){ // Escuta quando os dados forem carregados
        var erroAjax = document.querySelector("#erro-ajax")
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel") // Deixa a mensagem de erro invisível
            var resposta = xhr.responseText; //"texto da resposta - Da acesso aos dados da resposta
            var pacientes = JSON.parse(resposta) // Transforma JSON que era uma String em uma Array

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);// Para cada paciente na Array, adiciona na tabela
        });
        }else{
            erroAjax.classList.remove("invisivel")//caso tenha erro na requisição a classe é removido e mensagem aparecerá
        }
        
        
    })

    xhr.send(); // Pega a Requisição e envia
})