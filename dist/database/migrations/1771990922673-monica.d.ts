import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Monica1771990922673 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
