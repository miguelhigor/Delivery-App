import { Request, Response } from "express";
import { FindDeliveriesByClient } from "./FindDeliveriesByClient";

export class FindDeliveriesByClientController {
    async handle(req: Request, res: Response) {
        const { userId } = req;
        const findDeliveriesByClient = new FindDeliveriesByClient();
        const deliveriesByClient = await findDeliveriesByClient.execute({
            userId
        });

        return res.json(deliveriesByClient);
    }
}