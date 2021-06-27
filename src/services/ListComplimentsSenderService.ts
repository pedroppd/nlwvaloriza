import {getCustomRepository} from "typeorm";
import {UserRepository} from "../repositories/UserRepository";
import {Compliments} from "../entities/Compliments";
import {ComplimentsRepository} from "../repositories/ComplimentsRepository";

export class ListComplimentsSenderService {

    async execute(id: string){
        const compRepository = getCustomRepository(ComplimentsRepository);
       const result =  compRepository.findOne({
            where: {
                user_sender: id
            },
            relations: ["userSender", "userReceiver", "tag"]
        });

       return result;
    }
}