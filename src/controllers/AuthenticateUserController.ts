import {Request, Response} from "express";
import {AuthenticateRequest, AutheticateUserService} from "../services/AutheticateUserService";

export class AuthenticateUserController{
    constructor() {
    }

    async handle(request: Request, response: Response){
            const login = request.body as AuthenticateRequest;
            const authenticate = new AutheticateUserService();
            const token = authenticate.execute(login);
            return response.status(200).json(token);
    }
}