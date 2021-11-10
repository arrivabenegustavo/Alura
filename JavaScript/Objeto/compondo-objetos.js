const cliente = {
  nome:"Gustavo",
  idade:32,
  cpf:"12543652266",
  email:"andre@email.com",
  fones:["5591235498","5521988743124"]
}

// Adiciona um objeot como valor
cliente.dependentes = {
  nome:"Sara",
  parentesco:"filha",
  dataNasc:"20/03/2011"
}


cliente.dependentes.nome = "Sara Silva" // altera nome do dependente

console.log(cliente.dependentes.dataNasc) // acessa dependente