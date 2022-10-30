// a)
// Para acessar os parâmetros passados na linha de comando a partir dos
// índices, podendo ser passados valores para os parâmetros do objeto.


// b)

const name = process.argv[2]
const age = Number(process.argv[3])


function today (name, age) {
    return (`Olá, ${name}! Você tem ${age} anos.`)
}

const todayAnswer = today("Juci", 33)
console.log(todayAnswer)


// c)

function plusSevenYears (name, age, newAge) {
    return (`Olá, ${name}! Você tem ${age} anos. Daqui a sete anos você terá ${newAge}.`)
}

const sevenYears=plusSevenYears("Juci", 33, 40)
console.log(sevenYears)