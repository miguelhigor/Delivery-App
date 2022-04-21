import { compare } from "bcrypt";
import { sign, Secret } from "jsonwebtoken";
import dotenv from "dotenv";

import { prisma } from "../../../database/prismaClient";
import { Clients, Deliveryman, Prisma } from "@prisma/client";

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

interface IUserAuthentication {
    username: string,
    userCategory: string,
    password: string,
}

export class UserAuthentication {
    async execute({ username, userCategory = "", password }: IUserAuthentication) {

        const [user]: Clients[] | Deliveryman[] = await prisma.$queryRaw`
            SELECT username, password, id 
            FROM ${Prisma.raw(userCategory)} 
            WHERE username=${username} 
            LIMIT 1
        `;

        if (!user)
            throw new Error("Invalid credentials!");

        const { password: storedPassword, id } = user;
        const passwordCheck = await compare(password, storedPassword);

        if (!passwordCheck)
            throw new Error("Invalid credentials!");

        const key: Secret = process.env.TOKEN_KEY as Secret;
        const token = sign({ username }, key, {
            subject: id,
            expiresIn: "1h"
        });

        return token;

    }
}