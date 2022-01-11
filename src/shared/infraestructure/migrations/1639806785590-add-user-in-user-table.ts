import {MigrationInterface, QueryRunner} from "typeorm";

export class addUserInUserTable1639806785590 implements MigrationInterface {
    name = 'addUserInUserTable1639806785590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
    }

}
