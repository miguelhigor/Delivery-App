import { Request, Response } from "express";
import { CreateClient } from "./CreateClient";

export class CreateClientController {
    async handle(req: Request, res: Response) {
        const {
            body: {
                username,
                password,
            }
        } = req;

        const createClient = new CreateClient();
        const client = await createClient.execute({
            username,
            password,
        });

        return res.json(client);
    }
}