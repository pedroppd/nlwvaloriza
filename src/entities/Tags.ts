import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";
import {Expose} from "class-transformer"

@Entity("tags")
export class Tags {

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Expose({name: "nameCustom"})
    nameCustom() : string{
        return `#${this.name}`;
    }

}