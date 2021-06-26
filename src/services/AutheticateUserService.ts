import {UserRepository} from "../repositories/UserRepository";
import {getCustomRepository} from "typeorm";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

export interface AuthenticateRequest{
    email: string;
    password: string;
}

export class AutheticateUserService{
    async execute(authenticateRequest: AuthenticateRequest){
        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findOne(authenticateRequest.email);
        if(!user){
            throw new Error("e-mail/password incorrect");
        }

        const isCorrect = await compare(authenticateRequest.password, user.password);
        if(!isCorrect){
            throw new Error("e-mail/password incorrect");
        }

        const tokenJwt = sign(user.email, "PassarPalavraMd5", {
            subject: user.id,
            expiresIn: "1d"
        })

        return tokenJwt;
    }
}