// Enquanto o método forEach não tem um retorno, o map() pode retornar um array 
// se a função informada tiver um return em seu escopo

const notas = [10, 9, 6, 8, 5];
                            // em cada => faz isso
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)
// neste caso usamos ++notas e não notas++, para somar antes de coloca na lista
// forma usada apenas com map


// outro exemplo

const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez(num) {
    return num * 10
   }

const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)