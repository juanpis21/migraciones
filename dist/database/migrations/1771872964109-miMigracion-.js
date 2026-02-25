"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiMigracion1771872964109 = void 0;
class MiMigracion1771872964109 {
    name = 'MiMigracion-1771872964109';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "docNumber" character varying(255) NOT NULL DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "docNumber"`);
    }
}
exports.MiMigracion1771872964109 = MiMigracion1771872964109;
//# sourceMappingURL=1771872964109-miMigracion-.js.map