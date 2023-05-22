import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684781621759 implements MigrationInterface {
    name = 'InitialMigration1684781621759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "secondPhone" character varying, "registrationDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "secondEmail" character varying, "phone" character varying NOT NULL, "secondPhone" character varying, "registrationDate" TIMESTAMP NOT NULL, "clientId" uuid, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
