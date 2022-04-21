import { Request, Response } from "express";
import { FinishDelivery } from "./FinishDelivery";

export class FinishDeliveryController {
    async handle(req: Request, res: Response) {
        const { userId: deliverymanId } = req;
        const { params: { id: deliveryId } } = req;

        const finishDelivery = new FinishDelivery();
        const update = await finishDelivery.execute({
            deliveryId,
            deliverymanId,
        });

        return res.json(update);
    }
}