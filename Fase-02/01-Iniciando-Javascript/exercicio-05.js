// ESTRUTURA DE REPETIÇÃO
// ESCOPO
// BOLEANOS

// Cria um programa que calcula a média das turmas de alunos
// de envia mensagem do cálculo da média.

const alunosDaTurmaA = [
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
    },
    {
        nome: 'Mai um aluno',
        nota: 10
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Cleiton',
        nota: 10
    },
    {
        nome: 'Robson',
        nota: 10
    },
    {
        nome: 'Ciclano',
        nota: 0
    },
    {
        nome: 'Novo aluno',
        nota: 5
    }
]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma+alunos[i].nota
    }

    const media = soma/alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if (media>5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns `);
    } else {
        console.log(`A média da ${turma} é menor que 5`);
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

// Marcar aluno como reprovado se a média for menor que 5
// enviar uma mensagem

function marcarComoReprovado(aluno) {
    aluno.reprovado = false
    if (aluno.nota<5) {
        aluno.reprovado = true
    }
}

function enviarMansagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} está reprovado`);
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMansagemReprovado(aluno)
    }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)

