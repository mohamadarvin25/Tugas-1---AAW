//dist/db/schema/orders
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDetail = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const order_1 = require("./order");
exports.orderDetail = (0, pg_core_1.pgTable)('order_detail', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey(),
    tenant_id: (0, pg_core_1.uuid)('tenant_id').notNull(),
    order_id: (0, pg_core_1.uuid)('order_id').notNull().references(() => order_1.order.id),
    product_id: (0, pg_core_1.uuid)('product_id').notNull(),
    quantity: (0, pg_core_1.integer)('quantity').notNull(),
    unit_price: (0, pg_core_1.integer)('unit_price').notNull(),
});
