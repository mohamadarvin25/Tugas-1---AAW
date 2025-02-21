//src/auth/services
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenService = void 0;
const patterns_1 = require("../../shared/commons/patterns");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUserById_dao_1 = require("../dao/getUserById.dao");
const verifyTokenService = async (token) => {
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const { id, tenant_id } = payload;
        const SERVER_TENANT_ID = process.env.TENANT_ID;
        if (!SERVER_TENANT_ID) {
            return new patterns_1.InternalServerErrorResponse("Server tenant ID is missing").generate();
        }
        if (tenant_id !== SERVER_TENANT_ID) {
            console.log("salah");
            return new patterns_1.UnauthorizedResponse("Invalid token").generate();
        }
        const user = await (0, getUserById_dao_1.getUserById)(id, SERVER_TENANT_ID);
        if (!user) {
            console.log("salah");
            return new patterns_1.UnauthorizedResponse("Invalid token").generate();
        }
        return {
            data: {
                user,
            },
            status: 200
        };
    }
    catch (err) {
        return new patterns_1.UnauthorizedResponse("Invalid token").generate();
    }
};
exports.verifyTokenService = verifyTokenService;
