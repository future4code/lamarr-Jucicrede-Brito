import {Request, Response} from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const input:any = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            }
           const userBusiness = new UserBusiness()
           await userBusiness.createUser(input)
           
           res.status(201).send({ message: "Usuário criado!" })
        } catch (error:any) {
           res.status(400).send(error.message)
        }
     }
     getAll = async (req:Request, res:Response): Promise<void> => {
        try {

            const users = await new UserBusiness().get();
            

            res.send(users).status(200);

        } catch (error:any) {
            res.send({ message: error.message }).status(error.status);
        }
     }
    
     deleteUser = async (req: Request, res: Response): Promise<void> => {

        try {
            const input = {
                id: req.params.id
            }

           await new UserBusiness().deleteUser(input);

            res.status(200).send({ message: "Usuário apagado com sucesso" });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

}
}