import { MigrationInterface, QueryRunner } from "typeorm";
export declare class TestJose1771873535486 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
