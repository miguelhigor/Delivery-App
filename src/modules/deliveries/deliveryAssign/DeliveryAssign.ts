import { prisma } from "../../../database/prismaClient";

interface IDeliveryAssign {
    deliveryId: string;
    deliverymanId: string;
}

export class DeliveryAssign {
    async execute({ deliveryId, deliverymanId }: IDeliveryAssign) {
        const assignedDelivery = prisma.deliveries.update({
            where: {
                id: deliveryId
            },
            data: {
                fk_id_deliveryman: deliverymanId
            }
        });
        return assignedDelivery;
    }
}