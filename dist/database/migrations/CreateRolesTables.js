"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRolesTables1234567890123 = void 0;
const typeorm_1 = require("typeorm");
class CreateRolesTables1234567890123 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }), true);
        await queryRunner.createTable(new typeorm_1.Table({
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
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("user_roles");
        await queryRunner.dropTable("role");
    }
}
exports.CreateRolesTables1234567890123 = CreateRolesTables1234567890123;
//# sourceMappingURL=CreateRolesTables.js.map