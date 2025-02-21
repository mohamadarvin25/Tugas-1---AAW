//dist/db/schema/products
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const categories_1 = require("./categories");
exports.products = (0, pg_core_1.pgTable)("products", {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey(),
    tenant_id: (0, pg_core_1.uuid)('tenant_id').notNull(),
    name: (0, pg_core_1.varchar)('name').notNull(),
    description: (0, pg_core_1.varchar)('description'),
    price: (0, pg_core_1.integer)('price').notNull(),
    quantity_available: (0, pg_core_1.integer)('quantity_available').notNull(),
    category_id: (0, pg_core_1.uuid)('category_id'),
}, (table) => {
    return {
        categoryReference: (0, pg_core_1.foreignKey)({
            columns: [table.tenant_id, table.category_id],
            foreignColumns: [categories_1.categories.tenant_id, categories_1.categories.id],
            name: 'products_category_id_fkey',
        })
    };
});
