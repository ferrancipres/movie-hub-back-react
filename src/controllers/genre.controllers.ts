import { Request, Response } from 'express';
import prisma from '../db/client';


export const createGenre = async (req: Request, res: Response) => {
    const { name } = req.body;

    try {
        const genre = await prisma.genres.create({ data: { name } });
        res.status(201).json(genre);
    } catch (error) {
        res.status(500).json(error);
    }
};



export const allGenre = async (req: Request, res: Response) => {
    try {
        const genres = await prisma.genres.findMany({
            select: {
                name: true,
                id: true
            }
        });
        res.status(200).json(genres);
    } catch (error) {
        res.status(500).json(error);
    }
};
