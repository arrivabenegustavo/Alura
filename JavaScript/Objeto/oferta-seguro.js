// OBJETOS -> SÃO COMPOSTOS POR CHAVE E VALOR

const cliente = {
    //Chave: valor
    nome: 'Gustavo',
    idade: 32,
    cpf: '12543652266',
    email: 'gustavo@email.com',
    fones: [ '5591235498', '5521988743124' ],
    //Chave : valor -> Array com outros objetos
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
    }// "this" faz referência ao próprio objeto
}

let relatorio = "";

for(let info in cliente){

  // insto é, se o tipo for object ou function, não faz nda, apenas continua percorrendo
  // isto é necessário por conter Arrays, funções e objetos dentro das propriedades do objetos, pois eles não são exibidos corretamente
  // então usamos essa condição abaixo para pular esses valores
  if(typeof cliente[info] === "object" || typeof cliente[info] === "function" ){

    continue

  }else{ // Quebra de linha após relatório para melhor visualização do resultado
    relatorio += ` ${info} : ${cliente[info]}` // a cada iteração do for adiciona propriedade no relatorio
    //chave + valor
  } 
  
}

// Usando métodos de Array

function oferecerSeguro(objeto){
    // Gera uma Array com as chaves do objeto
    const chaveClientes = Object.keys(objeto); 

    // Gera uma Array com os valores do objeto
    const valorClientes = Object.values(cliente);
    console.log(valorClientes);

    //"entries" gera uma Array com várias Arrays de chave e valor
    const listaChaveValor = Object.entries(cliente);
    console.log(listaChaveValor);

    // "includes" verifica se o parâmetro está incluído no Array "chaveClientes"
    if(chaveClientes.includes("dependentes")){
    console.log(`Mostrará o nome do cliente caso exista algum dependente => ${objeto.nome}`)
    }
}

oferecerSeguro(cliente);


