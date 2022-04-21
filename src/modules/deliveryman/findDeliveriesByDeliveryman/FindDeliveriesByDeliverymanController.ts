import { Request, Response } from "express";
import { FindDeliveriesByDeliveryman } from "./FindDeliveriesByDeliveryman";

export class FindDeliveriesByDeliverymanController {
    async handle(req: Request, res: Response) {
        const { userId } = req;
        const findDeliveriesByDeliveryman = new FindDeliveriesByDeliveryman();
        const deliveriesByDeliveryman = await findDeliveriesByDeliveryman.execute({
            userId
        });

        return res.json(deliveriesByDeliveryman);
    }
}