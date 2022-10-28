import express, {Request,Response} from "express"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// ----------------------------- Exercicio 1 -------------------------- //
app.get("/status", (req:Request, res:Response) => {          
    res.status(200).send("Hello from Express")
})

// ----------------------------- Exercicio 2 -------------------------- //

    type User = {
            id: number,
            name: string,
            email: string,
            phone: string,
            website:string 
        }

// ----------------------------- Exercicio 3 -------------------------- //
 const users: User[] = [
    {
      id: 1,
      name: "Juci Machado",
      email: "Juci@labenu.com",
      phone: "1-770-736-8031 x56442",
      website: "JM.org",
    },
    {
        id: 2,
        name: "Amanda Dias",
        email: "amanda.dias@gmail.com",
        phone: "1-770-736-8031 x89651",
        website: "amandinha.org",
      }
    ]   
// ----------------------------- Exercicio 4 -------------------------- //

    app.get("/users", (req:Request, res:Response) => {
        res.send(users)
    })

// ----------------------------- Exercicio 5 -------------------------- //

type Posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// ----------------------------- Exercicio 6 -------------------------- //

// Justificativa: devem ser armazenados em arrays separados para facilitar a manipulação.

const post: Posts[] = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
]

// ----------------------------- Exercicio 7 -------------------------- //

app.get("/posts",(req:Request, res:Response)=>{
    res.send(post)
})

// ----------------------------- Exercicio 8 -------------------------- //
    
app.get("/users/post/:id", (req:Request, res:Response) => {
    const userId = Number(req.params.id)
  
    const result = post.filter(posts => {
      if (posts.userId === userId) {
        return true
      } else {
        return false
      }
    })
  
    res.send(result)
  })