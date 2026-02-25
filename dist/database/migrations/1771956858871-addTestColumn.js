"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTestColumn1771956858871 = void 0;
class AddTestColumn1771956858871 {
    name = 'AddTestColumn1771956858871';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "miTest2" character varying(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "miTest" DROP DEFAULT`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "miTest" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "miTest2"`);
    }
}
exports.AddTestColumn1771956858871 = AddTestColumn1771956858871;
//# sourceMappingURL=1771956858871-addTestColumn.js.map