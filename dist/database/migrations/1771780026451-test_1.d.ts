import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Test11771780026451 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
