import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { sql } from "drizzle-orm";

export const db = drizzle(postgres(process.env.DATABASE_URL!), { schema });

async function insertInitialData() {
  try {
    const count = await db
      .select({ count: sql<number>`COUNT(*) as count` })
      .from(schema.todos)
      .execute();

    if (+count[0].count === 0) {
      await db
        .insert(schema.todos)
        .values([
          {
            description: "Learn about Drizzle ORM",
            createdAt: new Date(2023, 11, 1),
          },
          { description: "Learn about TRPC", createdAt: new Date(2023, 11, 2) },
          {
            description: "Build a fullstack app",
            createdAt: new Date(2023, 11, 3),
          },
        ])
        .execute();
    }
  } catch (error) {
    console.log("Inserting initial data", error);
  }
}

void insertInitialData();
