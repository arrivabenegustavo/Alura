const cliente = {
  nome: 'Gustavo',
  idade: 32,
  cpf: '12543652266',
  email: 'gustavo@email.com',
  fones: [ '5591235498', '5521988743124' ],
  dependentes: [{
    nome: 'Sara Silva',
    parentesco: 'filha',
    dataNasc: '20/03/2011'
  }]
}

//Adiciona um objeto em um Array para conter mais de um dependente na propriedade dependentes
cliente.dependentes.push({
  nome:"Samia Maria",
  parentesco:"filha",
  dataNasc:"04/01/2014"
})

console.log(cliente)

// Filtra através da Data de nascimento
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")
//Método de Array 'filter' - percorre a lista e filtra conforme instrução, retornando um Array mesmo se estiver vazio

console.log(filhaMaisNova) // traz todo obejto da dependente
console.log(filhaMaisNova[0].nome) // traz apenas o nome