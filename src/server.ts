import "reflect-metadata";
import "./database";
import "express-async-errors";

import {router} from "./routes";

import express, {NextFunction, Response} from "express";
const app = express();

app.use(express.json());
app.use(router);

// @ts-ignore
app.use((err: Error, Request: Request, response:Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({error: err.message});
    }
    return response.status(500).json({error: "Internal server error"});
});

app.listen(3000, ()=> {
    console.log("Server is running !")
});