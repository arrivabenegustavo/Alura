// OBJETOS -> SÃO COMPOSTOS POR CHAVE E VALOR

const cliente = {
  //Chave: valor
  nome: 'Gustavo',
  idade: 36,
  cpf: '12543652266',
  email: 'gustavo@email.com',
  fones: [ '5591235498', '5521988743124' ],
  dependentes: [
    {
      nome: 'Sara Silva',
      parentesco: 'filha',
      dataNasc: '20/03/2011' },
    {
      nome: 'Samia Maria',
      parentesco: 'filha',
      dataNasc: '04/01/2014'
    }
  ],
  saldo: 100,
  //neste caso "depositar é a chave e a função o valor "
  depositar: function(valor){
    this.saldo += valor // "this" para poder usar a propriedade saldo, pois está no mesmo contexto
  }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)