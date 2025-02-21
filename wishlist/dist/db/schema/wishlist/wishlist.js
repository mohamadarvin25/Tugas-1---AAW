//dist/db/schema/wishlist
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wishlist = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.wishlist = (0, pg_core_1.pgTable)('wishlist', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey(),
    tenant_id: (0, pg_core_1.uuid)('tenant_id').notNull(),
    user_id: (0, pg_core_1.uuid)('user_id').notNull(),
    name: (0, pg_core_1.text)('name').notNull(),
});
