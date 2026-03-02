"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monica1771990922673 = void 0;
class Monica1771990922673 {
    name = 'Monica1771990922673';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "monica" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "miTest2" DROP DEFAULT`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "miTest2" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "monica"`);
    }
}
exports.Monica1771990922673 = Monica1771990922673;
//# sourceMappingURL=1771990922673-monica.js.map