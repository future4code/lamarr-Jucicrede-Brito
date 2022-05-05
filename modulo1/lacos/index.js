//Exercícios de interpretação de código
//1. Esta fazendo uma soma de 5 em 5. O valor escrito no console é 10.

//2.
//a) 19, 21, 23, 25, 27, 30

//b) if (numero >= 0)

//3. Ficaria 4 lingas de *.
/*  Ex;
*
**
***
****
 */

//Exercícios de escrita de código
//1.
/* const perguntaUsuario = Number(prompt("Você tem bichinhos de estimação? Se sim quantos?"))
console.log(perguntaUsuario)
let arrayNomes = []
if(perguntaUsuario === 0){
    console.log("Que pena! Você pode adotar um pet!")
  
}
for (i = 0; i<perguntaUsuario; i++){
    let nomeBichos = (prompt("Informe os nomes deles, um por vez."))
    
    arrayNomes.push(nomeBichos)
    console.log(nomeBichos)
} */
 

//2.
/*  let arrayOriginal = [ 60, 44, 68, 82, 01, 15]  */

/* function imprimirTodosNumber (arrayOriginal){
    for (let valor of arrayOriginal){
        console.log(valor)
    }     
}
imprimirTodosNumber(arrayOriginal)  */

/* function divisao(arrayOriginal){
    for (let valor of arrayOriginal){
        console.log(valor/10)
    }     
}
divisao(arrayOriginal) */

/* function numerosPares (arrayOriginal){
    let arrayPares = []
    for (let valor of arrayOriginal){
   if (valor % 2 === 0){
       arrayPares.push(valor)
    }
    }   
    console.log(arrayPares)
    }  

numerosPares(arrayOriginal) */

/* function strings (arrayOriginal){
    let arrayStrings = []
    let i = 0
    for ( let valor of arrayOriginal){  
        arrayStrings.push(`O elemento do índex ${i} é: ${valor}`)
        i++
}
console.log(arrayStrings)

}
strings(arrayOriginal) */

/* function maiorMenor (arrayOriginal){
    let maiorNumero = 0
    let menorNumero = Infinity
    
    for (let i = 0; i<arrayOriginal.length; i++){
        if (arrayOriginal[i] < menorNumero){
            menorNumero = arrayOriginal[i]
        }else if(arrayOriginal[i] > maiorNumero){
            maiorNumero = arrayOriginal[i]
        }
    }
console.log("O maior numero é", maiorNumero)
console.log("O menor numero é", menorNumero)
}
maiorMenor(arrayOriginal) */


    
    


















