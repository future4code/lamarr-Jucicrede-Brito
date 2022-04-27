//Exercícios de interpretação de código
//1.
//Matheus Nachtergaele
//Virginia Cadendish
//Globo, horario: 14h

//2.
//a)
//Juca
//Juba
//Jubo

//b) Faz copia

//2.
//a) False, Indefinido

//b)A função recebe um objeto e uma propiedade que o objeto possua ou não e retorna o valor ou não.

//Exercícios de escrita de código
//1.
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
//  function imprimir(objeto){
// console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`)
//  }
//  imprimir(pessoa)

//  //b)
//  const novosApelidos = {
//      ...pessoa, apelidos: ["Dinha", "Man", "Ama"]
//  }
//  imprimir(novosApelidos)

//2.
// const pessoa1 = {
//     nome:"Juci",
//     idade:32,
//     profissao:"Estudante",
// }
// const pessoa2 = {
//     nome: "Paulo",
//     idade:24,
//     profissao:"Professor"

// }
// function retornaInformacoes (obj){
//  let arrayInformacoes = [obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]
// return arrayInformacoes
// }
// console.log(retornaInformacoes(pessoa1))
// console.log(retornaInformacoes(pessoa2))

//3.
// const carinho = []

// const frutas1 = {
//     nome:"Laranja",
//     disponibilidade:true,
// }
// const frutas2 ={
//     nome:"Uva",
//     disponibilidade:true,
// }

// const frutas3 ={
//     nome:"Abacate",
//     disponibilidade:true,
// }
// function cesta(fruta){
//     carinho.push(fruta)
// }
// cesta(frutas1)
// cesta(frutas2)
// cesta(frutas3)

// console.log(carinho)

//🏅  Desafios
//1.
// function informacao(){
//     const pessoa = {nome: prompt("Qual seu nome?"),
//     idade: prompt("Qual sua idade?"),
//     profisao: prompt("Qual sua profissao?")
// }

// console.log(pessoa)
// console.log(typeof pessoa)
// }
// informacao()

//2.
// function filmes(primeiroFilme, segundoFilme) {
//     return `O primeiro filme foi lançado antes do segundo? 
//     ${primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento}

//     O primeiro filme foi lançado no mesmo ano do segundo?
//     ${primeiroFilme.anoDeLancamento === segundoFilme.anoDeLancamento}`
// }

// const filme1 = {
//     nome: "Harry Potter",
//     anoDeLancamento: 2001,
// }
// const filme2 = {
//     nome: "Senhor dos Aneis",
//     anoDeLancamento: 2001,
// }

// console.log(filmes(filme1, filme2))

//3.
// function invertendo(frutas){
//     return {...frutas, disponibilidade: !frutas.disponibilidade}
// }
// console.log(invertendo(frutas1))
// console.log(invertendo(invertendo,frutas1))



