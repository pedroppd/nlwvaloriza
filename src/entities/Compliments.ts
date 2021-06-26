import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";
import {Tags} from "./Tags";
import {Users} from "./Users";

@Entity("compliments")
export class Compliments {

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    readonly id: string;

    @Column()
    message: string;

    @Column()
    tag_id: string;

    @JoinColumn({name: 'tag_id'})
    @ManyToOne(() => Tags)
    tag: Tags;

    @Column()
    user_sender: string;

    @JoinColumn({name: 'user_sender'})
    @ManyToOne(() => Users)
    userSender: Users;

    @Column()
    user_receiver: string;

    @JoinColumn({name: 'user_receiver'})
    @ManyToOne(() => Users)
    userReceiver: Users;

    @CreateDateColumn()
    createdAt: Date;
}