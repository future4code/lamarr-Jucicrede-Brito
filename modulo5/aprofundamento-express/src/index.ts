import express, {Request, Response} from "express"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// ----------------------------- Exercicio 1 -------------------------- //
app.get("/pig", (req:Request, res:Response) => {          
    res.status(200).send("Pong!")
})

// ----------------------------- Exercicio 2 -------------------------- //

type Afazeres = {
          userId: number,
          id: number,
          title: string,
          completed: boolean
        }
// ----------------------------- Exercicio 3 -------------------------- //
     
const list :Afazeres[] = [
    {
        userId: 1,
        id: 1,
        title: "Javascript",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: "Front-end",
        completed: false
    },
    {
        userId:1,
        id:3,
        title:"Back-end",
        completed: true
    }
]
// ----------------------------- Exercicio 4 -------------------------- //
      app.get("/list/completed/:isCompleted", (req:Request, res:Response) =>{
        let isCompleted: any = req.params.isCompleted
        
        if(isCompleted === "true"){
        isCompleted = true
        }else if(isCompleted === "false"){
            isCompleted=false
        }else{
            res.send("Path param da tarefa deve ser 'true' ou 'false'")
        }

        const result = []

        for(let i = 0; i < list.length; i++){
          if(list[i].completed === isCompleted){
            result.push(list[i])
          }
        }
        res.send(result)
      })

    

