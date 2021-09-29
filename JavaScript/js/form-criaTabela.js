var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //Muda o evento padrão de "addEventListener"
    // que neste caso é o fato de sempre que o botão é clicado 
    // a página recarrega automaticamente dando um clear, ou seja, limpando a tela e apagando o item adicionado
    console.log("Fui clicado!");

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // Cria linha da tabela
    var pacienteTr = document.createElement("tr");

    //Cria "td" célula da tabela
    var tdNome = document.createElement("td"); 
    var tdPeso = document.createElement("td");
    var tdAltura = document.createElement("td");
    var tdGordura = document.createElement("td");


    // Recebe o CONTEÚDO DE TEXTO - Por se tratar de uma variável com tag
    // é necessário o uso do textContent
    tdNome.textContent = nome; 
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;


    pacienteTr.appendChild(tdNome);
    pacienteTr.appendChild(tdPeso);
    pacienteTr.appendChild(tdAltura);
    pacienteTr.appendChild(tdGordura);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


});