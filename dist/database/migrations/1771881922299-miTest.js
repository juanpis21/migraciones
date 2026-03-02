"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiTest1771881922299 = void 0;
class MiTest1771881922299 {
    name = 'MiTest1771881922299';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "miTest"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "miTest" character varying(55) NOT NULL DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "miTest"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "miTest" character varying(255) NOT NULL DEFAULT ''`);
    }
}
exports.MiTest1771881922299 = MiTest1771881922299;
//# sourceMappingURL=1771881922299-miTest.js.map