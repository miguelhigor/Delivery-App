import { NextFunction, Request, Response } from "express";

export async function errorHandling(err: Error, req: Request, res: Response, next: NextFunction) {

    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message,
        });
    }

    return res.status(500).json({
        status: "Error",
        message: "Internal Server Error",
    });
}