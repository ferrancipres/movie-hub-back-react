import express from 'express';
import userRoutes from './routes/user.routes';
import movieRoutes from './routes/movie.routes';
import genreRoutes from './routes/genre.routes';
import cors from 'cors';
import morgan from 'morgan';
import { checkJwtMiddleware } from './middleware/checkJwt.middleware';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/user', userRoutes);
app.use('/movie', checkJwtMiddleware, movieRoutes);
app.use('/genre', genreRoutes);

export default app;