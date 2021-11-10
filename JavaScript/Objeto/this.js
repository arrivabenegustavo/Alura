const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${pessoa.nome}`)
    }
   }
   
   pessoa.imprimeNome() //Ana

//   Veja que o método imprimeNome() faz referência ao próprio objeto pessoa. 
//   O JavaScript tem uma forma melhor de fazer isso, que não “acopla” o método ao nome do objeto:
const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${this.nome}`)
    }
   }
   
   pessoa.imprimeNome() //Ana

//   Podemos visualizar melhor a utilização do this para “desacoplar” 
//   o método do objeto com um outro exemplo:
function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
   }

//    Acima temos uma função que não está ligada a nenhum objeto. 
//    Vamos ver como podemos utilizá-la para objetos diferentes de forma independente:
const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   pessoa1.imprimeInfo()
   //nome: Ana, email a@email.com
   pessoa2.imprimeInfo()
   //nome: Paula, email p@email.com

//    Dentro de cada objeto, criamos um método que chama a função externa imprimeNomeEmail(). 
//    Essa função é executada no contexto de cada um dos objetos e o this faz com que ela 
//    utilize os valores de propriedade desses objetos.


// O this representa o objeto que executa a função. Podemos dizer que a instrução 
// passada para o JavaScript é: “execute a função aqui, utilizando este contexto”.


// No caso de atributos das funções construtoras ou dos construtores de classe, 
// o this tem função similar: podemos dizer que o construtor recebe os atributos deste objeto:
function Pessoa(nome, email){
    this.nome =nome
    this.email =email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
   }

//    Quando criarmos objetos com base nesta função construtora, os atributos 
//    que a função receber como parâmetro (nome e email) serão definidos no 
//    contexto de cada um deles:
const pessoa1 = new Pessoa("Ana", "a@email.com")
const pessoa2 = new Pessoa("Paula", "p@email.com")

pessoa1.imprimeNomeEmail()
// nome: Ana, email: a@email.com
pessoa2.imprimeNomeEmail()
// nome: Paula, email: p@email.com