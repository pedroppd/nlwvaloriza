import {UserRepositories} from "../repositories/UserRepositories";
import {getCustomRepository} from "typeorm";
import {compare} from "bcryptjs";

export interface AuthenticateRequest{
    email: string;
    password: string;
}

export class AutheticateUserService{
    async execute(authenticateRequest: AuthenticateRequest){
        const userRepository = getCustomRepository(UserRepositories);
        const user = await userRepository.findOne(authenticateRequest.email);
        if(!user){
            throw new Error("e-mail/password incorrect");
        }

        const isCorrect = await compare(authenticateRequest.password, user.password);
        if(!isCorrect){
            throw new Error("e-mail/password incorrect");
        }
    }
}