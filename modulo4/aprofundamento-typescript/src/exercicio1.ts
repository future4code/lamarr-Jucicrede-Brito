// 1- a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// const minhaString: string = 1
// Type 'number' is not assignable to type 'string'.

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

let meuNumero: number | string = 1
// Conseguimos fazer que o typescript aceite mais um tipo de valor com a notação de "ou": |

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_ARCO_IRIS
}

// d)Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.
enum CORES_ARCO_IRIS {
    ANIL = "anil",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    MAGENTA = "vermelho",
    VIOLETA = "violeta"
}

const pessoa1: Pessoa = {
    nome: "Astrodev",
    idade: 28,
    corFavorita: CORES_ARCO_IRIS.LARANJA
}

const pessoa2: Pessoa = {
    nome: "Luana",
    idade: 27,
    corFavorita: CORES_ARCO_IRIS.VIOLETA
}

const pessoa3: Pessoa = {
    nome: "Fernanda",
    idade: 29,
    corFavorita: CORES_ARCO_IRIS.VERDE
}

const pessoa4: Pessoa = {
    nome: "Bruno",
    idade: 28,
    corFavorita: CORES_ARCO_IRIS.AZUL
}