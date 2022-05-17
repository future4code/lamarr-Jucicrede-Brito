//Exercícios de interpretação de código
// 1.  nome: "Amanda Rangel", 0 apelido: "Mandi" 
//       nome: "Laís Petra", 1 apelido: "Laura" 
//       nome: "Letícia Chijo", 2 apelido: "Chijo"

// 2. [Amanda Rangel Laís Petra Letícia Chijo]

// 3.[ nome: "Amanda Rangel", apelido: "Mandi" 
//  nome: "Laís Petra", apelido: "Laura" ]

// Exercícios de escrita de código
// 1.
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
// a)
// const nomesDoguinhos = pets.map((pet) =>{
// return pet.nome
// })
// console.log(nomesDoguinhos)

//b)
// const racaDoguinho = pets.filter((dog) => {
//     return dog.raca === "Salsicha"})
//     console.log(racaDoguinho)

// c)
// const racaPoodle = pets.filter((cachorro) => {
//         return cachorro.raca ==="Poodle" })
//         console.log(racaPoodle)

// const mensagem = racaPoodle.map((cliente)=>{
// return `Você ganhou um cupom de desconto de 10% para tosar o/a ${cliente.nome}`
// })
// console.log(mensagem)

//2.
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
 //a)
//  const nomesProdutos = produtos.map((lista) =>{
// return lista.nome
// })
// console.log(nomesProdutos)

// b)
// const nomesObjeto = produtos.map((valor) =>{
//     return{nome:valor.nome,preco:(valor.preco*0.95)}
//     })
//     console.log(nomesObjeto)

// c)
// const categoriaBebidas = produtos.filter((bebidas) => {
//             return bebidas.categoria ==="Bebidas" })
//             console.log(categoriaBebidas)

// d)
// const categoriaYpe = produtos.filter((sabao) => {
//     return sabao.nome.includes("Ypê")
//  })
//  console.log(categoriaYpe)

// // e)
// const frase = categoriaYpe.map((itens)=>{
//     return `Compre ${itens.nome} por ${itens.preco}`
//     })
//     console.log(frase)

// 🏅  Desafios

// 1.
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

// //  a)
//  const nomesPokemons = pokemons.map((nomes) =>{
// return nomes.nome
// })
// console.log(nomesPokemons)

// const ordemAlfabetica = nomesPokemons.sort((a,b) =>
// a.localeCompare(b)
// )
// console.log(ordemAlfabetica)

//b)
// const tipoPokemons = pokemons.map((habitat) =>{
//     return habitat.tipo
//     })

//     const pokemonsTipo = tipoPokemons.filter((tipo, index, array) => {
//         return array.indexOf(tipo)===index
//     })
//     console.log(pokemonsTipo)






















