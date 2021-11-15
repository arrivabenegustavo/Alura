const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deleta'

    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target
    const tarefa = botaoDeleta.parentElement
    
    tarefa.remove()
}

export default BotaoDeleta