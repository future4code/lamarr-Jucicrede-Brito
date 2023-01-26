import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";


export class MovieController {

    public createMovie = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { movie, description, launch } = req.body

            const input = {
                movie,
                description,
                launch
            }

            const movieBusiness = new MovieBusiness()

            await movieBusiness.createMovie(input)
            
            res.status(201).send({ message: "Filme criado!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    public getMovie= async (req: Request,res: Response) => {
        try {
    
            const movieBusiness = new MovieBusiness()

            const allMovie= await movieBusiness.getMovie()
            
            res.status(201).send(allMovie)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}