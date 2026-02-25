import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddTestColumn1771956858871 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
