const cliente = {
  nome:"Gustavo",
  idade: 32,
  cpf: "12543652266",
  email: "andre@email.com",
  fones: ["5591235498","5521988743124"] // Array para quando necessário mais de um valor na mesma chave
}

cliente.fones.forEach( fone => console.log(fone))