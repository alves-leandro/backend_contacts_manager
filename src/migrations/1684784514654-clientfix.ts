import { MigrationInterface, QueryRunner } from "typeorm";

export class Clientfix1684784514654 implements MigrationInterface {
    name = 'Clientfix1684784514654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "secondPhone"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "passwod"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "passwod" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "secondPhone" character varying`);
    }

}
