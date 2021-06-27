import {NextFunction, Request, Response} from "express";

import {verify} from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function isAuthenticated(request: Request, response:Response, next: NextFunction){

    const token = request.headers.authorization;
    if(!token){
        throw new Error("Toke invalid!");
    }

    try{
       const {sub} =  verify(token.substr(6), "randomWord") as IPayload;

       request.user_id = sub;



    }catch (err){
        throw new Error("Toke invalid!");
    }

    return next();
}