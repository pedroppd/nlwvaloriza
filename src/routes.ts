import {Router} from "express";
import {CreateUserController} from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";

export const router = Router();

const userController = new CreateUserController();
const tagController = new CreateTagController();

router.post('/users', userController.handles)
router.post('/tags', tagController.handles)
