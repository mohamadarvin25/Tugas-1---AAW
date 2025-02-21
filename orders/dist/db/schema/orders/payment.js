//dist/db/schema/orders
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const order_1 = require("./order");
exports.payment = (0, pg_core_1.pgTable)('payment', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey(),
    tenant_id: (0, pg_core_1.uuid)('tenant_id').notNull(),
    order_id: (0, pg_core_1.uuid)('order_id').notNull().references(() => order_1.order.id),
    payment_date: (0, pg_core_1.timestamp)('payment_date', { withTimezone: true }).defaultNow(),
    payment_method: (0, pg_core_1.text)('payment_method').notNull(),
    payment_reference: (0, pg_core_1.text)('payment_reference').notNull(),
    amount: (0, pg_core_1.integer)('amount').notNull(),
});
