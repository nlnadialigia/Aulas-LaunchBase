// [Objetos]

const aluno01 = {
    nome: 'Mayk',
    nota: 9.8
}

const aluno02 = {
    nome: 'Diego',
    nota: 10
}

const aluno03 = {
    nome: 'Fulano',
    nota: 2
}

const media = (aluno01.nota+aluno02.nota+aluno03.nota)/3

console.table(aluno01);
console.log(media);