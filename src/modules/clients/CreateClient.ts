import { hash } from "bcrypt";

import { prisma } from "../../database/prismaClient"

interface ICreateClient {
    username: string;
    password: string;
}

export class CreateClient {
    async execute({ username, password }: ICreateClient) {
        // Verify if client already exists on the database
        const clientExists = await prisma.clients.findFirst({
            where: {
                username: {
                    mode: "insensitive",
                    equals: username,
                }
            }
        });

        // username must be unique, otherwise it's an error
        if (clientExists)
            throw new Error("Client already exists");

        // Creates a hash password
        const hashPassword = await hash(password, 10);

        // Saves client data
        const savedClient = await prisma.clients.create({
            data: {
                username,
                password: hashPassword,
            }
        })

        return savedClient;
    }
}