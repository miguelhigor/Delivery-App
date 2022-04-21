import { prisma } from "../../database/prismaClient";

interface ICreateDelivery {
    item_name: string;
    fk_id_client: string;
}

export class CreateDelivery {
    async execute({ item_name, fk_id_client }: ICreateDelivery) {
        const newDelivery = await prisma.deliveries.create({
            data: {
                item_name,
                fk_id_client,
            }
        });

        return newDelivery;
    }
}