/* ==================================================================
    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior ou igual a 
    <=      Menor ou igual a 
    ==      Igual a
    ===     Igual e do mesmo tipo
    !=      Diferente de 
    !==     Diferente, inclusive do tipo

===================================================================*/

// DESAFIO 1
// verificar se a pessoa é maior ou igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entdaa
// se a pessoa tiver 17 anos
// avisar para ela voltar quando fizer 18 anos

const idade = 15

if (idade>=18) {
    console.log('Deixar entrar');
} else {
    console.log('Bloquear a entrada');   
}

if (idade==17) {
    console.log('Volte quando fizer 18 anos!');
}

/* ==================================================================
    OPERADORES LÓGICOS
    &&      "E" As duas condições devem ser verdadeiras para que a
            condição final seja verdadeira.
    ||      "OU" Uma das condições deve ser verdadeira pra que a 
            condição final seja verdadeira
    !       "NÃO" Nega uma condição
===================================================================*/

// REFAZENDO DESAFIO 1

if (!(idade>=18) || idade ===17) {
    console.log('Bloquear a entrada');
} else {
    console.log('Deixar entrar'); 
}

// DESAFIO 2
// dar bonificação de 500 reais
// se vendedor possuir 100 ou mais pontos
// nas deve possuir pelo menos 50 pontos

const pontos = 20

if (pontos>=100 && pontos >50) {
    console.log('Bonificação 500 reais');
} else {
    console.log('Não alcançou a quantidade mínima de pontos');
}

/* ==================================================================
    OPERADORES ARITIMÉTICOS

    *   Multiplicação
    /   Divisão
    %   Resto da divisão
    +   Adição
    -   Subtração

===================================================================*/

