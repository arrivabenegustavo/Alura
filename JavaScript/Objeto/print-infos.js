const cliente = {
  nome:"Gustavo",
  idade:32,
  cpf:"12543652266",
  email:"andre@email.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente['idade']} anos.`)
// notação de ponto "." cliente.nome
// notação de colchetes "[]" cliente['idade']

console.log(cliente.cpf.substring(0,3)) // pega a string do 0 ao 3, ou seja 125 do cpf