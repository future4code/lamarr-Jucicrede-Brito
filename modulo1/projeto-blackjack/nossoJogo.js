console.log("Boas vindas ao jogo de Blackjack!")

let jogo = confirm("Quer iniciar uma nova rodada?")
   
if(jogo){
const carta1User = comprarCarta()
const carta2User = comprarCarta() 
let somaUser = carta1User.valor + carta2User.valor

const computador1 = comprarCarta()
const computador2 = comprarCarta()
let somaComputador = computador1.valor + computador2.valor

console.log(`Usuário - cartas: ${carta1User.texto} ${carta2User.texto} - pontuação ${somaUser}`) 

console.log(`Computador - cartas: ${computador1.texto} ${computador2.texto} - pontuação ${somaComputador}`) 

if (somaUser > somaComputador){
   console.log("O usuário ganhou!")
}else if (somaComputador > somaUser){
   console.log("O computador ganhou!")
}else if (somaUser === somaComputador){
   console.log("Empate")
}
}
else{
   console.log("O jogo acabou!")
}
