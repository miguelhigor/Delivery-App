import { prisma } from "../../../database/prismaClient";

interface IFinishDelivery {
    deliveryId: string;
    deliverymanId: string;
}

export class FinishDelivery {
    async execute({ deliveryId, deliverymanId }: IFinishDelivery) {
        const update = await prisma.deliveries.updateMany({
            where: {
                AND: [{
                    id: deliveryId,
                    fk_id_deliveryman: deliverymanId,
                }]
            },
            data: {
                delivered_at: new Date(),
            }
        });

        if (!update.count)
            throw new Error("Invalid operation!");

        return {
            message: "Successful operation!",
        };
    }
}