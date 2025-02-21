//src/auth
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdminTokenHandler = exports.verifyTokenHandler = exports.registerHandler = exports.loginHandler = void 0;
const Service = __importStar(require("./services"));
const loginHandler = async (req, res) => {
    const { username, password } = req.body;
    const response = await Service.loginService(username, password);
    return res.status(response.status).json(response.data);
};
exports.loginHandler = loginHandler;
const registerHandler = async (req, res) => {
    const { username, email, password, full_name, address, phone_number } = req.body;
    const response = await Service.registerService(username, email, password, full_name, address, phone_number);
    return res.status(response.status).json(response.data);
};
exports.registerHandler = registerHandler;
const verifyTokenHandler = async (req, res) => {
    const { token } = req.body;
    const response = await Service.verifyTokenService(token);
    return res.status(response.status).json(response.data);
};
exports.verifyTokenHandler = verifyTokenHandler;
const verifyAdminTokenHandler = async (req, res) => {
    const { token } = req.body;
    const response = await Service.verifyAdminTokenService(token);
    return res.status(response.status).json(response.data);
};
exports.verifyAdminTokenHandler = verifyAdminTokenHandler;
