import {getCustomRepository} from "typeorm";
import {ComplimentsRepository} from "../repositories/ComplimentsRepository";
import {UserRepository} from "../repositories/UserRepository";

export interface IComplimentRequest{
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

export class CreateComplimentService {
    async execute({
                      tag_id,
                      user_sender,
                      user_receiver,
                      message
                  } : IComplimentRequest){

        const repositoryCompliments = getCustomRepository(ComplimentsRepository);
        const repositoryUsers = getCustomRepository(UserRepository);

        if(user_sender === user_receiver){
            throw new Error('Cannot create a compliment for yourself')
        }

        const userExist = await repositoryUsers.findOne(user_receiver);
        if(!userExist){
            throw new Error('Receiver user is invalid')
        }

       const complimentCreated = repositoryCompliments.create({
           tag_id,
           user_sender,
           user_receiver,
           message
       });

       await repositoryCompliments.save(complimentCreated);

       return complimentCreated
    }
}
