import { Request, Response } from "express";
import { FindOpenDeliveryRequests } from "./FindOpenDeliveryRequests";

export class FindOpenDeliveryRequestsController {
    async handle(req: Request, res: Response) {
        const findOpenDeliveryRequests = new FindOpenDeliveryRequests();
        const deliveryRequests = await findOpenDeliveryRequests.execute();

        return res.json(deliveryRequests);
    }
}