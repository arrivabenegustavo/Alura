const nomes = ['Ana', 'Marcos', 'Maria', 'Alguem']
const notas = [7, 4.5, 8, 3]


const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5 )
console.log(`Reprovados: ${reprovados}`)
// isto é: associa a nota ao nome através do índice e retorna o nome caso encontre a condição verdadeira
// pois estão no mesmo índice