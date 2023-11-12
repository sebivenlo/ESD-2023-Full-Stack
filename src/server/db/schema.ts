import { InferSelectModel } from "drizzle-orm";
import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const todos = pgTable("todo", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  description: text("description"),
  isComplete: boolean("is_complete").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Todo = InferSelectModel<typeof todos>;
