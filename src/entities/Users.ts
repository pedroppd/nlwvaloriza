import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("users")
export class Users {

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}