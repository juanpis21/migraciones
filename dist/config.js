"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        dataBase: {
            name: process.env.POSTGRES_DB,
            port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            host: process.env.POSTGRES_HOST,
        }
    };
});
//# sourceMappingURL=config.js.map