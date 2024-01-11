import { Request, Response } from 'express';
import prisma from '../db/client';



export const getMovies = async (req: Request, res: Response) => {
    try {
        const allMovies = await prisma.movies.findMany({
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } }
                },
            },
        });
        res.status(201).json(allMovies);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getMovieById = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    try {
        const movie = await prisma.movies.findUnique({
            where: { id: movieId },
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } }
                },
            },
        });
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params;
    const { name, poster_image, score, genres } = req.body;

    try {
        const existingMovie = await prisma.movies.findUnique({
            where: { id: movieId },
            include: { genres: { select: { genre: { select: { name: true } } } } },
        });

        if (!existingMovie) {
            return res.status(404).json({ error: "Movie not found" });
        }
        if (!genres || !genres.name) {return null}

        const existingGenres = existingMovie.genres.map(genre => genre.genre?.name).filter(Boolean);
        const newGenres = genres.filter((genre: { name: string; }) => !existingGenres.includes(genre.name));

        const updatedMovie = await prisma.movies.update({
            where: { id: movieId },
            data: {
                name,
                poster_image,
                score,
                genres: {
                    create: newGenres.map((genre: { name: string; }) => ({
                        genre: {
                            connectOrCreate: {
                                where: { name: genre.name },
                                create: { name: genre.name },
                            },
                        },
                    })),
                },
            },
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } },
                },
            },
        });

        res.status(201).json(updatedMovie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    try {
        const deletedMovie = await prisma.movies.delete({
            where: { id: movieId },
        });

        res.status(200).json(deletedMovie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const createMovie = async (req: Request, res: Response) => {
    const { name, poster_image, score, genres } = req.body;
    const { userId } = req.params;

    try {
        const movie = await prisma.movies.create({
            data: {
                name,
                poster_image,
                score,
                genres: {
                    create: genres.map((genre: { name: string }) => ({
                        genre: {
                            connectOrCreate: {
                                where: { name: genre.name },
                                create: { name: genre.name },
                            },
                        },
                    })),
                },
                User: { connect: { id:userId } },
            },
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } }
                },
            },
        });
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};
