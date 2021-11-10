const cliente = {
  nome:"Gustavo",
  idade:32,
  cpf:"12543652266",
  email:"andre@email.com"
}

                //0     //1
const chaves = ["nome","idade","cpf","email"]
// console.log(cliente[chaves[0]]) Mostrará na tela Gustavo
// Especifico para notação de Colchetes

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["nome"]) //para acessar diretamente