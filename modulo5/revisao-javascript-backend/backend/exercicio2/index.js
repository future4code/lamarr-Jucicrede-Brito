const listaClientes = [
    {id: 1, nome:"Fulano"},
    {id: 2, nome:"Ciclano"},
    {id: 3, nome:"Beltrano"},
    {id: 4, nome:"Fulana"},
]

    
let cadastro = (id, nome) => {

    let novaLista = [...listaClientes]
    novaLista.push({id,nome})
    console.log(novaLista)
}

    cadastro(5,"Luke Skywalker")



// Geração de tabuada

const numeros = 5

const tabuada = () => {
    for (let i=0; 1<=10; i++)
         
    console.log (`${i} x ${numeros} = ${i*numeros}`)

}
console.log(tabuada)


