// [INICIANDO JAVASCRIPT]
// const nome = 'Mayk'
// console.log(nome); 

//******************************************************************

// [COMENTÁRIOS, STRINGS E NUMEROS]
// [FAZENDO CÁLCULOS COM JAVASCRIPT]
// [CONDICIONAIS]

// Criar um programa que calcula a média das notas entre os alunos
// E envia mensagem do cálculo da média.


//console.log(typeof notaAluno01); // informa qual o tipo de variável

const aluno01 = 'Mayk'
const notaAluno01 = 1.8

const aluno02 = 'Diego'
const notaAluno02 = 10

const aluno03 = 'Fulano'
const notaAluno03 = 2

const media = (notaAluno01+notaAluno02+notaAluno03)/3

console.log(media);

// Se a média for maior que 5, parabenizar a turma

if (media>5) {
    console.log(`A nota foi de ${media}. Parabéns `);
} else {
    console.log('A média é menor que 5');
}
