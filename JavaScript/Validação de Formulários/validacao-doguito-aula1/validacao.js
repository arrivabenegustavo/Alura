const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
})


function validaDataNascimento(input){
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    
    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    // Caso input seja inválido essa propriedade manda a mensagem de erro acima
    // ou seja, a mensagem aparece se o retorno do input ser falso
    input.setCustomValidity(mensagem)
}

function maiorQue18(data){
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() +18, data.getUTCFullMonth(), getUTCFullDate())
    //SOMA 18 no ano INPUTADO, para calcular se é maior ou menor que 18 ....se a SOMA for MAIOR que o ano ATUAL é menor que 18, senão é MAIOR

    return dataMais18 <= dataAtual
    //Se for menor quer dizer que é MAIOR de 18 e retorna TRUE senão retorna FALSE 

}

