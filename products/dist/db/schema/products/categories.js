//dist/db/schema/products
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.categories = (0, pg_core_1.pgTable)("categories", {
    id: (0, pg_core_1.uuid)('id').defaultRandom(),
    name: (0, pg_core_1.varchar)('name').notNull(),
    tenant_id: (0, pg_core_1.uuid)('tenant_id').notNull(),
}, (table) => {
    return {
        pk: (0, pg_core_1.primaryKey)({ columns: [table.id, table.tenant_id] })
    };
});
