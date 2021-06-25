import {Router} from "express";
import {CreateUserController} from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";
import {isAuthorize} from "../middlewares/isAuthorize";

export const router = Router();

const userController = new CreateUserController();
const tagController = new CreateTagController();
router.use(isAuthorize)
router.post('/users', isAuthorize, userController.handles)
router.post('/tags', isAuthorize, tagController.handles)
