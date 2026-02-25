import { MigrationInterface, QueryRunner } from "typeorm";
export declare class MiTest1771881922299 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
