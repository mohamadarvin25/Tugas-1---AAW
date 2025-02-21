//dist/db/schema/wishlist
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wishlistDetail = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const wishlist_1 = require("./wishlist");
exports.wishlistDetail = (0, pg_core_1.pgTable)('wishlist_detail', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey(),
    wishlist_id: (0, pg_core_1.uuid)('wishlist_id').notNull().references(() => wishlist_1.wishlist.id),
    product_id: (0, pg_core_1.uuid)('product_id').notNull(),
});
