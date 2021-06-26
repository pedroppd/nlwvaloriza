import {Router} from "express";
import {CreateUserController} from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";
import {isAuthorize} from "../middlewares/isAuthorize";
import {CreateComplimentsController} from "./controllers/CreateComplimentsController";

export const router = Router();

const userController = new CreateUserController();
const tagController = new CreateTagController();
const authenticateUserController = new CreateUserController();
const complimentsController = new CreateComplimentsController();

router.use(isAuthorize)
router.post('/users', userController.handles)
router.post('/tags', isAuthorize, tagController.handles)
router.post('/login', authenticateUserController.handles)
router.post('/compliments', complimentsController.handles)
