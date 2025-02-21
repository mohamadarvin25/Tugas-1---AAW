"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
exports.default = {
    schema: './db/schema/**/*.ts',
    out: './drizzle',
    driver: 'pg',
    dbCredentials: {
        host: (_a = process.env.DB_HOST) !== null && _a !== void 0 ? _a : "localhost",
        port: (_b = process.env.DB_PORT) !== null && _b !== void 0 ? _b : 5432,
        user: (_c = process.env.DB_USER) !== null && _c !== void 0 ? _c : "postgres",
        password: (_d = process.env.DB_PASSWORD) !== null && _d !== void 0 ? _d : "postgres",
        database: (_e = process.env.DB_NAME) !== null && _e !== void 0 ? _e : "postgres",
    },
};
