import { prisma } from "../../../database/prismaClient";

interface IFindDeliveriesByClient {
    clientId: string;
}

export class FindDeliveriesByClient {
    async execute({ clientId }: IFindDeliveriesByClient) {
        const deliveriesByClient = await prisma.clients.findFirst({
            select: {
                deliveries: true
            },
            where: {
                id: clientId,
            },
        });

        return deliveriesByClient;
    }
}