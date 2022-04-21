import { Request, Response } from "express";
import { CreateDelivery } from "./CreateDelivery";

export class CreateDeliveryController {
    async handle(req: Request, res: Response) {
        const { body: {
            item_name,
            clientId,
        } } = req;

        const createDelivery = new CreateDelivery();
        const newDelivery = await createDelivery.execute({
            item_name,
            fk_id_client: clientId,
        });

        res.json(newDelivery);
    }
}