// 3 - Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto.

const posts: Post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

//   a)  crie um type para representar um post; 
// Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.

type Post = {
    autor: string,
    texto: string
}

// b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:

//Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária. 

function buscarPostsPorAutor(posts: Post[], autorInformado:string): Post[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }


// a função recebe um array (posts) do tipo Post[] e um nome de autor (autorInformado), do tipo string e retorna um array de posts (Post[])