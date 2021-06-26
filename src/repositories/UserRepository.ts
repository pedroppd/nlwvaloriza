import {EntityRepository, Repository} from "typeorm"
import {Users} from "../entities/Users";

@EntityRepository(Users)
export class UserRepositories extends Repository<Users>{
}