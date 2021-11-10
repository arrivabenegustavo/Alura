
//Array de objetos
const clientes = [
    {
        //Chave: valor
        nome: 'Gustavo',
        idade: 32,
        cpf: '12543652266',
        email: 'gustavo@email.com',
        fones: [ '5591235498', '5521988743124' ],
        //Chave : valor -> Array com outros objetos
        dependentes: [{
            nome: 'Sara Silva',
            parentesco: 'filha',
            dataNasc: '20/03/2011' },
            {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
            }
        ]
    },
    {
        nome: 'Thais',
        cpf: '9874563210',
        dependentes: [{
            nome: 'Miguel',
            parentesco: 'filho',
            dataNasc: '10/11/2023'
            }
        ]
    }
];

//Spread Operador = Operador de Espalhamento

// Faz o ESPALHAMENTO do contéudo dentro de um Array, ou seja
// cria um Array com apenas os dependentes de cada cliente em uma mesma lista
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
//console.log(listaDependentes)

// caso exibir as informações de uma forma melhor através de uma tabela
console.table(listaDependentes)