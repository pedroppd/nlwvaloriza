import {UserRepositories} from "../repositories/UserRepositories";
import {getCustomRepository}  from "typeorm"

export interface IUserRequest{
    name: string;
    email: string;
    admin: boolean;
}

export class CreateUserService {

    async execute({name, email, admin } : IUserRequest) {
        if(!email){
            throw  new Error("Email incorrect !")
        }

        const userRepository = getCustomRepository(UserRepositories);
        const userAlreadyExists = await userRepository.findOne({email});

        if(userAlreadyExists){
            throw  new Error("User already exists !")
        }

        const userCreated = userRepository.create({name, email, admin});

        await userRepository.save(userCreated);

        return userCreated;
    }
}