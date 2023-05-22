import { MigrationInterface, QueryRunner } from "typeorm";

export class Clientfix1684783949925 implements MigrationInterface {
    name = 'Clientfix1684783949925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ADD "passwod" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "passwod"`);
    }

}
