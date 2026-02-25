import { MigrationInterface, QueryRunner } from "typeorm";

export class Monica1771990922673 implements MigrationInterface {
    name = 'Monica1771990922673'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "monica" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "miTest2" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "miTest2" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "monica"`);
    }

}
