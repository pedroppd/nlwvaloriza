import {Router} from "express";
import {CreateUserController} from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";
import {isAuthorize} from "../middlewares/isAuthorize";
import {CreateComplimentsController} from "./controllers/CreateComplimentsController";
import {isAuthenticated} from "../middlewares/isAuthenticated";
import {ListComplimentsSenderController} from "./controllers/ListComplimentsSenderController";
import {ListComplimentsReceiverController} from "./controllers/ListComplimentsReceiverController";

export const router = Router();

const userController = new CreateUserController();
const tagController = new CreateTagController();
const authenticateUserController = new CreateUserController();
const complimentsController = new CreateComplimentsController();
const listComplimentsSenderController = new ListComplimentsSenderController();
const listComplimentsReceiverController = new ListComplimentsReceiverController();

router.post('/users', userController.handles)
router.post('/tags', isAuthorize, tagController.handles)
router.post('/login', authenticateUserController.handles)
router.post('/compliments', isAuthenticated, complimentsController.handles)
router.get('/compliments/send', isAuthenticated, listComplimentsSenderController.handles)
router.get('/compliments/receive', isAuthenticated, listComplimentsReceiverController.handles)
