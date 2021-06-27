import {Request, Response} from "express";
import {ListComplimentsSenderService} from "../services/ListComplimentsSenderService";

export class ListComplimentsSenderController{
    async handles(request: Request, response: Response){
        const id = request.user_id;
        const senderService = new ListComplimentsSenderService();
        response.status(200).json(senderService.execute(id));
    }
}