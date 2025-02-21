//dist/db/schema/orders
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = exports.shippingStatusEnum = exports.shippingProviderEnum = exports.orderStatusEnum = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.orderStatusEnum = (0, pg_core_1.pgEnum)('order_status', ['PENDING', 'PAID', 'CANCELLED', 'REFUNDED']);
exports.shippingProviderEnum = (0, pg_core_1.pgEnum)('shipping_provider', ['JNE', 'TIKI', 'SICEPAT', 'GOSEND', 'GRAB_EXPRESS']);
exports.shippingStatusEnum = (0, pg_core_1.pgEnum)('shipping_status', ['PENDING', 'SHIPPED', 'DELIVERED', 'RETURNED']);
exports.order = (0, pg_core_1.pgTable)('order', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey(),
    tenant_id: (0, pg_core_1.uuid)('tenant_id').notNull(),
    user_id: (0, pg_core_1.uuid)('user_id').notNull(),
    order_date: (0, pg_core_1.timestamp)('order_date', { withTimezone: true }).defaultNow(),
    total_amount: (0, pg_core_1.integer)('total_amount').notNull(),
    order_status: (0, exports.orderStatusEnum)('order_status').default('PENDING').notNull(),
    shipping_provider: (0, exports.shippingProviderEnum)('shipping_provider').notNull(),
    shipping_code: (0, pg_core_1.text)('shipping_code'),
    shipping_status: (0, exports.shippingStatusEnum)('shipping_status'),
});
