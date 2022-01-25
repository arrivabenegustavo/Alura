const btnPesquisarCEP = document.querySelector('#btnPesquisar');
btnPesquisarCEP.addEventListener('click', event =>{

    event.preventDefault(); // Cancela o comportamento padrão do botão

    const inputDoCep = document.querySelector('#cep');
    const valorDoCep = inputDoCep.value;
    const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;
    

    fetch(url).then(response => {
        return response.json(); // Retorna resposta em objeto JSON
        }).then(data => { // Verifica a resposta
        if(data.erro){
            alert('O CEP DIGITADO ESTÁ INVÁLIDO')
            return
        }
        atribuirCampos(data) // se CEP válido, envia os dados para preenchimento dos campos
    })
    
})



/*O fetch devolve uma promessa de que algo será retornado, essa promessa é chamada de Promisse. Essa promessa pode tanto ser boa, ter retornado os dados, quanto ter falhado por algum motivo - como no caso da conexão com o servidor cair.
Para ambas as situações precisamos fazer um tratamento. No caso, só vou tratar no caso de sucesso. Por isso, se for um sucesso, então (then) vamos pegar a resposta com as informações do CEP:*/

// fetch(url).then(response => {
//     return response.json();
// }).then(data => {
//     atribuirCampos(data)
// })

/*Com o retorno da data (dados) vamos atribuir ele para os campos e fazer uma função pegar o id do campos e atribuir os valores para eles:*/ 

function atribuirCampos(data){
    const rua = document.querySelector('#rua');
    const complemento = document.querySelector('#complemento');
    const bairro = document.querySelector('#bairro')
    const cidade = document.querySelector('#cidade')
    const estado = document.querySelector('#estado')

    rua.value = data.logradouro;
    complemento.value = data.complemento;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf

}


