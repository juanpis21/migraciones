"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestJose1771873535486 = void 0;
class TestJose1771873535486 {
    name = 'TestJose1771873535486';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "miTest" character varying(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "docNumber" DROP DEFAULT`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "docNumber" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "miTest"`);
    }
}
exports.TestJose1771873535486 = TestJose1771873535486;
//# sourceMappingURL=1771873535486-testJose.js.map