import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { todos } from "@/server/db/schema";

export const todoRouter = createTRPCRouter({
  getTodos: publicProcedure.query(async ({ ctx }) => {
    const todosResult = await ctx.db.select().from(todos).execute();
    return todosResult;
  }),
});
