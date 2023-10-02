import {
  pgTable,
  serial,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const example = pgTable(
  "example",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow(),
  },
  (example) => ({
    nameIndex: uniqueIndex("name_idx").on(example.name),
  })
);
