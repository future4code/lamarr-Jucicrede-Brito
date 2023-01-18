import {app} from "./app"
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.get('/user', userController.getAll)

app.post('/user', userController.createUser)

app.delete('/user/:id', userController.deleteUser)

// app.get("/", async function(){
//    console.log("endpoint teste")
// })


