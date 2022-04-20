import { hash } from "bcrypt";

import { prisma } from "../../database/prismaClient";

interface ICreateDeliveryman {
    username: string;
    password: string;
}

export class CreateDeliveryman {
    async execute({ username, password }: ICreateDeliveryman) {
        // Verify if deliveryman already exists on the database
        const deliverymanExists = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    mode: "insensitive",
                    equals: username,
                }
            }
        });

        // username must be unique, otherwise it's an error
        if (deliverymanExists)
            throw new Error("Deliveryman already exists!");

        // Creates a hash password
        const hashPassword = await hash(password, 10);

        // Saves deliveryman data
        const savedDeliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword,
            }
        })

        return savedDeliveryman
    }
}