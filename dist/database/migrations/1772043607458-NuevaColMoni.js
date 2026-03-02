"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NuevaColMoni1772043607458 = void 0;
class NuevaColMoni1772043607458 {
    name = 'NuevaColMoni1772043607458';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "patty" character varying(55) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "patty"`);
    }
}
exports.NuevaColMoni1772043607458 = NuevaColMoni1772043607458;
//# sourceMappingURL=1772043607458-NuevaColMoni.js.map