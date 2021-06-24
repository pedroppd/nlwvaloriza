import {getCustomRepository} from "typeorm";
import {TagsRepository} from "../repositories/TagsRepository";

export class CreateTagService{

    async execute(name: string){
        if(!name){
           throw new Error("Name is incorrect !")
        }

        const tagRepository = getCustomRepository(TagsRepository);
        const tagAlreadyExist = await tagRepository.findOne({name});

        if(tagAlreadyExist){
            throw new Error("Tag already exist")
        }

        const tagCreated = await tagRepository.create({name});

        await tagRepository.save(tagCreated);

        return tagCreated;
    }
}