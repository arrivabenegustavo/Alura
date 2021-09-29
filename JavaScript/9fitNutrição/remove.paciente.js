// var pacientes = document.querySelectorAll(".paciente")

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove(); // "this" atrela quem sofreu o evento de duplo click
//     }) 
// }) // Neste caso, com o uso do "this", não conseguimos remover itens novos na tabela


// Removendo itens da tabela através do pai do evento
var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){
    if(event.target.tagName == 'TD'){ // Para não apagar os cabeçalhos
        event.target.parentNode.classList.add("fadeOut");//Busca class que tira as cores dos itens, 

        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500); //Faz com que tenha um deley de 0,5 segundos para remover a linha
}
})
//Ou seja, o uso do "target" remove o ALVO, isto é, exatamente o que foi clicado
// o que chamou o evento, ou seja, apaga apenas a célula onde clicou
// para que seja removido o PAI DO ALVO, ou seja, a linha(tr) que a célula(td) 
// usamos "parentNode"