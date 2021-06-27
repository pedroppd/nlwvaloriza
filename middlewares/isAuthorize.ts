import {Request, Response, NextFunction} from "express";
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../src/repositories/UserRepository";

export async function isAuthorize(request: Request, response:Response, next: NextFunction){

    const userRepository = getCustomRepository(UserRepository);
    const user_id = request.user_id;

    const user = await userRepository.findOne(user_id);

    if(user.admin){
        return next();
    }

    return response.status(401).json({error: "Unauthorized"});
}