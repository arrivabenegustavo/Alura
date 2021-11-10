// Declaração de função - pode ser chamado de qualquer lugar
function teste(){
    return 'olá';
}


console.log(soma(2, 2)) // apresentará err e não será executado
// Expressão de função - pode ser chamada apenas após 
const soma = function(num1, num2){
    return num1 + num2;
}
console.log(soma(2, 2)) // é executado normalmente


// Arrow function
const apresentar = nome => `meu nome é ${nome}`;


// com dois argumentos necessário o uso de parênteses 
const soma = (num1, num2) => num1 + num2;


// Com mais de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if ( num1 || num2 > 10){
        return 'somente números de 1 a 9'
    }else{
        return num1 + num2;
    }
};