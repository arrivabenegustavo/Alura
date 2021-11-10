
É possível manipular os valores de this e o JavaScript tem três métodos para isso:

// call()

// Esse método permite que uma função seja chamada com parâmetros 
// e valor de this específicos. Vamos ver um exemplo:
function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
    }

//  Criamos uma função imprimeNomeEmail que recebe como parâmetro um dado 
//  que chamamos de tipoCliente. Esta função imprime no terminal um string 
//  com tipoCliente mais duas informações que estão associadas a algum 
//  objeto (ainda não informado) com this.
//  Vamos executar a função com call():
imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com

// Como a função está sendo chamada como objeto do método call(), 
// podemos especificar que o contexto de this em cada chamada 
// se refere a um objeto diferente (cliente1 e cliente2), 
// sem a necessidade de adicionar a função em cada um dos objetos.

// O primeiro parâmetro do método call() se refere ao objeto 
// que será usado como contexto do this e, do segundo parâmetro em diante, 
// são passados os argumentos que a função deve receber. No caso acima, 
// há somente um parâmetro, a string tipoCliente.


// ----------------------------------------------------------------------------------------

//apply()

// O método apply() funciona de forma muito semelhante ao call(), 
// porém recebe os argumentos em um array ao invés de separados:
function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }

//    Chamando imprimeNomeEmail com o método apply() e passando um array 
//    de dados como segundo parâmetro (lembrando que o primeiro parâmetro de apply() 
//    se refere ao contexto de this, igual ao método call():
const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmail.apply(cliente1, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmail.apply(cliente2, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

// Utilize o método apply() caso você tenha um array de dados e o call() 
// para passar valores individuais como parâmetro. Lembre-se que o array deve 
// seguir a ordem correta dos parâmetros informado na função.


//--------------------------------------------------------------------------------------------------------

//bind()

// O método bind() “prende” ou “liga” uma função ao contexto de um objeto. 
// Por exemplo:
const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

//    O objeto acima contém uma propriedade nome e um método apresentar 
//    que retorna um string com nome; this.nome liga a propriedade nome 
//    ao contexto do objeto em que a função está definida, ou seja, “este objeto”.

//    Vamos ver o que acontece se tentarmos executar essa função a partir de outro contexto:
const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined

// Quando atribuímos apresentar() à variável personagemGenerico estamos retirando 
// a função apresentar() do contexto do objeto na qual foi criada, e por isso this 
// não está mais acessível; a função perdeu a referência original e não consegue 
// mais localizar onde está this.

// Ressolvemos este problema com bind():
const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia

// Acima, utilizamos o método bind() para “ligar” a função que atribuímos 
// a personagemGenerico ao objeto personagem. Assim, sempre que esta função 
// for executada a partir da variável personagemDefinido, a função original 
// vai usar o objeto personagem como contexto de execução. Dessa forma, 
// this sempre se refere ao objeto personagem e é capaz de acessar suas propriedades.

// Estes três métodos têm uma variedade enorme de usos no dia a dia da 
// programação com JavaScrip, faça mais testes a partir dos exemplos
// acima para se familiarizar com os conceitos.