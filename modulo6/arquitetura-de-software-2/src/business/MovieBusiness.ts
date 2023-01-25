import { MovieDatabase } from "../data/MovieDatabase"

export class MovieBusiness {

   public createMovie = async (
      input: any
   ) => {
      try {
         const { movie, description, launch } = input

         if (
            !movie ||
            !description ||
            !launch
         ) {
            throw new Error('"movie", "description" e "lauch" são obrigatórios')
         }

         const id: string = Date.now().toString()

         const movieDatabase = new MovieDatabase()

         await movieDatabase.insertMovie({
            id,
            movie,
            description,
            launch
         })

      } catch (error: any) {
         throw new Error(error.message)
      }
   }
   
   public getMovie = async () => {
      try {
         const movieDatabase = new MovieDatabase()
         return await movieDatabase.getMovie()
      } catch (error: any) {
         throw new Error(error.message)
      }
   }
}