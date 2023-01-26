import express from "express";
import { MovieController } from "../controller/MovieController";

const movieController=new MovieController();

export const movieRouter= express.Router();

movieRouter.get("/getAll",movieController.getMovie)
movieRouter.post("/create", movieController.createMovie)