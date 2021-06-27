import {CreateComplimentService, IComplimentRequest} from "../services/CreateComplimentService";
import {Request, Response} from "express";

export class CreateComplimentsController{

    async handles(request: Request, response: Response){

       const {
           tag_id,
           user_receiver,
           message
       }  = request.body as IComplimentRequest;
       
      const user_id = request.user_id;

       const complementService = new CreateComplimentService();

       const result = complementService.execute({
           tag_id,
           user_sender: user_id,
           user_receiver,
           message
       });

       response.status(201).json(result);
    }
}