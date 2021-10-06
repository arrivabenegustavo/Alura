// OBJETOS -> SÃO COMPOSTOS POR CHAVE E VALOR

const cliente = {
    //Chave: valor
    nome: 'Andre',
    idade: 36,
    cpf: '12543652266',
    email: 'andre@email.com',
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
    saldo:100,
    //neste caso "depositar é a chave e a função o valor "
    depositar:function(valor){
      this.saldo += valor
    }
  }