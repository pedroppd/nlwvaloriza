import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1624670283698 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "compliments",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "message",
                    type: "varchar"
                },
                {
                    name: "user_sender",
                    type: "uuid"
                },
                {
                    name:"user_receiver",
                    type: "varchar"
                },
                {
                    name: "tag_id",
                    type: "uuid"
                },
                {
                    name: "createdAt",
                    type: "timeStamp",
                    default: "now()"
                }
            ],
            foreignKeys:[
                {
                    name: "FKUserSenderCompliments",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_sender"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                },
                {
                    name: "FKUserReceiverCompliments",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_receiver"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                },
                {
                    name: "FKTagCompliments",
                    referencedTableName: "tags",
                    referencedColumnNames: ["id"],
                    columnNames: ["tag_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }
            ]
        })
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.dropTable("compliments")
    }

}
