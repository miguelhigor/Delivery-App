import { Request, Response } from "express";
import { DeliveryAssign } from "./DeliveryAssign";

export class DeliveryAssignController {
    async handle(req: Request, res: Response) {
        const {
            body: { deliverymanId },
            params: { id: deliveryId }
        } = req;

        const deliveryAssign = new DeliveryAssign();
        const delivery = await deliveryAssign.execute({
            deliverymanId,
            deliveryId,
        });

        return res.json(delivery);
    }
}