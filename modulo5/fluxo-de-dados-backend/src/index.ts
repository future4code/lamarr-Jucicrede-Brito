import express, {Request, Response} from "express"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
// ----------------------- Exercicio 1 ------------------------------- //

app.get("/test", (req:Request, res:Response)=>{
    res.status(201).send(`Servidor rodando na porta ${3003}!`)
})


