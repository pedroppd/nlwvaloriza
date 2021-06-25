import {Request, Response} from "express";
import {CreateUserService} from "../services/CreateUserService";
import {hash} from "bcryptjs";

export class CreateUserController {

    async handles(request: Request, response: Response){
        const {name, email, password, admin} = request.body;
        const passwordHash = await hash(password, 8);
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email, admin, password: passwordHash});

        return response.json(user);
    }
}