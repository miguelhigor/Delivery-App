import dotenv from "dotenv";
import { Secret, verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";


if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

interface IPayload {
    sub: string;
}

export async function authCheck(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Authentication token not provided!"
        });
    }

    const authToken = authHeader.replace("Bearer ", "");

    try {
        const key: Secret = process.env.TOKEN_KEY as Secret;
        const { sub } = verify(authToken, key) as IPayload;

        req.userId = sub;

        return next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token!"
        });
    }
}