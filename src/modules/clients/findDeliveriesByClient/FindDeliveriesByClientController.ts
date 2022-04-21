import { Request, Response } from "express";
import { FindDeliveriesByClient } from "./FindDeliveriesByClient";

export class FindDeliveriesByClientController {
    async handle(req: Request, res: Response) {
        const { clientId } = req;
        const findDeliveriesByClient = new FindDeliveriesByClient();
        const deliveriesByClient = await findDeliveriesByClient.execute({
            clientId
        });

        return res.json(deliveriesByClient);
    }
}