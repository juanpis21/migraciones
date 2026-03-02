import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRolesTables1234567890123 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Crear tabla de roles
        await queryRunner.createTable(
            new Table({
                name: "role",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                        isUnique: true,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "255",
                        isNullable: true,
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true
        );

        // Crear tabla de rompimiento user_roles sin foreign keys
        await queryRunner.createTable(
            new Table({
                name: "user_roles",
                columns: [
                    {
                        name: "user_id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "role_id",
                        type: "int",
                        isPrimary: true,
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Eliminar tablas
        await queryRunner.dropTable("user_roles");
        await queryRunner.dropTable("role");
    }
}
