import { MigrationInterface, QueryRunner } from "typeorm";

export class NuevaColMoni1772043607458 implements MigrationInterface {
    name = 'NuevaColMoni1772043607458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "patty" character varying(55) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "patty"`);
    }

}
