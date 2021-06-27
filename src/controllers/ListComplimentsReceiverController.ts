import {Request, Response} from "express";
import {ListComplimentsReceiverService} from "../services/ListComplimentsReceiverService";

export class ListComplimentsReceiverController{
    async handles(request: Request, response: Response){
        const id = request.user_id;
        const receiverService = new ListComplimentsReceiverService();
        response.status(200).json(receiverService.execute(id));
    }
}