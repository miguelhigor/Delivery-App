import { Request, Response } from "express";
import { UserAuthentication } from "./UserAuthentication";

export class UserAuthenticationController {
    async handle(req: Request, res: Response) {
        const {
            body: {
                username,
                password,
            },
            params: {
                userProfile
            }
        } = req;

        const userAuthentication = new UserAuthentication();
        const token = await userAuthentication.execute({
            username,
            userProfile,
            password,
        });

        return res.json(token);
    }
}