// 2 - Observe a função a seguir, escrita em JavaScript:
function obterEstatisticas(numeros: number[]): Estatisticas {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo.ts e faça a tipagem desses parâmetros
// R: Entrada: array (ts tipa como objeto) / Saída: objeto

type Estatisticas = {
  maior: number,
  menor: number,
  media: number
}

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
// soma e num são do tipo número, numerosOrdenados é do tipo objeto (array).

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type AmostraDeDados = {
  numeros: number[],
  obterEstatisticas: (numeros: number[]) => Estatisticas
}

const amostraDeIdades: AmostraDeDados = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas
}