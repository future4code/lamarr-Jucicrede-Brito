import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/user";

export class UserDatabase extends BaseDatabase {

    insertUser = async(input: any): Promise<void> => {
        try{
            await UserDatabase.connection.insert(input).into('User_Arq')
        } catch(error:any){
            throw new Error(error.message)
        }
    }

    findUser = () => {}
    delereUser = () => {}
}