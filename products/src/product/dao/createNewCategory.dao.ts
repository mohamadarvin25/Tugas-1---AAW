import { NewCategory } from "@db/schema/products/categories";
import { db } from "@src/db";
import * as schema from '@db/schema/products/categories'

export const createNewCategory = async (data: NewCategory) => {
    const result = await db
        .insert(schema.categories)
        .values(data)
        .returning({
            id: schema.categories.id,
            name: schema.categories.name,
        })
    return result?.[0];
}