import {Request, Response} from "express";
import {CreateTagService} from "../services/CreateTagService";

export class CreateTagController{
    async handles(request: Request, response: Response){
        const {name} = request.body;
        const tagService = new CreateTagService();
        const tagCreated = await tagService.execute(name);
        return response.status(201).json(tagCreated)
    }
}