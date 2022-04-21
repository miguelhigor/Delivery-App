import { prisma } from "../../../database/prismaClient";

interface IFindDeliveriesByClient {
    userId: string;
}

export class FindDeliveriesByClient {
    async execute({ userId }: IFindDeliveriesByClient) {
        const deliveriesByClient = await prisma.clients.findFirst({
            select: {
                id: true,
                deliveries: true
            },
            where: {
                id: userId,
            },
        });

        return deliveriesByClient;
    }
}