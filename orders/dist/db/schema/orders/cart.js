//dist/db/schema/orders
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cart = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.cart = (0, pg_core_1.pgTable)('cart', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey(),
    tenant_id: (0, pg_core_1.uuid)('tenant_id').notNull(),
    user_id: (0, pg_core_1.uuid)('user_id').notNull(),
    product_id: (0, pg_core_1.uuid)('product_id').notNull(),
    quantity: (0, pg_core_1.integer)('quantity').notNull(),
});
