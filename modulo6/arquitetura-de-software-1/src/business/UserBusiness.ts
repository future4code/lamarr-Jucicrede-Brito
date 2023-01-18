import { UserDatabase } from "../data/UserDatabase"

export class UserBusiness {

    public createUser = async (input: any) :Promise<void> => {
        try{
            const { name, email, password } = input

        if (
           !name ||
           !email ||
           !password
        ) {
           throw new Error("Please fill all the fields")
        }
        if(email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }
        if(password.length < 6){
            throw new Error("Password must have at least 6 characters")
        }
  
        const id: string = Date.now().toString()

        const userDatabase = new UserDatabase()
  
        await userDatabase.insertUser ({
           id,
           name,
           email,
           password
        })

        } catch(error:any){
            throw new Error(error.message)
        }
        
    }
    findUser = () => {}
    delereUser = () => {}
}