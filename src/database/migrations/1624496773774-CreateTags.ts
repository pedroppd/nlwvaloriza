import {MigrationInterface, QueryRunner, Table} from "typeorm";
import {query} from "express";

export class CreateTags1624496773774 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tags",
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
                    name: "createdAt",
                    type: "timeStamp",
                    default: "now()"
                },
                {
                    name: "updatedAt",
                    type: "timeStamp",
                    default: "now()"
                }
            ]
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tags");
    }

}
