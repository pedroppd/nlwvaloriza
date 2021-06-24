import {Router} from "express";
import {CreateUserController} from "./controllers/CreateUserController";

export const router = Router();

const userController = new CreateUserController();

router.post('/users', userController.handles)
