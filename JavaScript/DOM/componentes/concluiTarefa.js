const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir'; // coloca nome no botão
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;// retorna o botão para usa-lo dentro da "li"
}

const concluirTarefa = (evento) => {

    const botao = evento.target; // target/alvo busca exatamente quem foi clicado
    const tarefaCompleta = botao.parentElement;// sobe para o pai
   
    tarefaCompleta.classList.toggle('done')
    console.log('fui clicado');
    // da o efeito de rabisco após o click no botão concluir
    // toggle devolve um boleano, ou seja, no click retorna TRUE, logo, ADICIONA a classe
    // se clicado novamente ele devolve FALSE, logo, REMOVE a classe
}

export default BotaoConclui