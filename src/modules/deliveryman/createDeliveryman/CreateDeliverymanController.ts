import { Request, Response } from "express";
import { CreateDeliveryman } from "./CreateDeliveryman";

export class CreateDeliverymanController {
    async handle(req: Request, res: Response) {
        const {
            body: {
                username,
                password,
            }
        } = req;

        const createDeliveryman = new CreateDeliveryman();
        const deliveryman = await createDeliveryman.execute({
            username,
            password,
        });

        return res.json(deliveryman);
    }
}