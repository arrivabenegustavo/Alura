import BotaoConclui from "./componentes/concluiTarefa.js"
import BotaoDeleta from "./componentes/deletaTarefa.js"

const criarTarefa = (evento) => { 

    evento.preventDefault() //evita o comportamento padrão do formulário
    
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li') // cria item da lista
    tarefa.classList.add('task') //adiciona a classe para uso da estilização do CSS
    const conteudo = `<p class="content">${valor}</p>` // cria um novo parágrafo no formulário
    
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)//  Como se trata de "li" que é filha de "ul" Usamos appendChild por ser um elemento filho
    input.value = " " // limpa o input
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)







