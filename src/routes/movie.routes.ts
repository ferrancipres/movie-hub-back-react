import { Router } from "express";
import { createMovie, deleteMovie, getMovies, getMovieById,  } from "../controllers/movie.controllers";
import { checkJwtMiddleware } from "../middleware/checkJwt.middleware";

const movieRouter = Router();

movieRouter.get('/', getMovies);
movieRouter.get('/:movieId', getMovieById);
movieRouter.post('/:userId', createMovie);
// movieRouter.patch('/:movieId', updateMovie);
movieRouter.delete('/:movieId', deleteMovie);

export default movieRouter;