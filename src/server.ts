import express, { NextFunction, Request, response, Response } from "express";
import dotenv from "dotenv";
import "express-async-errors";

import { routes } from "./routes";

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const port = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.use(routes);

app.use(
    (err: Error, req: Request, res: Response, next: NextFunction) => {
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
);

app.listen(port, () => console.log(`Server is running on port ${port}...`));