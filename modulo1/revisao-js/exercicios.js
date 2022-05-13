// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  const listaDECompras = array.length
  return listaDECompras
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const numeros = array
  return numeros.slice(0).reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const tamanhoOrdenado = array
  return tamanhoOrdenado.sort((a,b)=>a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   const numerosPares = array 
    return numerosPares.filter((array)=>(array%2)===0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const numerosParesElevadosADois = []
  const numeroPar = array.filter((array)=>(array%2===0))
  for(numero of numeroPar){
    const elevadoADois = numero * numero
    numerosParesElevadosADois.push(elevadoADois)}
    return numerosParesElevadosADois
  }

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let numero
let diferenca
let objeto
if (num1 > num2){
  numero = num1
  diferenca = num1 - num2
  objeto = num1 % num2 ===0
}else{
  numero = num2
  diferenca = num2 - num1
  objeto = num2 % num1 ===0
}
retorno = {
  maiorNumero: numero,
  maiorDivisivelPorMenor: objeto,
  diferenca: diferenca,
}
return retorno

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const numerosPares = []
  for (let i = 0; numerosPares.length < n; i++){
    if (i % 2 == 0){
      numerosPares.push(i)
    }
  }
  return numerosPares
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
return ("Escaleno")}
else if (ladoA === ladoB && ladoB === ladoC){
return ("Equilátero")}
else{
return("Isósceles");
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  function numeros (a,b){
    return (a -b)
  }
  array.sort(numeros)
  maior = array[array.length -2]
  menor = array[1]
  return [maior, menor]
}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 
const frase = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
   return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 const novaPessoa = {
   ...pessoa,
   nome:"ANÔNIMO"
 }
 return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  
   return pessoas.filter(pessoa => {
     return(
       pessoa.altura >= 1.5 && pessoa.idade<60 &&
       pessoa.idade>14 
     )
   }

   )
   return retornaPessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter(naoAutorizada => {
    return(
      naoAutorizada.altura < 1.5 || naoAutorizada.idade >= 60 ||
      naoAutorizada.idade <= 14 
    )
  }
  ) 
  return retornaPessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
contas.forEach((soma) =>{
  let somaDasCompras = 0
  soma.compras.forEach((valor)=>{
    somaDasCompras += valor
  })
  soma.saldoTotal -= somaDasCompras
  soma.compras = []
})
return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
 return consultas.sort((a,b) => a.nome > b.nome ? 1 : a.nome < b.nome ? -1 :0)
 }

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  for(let i = 0; i < 3 ; i++){
    consultas.sort((a, b)=> a.dataDaConsulta.split(`/`)[i] > b.dataDaConsulta.split(`/`)[i]? 1 : a.dataDaConsulta.split(`/`)
    )
}
return consultas
}

