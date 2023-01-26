import { Movie } from "../types/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {

    private movieTable = 'Architecture_Movie'

    public insertMovie = async (
        task: Movie
    ) => {
        try {
            MovieDatabase.connection.initialize()
            await MovieDatabase.connection(this.movieTable)
                .insert({
                    id: task.id,
                    movie: task.movie,
                    description: task.description,
                    launch: task.launch
                })
        } catch (error: any) {
            throw new Error(error.message)
        }finally{
            console.log("conexão encerrada!");
            MovieDatabase.connection.destroy();
         }
    }
    
    public getMovie = async () => {
        try {
            MovieDatabase.connection.initialize()
            const allTasks=await MovieDatabase.connection.select().from(this.movieTable)
            return allTasks;
        } catch (error: any) {
            throw new Error(error.message)
        }finally{
            console.log("conexão encerrada!");
            MovieDatabase.connection.destroy();
         }
    }
}
