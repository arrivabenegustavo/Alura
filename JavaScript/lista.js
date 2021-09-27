const listaDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Fortaleza`
)

// console.log(listaDestinos); // mostra a lista

// listaDestinos.push(`Bahia`); // Adiciona item na lista

// listaDestinos.splice(2, 1); // Exclui um elemento na segunda posição

const idade = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;

console.log("Destinos possíveis:");
console.log(listaDestinos);

const podeComprar = idade >= 18 || estaAcompanhada == true;

const destino = "Fortaleza";
let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log(`Destino existe: ${destinoExiste}`);