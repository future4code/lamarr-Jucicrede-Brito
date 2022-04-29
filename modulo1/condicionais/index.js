//Exercícios de interpretação de código
//1.
//a) Testa se os numeros são pares
//b) Todos os numeros pares imprime no console "Passou no teste"
//c)Todos os numeros impares a mensagem é "Não passou no teste"

//2.
//a) Para dizer 
//b) O preço da macã  é  2.25 reais
//c) O preço da pera é 5.5 reais

//3. 
//a) Pedindo ao usuario para digitar um numero
//b) Numero 10, Esse número passou no teste. -10 indefinido
//c)Sim, pois no lugar do let deveria ser o else de comparação

//Exercícios de escrita de código

//1.
// const idadeUsuario = Number (prompt("Qual a sua idade?"))

// if (idadeUsuario > 18){
//     console.log("Você pode dirigir.")
// } else{
//     console.log("Você não pode dirigir.")
// }

//2.
// const turnoDoAluno = prompt('Qual turno do dia seu filho estuda? Por favor insira somente a inicial sendo M (matutino), V (Vespertino) ou N (Noturno)')

// if (turnoDoAluno === "M"){
//     console.log("Bom dia!")
// }else{
//     if(turnoDoAluno === "V"){
//     console.log("Boa tarde!")}
//     else{
//         console.log("Boa noite!")
//     }
// }

//3.
// const turnoDoAluno = prompt('Qual turno seu filho estuda? Por favor insira somente a inicial sendo M (matutino), V (Vespertino) ou N (Noturno)')

// switch (turnoDoAluno) {
//     case "M":
//         console.log("Bom dia!")

//         break;

//     case "V":
//         console.log("Boa tarde!")

//         break;

//     case "N":
//         console.log("Boa noite!")    

//         break;

// //     default:

// }

//4.
// const genero = prompt("Qual o genero do filme que vão assistir?")
// const preco = prompt("Qual o valor de ingresso?")

// if (genero === "fantasia" && preco<=15){
//     console.log("Bom filme!")
// }else{
//     console.log("Escolha outro filme :(")
// }

//🏅  Desafios
//1.
// const genero = prompt("Qual o genero do filme que vão assistir?")
// const preco = prompt("Qual o valor de ingresso?")
// const lanchinho = prompt(" Qual lanchinho você vai comprar (pipoca, chocolate, doces, etc)")

// if (genero === "fantasia" && preco<=15){
//     console.log("Bom filme!")
//     console.log(`Aproveite seu(a) ${lanchinho}`)
// }else{
//     console.log("Escolha outro filme :(")
// }

//2.

// function calculaPreco(nome, tipoDeJogo, etapaDoJogo, categoria, qtdIngressos, valorIngresso, valorTotal) {
//     nome = prompt("Nome completo.")
//     tipoDeJogo = prompt("Qual o tipo de jogo?(IN para internacional, DO para doméstico)")
//     etapaDoJogo = prompt("Qual a etapa do jogo?(SF para semi-final, DT para decisão de terceiro lugar e FI para final)")
//     categoria = prompt("Qual a categoria do jodo?(1, 2, 3 ou 4)")
//     qtdIngressos = Number(prompt("Quantos ingressos?"))
//     console.log(`--Dados da Compra-- Nome do cliente:${nome}, Tipo do jogo: ${tipoDeJogo}, Etapa do jogo:${etapaDoJogo}, Categoria:${categoria}, Quantidade de Ingressos:${qtdIngressos} --Valores--`)

//     switch (etapaDoJogo) {
//         case "SF":
//             switch (categoria) {
//                 case '1':
//                     valorIngresso = 1320
//                     break;
//                 case '2':
//                     valorIngresso = 880
//                     break;
//                 case '3':
//                     valorIngresso = 550
//                     break;
//                 case '4':
//                     valorIngresso = 220
//                     break;
//                 default: console.log("Categoria não informada")
//             }
//             break;
//         case "DT":
//             switch (categoria) {
//                 case '1':
//                     valorIngresso = 660
//                     break;
//                 case '2':
//                     valorIngresso = 440
//                     break;
//                 case '3':
//                     valorIngresso = 330
//                     break;
//                 case '4':
//                     valorIngresso = 170
//                     break;
//                 default: console.log("Categoria não informada")
//             }
//             break;
//         case "FI":
//             switch (categoria) {
//                 case '1':
//                     valorIngresso = 1980
//                     break;
//                 case '2':
//                     valorIngresso = 1320
//                     break;
//                 case '3':
//                     valorIngresso = 880
//                     break;
//                 case '4':
//                     valorIngresso = 330
//                     break;
//                 default: confirm.log("Categoria não informada")
//             }
//             break;
//         default: console.log("Etapa não informada")
//     }

//     valorTotal = valorIngresso * qtdIngressos
//     if (tipoDeJogo === "DO")
//         console.log(`Valor do ingresso:${valorIngresso} Valor total:${valorTotal}`)
//     else if (tipoDeJogo === "IN")
//         console.log(`Valor do ingresso:${valorIngresso / 4.1} Valor total:${valorIngresso / 4.1}`)
// }
// calculaPreco()
