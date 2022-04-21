import { prisma } from "../../../database/prismaClient";

interface IFindDeliveriesByDeliveryman {
    userId: string;
}

export class FindDeliveriesByDeliveryman {
    async execute({ userId }: IFindDeliveriesByDeliveryman) {
        const deliveriesByDeliveryman = await prisma.deliveryman.findFirst({
            select: {
                id: true,
                deliveries: true
            },
            where: {
                id: userId,
            },
        });

        return deliveriesByDeliveryman;
    }
}