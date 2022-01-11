import {MigrationInterface, QueryRunner} from "typeorm";

export class addCompletedInTodo1641933247962 implements MigrationInterface {
    name = 'addCompletedInTodo1641933247962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "completed" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "completed"`);
    }

}
