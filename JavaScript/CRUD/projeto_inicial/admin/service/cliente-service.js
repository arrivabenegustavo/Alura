const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>`

    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

const listaClientes = () => {
    return fetch('http://localhost:3000/profile') // Retorna uma promisse (promessa)
    .then(resposta => {
        return resposta.json() // Por retornar em texto, é necessário a conversão para objeto JSON
    })
}

listaClientes()
.then(data => {
    data.forEach(element => { // cria nova linha a cada cliente vindo da PROMISSE
        tabela.appendChild(criaNovaLinha(element.nome, element.email))
        
    })
})

