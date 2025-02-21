//src/auth/validation
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string(),
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(8).refine((password) => {
            const regex = [
                {
                    regex: /[a-z]/,
                    errorMessage: 'Password must contain at least one lowercase letter',
                },
                {
                    regex: /[A-Z]/,
                    errorMessage: 'Password must contain at least one uppercase letter',
                },
                {
                    regex: /\d/,
                    errorMessage: 'Password must contain at least one number',
                },
            ];
            return regex.every((reg) => {
                if (!reg.regex.test(password)) {
                    throw new Error(reg.errorMessage);
                }
                return true;
            });
        }, "Invalid password"),
        full_name: zod_1.z.string(),
        address: zod_1.z.string(),
        phone_number: zod_1.z.string(),
    })
});
