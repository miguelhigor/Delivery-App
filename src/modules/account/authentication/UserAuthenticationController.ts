import { Request, Response } from "express";
import { UserAuthentication } from "./UserAuthentication";

export class UserAuthenticationController {
    async handle(req: Request, res: Response) {
        const {
            body: {
                username,
                userCategory,
                password,
            }
        } = req;

        const userAuthentication = new UserAuthentication();
        const token = await userAuthentication.execute({
            username,
            userCategory,
            password,
        });

        return res.json(token);
    }
}