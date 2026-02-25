"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test11771780026451 = void 0;
class Test11771780026451 {
    name = 'Test11771780026451';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "lastName" character varying(255) NOT NULL, "docType" character varying(255) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.Test11771780026451 = Test11771780026451;
//# sourceMappingURL=1771780026451-test_1.js.map