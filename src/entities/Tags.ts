import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity()
export class Tags {

    constructor() {
        if(!this.uuid){
            this.uuid = uuid();
        }
    }

    @PrimaryColumn()
    uuid: string;

    @Column()
    name: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}