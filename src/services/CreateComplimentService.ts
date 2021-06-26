import {getCustomRepository} from "typeorm";
import {ComplimentsRepository} from "../repositories/ComplimentsRepository";
import {UserRepository} from "../repositories/UserRepository";

export interface ComplimentRequest{
    tagId: string,
    userSender,
    userReceive: string,
    message: string
}
export class CreateCompliment{
    async execute(compliment: ComplimentRequest){
        const repositoryCompliments = getCustomRepository(ComplimentsRepository);
        const repositoryUsers = getCustomRepository(UserRepository);

        if(compliment.userSender === compliment.userReceive){
            throw new Error('Cannot create a compliment for yourself')
        }

        const userExist = await repositoryUsers.findOne(compliment.userReceive);
        if(!userExist){
            throw new Error('Receiver user is invalid')
        }

       const complimentCreated =  repositoryCompliments.create(compliment);

       await repositoryCompliments.save(complimentCreated);

       return complimentCreated
    }
}
