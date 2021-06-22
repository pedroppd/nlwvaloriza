import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1624402554694 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name:"email",
                    type: "varchar"
                },
                {
                    name: "admin",
                    type: "boolean",
                    default: false
                },
                {
                    name: "createdAt",
                    type: "timeStamp",
                    default: "now()"
                },
                {
                    name: "updatedAt",
                    type: "timeStamp",
                    default: "now()"
                },
                {
                    name: "deleteAt",
                    type: "timeStamp"
                }
            ]
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
