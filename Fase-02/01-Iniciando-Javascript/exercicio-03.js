// ARRAY

const alunos = [
    {
        nome: 'Mayk',
        nota: 9.8
    },
    {
        nome: 'Diego',
        nota: 10
    },
    {
        nome: 'Fulano',
        nota: 2
    }
]

const media = (alunos[0].nota+alunos[1].nota+alunos[2].nota)/3

console.table(alunos);
console.log(media);
