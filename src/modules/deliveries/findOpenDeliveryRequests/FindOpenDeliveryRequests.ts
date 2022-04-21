import { prisma } from "../../../database/prismaClient";

export class FindOpenDeliveryRequests {
    async execute() {
        const deliveryRequests = await prisma.deliveries.findMany({
            where: {
                fk_id_deliveryman: null
            }
        });
        return deliveryRequests;
    }
}