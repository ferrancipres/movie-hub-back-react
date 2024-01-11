import { Request, Response, NextFunction } from "express";

export const check = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    if (name.length < 4) {
        res
            .status(400)
            .json({ message: 'Name mus be at least 4 characters long' });
    }
    next();
};