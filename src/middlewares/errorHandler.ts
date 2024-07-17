import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppErrors';

export const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
};